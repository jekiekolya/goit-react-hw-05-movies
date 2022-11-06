import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

// Section About----------------------------------------------------
export const SectionAbout = styled.section`
  display: flex;
  gap: ${p => p.theme.space[4]}px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[5]}px;

  padding: ${p => p.theme.space[5]}px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 20px;
`;

export const TitleMovie = styled.h2`
  margin-top: ${p => p.theme.space[2]}px;
`;

export const Img = styled.img`
  min-width: 350px;
  height: 400px;

  object-fit: cover;
  overflow: hidden;

  border-radius: 20px;
`;

export const ListGenres = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[4]}px;
`;

// Section Additional information
export const SectionInfo = styled.section`
  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 20px;
`;

export const LinkStyled = styled(NavLink)`
  padding: ${p => p.theme.space[2]}px;
  &&:hover,
  &&:focus {
    outline: 1px solid ${({ theme }) => theme.colors.accent};
    border-radius: 5px;
  }
`;

export const ListInfo = styled.ul`
  margin-left: ${p => p.theme.space[4]}px;
`;

export const ItemInfo = styled.li`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;

  padding: ${p => p.theme.space[1]}px;
`;
