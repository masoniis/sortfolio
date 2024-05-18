/* Returns a Promise that resolves after the input milliseconds */
export function wait(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
