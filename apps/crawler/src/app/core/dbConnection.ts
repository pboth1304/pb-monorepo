import { connect } from 'mongoose';
export default class DbConnection {
  private connectionString: string;

  constructor(dbConnectionString: string) {
    this.connectionString = dbConnectionString;
    this.connectToDb();
  }

  private async connectToDb() {
    connect(
      this.connectionString,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
      }
    ).then(() => console.log('DB connection successful!'));
  }
}
