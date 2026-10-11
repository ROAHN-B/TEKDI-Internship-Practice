import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { UserModule } from './user/user.module.js';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user/entity/user.entity.js';


@Module({  // decorator
  controllers: [AppController], //loading app controller
  imports: [UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'Rohan@54321',
      database: 'nestjs',
      entities: [User],
      synchronize: true,
    })
  ],
})
export class AppModule {}
