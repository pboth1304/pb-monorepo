import { Document } from 'mongoose';
import { Hotel } from '../interfaces/hotel.model';

export interface HotelDoc extends Hotel, Document {}
