export class Counter {
  init = 0;
  count = $state(0);

  constructor(init = 0) {
    this.count = this.init = init;
  }

  increment() {
    console.log("increment");
    this.count += 1;
  }

  decrement() {
    console.log("decrement");
    this.count -= 1;
  }

  reset() {
    console.log("reset");
    this.count = this.init;
  }
}
