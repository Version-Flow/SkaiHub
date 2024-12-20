
import { useEffect } from "react";
import {Route, Routes, useLocation } from "react-router-dom";
import RootLayout from './layouts/RootLayout';

// General Pages
import ErrorPage from './pages/ErrorPage';
import Profile from './pages/shared/Profile';

// Sales person routes
import SalesDashboard from './pages/sales/Dashboard';
import SalesSettings from './pages/sales/Settings';



const App = () => {

  const location = useLocation();

  return (

    <Routes>

      <Route element={<RootLayout />}>

        {/* Fallback Route */}
        <Route path="*" element={<ErrorPage />} />

        {/* Sales person dashboard */}
        <Route path="/sales-agent">
          <Route path="dashboard" element={<SalesDashboard />} />
          <Route path="settings" element={<SalesSettings />} />
        </Route>

        {/* Account routes */}
        <Route path="/account">
          <Route path="profile" element={<Profile />} />
        </Route>


      </Route>
      
    </Routes>

  );
};

export default App;
