import React from 'react';
import {AppRoutes} from './app-routes';
import GlobalStyles from '@/components/global-styles';
import {QueryClient, QueryClientProvider} from 'react-query';
import {OverlayProvider} from 'react-aria';
import {BrowserRouter} from 'react-router-dom';
import Mangadex from '@vetr/mangadex';

Mangadex.Context.API_ROOT_URL = !__DEV__
  ? `https://vter-proxy.herokuapp.com/${Mangadex.Context.API_ROOT_URL}`
  : Mangadex.Context.API_ROOT_URL;

Mangadex.Context.STATIC_ROOT_URL = !__DEV__
  ? `https://vter-proxy.herokuapp.com/${Mangadex.Context.STATIC_ROOT_URL}`
  : Mangadex.Context.API_ROOT_URL;

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <OverlayProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </OverlayProvider>
      </QueryClientProvider>
    </>
  );
}
