import { IPublisher } from "../interfaces/IPublisher";
import { ISubscriber } from "../interfaces/ISubscriber";

export class Professor implements IPublisher {
  private subscribers: ISubscriber[] = [];
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  subscribe(subscriber: ISubscriber): void {
    this.subscribers.push(subscriber);
    console.log(`${subscriber.constructor.name} se suscribió a ${this.name}`);
  }

  unsubscribe(subscriber: ISubscriber): void {
    const index = this.subscribers.indexOf(subscriber);
    if (index > -1) {
      this.subscribers.splice(index, 1);
      console.log(`${subscriber.constructor.name} se desuscribió de ${this.name}`);
    }
  }

  publish(message: string): void {
    console.log(`${this.name} publica: ${message}`);
    this.subscribers.forEach(subscriber => subscriber.update(message));
  }
}
