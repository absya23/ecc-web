import { Switch, Route } from "react-router-dom";

import React from "react";

const Routes = () => {
  return (
    <Switch>
      <Route path="" exact component={<></>}></Route>
    </Switch>
  );
};

export default Routes;
