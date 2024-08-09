import "./Error.css";

const Error = () => {
  return (
    <div className='error-page'>
      <div className='container'>
        <div className='eyes'>
          <div className='eye'>
            <div className='eye__pupil eye__pupil--left'></div>
          </div>
          <div className='eye'>
            <div className='eye__pupil eye__pupil--right'></div>
          </div>
        </div>
        <div className='error-page__heading'>
          <h1 className='error-page__heading-title'>Hello form error page</h1>
          <p className='error-page__heading-description'>404 error</p>{" "}
          {/* Fixed class name typo */}
        </div>
        <a
          className='error-page__button'
          href='/'
          aria-label='back to home'
          title='back to home'>
          back to home
        </a>
      </div>

      <button className='color-switcher' data-theme-color-switch>
        &#127769;
      </button>
    </div>
  );
};

export default Error;
