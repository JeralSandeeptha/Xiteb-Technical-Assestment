import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const MainNavigation = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={HomePage}/>
        </Routes>
    </BrowserRouter>
  );

}

export default MainNavigation;
