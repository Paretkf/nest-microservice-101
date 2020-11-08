import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { MathService } from './math.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mathService: MathService
  ) {}

  private logger = new Logger('AppController')

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('add')
  async accumulate(data: number[]) {
    return await this.mathService.accumulate(data)
  }
}
