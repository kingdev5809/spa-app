import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NotFound from "./Components/NotFound";
import Recipe from "./Components/Recipe";
import MainPage from "./layout/MainPage";
import AllMeals from "./Components/AllMeals";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path={"/category/:name"} component={AllMeals} />
        <Route path={"/meal/:id"} component={Recipe} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

