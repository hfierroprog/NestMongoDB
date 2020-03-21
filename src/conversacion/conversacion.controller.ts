import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { ConversacionService } from './conversacion.service';

@Controller('chat')
export class ConversacionController {

  constructor(private conversacionService: ConversacionService) {
  }

  @Get('conversacion/:userId')
  async getAll(@Res() res, @Param('userId') userId: string) {
    const conversas = await this.conversacionService.getConversaciones(userId);
    return res.status(HttpStatus.OK).json(conversas);
  }
}
