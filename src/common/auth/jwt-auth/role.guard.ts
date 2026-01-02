import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLE_KEY } from 'src/common/decorator/auth/role.decorator';
import { RoleEnum } from 'src/common/enum/Role.enum';
import { RequestUser } from 'src/common/interface/auth.interface';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRole = this.reflector.getAllAndOverride<RoleEnum[]>(
      ROLE_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRole) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest<RequestUser>();

    if (user.role === RoleEnum.ADMIN) {
      return true;
    }

    return requiredRole.includes(user.role);
  }
}
