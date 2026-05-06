import { useEffect, useState } from 'react';
import clsx from 'clsx';

import Loader from '../components/Loader';

function Shipping() {
  const [title] = useState('Shipping');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className={clsx('page', 'container')}>
      <h2 className={clsx('page__title')}>{title}</h2>
      <p className={clsx('page__text')}>
        Choose shipping options and find the best delivery solution for your parcel.
      </p>
    </main>
  );
}

export default Shipping;