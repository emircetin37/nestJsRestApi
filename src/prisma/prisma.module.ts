import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserModule } from 'src/user/user.module';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule { }
