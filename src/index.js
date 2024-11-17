import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Provider } from "react-redux";
import { store } from "./redux/store.js";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Show from './pages/show/Show.jsx';
import Read from './pages/read/Read.jsx';
import Sender from './pages/sender/Sender.jsx';
import Receiver from './pages/receiver/Receiver.jsx';
import FirstQuote from './components/firstQuote/FirstQuote.jsx';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Show />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/read",
    element: <Read />,
  },
  {
    path: "/sender",
    element: <Sender />,
  },
  {
    path: "/receiver",
    element: <Receiver />,
  },
  {
    path: "/show",
    element: <Show />,
  },
  {
    path: "*",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <FirstQuote />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
