import "./App.css";
import logo from "./images/brewery.png";

function App() {
  return (
    <div>
      <div className="heading">
        <img className="logo" src={logo} alt="brew-worry-logo" />
        <h1>Brew worry</h1>
      </div>
      <footer>
        <p>© 2022</p>
      </footer>
    </div>
  );
}

export default App;
