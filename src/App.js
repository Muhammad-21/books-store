import React from "react";
import { Route, Routes } from "react-router-dom";

import Basket from "./pages/Basket";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import Pay from "./pages/Pay";

const App = () => {

  return (
    <div className="wrapper">
      <Header />
      <main className="content">
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='basket' element={<Basket />} />
        <Route exact path='pay' element={<Pay/>} />
      </Routes>
      </main>
    </div>
  )
}

export default App;
