// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { ThreeDots } from 'react-loader-spinner';

// import { fetchPhoto } from 'api/fetch-photo';
// import { Searchbar, ImageGallery, Button, Modal } from './index';

// import { Box } from './Box';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';

export function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<div>Start</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </Container>
  );
}
