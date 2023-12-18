import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./component/ButtonComponent";
import ImageComponent from "./component/ImageComponent";
import Xmas from "./component/Xmas";

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <ButtonComponent
          style={{
            margin: "20px",
            backgroundColor: "red",
            padding: "20px",
            borderRadius: "20px",
            paddingBottom: "20px",
            color: "white",
          }}
          content="click"
        />
        <ButtonComponent
          style={{
            backgroundColor: "blue",
            margin: "20px",
            borderRadius: "20px",
            padding: "10px 12px",
            color: "white",
          }}
          content="push"
        />
        <ImageComponent src={logo} alt="Immagine" style={{ width: "80px" }} />

        <ButtonComponent
          style={{ backgroundColor: "yellow", margin: "20px", padding: "15px 20px", borderRadius: "20px" }}
          content="tac!"
        />
        <Xmas
          imgStyle={{ width: "900px" }}
          content=" Ti auguro che questo Natale tutti i tuoi sogni possano avverarsi."
        />
      </header>
    </div>
  );
}

export default App;
