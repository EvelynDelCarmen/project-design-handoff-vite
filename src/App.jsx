import { BrowserRouter, Routes } from 'react-router-dom';
import { Routes } from './Routes/Routes';

export const App = () => {

  return (
    <BrowserRouter>
      <Routes>{Routes}</Routes>

    </BrowserRouter>

  );
};

export default App;
