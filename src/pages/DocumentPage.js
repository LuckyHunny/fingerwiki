import React from 'react';
import Shinhanbank from './Shinhanbank';
import Hanabank from './Hanabank';
import WikiHome from './WikiHome';

const DocumentPage = ({ section }) => {
  const renderContent = () => {
    switch (section) {
      case 'section-1':
        return <Shinhanbank />;
      case 'section-2':
        return <Hanabank />;
      default:
        return <WikiHome />;
    }
  };

  return <>{renderContent()}</>;
};

export default DocumentPage;
