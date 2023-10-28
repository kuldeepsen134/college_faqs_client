import "./App.css";
import "./assets/sass/main.scss";
import "./assets/css/main.css";
import "./assets/css/vendors.css";
import "./assets/style.css";
import "./assets/css/app.css";
import "./assets/css/CollegeDetails.css";
import RoutesComponent from "./routes/routes";
import "react-toastify/dist/ReactToastify.css";
import "./custom.css";

function App() {
  return (
    <div className="layout">
      <div className="overlay"></div>
      <RoutesComponent />
    </div>
  );
}

export default App;
