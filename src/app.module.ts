import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioModule } from './usuario/usuario.module';
import { ConversacionModule } from './conversacion/conversacion.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://hfierroprog:hfierropass@chatcluster-dezzm.mongodb.net/chat?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true  }), UsuarioModule, ConversacionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
