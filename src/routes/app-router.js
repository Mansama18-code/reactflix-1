import {createBrowerRouter}from 'react-router-dom';
import Sesion from '../sesion';

export const appRouter = createBrowerRouter([
    {
        path: "/sesion",
        //element: <Sesion/>,
        Component: Sesion, 
    },
    {
        path: "./iniciosesion",
        Component: Iniciosesion,
    }
]);