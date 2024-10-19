import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll(@Query('role') role?: "INTERN"| "ADMIN" | "ENGINEER"){
        return []
    }

    @Get('interns')
    findInterns(){
        return []
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return {id}
    }

    @Post()
    create(@Body() user:{})
    {
        return user
    }

    @Patch(':id')
    update(@Param('id') id:string,@Body() userUpdate:{}){
        return {id, ...userUpdate}
    }

    @Delete(':id')
    deleteUser(@Param('id') id:string){
        return {id}
    }
    
}
