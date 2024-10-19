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
    { id: 4, name: 'David Lee', email: 'david.lee@example.com', role: 'ADMIN' },
    {
      id: 5,
      name: 'Eva Green',
      email: 'eva.green@example.com',
      role: 'ENGINEER',
    },
  ];
  
}
