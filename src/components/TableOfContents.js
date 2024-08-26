import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TocContainer = styled.nav`
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin: 20px 0;
  top: 20px;
  z-index: 1000;
`;

const TocTitle = styled.h3`
  margin-top: 0;
`;

const TocList = styled.ul`
  list-style: none;
  padding-left: 0;
  font-size: 14px;
`;

const TocItem = styled.li`
  margin-bottom: 5px;

  button {
    background: none;
    border: none;
    color: #0645ad;
    text-decoration: none;
    cursor: pointer;
    padding: 0;
    font-size: inherit;
  }

  button:hover {
    text-decoration: underline;
  }
`;

const TableOfContents = ({ onSectionChange }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const elements = [
      { id: 'section-0', title: '홈' },
      { id: 'section-1', title: '신한은행' },
      { id: 'section-2', title: '하나은행' },
    ];
    setHeadings(elements);
  }, []);

  return (
    <TocContainer>
      <TocTitle>목차</TocTitle>
      <TocList>
        {headings.map((heading, index) => (
          <TocItem key={index}>
            <button onClick={() => onSectionChange(heading.id)}>
              {heading.title}
            </button>
          </TocItem>
        ))}
      </TocList>
    </TocContainer>
  );
};

export default TableOfContents;

