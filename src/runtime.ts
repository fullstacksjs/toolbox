const isNode = Boolean('global' in globalThis);
const isDeno = Boolean('Deno' in globalThis);

if (isNode) {
  console.log('node runtime.');
} else if (isDeno) {
  console.log('deno runtime.');
} else {
  console.log('unknown runtime!');
}

class Runtime {
  env: { [key: string]: unknown };
  constructor() {
    this.env = {};

    if (isNode) {
      // @ts-ignore we are in deno runtime
      this.env = process?.env;
    } else if (isDeno) {
      // @ts-ignore we are in node runtime
      this.env = Deno?.env?.toObject();
    }
  }
}

export const runtime = new Runtime();
