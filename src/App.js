import { Route, Switch } from 'react-router-dom';

import MainNavigation from './components/layout/MainNavigation';
import NotFound from './components/layout/NotFound';

import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import MacPage from './pages/MacPage';
import IpadPage from './pages/IpadPage';
import IphonePage from './pages/IphonePage';
import WatchPage from './pages/WatchPage';
import AirpodsPage from './pages/AirpodsPage';
import HomeTvPage from './pages/HomeTvPage';
import OnlyApple from './pages/OnlyApple';
import SupportPage from './pages/SupportPage';

function App() {
  return (
    <body>
      <MainNavigation />
      <div className="mt-11">
        <Switch>
          <Route path="/shop">
            <StorePage />
          </Route>
          <Route path="/mac">
            <MacPage />
          </Route>
          <Route path="/ipad">
            <IpadPage />
          </Route>
          <Route path="/iphone">
            <IphonePage />
          </Route>
          <Route path="/watch">
            <WatchPage />
          </Route>
          <Route path="/airpods">
            <AirpodsPage />
          </Route>
          <Route path="/hometv">
            <HomeTvPage />
          </Route>
          <Route path="/onlyapple">
            <OnlyApple />
          </Route>
          <Route path="/support">
            <SupportPage />
          </Route>
          <Route path="/list">
            <MacPage />
          </Route>
          <Route path="/cart">
            <MacPage />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </body>
  );
}

export default App;
