import "./App.css";
// import { UseState } from "./components/useState/UseState";
// import { UseReducer } from "./components/useReducer/UseReducer";
// import { ObjectUseState } from "./components/Immutable State/ObjectUseState";
// import { ArrayUseState } from "./components/Immutable State/ArrayUseState";
// import { Parent } from "./components/Parent Child/Parent";
// import { PropTypesTest } from "./components/PropTypes/PropTypesTest";
// import { Child } from "./components/Parent Child/Child";
import { ParentOne } from "./components/Optimization/ParentOne";
import { ChildOne } from "./components/Optimization/ChildOne";
import { GrandParentOne } from "./components/Optimization/GrandParentOne";
// import { ParentTwo } from "./components/Optimization/ParentTwo";
// import { ParentThree } from "./components/IncorrectOptimization/ParentThree";
// import { ParentFour } from "./components/IncorrectOptimization/ParentFour";
// import ParentContext from "./components/Context/ParentContext";
// import ParentTest from "./components/testContext/ParentTest";
// import CountingContextProvider from "./components/testContext/CountingContextProvider";
// import { TestChildA } from "./components/testContext/TestChildA";

function App() {
  console.log("App Rendered");
  return (
    <div className="App">
      {/* <PropTypesTest
        name={"alvin"}
        age={34}
        renderable={["alvin", "mark"]}
        component={<Child />}
        nickname="pogi"
        stringOrNumber={"34"}
        state="loading"
        specificArray={[1, 2, 3]}
        mixedArray={[1, 1, "alvin"]}
      /> */}
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState />  */}
      {/* <ArrayUseState /> */}
      {/* <Parent /> */}

      <ParentOne>
        <ChildOne />
      </ParentOne>

      {/* <GrandParentOne /> */}

      {/* <ParentTwo /> */}

      {/* <ParentThree /> */}

      {/* <ParentFour /> */}

      {/* <ParentContext /> */}

      {/* <CountingContextProvider>
        <ParentTest>
          <TestChildA />
        </ParentTest>
      </CountingContextProvider> */}
    </div>
  );
}

export default App;
