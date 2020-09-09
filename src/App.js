import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./Layout/Layout";
import Main from "./containers/Main/Main";
import PreviewCharacter from "./components/PreviewCharacter/PreviewCharacter";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/character/:id" component={PreviewCharacter} />
        <Route exact path="/" component={Main} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

export default App;
