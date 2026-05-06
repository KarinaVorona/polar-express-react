import clsx from 'clsx';

function Loader() {
  return (
    <div className={clsx('loader-wrapper')}>
      <span className={clsx('loader')}></span>
    </div>
  );
}

export default Loader;