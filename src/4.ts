/*
  Ключ (Key): приватна властивість signature, згенерована випадково,
  і метод getSignature, який її повертає.

  Людина (Person): зберігає ключ у приватній властивості і віддає його через getKey.

  Дім (House): абстрактний клас з дверима, ключем, мешканцями та методом comeIn.
  openDoor — абстрактний метод, який приймає ключ.

  Мій будинок (MyHouse): відчиняє двері, якщо підпис ключа збігається.
*/

class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
