import { atom } from 'recoil';

export const authState = atom({
  key: 'authState',
  default: null,
});

export const spinnerState = atom({
  key: 'spinnerState',
  default: false,
});
