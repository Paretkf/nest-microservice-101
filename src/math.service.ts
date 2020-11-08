import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class MathService {

  private client: ClientProxy

  constructor(){
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8877,
      },
    })
  }

  public accumulate(data: number[]): number {
    console.log('adding', data)
    return (data || []).reduce((a, b) => Number(a) + Number(b));
  }
}
