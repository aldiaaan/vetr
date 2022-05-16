import React from 'react';
import AppBar from '@/components/appbar/appbar';
import {useMe} from '@/hooks/mangadex/useMe';

export default function AccountPage() {
  const {data} = useMe(
    {},
    {
      retry: false,
    },
  );

  return (
    <div tw="h-screen overflow-x-hidden overflow-y-auto flex items-center justify-center flex-col container mx-auto px-3">
      <div tw="fixed top-0 right-0 left-0">
        <AppBar />
      </div>
      <div tw="pt-16">
        <p>{data?.name}</p>
      </div>
    </div>
  );
}
