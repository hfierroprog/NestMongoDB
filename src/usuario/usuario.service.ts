import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UsuarioModel } from './usuario.model';

@Injectable()
export class UsuarioService {

  constructor(@InjectModel('Usuario') private readonly usuarioModel: Model<UsuarioModel>) {
  }

  async getAllUsers(): Promise<UsuarioModel[]> {
    const usuarios = await this.usuarioModel.find().exec();
    return usuarios;
  }
}
