// src/App.js
import React, { useState } from 'react';
import Layout from './components/Layout';
import ScrollToTopButton from './components/ScrollToTopButton';
import DocumentPage from './pages/DocumentPage';

const App = () => {
  const [currentSection, setCurrentSection] = useState('section-0');

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <>
      <Layout onSectionChange={handleSectionChange}>
        <DocumentPage section={currentSection} />
      </Layout>
      <ScrollToTopButton />
    </>
  );
};

export default App;
