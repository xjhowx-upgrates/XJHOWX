/**
 * Alvo Conquistado - Transformando metas em conquistas
 * @author XJHOWX
 */

import { Suspense, lazy } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ScrollToTop } from './components/ScrollToTop';
import Navbar from './components/Navbar';

const Hero = lazy(() => import('./components/Hero'));
const Courses = lazy(() => import('./components/Courses'));
const Features = lazy(() => import('./components/Features'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Navbar />
        <main>
          <Suspense fallback={<div>Carregando...</div>}>
            <Hero />
            <Features />
            <Courses />
            <Testimonials />
            <FAQ />
          </Suspense>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;