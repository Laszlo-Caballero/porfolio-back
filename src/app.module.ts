import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { EmailModule } from './modules/email/email.module';
import { ExperienceModule } from './modules/experience/experience.module';
import { FilesModule } from './modules/files/files.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { TecnologieModule } from './modules/tecnologie/tecnologie.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI!),
    AuthModule,
    EmailModule,
    ExperienceModule,
    FilesModule,
    ProjectsModule,
    TecnologieModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
