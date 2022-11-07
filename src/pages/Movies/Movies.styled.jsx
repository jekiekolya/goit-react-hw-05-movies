import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
`;

export const Input = styled.input`
  width: ${p => p.theme.space[8]}px;
  height: ${p => p.theme.space[5]}px;

  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;

  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 20px;

  &&:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
  }
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;

  height: ${p => p.theme.space[5]}px;

  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;

  background-color: ${({ theme }) => theme.colors.mainBg};

  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 20px;

  &&:hover,
  &&:focus {
    color: ${({ theme }) => theme.colors.mainBg};
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

// List----------------------------
export const List = styled.ul`
  margin-top: ${p => p.theme.space[2]}px;
  margin-left: ${p => p.theme.space[4]}px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;

  padding: ${p => p.theme.space[1]}px;
`;

export const LinkStyled = styled(NavLink)`
  padding: ${p => p.theme.space[2]}px;

  &&:hover,
  &&:focus {
    outline: 1px solid ${({ theme }) => theme.colors.accent};
    border-radius: 5px;
  }
`;
