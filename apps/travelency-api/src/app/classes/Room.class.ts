import { model, Model } from 'mongoose';
import { RoomDoc } from '@pb-monorepo/travelency/models';
import RoomSchema from '../models/room.schema';

class Room {
  private model: Model<RoomDoc>;

  constructor() {
    this.initModel();
  }

  private initModel(): void {
    this.model = model<RoomDoc>('Room', RoomSchema);
  }

  /**
   * Getter for Room Model.
   */
  public getRoomModel(): Model<RoomDoc> {
    return this.model;
  }
}

export default Room;
