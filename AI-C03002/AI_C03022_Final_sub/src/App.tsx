import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import ChatInterface from './components/ChatInterface';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <ChatInterface />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;