import { Outlet } from 'react-router-dom';
import { LinkStyled, HeaderStyled, List } from './Header.styled';

export default function Header() {
  return (
    <>
      <HeaderStyled>
        <nav>
          <List>
            <li>
              <LinkStyled to="/">Home</LinkStyled>
            </li>
            <li>
              <LinkStyled to="movies">Movies</LinkStyled>
            </li>
          </List>
        </nav>
      </HeaderStyled>
      <Outlet />
    </>
  );
}
