import { Document } from 'mongoose';
import * as mongoose from "mongoose";

export interface UsuarioModel extends Document {
  readonly _id: mongoose.Types.ObjectId,
  readonly nombre: string,
  readonly apellido: string,
  readonly username: string
}
