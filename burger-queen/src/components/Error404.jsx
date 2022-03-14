import { Button } from "../style-components/components";
import image from "../img/404.png";
import '../style-components/error404.css'

const Error404 = () => {
  const regresar = () => {
    if (localStorage.getItem("token")) {
      const role = localStorage.getItem("role");
      if (role == "admin") return (window.location.href = "/settings");
      else if (role == "mesera") return (window.location.href = "/newOrder");
      else if (role == "cocinera") return (window.location.href = "/orders");
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="login-full-container">
      <div className="div404">  
        <img src={image} />
        <h1>Pagina no encontrada</h1>
        <Button onClick={() => regresar()}>Regresar</Button>
      </div>
    </div>
  );
};

export default Error404;
