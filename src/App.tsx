import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ChatButton } from './components/layout/ChatButton';
import { HomePage } from './pages/HomePage';
import { CarListingPage } from './pages/CarListingPage';
import { CarDetailPage } from './pages/CarDetailPage';
import { SellCarPage } from './pages/SellCarPage';
import { CompareCarPage } from './pages/CompareCarPage';
import { LoanInsurancePage } from './pages/LoanInsurancePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/listings" element={<CarListingPage />} />
              <Route path="/car/:id" element={<CarDetailPage />} />
              <Route path="/sell" element={<SellCarPage />} />
              <Route path="/compare" element={<CompareCarPage />} />
              <Route path="/loan-insurance" element={<LoanInsurancePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <ChatButton />
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  );
}
