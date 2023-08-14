'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { forwardRef } from 'react';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello world</h1>

      <Button>Hello world</Button>
    </main>
  );
}
