import React from "react";
import "./App.less";
import { Home } from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./Pages/NotFound";
import { ThamQuan } from "./Pages/ThamQuan";
import { BanDo } from "./Pages/BanDo";
import { LienHe } from "./Pages/LienHe";
import { Dangky } from "./Pages/Dangky";
import { DangNhap } from "./Pages/DangNhap";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/thamquan" element={<ThamQuan />}></Route>
      <Route path="/bando" element={<BanDo />}></Route>
      <Route path="/lienhe" element={<LienHe />}></Route>
      <Route path="/dangky" element={<Dangky />}></Route>
      <Route path="/dangnhap" element={<DangNhap />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default App;
