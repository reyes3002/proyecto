//1.Aqui se pueden importar librerias o componentes
//opciones para crear fragments en react
//caractreristica de fragent es que no crea divs inecesarios
import { Fragment } from "react"

//segunda opcion
import React from "react"


//2.definir el state o funciones
export default function Header(){
//que colocar antes del return
//se puede escribir codigo de js

//renderizar este valor
        const name="juan"
        const total=100
        //3.Vista o codigo html
        return (
            
             
            <>
            {/**La otra opcion es poner <> y se le elimina  <Fragment> y <React.Fragment>*/}
                    {/*<Fragment>*/}

                    <p>
                    {/*Renderizado de variables*/}   
                        Hola {name}
                    {/* Esto es un comentario en el render */}

                    {/*los comentarios se meten dentro de las etiquetas y no fuera */}
                    {/* Reglas
                    Deben haber etiquetas de apertura y cierre
                    Cada componente debe tener un return
                    Un solo elemento en el nivel maximo,solo se retorna un elemento,si hay 
                    varios elementos como parrafos o headers,estos los metemos 
                    en un div ya que es el elemento principl y en ese no hay pedo
                    tambien lo podemos meter en un fragment,que es lo mas usual
                    */}
                    </p>
                    <p>Total a pagar {total}</p>
                    {total}

                    {/**segundo metodo,lo meti aqui por que solo debe tener un elemento el return */}
                    {/*segundo metodo*/}
                   {/* <React.Fragment>*/} 
                        <p>Hola {name}</p>
                        <p>Total a pagar</p>
                        {total}

                    {/*</React.Fragment>*/}

                {/*</Fragment>*/}
            </>
        )
}