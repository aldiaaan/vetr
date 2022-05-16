import {useMutation, UseMutationOptions} from 'react-query';
import Mangadex, {MangadexRestError, LoginOptions, LoginReturn} from '@vetr/mangadex';

export type UseLoginResult = LoginReturn;
export type UseLoginArgs = LoginOptions;
export type UseLoginError = MangadexRestError;

export const useLogin = (mutationOptions?: UseMutationOptions<UseLoginResult, UseLoginError, UseLoginArgs, unknown>) =>
  useMutation<UseLoginResult, UseLoginError, LoginOptions, unknown>(async args => {
    const result = await Mangadex.Rest.login(args);
    return result;
  }, mutationOptions);
