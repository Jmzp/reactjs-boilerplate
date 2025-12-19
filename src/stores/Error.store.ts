import { action, makeAutoObservable, observable } from 'mobx';

class ErrorStore {
  currentError = '';

  constructor() {
    makeAutoObservable(this, {
      currentError: observable,
      setCurrentError: action,
    });
  }

  setCurrentError(error: string): void {
    this.currentError = error;
  }
}

export default ErrorStore;
