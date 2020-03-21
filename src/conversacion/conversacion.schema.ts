import * as mongoose from 'mongoose';

export const ConversacionSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  miembros: [mongoose.Types.ObjectId, mongoose.Types.ObjectId]
}, { collection: 'conversacion' });
