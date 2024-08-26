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

const Shinhanbank = () => {
  return (
    <Section>
      <Title id="section-1">신한은행</Title>
      <Paragraph>
        여기에는 신한은행에 관련된 문서 내용이 들어갑니다.
      </Paragraph>
      <Paragraph>
        신한은행에 대한 정보를 내려 주는대로 셋팅합니다.
      </Paragraph>
    </Section>
  );
};

export default Shinhanbank;
