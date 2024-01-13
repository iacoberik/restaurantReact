import { useEffect, useState } from "react";

const useInternetStatus = () => {
  const [internetStatus, setInternetStatus] = useState(true);
  //   Calling useEffect because we are mounting an eventListener on the window, and we need only one time to add an event listener on window, that will be mounted
  useEffect(() => {
    window.addEventListener("online", () => setInternetStatus(true));
    window.addEventListener("offline", () => setInternetStatus(false));
  }, []);

  return internetStatus;
};

export default useInternetStatus;
