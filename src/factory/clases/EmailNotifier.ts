import { INotifier } from "../interfaces/INotifier";

export class EmailNotifier implements INotifier {
  private emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  send(to: string, message: string): void {
    if (!this.emailRegex.test(to)) {
      console.log("Error: Dirección de email inválida");
      return;
    }
    console.log(`Enviando email a ${to}: ${message}`);
  }
}
