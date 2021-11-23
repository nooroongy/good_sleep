// import provider from './components/_firebase'
import { FB_AUTH, FB_DB } from './components/_firebase'
import { useEffect, useState } from "react";
import Loading from './routes/Loading';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import Navigation from './components/navigation';
import Auth from './routes/Auth';

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // 로딩중인지

  function dbTest() {
    FB_DB.add("sleep", {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
  }

  useEffect(() => {
    FB_AUTH.authChange(user => { setIsLogedIn(true); 
      console.log(user)
    })
    setIsLoading(false);
  }, [])

  async function dbTest2() {
    const dataArr = await FB_DB.get('sleep');
    console.log(dataArr)
  }

  return (
    isLoading ? <Loading /> :
      <BrowserRouter>
        <Navigation isLogedIn={isLogedIn}/>
        {isLogedIn ? 
        <Routes>
          <Route path='/*' element={<Home/>}></Route>
        </Routes>
        :<Auth></Auth>
        }
      </BrowserRouter>
  );
}

export default App;

<div className="App">


      </div>