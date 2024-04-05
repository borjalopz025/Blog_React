import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Articulos } from '../componentes/pages/Articulos';
import { Inicio } from '../componentes/pages/Inicio';

export const Rutas_blog = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/inicio' element={<Inicio />} />
                <Route path='/articulos' element={<Articulos />} />
                

            </Routes>
        </BrowserRouter>
    );
}