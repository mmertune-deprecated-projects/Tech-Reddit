import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthPage from "./pages/authPage/AuthPage";
import HomePage from "./pages/homePage/HomePage";
import PostPage from "./pages/postPage/PostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/post" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
