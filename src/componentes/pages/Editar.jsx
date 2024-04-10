import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Ajax } from '../../helpers/Ajax';
import { Global } from '../../helpers/Global';
import { useParams } from 'react-router-dom';

export const Editar = () => {

  const [resultado, setResultado] = useState(false);
  const [arti, setArti] = useState([])

  const params = useParams();

  useEffect(() => {
    conseguirArticulo();
  }, []);

  const conseguirArticulo = async () => {
    try {
      console.log(params.id);

      const { datos, cargando } = await Ajax(Global.url + "uno/" + params.id, "GET");

      setArti(datos.articulo)

    } catch (error) {
      console.error("Error al obtener el artículo:", error);
    }
  };

  const editarArticulo = async (e) => {
    e.preventDefault();

    let data = e.target;
    let articulo = {
      titulo: data.titulo.value,
      contenido: data.contenido.value,
      imagen_url: data.imagen_url.value
    };

    const { datos, cargando } = await Ajax(Global.url + "edit/" + params.id, "PUT", articulo);

    setResultado(datos)

  };

  return (
    <div className='content'>
      <div className='jumbo'>
        <h1>Editar Articulo</h1>
        <p>Formulario para Editar un artículo: {arti.titulo}</p>
        <strong>{resultado ? "¡Artículo guardado con éxito!" : ""}</strong><br />
        <form className='formulario' onSubmit={editarArticulo}>
          <div className='form-group'>
            <label htmlFor='titulo'>Título</label>
            <input type="text" name='titulo' defaultValue={arti.titulo} />
          </div>

          <div className='form-group'>
            <label htmlFor='contenido'>Contenido</label>
            <textarea type="text" name='contenido' defaultValue={arti.contenido} />
          </div>

          <div className='form-group'>
            <label htmlFor='imagen_url'>URL de la imagen</label>
            <input type="url" name='imagen_url' id='imagen_url' defaultValue={arti.imagen_url} />
          </div>

          <button type='submit' className='btn btn-success'>Enviar</button>
        </form>
      </div>
    </div>
  );
};
