import { vi } from 'vitest';

export function mockNodeGlobal() {
  vi.spyOn(globalThis.process, 'versions', 'get').mockImplementationOnce(() => {
    return { ...globalThis.process.versions, node: 'mocked' };
  });
}

export function mockWindowGlobal() {
  vi.spyOn(globalThis.constructor, 'name', 'get').mockImplementationOnce(
    () => 'Window',
  );

  vi.spyOn(globalThis.process, 'versions', 'get').mockImplementationOnce(
    // @ts-expect-error Deleting versions from process
    () => {
      return {};
    },
  );
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
  vi.clearAllMocks();
  Reflect.deleteProperty(globalThis, 'Deno');
}
