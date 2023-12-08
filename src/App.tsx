import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/Home";
import Profile from "./views/Profile";
import { ToastProvider } from "./store/ToastContext";

const App = () => {
    return (
        <ToastProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/live/:username" element={<Profile />} />
                {/* Catches all routes and redirects back to home */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </ToastProvider>
    );
};

export default App;
