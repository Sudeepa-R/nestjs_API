import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeeService {
  constructor(private readonly databaseService:DatabaseService){}

  async create(createEmployeeDto: Prisma.EmployeesCreateInput) {
    return  this.databaseService.employees.create({
      data:createEmployeeDto
    })
  }

  async findAll(role?: 'INTERN' | 'ENGINEER' |'ADMIN') {
    return this.databaseService.employees.findMany({
      where:{
        role,
      }
    })
    return this.databaseService.employees.findMany( )
  }

  async findOne(id: number) {
    return this.databaseService.employees.findUnique({
      where:{
        id,
      }
    })
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeesUpdateInput) {
    return this.databaseService.employees.update({
      where:{
        id,
      },
      data:updateEmployeeDto,
    })
  }

  async remove(id: number) {
    return this.databaseService.employees.delete({
      where:{
        id,
      }
    })
  }
}
