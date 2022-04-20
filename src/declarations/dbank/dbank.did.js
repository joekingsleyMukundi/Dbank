export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'checkBalance' : IDL.Func([], [IDL.Float64], ['query']),
    'compoundIntrest' : IDL.Func([], [], ['oneway']),
    'depositFunds' : IDL.Func([IDL.Float64], [], ['oneway']),
    'withdrawFunds' : IDL.Func([IDL.Float64], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
