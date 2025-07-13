import '@testing-library/jest-dom';

// Minimal ResizeObserver stub for jsdom
class ResizeObserver {
  private readonly cb: ResizeObserverCallback;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(cb: ResizeObserverCallback) {
    this.cb = cb;
  }
  observe(): void {
    this.cb(
      [
        {
          contentRect: { width: 320, height: 180 },
        } as unknown as ResizeObserverEntry,
      ],
      this
    );
  }
  unobserve(): void {}
  disconnect(): void {}
}
(globalThis as any).ResizeObserver = ResizeObserver;

