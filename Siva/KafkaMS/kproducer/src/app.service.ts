import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Kafka } from 'kafkajs';
// import { student } from './app.schema';
// import { Model } from 'mongoose';
// import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(
    @Inject('HERO_SERVICE') private readonly client: ClientKafka, // @InjectModel('testing') // private apimodel: Model<student>,
  ) {}
  async onApplicationBootstrap() {
    this.client.subscribeToResponseOf('a');
    this.client.subscribeToResponseOf('b');
    this.client.subscribeToResponseOf('add_items');
    this.client.subscribeToResponseOf('remove_items');
    this.client.subscribeToResponseOf('find');
    this.client.subscribeToResponseOf('delete');
    await this.client.connect();
  }
  getHello(): string {
    return 'Hello World!';
  }
  getKaf(request) {
    return this.client.send('a', request);
  }
  findElem(elem) {
    return this.client.send('find', elem);
  }
  delete(elem) {
    return this.client.send('delete', elem);
  }
  getKaf2() {
    return this.client.send('b', 'request');
  }
  async getFire(topic, key, value) {
    const kafka = new Kafka({
      brokers: ['192.168.0.104:9092'], // Kafka bootstrap servers
    });

    const producer = kafka.producer();

    await producer.connect();

    // Fire and forget approach - no need to await the result
    producer.send({
      topic,
      messages: [{ key, value }],
    });
    console.log('Kafka message sent successfu!');
    await producer.disconnect();
  }
  addCart(item) {
    // console.log('Item to be Added:', item.name);
    return this.client.send('add_items', item);
  }
  removeCart() {
    return this.client.send('remove_items', { name: 'bmw' });
  }
}
