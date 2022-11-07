import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { BiSearch, BiCameraMovie } from 'react-icons/bi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ThreeDots } from 'react-loader-spinner';

import { Box } from 'components/Box';
import { fetchSearchMovies } from 'api/fetch-data';

import {
  SearchButton,
  Form,
  Input,
  List,
  Item,
  LinkStyled,
} from './Movies.styled';
import { useEffect } from 'react';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [listMovies, setListMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState(
    () => searchParams.get('query') ?? ''
  );
  const [isLoader, setIsLoader] = useState(false);

  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoader(true);
    const inputValue = e.target.searchMovie.value;

    if (inputValue === '') {
      setIsLoader(false);
      Notify.failure('Input something :)');
      return;
    }

    setSearchParams({ query: inputValue });

    fetchSearchMovies(inputValue, 1).then(r => {
      if (r.results.length === 0) {
        setIsLoader(false);
        Notify.failure('We do not nothing :(');
        return;
      }
      setListMovies(r.results);
      setIsLoader(false);
    });
  };

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (searchQuery !== '') {
      fetchSearchMovies(searchQuery, 1).then(r => {
        setListMovies(r.results);
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box p={20}>
      {isLoader ? (
        <ThreeDots color="#dc758a" />
      ) : (
        <>
          <Form onSubmit={handleSubmit}>
            <label>
              <Input
                type="text"
                placeholder="Input name movie"
                name="searchMovie"
                value={searchQuery}
                onChange={handleChange}
              />
            </label>
            <SearchButton type="submit">
              <BiSearch />
              <span>Search</span>
            </SearchButton>
          </Form>
          {listMovies && (
            <List>
              {listMovies.map(item => (
                <Item key={item.id}>
                  <BiCameraMovie color="#dc758a" />
                  <LinkStyled to={`${item.id}`} state={location}>
                    {item.title || item.name}
                  </LinkStyled>
                </Item>
              ))}
            </List>
          )}
        </>
      )}
    </Box>
  );
}
