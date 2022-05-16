import React from 'react';

export type ErrorPageProps = {
  status?: string;
  title?: string;
  subtitle?: string;
};

export default function ErrorPage(props: ErrorPageProps) {
  return (
    <div tw="h-screen overflow-x-hidden overflow-y-auto flex items-center justify-center flex-col container mx-auto px-3">
      <h3 tw="font-bold text-7xl text-indigo-900">{props.status}</h3>
      <h1 tw="mt-8 font-semibold text-2xl text-gray-700">{props.title}</h1>
      <p tw="text-gray-500 text-lg font-medium mt-3 text-center">{props.subtitle}</p>
    </div>
  );
}
