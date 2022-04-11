export default class Pokemon {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Mi pokemon ${this.name} te saluda`);
  }

  sayMessage(palabra) {
    console.log(`Mi pokemon ${this.name} dice: ${palabra}`);
  }
}
