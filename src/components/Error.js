import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="pane--inner">
      <h1>OPSSSS ... !!!!</h1>
      <p>Something went wrong.</p>
    </div>
  );
};

export default Error;
