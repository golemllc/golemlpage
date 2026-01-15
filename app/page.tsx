import React, { Suspense } from 'react';
import GolumAILanding from './components/GolumAILanding';

export default function Home() {
  return (
    // This Suspense boundary is what fixes the build error on GitHub Pages
    <Suspense fallback={<div className="min-h-screen bg-[#06070B]" />}>
      <GolumAILanding />
    </Suspense>
  );
}
