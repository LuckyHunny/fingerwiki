import React, { useState, useEffect } from 'react';
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

const LoginHeader = styled.div`
  display: flex; /* 추가: flexbox 사용 */
  justify-content: flex-end; /* 추가: 오른쪽 정렬 */
  align-items: center; /* 추가: 수직 정렬 */
  margin-bottom: 8px;
`;

const LoginButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px; /* 버튼과 텍스트 사이에 간격 추가 */

  &:hover {
    background-color: #0056b3;
  }
`;

const WelcomeText = styled.div`
  font-size: 18px;
  color: #333;
`;

const SessionTimer = styled.div`
  font-size: 14px;
  color: #666;
  margin-right: 10px;
  margin-left: 10px;
`;

const Main = styled.main`
  min-height: 60vh;
`;

const Layout = ({ children, onSectionChange }) => {
  const [username, setUsername] = useState('');
  const [loginYn, setLoginYn] = useState(false);  // 추가 : 유저 로그인 여부 체크
  const [isLoginOpen, setLoginOpen] = useState(false); // 추가: 로그인 팝업 상태 관리
  const [sessionTime, setSessionTime] = useState(300); // 세션 타이머 초기값 (5분)

  useEffect(() => {
    let intervalId;

    if (loginYn) {
      // 로그인 상태에서만 세션 체크 및 타이머 동작
      const checkSession = () => {
        fetch('/api/check-session', {
          method: 'GET',
          credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
          if (!data.active) {
            alert('세션이 만료되었습니다. 다시 로그인해 주세요.');
            setLoginYn(false);
            setUsername('');
            setSessionTime(300); // 타이머 초기화
            clearInterval(intervalId);
          }
        })
        .catch(error => console.error('Error:', error));
      };

      intervalId = setInterval(() => {
        setSessionTime(prevTime => {
          if (prevTime <= 1) {
            checkSession(); // 타이머가 0이 되면 세션 체크
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000); // 1초마다 타이머 감소
    } else {
      clearInterval(intervalId); // 로그아웃 시 타이머 정지
    }

    return () => clearInterval(intervalId);
  }, [loginYn]);

  const openLogin = (event) => {
    // 버튼 텍스트 적용
    if(event.target.innerText === '로그인'){
      setLoginOpen(true); // 추가: 로그인 팝업 열기      
    }else{
      // setLoginYn(false);
      logout();

    }
  }
  const closeLogin = () => setLoginOpen(false); // 추가: 로그인 팝업 닫기

  // 로그인 체크 함수
  const userLogin = (loginYn, data) => {
    setLoginYn(loginYn);
    setUsername(data);
    setSessionTime(300); // 로그인 시 타이머 초기화
  }

  const logout = () => {
    fetch('/api/logout', {
      method: 'POST',
      credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
      if (data.reData) {
        setLoginYn(false);
        setUsername('');
        alert(data.message);
      }
    })
    .catch(error => console.error('Error:', error));
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return(
    <Container>
      <GlobalStyle />
        <LoginHeader>
        {loginYn ? (
          <>
            <WelcomeText>{username}님 환영합니다!</WelcomeText>
            <SessionTimer>{formatTime(sessionTime)}</SessionTimer>
          </>
        ) : (
          <WelcomeText>로그인 해주세요!</WelcomeText>
        )}
          <LoginButton onClick={openLogin}>{loginYn ? '로그아웃':'로그인'}</LoginButton> {/* 추가: 로그인 버튼 */}
        </LoginHeader>
      <Header>
      </Header>
      <SearchBar />
      <TableOfContents onSectionChange={onSectionChange} />
      <Main>{children}</Main>
      {/* 추가: 로그인 팝업을 조건부 렌더링 */}
      {isLoginOpen && <LoginPopup onClose={closeLogin} userLogin={userLogin} />} {/* 추가: 로그인 팝업 */}
    </Container>
  )
};

export default Layout;
