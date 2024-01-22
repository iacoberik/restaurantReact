import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="pane--inner">
      <h1>OPSSSS ... !!!!</h1>
      <p>Something went wrong.</p>
      <iframe
        src="https://giphy.com/embed/3oKIPyK7DCJUmnAtuU"
        width="480"
        height="480"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/quizizz-3oKIPyK7DCJUmnAtuU">
          via GIPHY
        </a>
      </p>
    </div>
  );
};

export default Error;
