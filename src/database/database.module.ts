import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Module({
  providers: [DatabaseService],
  exports:[DatabaseModule,DatabaseService],
})
export class DatabaseModule {}
