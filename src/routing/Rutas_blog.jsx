import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Articulos } from '../componentes/pages/Articulos';
import { Inicio } from '../componentes/pages/Inicio';
import { Header } from '../componentes/layout/Header';
import { Nav } from '../componentes/layout/Nav';
import { Sidebar } from '../componentes/layout/Sidebar';
import { Footer } from '../componentes/layout/Footer';
import { Crear } from '../componentes/pages/Crear';
import { Buscador } from '../componentes/pages/Buscador';
import { Articulo } from '../componentes/pages/Articulo';
import { Editar } from '../componentes/pages/Editar';


export const Rutas_blog = () =>{
    return (
        <BrowserRouter>
            <Header />
            <Nav />
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/inicio' element={<Inicio />} />
                <Route path='/articulos' element={<Articulos />} />
                <Route path='/crear-articulos' element={<Crear/>} />
                <Route path='/buscar/:busqueda' element={<Buscador/>} />
                <Route path='/uno/:id' element={<Articulo/>} />
                <Route path='/editar/:id' element={<Editar/>} />
                <Route path='*' element={
                    <div className='content'>
                        <div className='jumbo'>
                            <h1>Error 404</h1>
                        </div>

                    </div>
                } />
            </Routes>
            <Sidebar />
            <Footer />
        </BrowserRouter>
    );
}