import { Route, Switch } from "react-router-dom";

import MainNavigation from "./components/layout/MainNavigation";
import ColorsPage from "./pages/ColorsPage";
import MeetingsPage from "./pages/MeetingsPage";
import TodoPage from "./pages/TodoPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <body>
      <MainNavigation />
      <div className="mt-11">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/shop">
            <TodoPage />
          </Route>
          <Route path="/mac">
            <ColorsPage />
          </Route>
          <Route path="/ipad">
            <MeetingsPage />
          </Route>
        </Switch>
      </div>
    </body>
  );
}

export default App;
