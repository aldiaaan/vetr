import AppBar from '@/components/appbar/appbar';
import React, {useEffect} from 'react';
import LatestUpdateSection from './components/latest-update-section';

export default function HomePage() {
  return (
    <div tw="h-screen relative overflow-y-auto overflow-x-hidden">
      <div tw="fixed top-0 right-0 left-0 z-50">
        <AppBar />
      </div>
      <div tw="pt-20 container mx-auto">
        <LatestUpdateSection />
      </div>
    </div>
  );
}
