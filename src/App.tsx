import { Navbar } from "./components/Navbar/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./AppRoutes";
import "./index.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <AppRoutes />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  );
}
