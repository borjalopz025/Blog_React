export const Ajax = async (url, metodo, datos_guardar = "") => {
    let cargando = true;

    let opciones = {
        method: "GET"
    };

    if (metodo === "GET" || metodo === "DELETE") {
        opciones = {
            method: metodo
        };
    }

    if (metodo === "POST" || metodo === "PUT") {
        opciones = {
            method: metodo,
            body: JSON.stringify(datos_guardar),
            headers: {
                "Content-Type": "application/json"
            }
        };
    }

    const peticion = await fetch(url, opciones);
    const datos = await peticion.json();

    cargando = false;

    return {
        datos,
        cargando
    };
};
