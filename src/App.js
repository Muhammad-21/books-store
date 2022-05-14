import React, { useState } from "react";
import { Route, Routes} from "react-router-dom";

import Basket from "./pages/Basket";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import Pay from "./pages/Pay";
import Welcome from "./pages/Welcome";


const App = () => {
  const [welcomeState, setWelcomeState] = useState(true);
  setTimeout(() => {
    setWelcomeState(false)
  }, 2000);

  return (
      welcomeState ? <Welcome/> :
    <div className="wrapper">
      <Header />
      <main className="content">
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='basket' element={<Basket />} />
        <Route exact path='pay' element={<Pay/>} />
        <Route exact path='*' element={<Main/>} />
      </Routes>
      </main>
    </div>
  )
}

export default App;
