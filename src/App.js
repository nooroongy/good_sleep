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
import Record from './routes/Record'
import Setting from './routes/Setting';

function themeRest(){
  ['01','02','03','04','05','06','07','08'].forEach(no=>{
    document.getElementById('root').classList.remove('color-main-'+no)
    document.getElementById('root').classList.remove('color-sub-'+no)
    document.getElementById('root').classList.remove('color-font-'+no)
  })
}

function App({ setUser, connectSleepDB, connectThemeDB ,theme}) {
  const [isLogedIn, setIsLogedIn] = useState(false); // 로그인중인지
  const [isLoading, setIsLoading] = useState(true); // 로딩중인지

  themeRest();
  document.getElementById('root').classList.add(`color-main-${theme.mainColor}`)

  //app 시작시 초기 세팅
  useEffect(() => {
    //로그인시 user정보 세팅
    FB_AUTH.authChange(user => {
      //user정보가 있을때
      if (user) {
        setIsLogedIn(true);
        const { displayName, uid, email } = user;
        setUser({ displayName, uid, email })

        //앱 시작했을때 sleep data DB에 연결
        FB_DB.get('sleep').then(res => {
          connectSleepDB(res.filter(data => data.uid === user.uid))
          setIsLoading(false);
        })

        //앱 시작했을때 theme data DB에 연결
        FB_DB.get('theme').then(res => {
          const themeData = res.filter(data => data.uid === user.uid);
          if (themeData.length === 0) {
            FB_DB.add("theme", {
              mainColor: '01',
              subColor: '01',
              fontColor: '01',
              uid: user.uid
            });
          } else {
            connectThemeDB(themeData[0])
          }
        })
      }
      //user정보가 없을 때
      else { setIsLogedIn(false); setIsLoading(false); }
    })
  }, [])

  return (
    isLoading ?
      <Loading /> :
      isLogedIn ?
        <BrowserRouter>
          <Header isLogedIn={isLogedIn}/>
          <Routes>
            <Route path='/*' element={<Home />}></Route>
            <Route path='/record' element={<Record />}></Route>
            <Route path='/setting' element={<Setting />}></Route>
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
    connectThemeDB: (user) => dispatch(ACTION.settheme(user)),
  }
}

function mapStateToProps(state){
    const {theme} = state;
    return{theme}
}

export default connect(mapStateToProps, mapDispatchProps)(App);