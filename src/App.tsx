import { useState, useEffect } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import QuotePage from './pages/QuotePage';
import Footer from './components/Footer';

type Page = 'home' | 'portfolio' | 'quote';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onGetQuote={() => setCurrentPage('quote')}
            onViewPortfolio={() => setCurrentPage('portfolio')}
          />
        );
      case 'portfolio':
        return (
          <PortfolioPage
            onBack={() => setCurrentPage('home')}
            onGetQuote={() => setCurrentPage('quote')}
          />
        );
      case 'quote':
        return (
          <QuotePage
            onBack={() => setCurrentPage('home')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10">
        {renderPage()}
        <Footer />
      </div>
    </div>
  );
}

export default App;
