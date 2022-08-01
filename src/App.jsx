import { Suspense } from "react";
import Header from "./components/organisms/header/Header";
import RouteConfig from "./config/RouteConfig";

function App() {
  return (
    <>
      <Header></Header>
      <Suspense>
        <RouteConfig></RouteConfig>
      </Suspense>
    </>
  );
}

export default App;
