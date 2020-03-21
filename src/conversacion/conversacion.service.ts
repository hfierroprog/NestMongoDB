import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ConversacionModel } from './conversacion.model';
import * as mongoose from 'mongoose';

@Injectable()
export class ConversacionService {

  constructor(@InjectModel('conversacion') private readonly conversacionModel: Model<ConversacionModel>) {
  }

  async getConversaciones(userId: string): Promise<ConversacionModel[]> {
    const usuarios = await this.conversacionModel.find({'miembros': mongoose.Types.ObjectId(userId)}).exec();
    return usuarios;
  }
}
