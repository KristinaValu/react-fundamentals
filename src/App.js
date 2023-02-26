import logo from "./logo.svg";
import "./App.css";

const ChildrenWithTitle = ({ children, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

const FirstReactComponent = () => {
  return <p>I am new here</p>;
};

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <p>You look beautiful</p>
      <FirstReactComponent />
      <ChildrenWithTitle 
      title={"I am title"} 
      children={"I am children"} />
    </>
  );
}

export default App;
