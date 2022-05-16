import React from 'react';
import {BrowserRouter, Routes, Route, useLocation, Outlet} from 'react-router-dom';
import loadable from '@loadable/component';

const ErrorPage = loadable(() => import('@/pages/errors/error-page'));
const HomePage = loadable(() => import('@/pages/home/home-page'));
const LoginPage = loadable(() => import('@/pages/login/login-page'));
const AccountPage = loadable(() => import('@/pages/account/account-page'));
const SearchPage = loadable(() => import('@/pages/search/search-page'));
const MangaPage = loadable(() => import('@/pages/manga/manga-page'));
const ChapterPage = loadable(() => import('@/pages/chapter/chapter-page'));

export function AppRoutes() {
  const location = useLocation();

  // The `backgroundLocation` state is the location that we were at when one of
  // the gallery links was clicked. If it's there, use it as the location for
  // the <Routes> so we show the gallery in the background, behind the modal.
  const state = location.state as {background?: Location};

  return (
    <>
      <Routes location={state?.background || location}>
        <Route path="/" element={<Outlet />}>
          <Route element={<SearchPage isOpen={true} />} path="/search" />
          <Route index element={<HomePage />} />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<AccountPage />} path="/me" />
          <Route element={<MangaPage />} path="/manga/:id" />
          <Route element={<ChapterPage />} path="/chapter/:id" />
          <Route
            element={
              <ErrorPage
                status="400"
                title="Page not found"
                subtitle="We`re sorry, the page you requested could not be found."
              />
            }
            path="*"
          />
        </Route>
      </Routes>
      <SearchPage isOpen={Boolean(state?.background)} />
    </>
  );
}
