import { HttpException, Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { Resend } from 'resend';
import { InjectModel } from '@nestjs/mongoose';
import { Email } from './entities/email.entity';
import { Model } from 'mongoose';
import EmailTemplate from './template/emailTemplate';

@Injectable()
export class EmailService {
  private resend: Resend;

  constructor(@InjectModel(Email.name) private emailModel: Model<Email>) {
    this.resend = new Resend(process.env.RESEND_API_KEY);
  }

  async create(body: CreateEmailDto) {
    const { data, error } = await this.resend.emails.send({
      from: 'noreply@resend.dev',
      to: process.env.PERSONAL_EMAIL!,
      subject: `Nueva Oferta de trabajo de ${body.name} - ${body.phone || 'Sin teléfono'}`,
      html: EmailTemplate({
        name: body.name,
        email: body.email,
        phone: body.phone,
        message: body.message,
      }),
    });

    if (error) {
      throw new HttpException(`Failed to send email: ${error.message}`, 500);
    }

    const newEmail = await this.emailModel.create(body);

    await newEmail.save();

    return {
      emailResponse: data,
      saveEmail: newEmail.toObject(),
    };
  }

  findAll() {
    return this.emailModel
      .find()
      .sort({
        createdAt: -1,
      })
      .exec();
  }
}
