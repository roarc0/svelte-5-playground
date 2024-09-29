export class Counter {
  init = 0;
  count = $state(0);

  constructor(init = 0) {
    this.init = init;
    this.count = init;
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }

  reset() {
    this.count = this.init;
  }
}
