// src/components/SearchBar.js
import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SearchInput = styled.input`
  width: 200px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  outline: none;
`;

const SearchButton = styled.button`
  padding: 8px 16px;
  background: linear-gradient(125deg, #3fa739, #2291d1);
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;

  &:hover {
    background-color: #043b8c;
  }
`;

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="검색어를 입력 해 주세요." />
      <SearchButton>검색</SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
