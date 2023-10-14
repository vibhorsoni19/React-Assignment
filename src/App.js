import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserDetailsPage from "./pages/UserDetailsPage";

function App() {
  return (
    <div className="pt-5">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<UserDetailsPage />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
