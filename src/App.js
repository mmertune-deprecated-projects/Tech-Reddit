import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthPage from "./pages/authPage/AuthPage";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
