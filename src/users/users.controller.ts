import { Body, Controller, Delete, Get, Param, Patch, Post, Query , ParseIntPipe} from '@nestjs/common';
import { UsersService } from './users.service';

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
    create(@Body() user:{name:string, email:string, role:'INTERN' | 'ADMIN' | 'ENGINEER'})
    {
        return this.userServices.create(user)
    }

    @Patch(':id')
    update(@Param('id',ParseIntPipe) id:number,@Body() userUpdate:{name:string, email:string, role?:'INTERN' | 'ADMIN' | 'ENGINEER'}){
        return this.userServices.update(id,userUpdate)
    }

    @Delete(':id')
    deleteUser(@Param('id',ParseIntPipe) id:number){
        return this.userServices.delete(id)
    }
    
}
