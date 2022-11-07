import { Box } from 'components/Box';
import { BiErrorAlt } from 'react-icons/bi';
import { LinkStyled } from './NotFound.styled';

export default function NotFound() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gridGap={30}
      pt={40}
      pb={40}
    >
      <Box display="flex" alignItems="center" gridGap={10}>
        <BiErrorAlt size="30px" color="#dc758a" />
        <h1>We don't found this page</h1>
      </Box>
      <p>
        Click <LinkStyled to="/">here</LinkStyled> to get back to home page
      </p>
    </Box>
  );
}
