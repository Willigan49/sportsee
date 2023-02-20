import { useRouteError, Link } from "react-router-dom";

/**
 * Display error page
 * @returns {JSX.element}
 */
export default function Error() {
  const error = useRouteError();

  return (
    <div id="error">
      <h1>Oops!</h1>
      <p>Désolé, une erreur s'est produite 😱</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={'/'}>Revenir à l'accueil</Link>
    </div>
  );
}