import { Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./components/organisms/footer/Footer";
import Header from "./components/organisms/header/Header";
import RouteConfig from "./config/RouteConfig";
import "./index.scss";
import ViewportProvider from "./context/viewportContext";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ViewportProvider>
        <Header></Header>
        <Suspense fallback={<></>}>
          <RouteConfig></RouteConfig>
        </Suspense>
        {/* <Footer></Footer> */}
      </ViewportProvider>
    </>
  );
}

export default App;
