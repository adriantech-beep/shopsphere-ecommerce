import { Routes, Route, HashRouter } from "react-router-dom";
import { ProductsProvider } from "../src/contexts/ProductsContext/ProductsContext";
import { ScrollProvider } from "../src/contexts/ScrollContext";
import { lazy, Suspense } from "react";

import SpinnerFullpage from "../src/components/SpinnerFullPage/SpinnerFullpage";
import NotFound from "./pages/NotFound/NotFound";

import LoginPage from "../src/pages/LoginPage/LoginPage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Deals = lazy(() => import("./pages/Deals/Deals"));
const WhatsNew = lazy(() => import("./pages/WhatsNew/WhatsNew"));
const Delivery = lazy(() => import("./pages/Delivery/Delivery"));

function App() {
  return (
    <ProductsProvider>
      <ScrollProvider>
        <HashRouter>
          <Suspense fallback={<SpinnerFullpage />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="deals" element={<Deals />} />
              <Route path="whatsnew" element={<WhatsNew />} />
              <Route path="delivery" element={<Delivery />} />
              <Route path="*" element={<NotFound />} />
              <Route path="login" element={<LoginPage />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </ScrollProvider>
    </ProductsProvider>
  );
}

export default App;
