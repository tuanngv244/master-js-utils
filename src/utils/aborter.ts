class Aborter {
  private controllers: { [key: string]: AbortController } = {};
  constructor() {
    this.controllers = {};
  }

  newSignal(key: string) {
    if (this.controllers[key]) {
      this.controllers[key].abort();
    }
    this.controllers[key] = new AbortController();
    return this.controllers[key].signal;
  }

  abort(key: string) {
    if (this.controllers[key]) {
      this.controllers[key].abort();
      delete this.controllers[key];
    }
  }
}

export default Aborter;
