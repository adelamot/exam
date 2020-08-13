import styled from 'styled-components';

export const StyledMenu = styled.nav`

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px;
  align-items: center;
  background: ${({ theme }) => theme.primaryLight};
  background: rgba(202, 240, 248, 0.8);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: right;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  width: 20%;
  min-width: 320px;
  z-index: 6;
  border-radius: 10px;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    background: rgba(202, 240, 248, 1);
  }

  a {
    font-size: 16px;
    text-transform: uppercase;
    padding: 5% 0;
    font-weight: bold;
    border-bottom: 1px solid ${({ theme }) => theme.primaryDark};
    width: 100%;
    height: 4em;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    text-align: center;
    margin: 3px 0;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 16px;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
  a:nth-child(1) {
    border-top: 1px solid ${({ theme }) => theme.primaryDark};
  }
`;