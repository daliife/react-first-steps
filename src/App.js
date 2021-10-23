import { Route, Switch } from "react-router-dom";

import MainNavigation from "./components/layout/MainNavigation";
import ColorsPage from "./pages/ColorsPage";
import MeetingsPage from "./pages/MeetingsPage";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <TodoPage />
        </Route>
        <Route path="/todo">
          <TodoPage />
        </Route>
        <Route path="/colors">
          <ColorsPage />
        </Route>
        <Route path="/meetings">
          <MeetingsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
