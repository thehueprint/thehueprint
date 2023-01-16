'use client';

// This is the error component that will be rendered when an error is thrown.

import { useEffect } from 'react';

export default function Error({error, reset}) {

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}
