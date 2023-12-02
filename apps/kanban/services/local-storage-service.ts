import { Dispatch } from 'react';

export class LocalStorageService {
  static getItem(key: string) {
    return localStorage.getItem(key);
  }

  static setItem(key: string, value: string) {
    localStorage.setItem(key, value);
    window.dispatchEvent(new Event('storage-local'));
  }

  static addEventListener(eventListener: Dispatch<unknown>) {
    window.addEventListener('storage', eventListener);
    window.addEventListener('storage-local', eventListener);
  }

  static removeEventListener(eventListener: Dispatch<unknown>) {
    window.removeEventListener('storage', eventListener);
    window.removeEventListener('storage-local', eventListener);
  }
}
