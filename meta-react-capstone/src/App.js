import './App.css';
import React from 'react';
import Navigation from './Navigation';
import MainContent from './MainContent';
import NavigationMenu from './NavigationMenu';
import PageFooter from './PageFooter';

function App() {
  return (
    <>
      <Navigation />
      <MainContent />
      <NavigationMenu /> 
      <PageFooter />
    </>
  );
}

export default App;