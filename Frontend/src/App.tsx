import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Route>
    </Routes>
  );
}

export default App;
