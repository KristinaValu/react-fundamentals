import logo from "./logo.svg";
import "./App.css";
import ChildrenWithTitle from "./ChildrenWithTitle";
import { FirstReactComponent } from "./FirstReactComponent";
import ConditionalRenderingComponent from "./ConditionalRendering";
import { FullList, FilteredList } from "./RenderingLists";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <p>You look beautiful</p>
      <FirstReactComponent />
      <ChildrenWithTitle title="I am title" children="I am children" />
      <ConditionalRenderingComponent isBlue={true} />
      <ConditionalRenderingComponent isBlue={null} />
      <FullList />
      <FilteredList />
    </>
  );
}

export default App;
