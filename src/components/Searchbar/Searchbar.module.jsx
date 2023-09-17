import styled from '@emotion/styled';

export const SearchbarHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;

  width: 100vw;
  background: #6ea3ff;
  `;
export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  border-radius: 3px;
  overflow: hidden;
`;
export const Button = styled.button`
  width: 120px;
  height: 48px;

  line-height: 100%;
  text-align: center;
  color: white;

 background: #005eff;
  
   :hover,
  :focus {
    background: #003a9e;
  }
`;
export const Input = styled.input`
  margin: 12px;

  width: 226px;
  height: 48px;

  background: #2a3c44;
`;
