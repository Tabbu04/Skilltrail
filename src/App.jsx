import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import TraineeCockpit from "./pages/TraineeCockpit";
import EmployerHub from "./pages/EmployerHub";
import DistrictExplorer from "./pages/DistrictExplorer";
import FraudDetector from "./pages/FraudDetector";
import Roadmap from "./pages/Roadmap";
import IVRCallback from "./pages/IVRCallback";

import { LanguageProvider, useLanguage } from "./context/LanguageContext";

function AppContent() {
  const [dark, setDark] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <BrowserRouter>
      <Header dark={dark} setDark={setDark} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainee" element={<TraineeCockpit />} />
        <Route path="/employer" element={<EmployerHub />} />
        <Route path="/districts" element={<DistrictExplorer />} />
        <Route path="/fraud" element={<FraudDetector />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/ivr-callback" element={<IVRCallback />} />
      </Routes>

      <footer className="border-t border-navy-100 dark:border-navy-700 mt-12 py-6 text-center text-xs text-navy-400 dark:text-navy-300 px-4">
        {t("footer")}
      </footer>
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}