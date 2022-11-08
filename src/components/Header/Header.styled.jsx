import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  left: 0;

  background-color: ${({ theme }) => theme.colors.mainBg};

  box-shadow: 0px 7px 12px -3px rgba(56, 56, 56, 0.5);
  z-index: 1100;
`;

export const List = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;

  font-size: ${p => p.theme.fontsSizes.m}px;
`;

export const LinkStyled = styled(NavLink)`
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[3]}px;
  line-height: 1.2;

  &&:hover,
  &&:focus {
    color: ${({ theme }) => theme.colors.accent};
  }

  &&.active {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
