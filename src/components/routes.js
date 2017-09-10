import React from 'react'
import About from './About';
import Home from './Home';
import Counter from './Counter';
import User from './User';
import EComm from './EComm';
import form from './ecomm/form';
import almacen from './almacen';
<<<<<<< HEAD
import Proveedores from './Proveedores';

=======
import Proveedores from './ecomm/Proveedores';
import Compras from './Compras';
>>>>>>> 3772d9381647591770e3712335b3de0a7d7907e7
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
    {
        path: '/Compras',
        sidebar: () => <div>Compras!</div>,
        main: Compras
    },

]

export default routes