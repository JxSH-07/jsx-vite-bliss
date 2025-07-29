import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import EditProfile from "./components/EditProfile.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Edit" element={<EditProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
);

export default App;
