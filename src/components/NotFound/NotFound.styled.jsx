import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  color: ${p => p.theme.colors.accent};
  text-decoration: underline;
`;
