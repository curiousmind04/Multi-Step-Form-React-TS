import Provider from "./store/Provider";

import One from "./components/One";
import Steps from "./components/Steps";
import Two from "./components/Two";

const App = () => {
  return (
    <Provider>
      <Steps />
      <One />
      <Two />
    </Provider>
  );
};

export default App;
