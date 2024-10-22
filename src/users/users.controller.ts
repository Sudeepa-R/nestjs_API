import { Body, Controller, Delete, Get, Param, Patch, Post, Query , ParseIntPipe, ValidationPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userServices :UsersService){}
    @Get()
    findAll(@Query('role') role?: "INTERN"| "ADMIN" | "ENGINEER"){
        return this.userServices.findAll(role)
    }

    @Get('interns')
    findInterns(){
        return []
    }

    @Get(':id')
    findOne(@Param('id',ParseIntPipe) id:number){
        return this.userServices.findOne(id)   
     }

    @Post()
    create(@Body(ValidationPipe) createUserDto:CreateUserDto)
    {
        return this.userServices.create(createUserDto)
    }

    @Patch(':id')
    update(@Param('id',ParseIntPipe) id:number,@Body(ValidationPipe) updateUserDto:UpdateUserDto){
        return this.userServices.update(id,updateUserDto)
    }

    @Delete(':id')
    deleteUser(@Param('id',ParseIntPipe) id:number){
        return this.userServices.delete(id)
    }
    
}
