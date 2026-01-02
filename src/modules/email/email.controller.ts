import { Controller, Get, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateEmailDto } from './dto/create-email.dto';
import { Auth } from '../../common/decorator/auth/auth.decorator';
import { RoleEnum } from '../../common/enum/Role.enum';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  create(@Body() createEmailDto: CreateEmailDto) {
    return this.emailService.create(createEmailDto);
  }

  @Auth([RoleEnum.ADMIN])
  @Get()
  findAll() {
    return this.emailService.findAll();
  }
}
