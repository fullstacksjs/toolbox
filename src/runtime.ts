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
      this.env = process.env;
    } else {
      this.env = Deno.env.toObject();
    }
  }
}

export const runtime = new Runtime();
