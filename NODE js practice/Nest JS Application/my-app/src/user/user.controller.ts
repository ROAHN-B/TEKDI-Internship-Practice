import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from '@nestjs/common';
import { UserService } from './user.service.js';
import { updateUserDTO } from './update-user-dto.js';
import { CreateUserDTO } from './create-user-dto.js';

@Controller('/users')
export class UserController{
    constructor(private userSevice: UserService){}  // user service is being injected in the user controller
    @Get()
    getUser(){  
       return this.userSevice.get()
    }
    @Post()
    Store(@Body() CreateUserDTO:any ){
        return this.userSevice.create(CreateUserDTO)
    }

    @Patch()
    update(@Body() updateUserDTO: updateUserDTO, @Param() userId: number){
        return this.userSevice.update(updateUserDTO,userId)
    }

    @Get('/:userId')    // ":" to indicate this route is dynamic
    UserId(@Param('userId', ParseIntPipe) userId:number){
        return this.userSevice.show(userId)
    }

    @Delete('/:userId')
    Delete(@Param('userId',ParseIntPipe) userId:number){
        return this.userSevice.delete(userId);
    }

}