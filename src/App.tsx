import React from 'react';
import './App.css';
import { useState } from 'react';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import HomePage from './pages/HomePage';
import CreatePizzaPage from './pages/CreatePizzaPage';

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
