
import React, { useEffect, useState } from 'react'
import './styles/App.css'
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import Error from './pages/Error';
import AppRouter from './components/AppRouter';
import PostIdPage from './pages/PostIdPage';
import { routes } from './router';
import Login from './pages/Login';
import { AuthContext } from './context';
import MyInput from './components/UI/input/MyInput';
import MyButton from './components/UI/button/MyButton';
import Loader from './components/UI/Loader/Loader';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false)
  }, [])
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }
  if(isLoading){
    return
  }
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter basename='/'>
        <div className='navbar'>
          <MyButton onClick={logout}>Выйти</MyButton>
          <div className='navbar__links'>
            <Link to="/about">О сайте</Link>
            <Link to='/posts'>Посты</Link>
          </div>
        </div>
        
        {isAuth
          ? <Routes>
            <Route path={'/about'} element={<About />} />
            <Route path={'/posts'} element={<Posts />} />
            <Route path={'/posts/:id'} element={<PostIdPage />} />
            <Route path="*" element={<Navigate to="/posts" replace />} />
          </Routes>
          : <Routes>
            <Route path={'/login'} element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        }
      </BrowserRouter >
    </AuthContext.Provider>




  )
}

export default App;
