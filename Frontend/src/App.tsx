import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BookRecPage from "./pages/BookRecPage";
import UserPage from "./pages/UserPage";
import KeywordPage from "./pages/KeywordPage";
import UserCustomizePage from "./pages/UserCustomizePage";

import NotFound from "./pages/Notfound";

function App() {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="/main" element={<Dashboard />}>
        <Route path="" element={<BookRecPage />} />
        <Route path="UserPage" element={<UserPage />} />
        <Route path="KeywordPage" element={<KeywordPage />} />
        <Route path="UserCustomizePage" element={<UserCustomizePage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
