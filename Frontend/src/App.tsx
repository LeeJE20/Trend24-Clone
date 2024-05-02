import { Route, Routes } from "react-router-dom";

import Login from "./pages/Authorization";
import Dashboard from "./pages/Dashboard";
import HowTrend from "./pages/HowTrend";
import TrendSearch from "./pages/TrendSearch";
import UserActivity from "./pages/UserActivity";
import BookSearch from "./pages/BookSearch";
import BookDrawer from "./pages/BookDrawer";

import UserCustomizePage from "./components/pages/useractivity/customize/UserCustomizePage";
import RnDCustom from "./components/pages/useractivity/customize/RnDCustom";

import NotFound from "./pages/Notfound";

function App() {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="/main" element={<Dashboard />}>
        <Route path="" element={<HowTrend />} />
        <Route path="trendSearch" element={<TrendSearch />} />
        <Route path="userActivity" element={<UserActivity />} />
        <Route path="bookSearch" element={<BookSearch />} />
        <Route path="bookDrawer" element={<BookDrawer />} />

        <Route path="userCustomizePage" element={<UserCustomizePage />} />
        <Route path="custom" element={<RnDCustom />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
