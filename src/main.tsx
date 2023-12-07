import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

// axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.baseURL = "https://api.mixcloud.com";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
);
