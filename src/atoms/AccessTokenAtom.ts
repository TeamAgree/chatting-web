import { atom } from 'recoil';

export const AccessTokenAtom = atom<boolean>({
  key: 'AccessTokenAtom',
  default: false,
});
