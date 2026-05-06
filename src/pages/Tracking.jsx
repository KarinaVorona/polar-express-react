import { useEffect, useState } from 'react';
import clsx from 'clsx';

import Loader from '../components/Loader';

function Tracking() {
  const [title] = useState('Tracking');
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
        Here you can track your parcel by entering your tracking ID.
      </p>
    </main>
  );
}

export default Tracking;