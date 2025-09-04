import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import LandingPage from '@/components/LandingPage';
import DashboardLayout from '@/components/dashboards/DashboardLayout';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="tourist-safety-theme">
      <Router>
        <div className="min-h-screen bg-background font-sans antialiased">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard/:role" element={<DashboardLayout />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;