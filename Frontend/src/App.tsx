import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BookRecPage from "./pages/BookRecPage";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";

import Practice from "./pages/Practice";

import NotFound from "./pages/Notfound";

function App() {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="/main" element={<Dashboard />}>
        <Route path="" element={<BookRecPage />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="page3" element={<Page3 />} />
      </Route>
      <Route path="practice" element={<Practice />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
