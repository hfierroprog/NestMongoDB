import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('chat')
export class UsuarioController {

  constructor(private usuarioService: UsuarioService) {
  }

  @Get('usuario')
  async getAll(@Res() res) {
    const usuarios = await this.usuarioService.getAllUsers();
    return res.status(HttpStatus.OK).json(usuarios);
  }
}
