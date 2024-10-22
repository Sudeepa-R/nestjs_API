import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      role: 'ENGINEER',
    },
    {
      id: 3,
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      role: 'INTERN',
    },
    { id: 4, 
      name: 'David Lee',
      email: 'david.lee@example.com',
      role: 'ADMIN' },
    {
      id: 5,
      name: 'Eva Green',
      email: 'eva.green@example.com',
      role: 'ENGINEER',
    },
  ];
  findAll(role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    if (role) {
      const r= this.users.filter(user  => user.role == role);
      if (r.length==0) throw new NotFoundException('Role not Found')
    }
    return this.users;
  }
  findOne(id:number){
    
    const user=this.users.filter(i=>i.id==id);
    if(!user) throw new NotFoundException('user NOt found')
    return user
    
  }
  create(createUserDto:CreateUserDto){
    const userByHighestId=[...this.users].sort((a,b)=>b.id - a.id)
    const newUser={
        id:userByHighestId[0].id+1,
        ...createUserDto
    }
    this.users.push(newUser)
  }
  update(id: number, updateUserDto:UpdateUserDto){
    this.users=this.users.map(user=>{
        if(user.id==id){
            return {...user,...updateUserDto}
        }
        return user
    })
    return this.findOne(id)
  }
  delete(id:number){
    const removedUser=this.findOne(id)
    this.users=this.users.filter(i=>i.id!==id)
    return removedUser;
  }
}
