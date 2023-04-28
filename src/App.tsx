import classes from "./App.module.css";
import One from "./components/One";
import Steps from "./components/Steps";
import Two from "./components/Two";
import Three from "./components/Three";
import Four from "./components/Four";
import Five from "./components/Five";

const App = () => {
  return (
    <div className={classes.container}>
      <Steps />
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
    </div>
  );
};

export default App;
