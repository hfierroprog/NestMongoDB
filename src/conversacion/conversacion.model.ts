import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface ConversacionModel extends Document {
  readonly _id: string,
  readonly miembros: mongoose.Types.ObjectId[],
}
