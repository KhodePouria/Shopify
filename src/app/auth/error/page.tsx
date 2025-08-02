'use client';

import {useSearchParams} from 'next/navigation';
import Link from 'next/link';
import {Suspense} from 'react';

function ErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Authentication Error
          </h2>
          <div className="p-4 mt-4 text-red-700 bg-red-100 border border-red-400 rounded">
            <p className="font-bold">Error Details:</p>
            <p className="mt-2">{error || 'Unknown authentication error'}</p>
          </div>
          <div className="mt-6">
            <Link
              href="/login"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Try Again
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AuthError() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Loading...</h2>
          </div>
        </div>
      }
    >
      <ErrorContent />
    </Suspense>
  );
}
