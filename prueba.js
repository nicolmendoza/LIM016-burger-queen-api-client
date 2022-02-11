import React from "react";
const prueba = () => {
  const links = {
    present: "http",
    next: "http",
    prev: "http",
    extra: "http",
  };
  const next = links.next;
  const prev = links.prev;

  const getLink = (link) => {
    axios.get(link).then((x) => {
        // guardas los users en el setState
        //vuelves a invocar a getUsers() para renderizarlos
    });
    return next;
  };

  return (
    <div>
      <button onClick={() => getLink(prev)}>PREV</button>
      <button onClick={() => getLink(next)}>NEXT</button>
    </div>
  );
};

export default prueba;
