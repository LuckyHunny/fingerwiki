import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const LoginPopupContainer = styled.div`
  width: 300px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoginHeader = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px; /* 상단 타이틀과 입력 필드 사이의 간격 */
`;

const LoginBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px; /* 입력 필드들 사이의 간격 */
`;

const Label = styled.label`
  margin-right: 10px; /* '아이디 :'와 입력 필드 사이의 간격 */
`;

const Input = styled.input`
  width: 150px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const LoginButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px; /* 로그인과 닫기 버튼 사이의 간격 */
`;

const Button = styled.button`
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &.login-button {
    background-color: #007bff;
    color: white;
  }

  &.close-button {
    background-color: #f5f5f5;
    color: black;
  }
`;

const LoginPopup = ({ onClose, userLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post('/api/login', { username, password })
      .then(response => {
        alert(response.data.reData);
        if(response.data.reData){
          alert(response.data.name);
          userLogin(true);
        }else{
          userLogin(false);
        }
        
        onClose();
      })
      .catch(error => {
        alert('Login failed');
      });
  };

  return (
    <LoginPopupContainer>
      <LoginHeader>로그인</LoginHeader>
      <LoginBody>
        <LoginField>
          <Label htmlFor="username">아이디 :</Label>
          <Input 
            type="text"
            id="username"
            name="username"
            placeholder='아이디 입력'
            value={username} 
            onChange={e => setUsername(e.target.value)} />
        </LoginField>
        <LoginField>
          <Label htmlFor="password">비밀번호 :</Label>
          <Input 
            type="password"
            id="password"
            name="password"
            placeholder='비밀번호 입력'
            value={password} 
            onChange={e => setPassword(e.target.value)} />
        </LoginField>
        <LoginButtons>
          <Button className="login-button" onClick={handleLogin}>로그인</Button>
          <Button className="close-button" onClick={onClose}>닫기</Button>
        </LoginButtons>
      </LoginBody>
    </LoginPopupContainer>
  );
};

export default LoginPopup;
