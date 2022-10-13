import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello - This API is a simple users CRUD! - [/users]';
  }
}
