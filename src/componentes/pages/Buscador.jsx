import React from 'react'
import { useState, useEffect } from 'react'
import { Global } from '../../helpers/Global'
import { Ajax } from '../../helpers/Ajax'
import { useParams } from 'react-router-dom'

export const Buscador = () => {

  const [ arti , setArti] = useState([])
  const params = useParams();

  useEffect(() =>{
    
    conseguirArticulos();
  }, [])

  useEffect(() =>{
    
    conseguirArticulos();
  }, [params])

  const conseguirArticulos = async() =>{
    
    const url = Global.url+"buscar/" + params.busqueda;

    console.log(params.busqueda);

    const {datos, cargando} = await Ajax(url, "GET")

    console.log(datos.articulos);

    setArti(datos.articulos);
  
  }

  const eliminar = async (id) => {
      
    const {datos} = await Ajax( Global.url + "borrar/" + id, "DELETE")

    if (datos.error === false) {
      let articulosActualizados = arti.filter(art => art.id !== id)
      setArti(articulosActualizados)
    }
    
    
  }


  return (
    <section id="content" className="content">
      {
        Array.isArray(arti) && arti.map(ar =>{
          return(
            <article key={ar.id} className="articulo-item">
              <div className='mascara'>
                <img src={ar.imagen_url} alt="" />
              </div>
              <div className='datos'>
                <h3 className="title">{ar.titulo}</h3>
                <p className="description">{ar.contenido}</p>

                <button className="edit">Editar</button>
                <button className="delete" onClick={() =>{
                  eliminar(ar.id)
                }}>Borrar</button>
              </div>
            </article>
          )
        })
      }
      
    </section>

  )
}


