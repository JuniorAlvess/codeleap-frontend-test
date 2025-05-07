import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import ProtectedRoute from './ProtectedRoute/index.js';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
