import React from 'react';
import {useForm} from 'react-hook-form';

import Button from '@/components/buttons/button';
import TextField from '@/components/primitives/text-field/text-field';
import {useLogin} from '@/hooks/mangadex/useLogin';

export default function LoginPage() {
  const {mutate: login, isLoading, isError, error} = useLogin();
  const {register, handleSubmit} = useForm<{username: string; password: string}>();

  const onSubmit = (data: {username: string; password: string}) => {
    login(data);
  };

  return (
    <div tw="h-screen overflow-y-auto bg-white">
      <div tw="flex justify-center py-16 container mx-auto">
        <div tw="w-96">
          <div>
            <h3 tw="text-center text-gray-900 font-bold text-3xl tracking-tight">Log in</h3>
            <p tw="text-center text-gray-500 font-medium mt-4">Enter your credentials to access your account.</p>
          </div>
          <form tw="mt-12" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <TextField.Root label="Username">
                <TextField.Label />
                <TextField.Input {...register('username')} autoFocus type="text" placeholder="Enter your username" />
              </TextField.Root>
            </div>
            <div tw="mt-6">
              <TextField.Root label="Password">
                <TextField.Label />
                <TextField.Input {...register('password')} type="password" placeholder="Enter your password" />
              </TextField.Root>
            </div>

            <div tw="mt-12">
              <Button isLoading={isLoading} type="submit">
                Log in
              </Button>
            </div>
            <p tw="mt-2 text-xs text-red-500">{error?.message}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
