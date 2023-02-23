import logo from "./logo.svg";
import "./App.css";

const FirstReactComponent = () => {
  return <p>I am new here</p>;
};

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <p>You look beautiful</p>
      <FirstReactComponent />
    </>
  );
}

export default App;
