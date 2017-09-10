import React from 'react'
import About from './About';
import Home from './Home';
import Counter from './Counter';
import User from './User';
import EComm from './EComm';
import form from './ecomm/form';
import almacen from './almacen';
import Proveedores from './ecomm/Proveedores';

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
        path: '/proveedores',
        sidebar: () => <div>Proveedores!</div>,
        main: Proveedores
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
        path: '/form',
        sidebar: () => <div>almacen!</div>,
        main: form
    },

]

export default routes