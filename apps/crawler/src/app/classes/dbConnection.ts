import { connect } from 'mongoose';
export default class DbConnection {
  private connectionString: string;
  private connectionStatus: 'Success' | 'Failure';

  constructor(dbConnectionString: string) {
    this.connectionString = dbConnectionString;
    this.connectToDb();
  }

  /**
   * Get connection status.
   */
  public getConnectionStatus() {
    return this.connectionStatus;
  }

  /**
   * Set connection Status.
   */
  public setConnectionStatus(status: 'Success' | 'Failure') {
    this.connectionStatus = status;
  }

  /**
   * Connects to db with given config.
   */
  private async connectToDb() {
    connect(
      this.connectionString,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
      }
    ).then(() => {
      this.setConnectionStatus('Success');
    });
  }
}
