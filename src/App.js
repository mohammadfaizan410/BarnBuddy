import './App.css';
import { StoreProvider, createStore, useStoreActions, useStoreState } from 'easy-peasy';
import store from './context/Store';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import BusinessFrontpage from "./Views/Business-Frontpage";
import ProductFrontpage from "./Views/Product-Frontpage";
import ClaimSelectedBusiness from './Views/Claim-Selected-Business';
import Home from "./Views/Home";
import Header from "./components/global/Header";
import ClaimBusiness from "./Views/Claim-Business";
import RegisterBusiness from './Views/Register-Business';
import React from 'react';

function App() {
  const Store = createStore(store);
  return (
    <StoreProvider store={Store}>
     <BrowserRouter>
     <div style={{display:"flex",maxWidth:"100vw", flexDirection:'column'}}>
     <Header /> 
      <div className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="businessfrontpage/:id" element={<BusinessFrontpage />} />
          <Route path="blogs" element={<ProductFrontpage />} />
          <Route path="claim-business" element={<ClaimBusiness />} />
          <Route path="claim-selected-business/:id" element={<ClaimSelectedBusiness />} />
          <Route path="register-business" element={<RegisterBusiness />} />
        </Routes>
      </div>
     </div>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
