// import provider from './components/_firebase'
import { FB_AUTH, FB_DB } from './components/_firebase'
import { useEffect, useState } from "react";
import Loading from './routes/Loading';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Auth from './routes/Auth';
import { connect } from 'react-redux';
import { ACTION } from './components/store';
import './css/common.css'
import Header from './components/Header';
import Footer from './components/Footer';

function App({ setUser, connectSleepDB }) {
  const [isLogedIn, setIsLogedIn] = useState(false); // 로그인중인지
  const [isLoading, setIsLoading] = useState(true); // 로딩중인지

  //로그인시 user정보 세팅
  FB_AUTH.authChange(user => {
    if (user) {
      setIsLogedIn(true);
      const { displayName, uid, email } = user;
      setUser({ displayName, uid, email })
      //앱 시작했을때 DB에 연결
      FB_DB.get('sleep').then(res => {
        connectSleepDB(res.filter(data => data.uid === user.uid))
        setIsLoading(false);
      })
    }
    else { setIsLogedIn(false); setIsLoading(false);}
  })




  useEffect(() => {
  }, [])

  return (
    isLoading ?
      <Loading /> :
      isLogedIn ?
        <BrowserRouter>
          <Header isLogedIn={isLogedIn} />
          <Routes>
            <Route path='/*' element={<Home />}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
        :
        <Auth />
  );
}

function mapDispatchProps(dispatch) {
  return {
    setUser: (user) => dispatch(ACTION.setUser(user)),
    connectSleepDB: (user) => dispatch(ACTION.setSleep(user)),
  }
}

export default connect(null, mapDispatchProps)(App);