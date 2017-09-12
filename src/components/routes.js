import React from 'react'
import About from './About';
import Home from './Home';
import Counter from './Counter';
import User from './User';
import Venta from './Venta';
import form from './venta/form';
import Proveedor from './Proveedor';

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
        path: '/proveedor',
        sidebar: () => <div>proveedor!</div>,
        main: () => <h2>proveedor</h2>
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
        path: '/venta',
        sidebar: () => <div>Venta!</div>,
        main: Venta
    },
      {
        path: '/form',
        sidebar: () => <div>form!</div>,
        main: form
    },

]

export default routes