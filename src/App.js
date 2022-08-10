import AuthPage from "./pages/authPage/AuthPage";
import HomePage from "./pages/homepage/HomePage";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
