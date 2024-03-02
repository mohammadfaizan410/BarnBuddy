import './App.css';
import { StoreProvider } from 'easy-peasy';
import store from './context/Store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BusinessFrontpage from "./Views/Business-Frontpage";
import ProductFrontpage from "./Views/Product-Frontpage";
import Home from "./Views/Home";
import Header from "./components/global/Header";
import ClaimBusiness from "./Views/Claim-Business";

function App() {
  return (
    <StoreProvider store={store}>
     <BrowserRouter>
      <Header />
      <div className="container-margins" style={{marginTop: "140px", zIndex: "1"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="businessfrontpage" element={<BusinessFrontpage />} />
          <Route path="blogs" element={<ProductFrontpage />} />
          <Route path="claim-business" element={<ClaimBusiness />} />
        
        </Routes>
      </div>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
