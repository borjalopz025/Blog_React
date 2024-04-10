import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Ajax } from '../../helpers/Ajax';
import { Global } from '../../helpers/Global';

export const Crear = () => {
  const [resultado, setResultado] = useState(false); // Movido aquí para que sea parte del componente

  const conseguirDataForm = async (e) => {
    e.preventDefault();

    let data = e.target;
    let articulo = {
      titulo: data.titulo.value,
      contenido: data.contenido.value,
      imagen_url: data.imagen_url.value
    };

    const { datos, cargando } = await Ajax(Global.url + "crear", "POST", articulo);

    if (datos.error === false) {
      setResultado(true);

    }else {
      console.log('Hay un problema');
    }

    
  };

  return (
    <div className='content'>
      <div className='jumbo'>
        <h1>Crear Articulo</h1>
        <p>Formulario para crear un artículo</p>
        <strong>{resultado ? "¡Artículo guardado con éxito!" : ""}</strong><br/>
        <form className='formulario' onSubmit={conseguirDataForm}>
          <div className='form-group'>
            <label htmlFor='titulo'>Título</label>
            <input type="text" name='titulo' />
          </div>

          <div className='form-group'>
            <label htmlFor='contenido'>Contenido</label>
            <textarea type="text" name='contenido' />
          </div>

          <div className='form-group'>
            <label htmlFor='imagen_url'>URL de la imagen</label>
            <input type="url" name='imagen_url' id='imagen_url' />
          </div>

          <button type='submit' className='btn btn-success'>Enviar</button>
        </form>
      </div>
    </div>
  );
};
