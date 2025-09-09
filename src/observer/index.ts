import { Professor } from "./clases/Professor";
import { Student } from "./clases/Student";
import { IPublisher } from "./interfaces/IPublisher";
import { ISubscriber } from "./interfaces/ISubscriber";

const runObserver = async () => {
  console.log(
    "====================OBSERVER: PROFESOR → ALUMNOS ===================="
  );

  const professor: IPublisher = new Professor("Prof. García");
  const student1: ISubscriber = new Student("Ana");
  const student2: ISubscriber = new Student("Carlos");
  const student3: ISubscriber = new Student("María");

  professor.subscribe(student1);
  professor.subscribe(student2);
  professor.subscribe(student3);

  professor.publish("Tarea 1: Resolver ejercicios de matemáticas");

  professor.unsubscribe(student2);

  professor.publish("Tarea 2: Leer capítulo 5 del libro");

  console.log("====================\n");
};

export { runObserver };
