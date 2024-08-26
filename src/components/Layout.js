import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import TableOfContents from './TableOfContents';
import SearchBar from './SearchBar';
import LoginPopup from './LoginPopup'; // 로그인 팝업 컴포넌트 추가
import headerBg from '../images/finger_back.jpg'; // 이미지 파일 경로


const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.header`
  height: 160px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 10px;
  background-image: url(${headerBg}); /* 배경 이미지 적용 */
  background-size: cover; /* 배경 이미지 크기 */
  background-position: center; /* 배경 이미지 위치 */
  display: flex; /* 추가: flexbox 사용 */
  justify-content: space-between; /* 추가: 좌우 정렬 */
  align-items: center; /* 추가: 수직 정렬 */
`;

const LoginButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Main = styled.main`
  min-height: 60vh;
`;

const Layout = ({ children, onSectionChange }) => {
  
  const [isLoginOpen, setLoginOpen] = useState(false); // 추가: 로그인 팝업 상태 관리

  const openLogin = () => setLoginOpen(true); // 추가: 로그인 팝업 열기
  const closeLogin = () => setLoginOpen(false); // 추가: 로그인 팝업 닫기

  return(
    <Container>
      <GlobalStyle />
        <LoginButton onClick={openLogin}>로그인</LoginButton> {/* 추가: 로그인 버튼 */}
      <Header>
      </Header>
      <SearchBar />
      <TableOfContents onSectionChange={onSectionChange} />
      <Main>{children}</Main>
      {/* 추가: 로그인 팝업을 조건부 렌더링 */}
      {isLoginOpen && <LoginPopup onClose={closeLogin} />} {/* 추가: 로그인 팝업 */}
    </Container>
  )
};

export default Layout;
