


import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import SignUp from "./pages/signup";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">


      <div className="flex-1">
        <Routes>
          <Route path="/" element={<SignUp />} />

        </Routes>
      </div>


    </div>
  );
};

export default App;
