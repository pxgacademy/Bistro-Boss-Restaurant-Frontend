import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import APIcontext from "./context/APIcontext";
import AuthContext from "./context/AuthContext";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContext>
        <APIcontext>
          <section className="max-w-screen-2xl mx-auto">
            <RouterProvider router={router} />
          </section>
        </APIcontext>
      </AuthContext>
    </QueryClientProvider>
  </StrictMode>
);
