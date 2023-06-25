const isInNode = Boolean(typeof global !== 'undefined');

const isInDeno = Boolean(typeof Deno !== 'undefined');

class Runtime {
  getEnv(key) {
    console.log('runtime check!');

    if (isInNode) {
      console.log('nodejs runtime');
    } else if (isInDeno) {
      console.log('deno runtime');
    }

    return key;
  }
}

const runtime = new Runtime();

console.log(runtime.getEnv('key'));
