export function createCounter(init = 0) {
  let count = $state(init);

  return {
    get count() {
      return count;
    },
    increment: () => {
      count += 1;
    },
    decrement: () => {
      count -= 1;
    },
    reset: () => {
      count = init;
    },
  };
}
