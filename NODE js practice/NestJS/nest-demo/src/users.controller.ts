import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService, User } from './user.service.js';

@Controller('users') // Base route: /users
export  class UsersController {
  // Inject UsersService via Constructor Dependency Injection
  constructor(private readonly usersService: UsersService) {}

  // GET /users
  @Get()
  getAllUsers(): User[] {
    return this.usersService.findAll();
  }

  // GET /users/:id
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number): User | undefined {
    return this.usersService.findOne(id);
  }

  // POST /users
  @Post()
  createUser(@Body() userData: { name: string; email: string }): User | undefined {
    return this.usersService.create(userData);
  }
}

