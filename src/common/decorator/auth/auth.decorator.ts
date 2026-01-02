import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/common/auth/jwt-auth/jwt-auth.guard';
import { RoleEnum } from 'src/common/enum/Role.enum';
import { ROLE_KEY } from './role.decorator';
import { RoleGuard } from 'src/common/auth/jwt-auth/role.guard';
export const Auth = (role?: RoleEnum[]) => {
  return applyDecorators(
    SetMetadata(ROLE_KEY, role),
    UseGuards(JwtAuthGuard, RoleGuard),
  );
};
