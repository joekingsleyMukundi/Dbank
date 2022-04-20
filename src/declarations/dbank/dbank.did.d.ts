import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'checkBalance' : () => Promise<number>,
  'compoundIntrest' : () => Promise<undefined>,
  'depositFunds' : (arg_0: number) => Promise<undefined>,
  'withdrawFunds' : (arg_0: number) => Promise<undefined>,
}
