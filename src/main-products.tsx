import { createRoot } from 'react-dom/client'
import Products from './pages/Products.tsx'
import Navigation from './components/Navigation.tsx'
import Footer from './components/Footer.tsx'
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import './index.css'

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Navigation />
        <Products />
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);