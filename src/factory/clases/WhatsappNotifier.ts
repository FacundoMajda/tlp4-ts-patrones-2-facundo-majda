import { INotifier } from "../interfaces/INotifier";

export class WhatsappNotifier implements INotifier {
  private phoneRegex = /^\d{10,15}$/;

  send(to: string, message: string): void {
    if (!this.phoneRegex.test(to)) {
      console.log("Error: Número de teléfono inválido");
      return;
    }
    console.log(`Enviando WhatsApp a ${to}: ${message}`);
  }
}
