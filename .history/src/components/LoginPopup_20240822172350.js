import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
`;

const PopupContainer = styled.div`
background-color: white;
padding: 20px;
border-radius: 8px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
width: 300px;
text-align: center;
`;

const CloseButton = styled.button`
background-color: #007bff;
color: white;
border: none;
border-radius: 4px;
padding: 8px 16px;
cursor: pointer;
margin-top: 20px;

&:hover {
  background-color: #0056b3;
}
`;

const LoginPopup = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post('/api/login', { 'username': username, 'password':password })
      .then(response => {
        alert(response.data);
        onClose();
      })
      .catch(error => {
        alert('Login failed');
      });
  };

  return (
    <Overlay>
      <PopupContainer>
        <h2>로그인</h2>
        <input 
          type="text" 
          placeholder="아이디" 
          value={username} 
          onChange={e => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="비밀번호" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
        />
        <CloseButton onClick={handleLogin}>로그인</CloseButton>
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </PopupContainer>
    </Overlay>
  );
};

export default LoginPopup;
