import { createRoot } from 'react-dom/client'
import Services from './pages/Services.tsx'
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
        <Services />
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);