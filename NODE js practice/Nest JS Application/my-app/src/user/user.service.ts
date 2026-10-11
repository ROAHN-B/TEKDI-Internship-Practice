import { Injectable, Param } from '@nestjs/common';
import { CreateUserDTO } from './create-user-dto.js';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity.js';
import { updateUserDTO } from './update-user-dto.js';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}
    get(): Promise<User[]>{
        return this.userRepository.find()
    }
    create(CreateUserDTO:CreateUserDTO){
        return this.userRepository.save(CreateUserDTO);
    }
    getUser(param:{userId:number}){
        return param
    }
    update(updateUserDTO: updateUserDTO, userId:number){
        return this.userRepository.update(userId,updateUserDTO)
    }
    show(userId:number){
        return this.userRepository.findOne({where: {id:userId}})
    }
    delete(userId:number){
        return this.userRepository.delete(userId)
    }
}
