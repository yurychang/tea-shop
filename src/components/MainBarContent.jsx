import React from 'react';
import logoH from '../images/logo-h.svg';
import { BrowserRouter as NavLink } from 'react-router-dom';

export default function MainBarContent() {
  return (
    <>
      <div className="main-bar-content">
        <h1>
          <NavLink to="/">
            <img src={logoH} alt="湘茗" height="30px" className="ml-4 mt-3" />
          </NavLink>
        </h1>
        <div className="flex-grow-1">
          <nav className="mx-auto mt-7">
            <ul className="sy_list sy_list-virticle mx-auto">
              <li className="list-item ml-6">尋茶</li>
              <li className="list-item ml-6">文化走訪</li>
              <li className="list-item ml-6">茗家精選</li>
              <li className="list-item ml-6">茶風味輪</li>
              <li className="list-item ml-6">台灣茶分布圖</li>
            </ul>
          </nav>
        </div>
        <footer className="mx-auto mb-3">asjkdlajdlnvliwvwvewkm</footer>
      </div>
    </>
  );
}
