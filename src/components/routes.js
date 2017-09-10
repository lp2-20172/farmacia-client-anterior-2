import React from 'react'
import About from './About';
import Home from './Home';
import Counter from './Counter';
import User from './User';
import EComm from './EComm';
import form from './ecomm/form';
import Compras from './ecomm/Compras';

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>home!</div>,
        main: Home
    },
    {
        path: '/abouts',
        sidebar: () => <div>abouts!</div>,
        main: About
    },
    
    {
        path: '/counters',
        sidebar: () => <div>Counter!</div>,
        main: Counter
    },
    {
        path: '/users',
        sidebar: () => <div>User!</div>,
        main: User
    },
    {
        path: '/ecomms',
        sidebar: () => <div>EComm!</div>,
        main: EComm
    },
      {
        path: '/form',
        sidebar: () => <div>form!</div>,
        main: form
    },
    {
        path: '/Compras',
        sidebar: () => <div>Compras!</div>,
        main: Compras
    },
]

export default routes