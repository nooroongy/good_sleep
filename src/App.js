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
import './css/color.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Record from './routes/Record'
import Setting from './routes/Setting';

function App({ setUser, connectSleepDB, connectThemeDB, colorSet }) {
  const [isLogedIn, setIsLogedIn] = useState(false); // 로그인중인지
  const [isLoading, setIsLoading] = useState(true); // 로딩중인지
  const [isDemo, setIsDemo] = useState(false); // 데모모드인지

  //app 시작시 초기 세팅
  useEffect(() => {
    isDemo ?
      startDemoMode() :
      onAuthChange()
  }, [isDemo])

  useEffect(() => {
    colorSetInit(colorSet);
  }, [colorSet])

  //로그인시 user정보 세팅
  const onAuthChange = () => {
    FB_AUTH.authChange(user => {
      //user정보가 있을때
      if (user) { connectData(user) }
      //user정보가 없을 때
      else { setIsLogedIn(false); setIsLoading(false); }
    })
  }

  const startDemoMode = () => {
    connectData({ displayName: 'Demo', uid: 'demo__uid', email: '' })
  }

  const connectData = (user = {}) => {
    setIsLogedIn(true);
    const { displayName, uid, email } = user;

    setUser({ displayName, uid, email })

    //sleep data DB에 연결
    FB_DB.get('sleep').then(res => {
      connectSleepDB(res.filter(data => data.uid === user.uid))
      setIsLoading(false);
    })

    //theme data DB에 연결
    FB_DB.get('colorSet').then(res => {
      const themeData = res.filter(data => data.uid === user.uid);
      if (themeData.length === 0) {
        FB_DB.add("colorSet", {
          mainColor: '01',
          subColor: '01',
          fontColor: '01',
          themeColor: '01',
          uid: user.uid
        });
      } else {
        connectThemeDB(themeData[0])
      }
    })
  }

  const colorSetInit = (colorSet) => {
    ['01', '02', '03', '04', '05', '06', '07', '08'].forEach(no => {
      document.getElementById('root').classList.remove('color-main-' + no)
      document.getElementById('root').classList.remove('color-sub-' + no)
      document.getElementById('root').classList.remove('color-font-' + no)
      document.getElementById('root').classList.remove('color-theme-' + no)
    })

    document.getElementById('root').classList.add(`color-main-${colorSet.mainColor}`)
    document.getElementById('root').classList.add(`color-sub-${colorSet.subColor}`)
    document.getElementById('root').classList.add(`color-font-${colorSet.fontColor}`)
    document.getElementById('root').classList.add(`color-theme-${colorSet.themeColor}`)
  }

  return (
    isLoading ?
      <Loading /> :
      isLogedIn ?
        <BrowserRouter>
          <Header isLogedIn={isLogedIn} isDemo={isDemo} setDemo={setIsDemo} />
          <Routes>
            <Route path='good_sleep/*' element={<Home />}></Route>
            <Route path='good_sleep/record' element={<Record />}></Route>
            <Route path='good_sleep/setting' element={<Setting />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
        :
        <Auth setIsDemo={setIsDemo} />
  );
}

function mapDispatchProps(dispatch) {
  return {
    setUser: (user) => dispatch(ACTION.setUser(user)),
    connectSleepDB: (user) => dispatch(ACTION.setSleep(user)),
    connectThemeDB: (user) => dispatch(ACTION.setColorSet(user)),
  }
}

function mapStateToProps(state) {
  const { colorSet } = state;
  return { colorSet }
}

export default connect(mapStateToProps, mapDispatchProps)(App);