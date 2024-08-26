import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 30px;
`;

const Title = styled.h2`
  border-bottom: 2px solid #ddd;
  padding-bottom: 5px;
  margin-bottom: 15px;
`;

const Paragraph = styled.p`
  margin-bottom: 10px;
`;

const Hanabank = () => {
  return (
    <Section>
      <Title id="section-2">하나은행</Title>
      <Paragraph>
        여기는 하나은행에 대한 내용입니다.
      </Paragraph>
    </Section>
  );
};

export default Hanabank;
