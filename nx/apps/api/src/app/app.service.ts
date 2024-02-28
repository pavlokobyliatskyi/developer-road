import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    console.log('some another log');
    // add some logic
    const name = 'John';

    return { message: `Hello API: ${name}` };
  }
}
