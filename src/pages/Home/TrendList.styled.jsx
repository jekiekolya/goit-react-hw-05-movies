import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const List = styled.ul`
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
