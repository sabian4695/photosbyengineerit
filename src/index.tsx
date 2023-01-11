import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ErrorPage from './components/ErrorPage'
import Gallery from './components/Gallery'
import About from './components/About'
import {RecoilRoot} from "recoil";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
          <BrowserRouter basename="/photosbyengineerit">
              <Routes>
                  <Route path='/' errorElement={<ErrorPage/>} element={<App/>}>
                      <Route path='gallery' element={<Gallery/>}/>
                      <Route path='about' element={<About/>}/>
                  </Route>
              </Routes>
          </BrowserRouter>
      </RecoilRoot>
  </React.StrictMode>
);
serviceWorkerRegistration.register();
reportWebVitals();
