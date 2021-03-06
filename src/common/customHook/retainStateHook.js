import React, { useRef, useEffect } from "react";

function retainStateHook(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default retainStateHook;
