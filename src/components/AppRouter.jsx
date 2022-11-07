import React,{Route, Routes} from 'react';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
const AppRouter = () => {
    return (
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default AppRouter;