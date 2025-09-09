import { INotifier } from "../interfaces/INotifier";

export class SmsNotifier implements INotifier {
  private phoneRegex = /^\d{10,15}$/;

  send(to: string, message: string): void {
    if (!this.phoneRegex.test(to)) {
      console.log("Error: Número de teléfono inválido");
      return;
    }
    console.log(`Enviando SMS a ${to}: ${message}`);
  }
}
