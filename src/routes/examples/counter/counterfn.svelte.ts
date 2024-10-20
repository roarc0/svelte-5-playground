export function createCounter(init = 0) {
  let count = $state(init);
  const doubled = $derived(count * 2);
  const isEven = $derived(count % 2 === 0);

  return {
    get count() {
      return count;
    },
    get doubled() {
      return doubled;
    },
    get isEven() {
      return isEven;
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
