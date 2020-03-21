import { Module } from '@nestjs/common';
import { ConversacionController } from './conversacion.controller';
import { ConversacionService } from './conversacion.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConversacionSchema } from './conversacion.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'conversacion', schema: ConversacionSchema }])],
  controllers: [ConversacionController],
  providers: [ConversacionService]
})
export class ConversacionModule {

}
