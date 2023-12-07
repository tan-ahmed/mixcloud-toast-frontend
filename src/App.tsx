import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/Home";
import Profile from "./views/Profile";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/live" element={<Profile />} />
            {/* Catches all routes and redirects back to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default App;
