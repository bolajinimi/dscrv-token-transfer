// src/pages/transfer/index.tsx
'use client';

import { Suspense } from 'react';
import TransferPage from '../../components/TransferPage';

const TransferIndexPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TransferPage />
    </Suspense>
  );
};

export default TransferIndexPage;
