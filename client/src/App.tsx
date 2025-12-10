
// src/App.tsx
import { Switch, Route, Router } from "wouter"; // Import Router
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

// Define the GitHub Pages base path for wouter
// const GITHUB_PAGES_BASE_PATH = "/chris-route"; 
// const routerBase = import.meta.env.PROD ? GITHUB_PAGES_BASE_PATH : undefined;
// The internal router function you defined
function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* <Route path="/services" component={ServicesPage} /> */}
      <Route component={NotFound} />
    </Switch>
  );
}

// The main App component that renders providers and the router
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        
        {/* Wrap the router configuration with the base path */}
        {/* <Router base={routerBase}> */}
        <Router>
          <AppRouter />
        </Router>

      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
