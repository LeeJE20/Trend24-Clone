import { Route, Routes } from "react-router-dom";

import Login from "./pages/Authorization";
import Dashboard from "./pages/Dashboard";
import BookRecPage from "./pages/TrendSearch";
import UserPage from "./pages/UserActivity";
import KeywordPage from "./pages/HowTrend";
import UserCustomizePage from "./components/pages/useractivity/customize/UserCustomizePage";

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
