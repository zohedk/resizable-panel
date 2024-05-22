import "./App.css";
import { ResizeableLayout, Child } from "./components";
import { useGetData } from "./hooks/child-hooks";

function App() {
  const { childData } = useGetData();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <ResizeableLayout
        {...{
          child1: <Child childName="childOne" data={childData} />,
          child2: <Child childName="childTwo" data={childData} />,
          child3: <Child childName="childThree" data={childData} />,
        }}
      />
    </div>
  );
}

export default App;
