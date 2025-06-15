import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white">
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
