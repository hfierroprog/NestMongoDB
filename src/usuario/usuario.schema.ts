import * as mongoose from 'mongoose';

export const UsuarioSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  nombre: String,
  apellido: String,
  username: String
}, { collection: 'usuario' });
