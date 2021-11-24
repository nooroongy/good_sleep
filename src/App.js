// import provider from './components/_firebase'
import { FB_AUTH, FB_DB } from './components/_firebase'
import { useEffect, useState } from "react";
import Loading from './routes/Loading';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Navigation from './components/navigation';
import Auth from './routes/Auth';
import { connect } from 'react-redux';
import { ACTION } from './components/store';

function App({setUser,setSleep}) {
  const [isLogedIn, setIsLogedIn] = useState(false); // 로그인중인지
  const [isLoading, setIsLoading] = useState(true); // 로딩중인지

  function dbTest() {
    FB_DB.add("sleep", {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
  }

  FB_AUTH.authChange(user => {
    if (user) { 
      setIsLogedIn(true); 
      const {displayName,uid,email} = user;
      setUser({displayName,uid,email})
    }
    else { setIsLogedIn(false); }
  })

  useEffect(() => {
    FB_DB.get('sleep').then(res=>{
      setSleep(res)
      setIsLoading(false);
  })
}, [])

  // console.log(isLogedIn)
  return (
    isLogedIn ?
      <BrowserRouter>
        <Navigation isLogedIn={isLogedIn} />
        {isLoading ?
          <Loading />:
        <Routes>
            <Route path='/*' element={<Home />}></Route>
          </Routes>
      }
      </BrowserRouter>
          :
      <Auth/>
  );
}

function mapDispatchProps(dispatch){
  return {
      setUser:(user) => dispatch(ACTION.setUser(user)),
      setSleep:(user) => dispatch(ACTION.setSleep(user)),
  }
}

export default connect(null,mapDispatchProps)(App);