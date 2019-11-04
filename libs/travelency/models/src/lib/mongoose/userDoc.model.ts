import { Document } from 'mongoose';
import { User } from '../interfaces';

export interface UserDoc extends User, Document {}
