import { Injectable } from '@nestjs/common';

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
      return this.users.filter(user  => user.role == role);
    }
    return this.users;
  }
  findOne(id:number){
    const user=this.users.filter(i=>i.id==id);
    return user
  }
  create(user:{name:string, email:string, role:'INTERN' | 'ADMIN' | 'ENGINEER'}){
    const userByHighestId=[...this.users].sort((a,b)=>b.id - a.id)
    const newUser={
        id:userByHighestId[0].id+1,
        ...user
    }
    this.users.push(newUser)
  }
  update(id: number, updatedUser:{name:string, email:string, role?:'INTERN' | 'ADMIN' | 'ENGINEER'}){
    this.users.map(user=>{
        if(user.id==id){
            return {...user,...updatedUser}
        }
    })
  }
}
