import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";
import { renderRouteHome, renderRouteAdmin } from "./routes";
import AuthPage from "./containers/AdminTemplate/AuthPage";
import { Suspense } from "react";
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          {renderRouteHome()}
          {renderRouteAdmin()}
          <Route path="/auth" component={AuthPage} />
          {/* PageNotFound phai nam cuoi */}
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
