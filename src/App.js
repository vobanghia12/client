import Layout from "./components/Common/Layout";
import HomePage from "./pages/HomePage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Manufacturers } from "./pages/Manufacturers";
import { SignUpManuFacture } from "./pages/SignUpManuFacture";
import { SignIn } from "./pages/SignIn";
import { MarketPlace } from "./pages/MarketPlace";
import { SignUpOptions } from "./pages/SignUpOptions";
import { SignUpIndividuals } from "./pages/SignUpIndividuals";

export default function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Manufacturers" element={<Manufacturers />} />
            <Route path="/OptionSignUp" element={<SignUpOptions />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/MarketPlace" element={<MarketPlace />} />
            <Route path="/SignUpManufacture" element={<SignUpManuFacture />} />
            <Route path="/SignUpIndividuals" element={<SignUpIndividuals />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}
