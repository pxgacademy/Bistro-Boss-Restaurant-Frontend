import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <section className="max-w-screen-2xl mx-auto">
      <RouterProvider router={router} />
    </section>
  </StrictMode>
);
