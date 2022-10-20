import { useState, useEffect } from "react";
import "./App.css";
import logo from "./images/brewery.png";

const BrewCard = ({ item }) => {
  return (
    <div className="shop-card">
      <p>
        <strong>Name: </strong> {item.name}{" "}
      </p>
      <p>
        <strong>Type: </strong> {item.brewery_type}{" "}
      </p>
      <p>
        <strong>Address: </strong> {item.street},{item.city},{item.state} -{" "}
        {item.postal_code}{" "}
      </p>
      {item.website_url && (
        <p>
          <strong>Website: </strong> {item.website_url}
        </p>
      )}
      {item.phone && (
        <p>
          <strong>Phn: </strong> {item.phone}
        </p>
      )}
    </div>
  );
};

const BrewList = () => {
  const [brewList, setBrewList] = useState([]);

  useEffect(() => {
    fetch("https://api.openbrewerydb.org/breweries")
      .then((response) => response.json())
      .then((data) => setBrewList(data));
  }, []);

  return (
    <div className="brew-page">
      {brewList.map((item) => {
        return <BrewCard item={item} key={item.id} />;
      })}
    </div>
  );
};

function App() {
  return (
    <div>
      {/* Header */}
      <header className="heading">
        <img className="logo" src={logo} alt="brew-worry-logo" />
        <h1>Brew life</h1>
      </header>
      <nav className="filter-nav">
        <strong>List of Breweries around you</strong>
      </nav>

      {/* Content */}
      <BrewList />

      {/* Footer  */}
      <footer>
        <p>© Oct 2022</p>
        <p>Made with ❤️ using react</p>
      </footer>
    </div>
  );
}

export default App;
