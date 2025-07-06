import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);

// Debug logging for deployment
console.log("React app starting...");
console.log("Root element:", document.getElementById("root"));
