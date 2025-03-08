import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import ThreadPage from "./pages/ThreadPage";
import ViewMessages from "./pages/ViewMessages";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<CreatePage />} />
      <Route path="/thread/:slug" element={<ThreadPage />} />
      <Route path="/messages/:slug" element={<ViewMessages />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
