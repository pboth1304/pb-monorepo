import { Document } from 'mongoose';
import { Room } from '../interfaces';

export interface RoomDoc extends Room, Document {}
