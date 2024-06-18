import { Module } from '@nestjs/common';


import  {ConfigModule , ConfigService} from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';

//find all user
//add user
//delete user




@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true, envFilePath:['.local.env']}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type:'postgres',
        host: configService.get('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        synchronize: configService.get<boolean>('DATABASE_SYNC'),
        logging: configService.get<boolean>('DATABASE_LOGGING'),
        database: 'postgres',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
      }),
      
    }),
    UserModule,
    TodoModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
