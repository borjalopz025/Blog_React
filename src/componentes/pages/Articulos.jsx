import React from 'react'
import { useState, useEffect } from 'react'
import { Global } from '../../helpers/Global'
import { Ajax } from '../../helpers/Ajax'
import { Link } from 'react-router-dom'

export const Articulos = () => {

  const [ arti , setArti] = useState([])

  useEffect(() =>{
    
    conseguirArticulos();
  }, [])

  const conseguirArticulos = async() =>{
    
    const url = Global.url+"ver";

    const {datos, cargando} = await Ajax(url, "GET")

    setArti(datos.data);
  
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
                <h3 className="title"><Link to={'/uno/'+ ar.id}>{ar.titulo}</Link></h3>
                <p className="description">{ar.contenido}</p>

                <Link to={"/editar/" + ar.id} className="edit">Editar</Link>
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


