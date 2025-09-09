import { NotifierFactory } from "./clases/NotifierFactory";
import { INotifier } from "./interfaces/INotifier";

const runFactory = async () => {
  console.log(
    "====================FACTORY: NOTIFICACIONES ===================="
  );

  const emailNotifier: INotifier = NotifierFactory.create("email");
  emailNotifier.send("usuario@example.com", "Hola por email");

  const smsNotifier: INotifier = NotifierFactory.create("sms");
  smsNotifier.send("1234567890", "Hola por SMS");

  const whatsappNotifier: INotifier = NotifierFactory.create("whatsapp");
  whatsappNotifier.send("0987654321", "Hola por WhatsApp");

  console.log("====================\n");
};

export { runFactory };
