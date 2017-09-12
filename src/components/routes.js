import React from 'react'
import About from './About';
import Home from './Home';
import Counter from './Counter';
import User from './User';
import Venta from './Venta';
import form from './venta/form';
import Proveedor from './Proveedor';
import Compras from './Compras';
import Pedidos from './Pedidos';


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
        main: Proveedor
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
    {
        path: '/Compras',
        sidebar: () => <div>Compras!</div>,
        main: Compras
    },
    {
        path: '/Pedidos',
        sidebar: () => <div>Pedidos!</div>,
        main: Pedidos
    },

]

export default routes