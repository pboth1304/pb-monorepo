class QueryUtils {
  constructor(
    public model: any,
    private readonly queryString: { [key: string]: string }
  ) {}

  /**
   * Executes query with given filter options.
   */
  public filter() {
    // Get copy of queryStr, so it stays immutable
    const queryObj = { ...this.queryString };

    // filter out this keywords, because they are needed only for sort(), limit() and paginate()
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(el => delete queryObj[el]);

    // filtering with logical operators
    let queryStr = JSON.stringify(queryObj);

    // Add $ sign to logical operators, because its needed in MongoDB queries
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

    this.model = this.model.find(JSON.parse(queryStr));

    return this; // return class obj, to use it in the following function
  }

  /**
   * Sorts the response by the given sort criteria.
   * If no `sort` is given, its sorted by default by the createdAt property.
   */
  public sort() {
    if (this.queryString['sort']) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.model = this.model.sort(sortBy);
    } else {
      this.model = this.model.sort('-createdAt');
    }

    return this; // return class obj, to use it in the following function
  }

  /**
   * Limits the fields in the response by the given fields.
   */
  public limitFields() {
    if (this.queryString['fields']) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.model = this.model.select(fields);
    } else {
      this.model = this.model.select('-__v');
    }

    return this; // return class obj, to use it in the following function
  }

  /**
   * Paginate the response by the given `page` and `limit`.
   */
  paginate() {
    const page = parseInt(this.queryString['page'], 10) || 1; // 1
    const limit = parseInt(this.queryString['limit'], 10) || 100; // 1
    const skip = (page - 1) * limit;

    // Skips all previous pages and limits the amount of results by the calculated limit property.
    this.model = this.model.skip(skip).limit(limit);

    return this;
  }
}

export default QueryUtils;
