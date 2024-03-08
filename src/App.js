import './App.css';
import { StoreProvider, createStore } from 'easy-peasy';
import store from './context/Store';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import BusinessFrontpage from "./Views/Business-Frontpage";
import ProductFrontpage from "./Views/Product-Frontpage";
import Home from "./Views/Home";
import Header from "./components/global/Header";
import ClaimBusiness from "./Views/Claim-Business";
import BusinessDashboardProducts from './components/Dashboard/Business-Dashboard/Business-Dashboard-products';
import BusinessDashboardAnalytics from './components/Dashboard/Business-Dashboard/Business-Dashboard-analytics';

function App() {
  const Store = createStore(store);
  return (
    <StoreProvider store={Store}>
     <BrowserRouter>
     <Header /> 
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="businessfrontpage" element={<BusinessFrontpage />} />
          <Route path="blogs" element={<ProductFrontpage />} />
          <Route path="claim-business" element={<ClaimBusiness />} />
          <Route path="business-dashboard-products" element={<BusinessDashboardProducts />} />
          <Route path="business-dashboard-analytics" element={<BusinessDashboardAnalytics />} />
        </Routes>
      </div>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
