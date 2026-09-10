export function mockNodeGlobal() {
  vi.spyOn(globalThis.process, 'versions', 'get').mockReturnValueOnce({
    ...globalThis.process.versions,
    node: 'mocked',
  });
}

export function mockBunGlobal() {
  mockNodeGlobal();

  Object.defineProperty(globalThis, 'Bun', {
    configurable: true,
    get() {
      return {};
    },
  });
}

export function mockWindowGlobal() {
  vi.spyOn(globalThis.constructor, 'name', 'get').mockReturnValueOnce('Window');

  // @ts-expect-error Deleting versions from process
  vi.spyOn(globalThis.process, 'versions', 'get').mockReturnValueOnce({});
}

export function mockDenoGlobal() {
  mockWindowGlobal();

  Object.defineProperty(globalThis, 'Deno', {
    configurable: true,
    get() {
      return {};
    },
  });
}

export function clearMocks() {
  vi.resetAllMocks();
  Reflect.deleteProperty(globalThis, 'Deno');
  Reflect.deleteProperty(globalThis, 'Bun');
}
