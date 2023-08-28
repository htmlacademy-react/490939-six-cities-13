import React from 'react';

const Sort: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const sortRef = React.useRef<HTMLFormElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <form className="places__sorting" ref={sortRef} action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
      <span className="places__sorting-type" onClick={() => setOpen(!open)} tabIndex={0}>Popular</span>
      {open && (
        <ul className="places__options places__options--custom places__options--opened">
          <li
            className="places__option places__option--active"
            tabIndex={0}
          >
            Popular
          </li>
          <li className="places__option" tabIndex={0}>
            Price: low to high
          </li>
          <li className="places__option" tabIndex={0}>
            Price: high to low
          </li>
          <li className="places__option" tabIndex={0}>
            Top rated first
          </li>
        </ul>
      )}
    </form>
  );
};

export default Sort;
