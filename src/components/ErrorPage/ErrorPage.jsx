import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <section className="error">
      <div className="error__container">
        <p>Sorry!</p>
        <p>This page doesn&#39;t exist.</p>
        <a href="/" className="error__container__link">
          Return home
        </a>
      </div>
    </section>
  );
};

export default ErrorPage;
