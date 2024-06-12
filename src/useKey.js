import { useEffect } from "react";
export function useKey(key, action) {
  useEffect(() => {
    function callback(e) {
      if (e.code.toLowerCase() === key.toLowerCase()) action();
    }

    document.addEventListener(key, callback);

    return function () {
      document.removeEventListener(key, callback);
    };
  }, [key, action]);
}
