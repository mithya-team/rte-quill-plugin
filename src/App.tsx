import * as React from "react";
import Example from "./components/RteQuillExample";

const App: React.FC = () => {
  return (
    <>
      <div>
        <h1>RTE Quill Playground</h1>

        <div>
          <h2>With React Hook Form</h2>
          <Example />
        </div>
      </div>
    </>
  );
};

export default App;
