import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banner/Banner";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage/TodoPage";
import FollowersPage from "./pages/FollowersPage/FollowersPage";

function App() {
  return (
    <div className="App">
      <Banner />
      <BrowserRouter>
        <Switch>
          <Route strict exact path="/" component={TodoPage} />
          <Route strict exact path="/followers" component={FollowersPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
