import React, { useState, useEffect } from 'react';
import { Global } from '../../helpers/Global';
import { Ajax } from '../../helpers/Ajax';
import { useParams } from 'react-router-dom';

export const Articulo = () => {

  const [articulo, setArticulo] = useState([]);
  const [imagenUrl, setImagenUrl] = useState('')
  const params = useParams();

  useEffect(() => {
    conseguirArticulo();
  }, []);

  const conseguirArticulo = async () => {
    try {
      console.log(params.id); 

      const { datos, cargando } = await Ajax(Global.url + "uno/" + params.id, "GET");

      setArticulo(datos.articulo)

    } catch (error) {
      console.error("Error al obtener el artículo:", error); 
    }
  };


  return (
    <div className='content'>
      <div className='jumbo'>
        <img className='img-articulo' src={articulo.imagen_url} />
        <h1>{articulo.titulo}</h1>
        <span>{articulo.fecha_publicacion}</span>
        <p>{articulo.contenido}</p>
      </div>
    </div>
  )
  }