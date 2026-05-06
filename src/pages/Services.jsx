import { useEffect, useState } from 'react';
import clsx from 'clsx';

import Loader from '../components/Loader';

function Services() {
  const [title] = useState('Services');
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
        Explore Polar Express services for individuals and businesses.
      </p>
    </main>
  );
}

export default Services;