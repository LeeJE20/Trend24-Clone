import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Page1 from "./pages/page1";
import UserPage from "./pages/UserPage";
import KeywordPage from "./pages/KeywordPage";

import NotFound from "./pages/Notfound";

function App() {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="/main" element={<Dashboard />}>
        <Route path="" element={<Page1 />} />
        <Route path="UserPage" element={<UserPage />} />
        <Route path="KeywordPage" element={<KeywordPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
