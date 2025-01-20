import {useState,useEffect} from 'react'
import Header from "./components/Header"
import Header2 from "./components/Header2"
import Guitar from "./components/Guitar"
import { db } from './data/db'
//componentes inician con mayuscula
function App() {

    
  //los hooks van en la parte superior de los componentes de react 
  //no dentro de condicionales ni despues de un return
  //uso de useState
  /*
    const [auth,setAuth]=useState(true)
    const [total,setTotal]=useState(0)
    const [cart,setCart]=useState([])
    */


    //no hooks dentro de funciones
    /*
    function registrarHook(){
      const [cart,setCart]=useState([])
    }
    */
  //lo que no se debe de hacer 
  /*
    if(auth){
      const [cart,setCart]=useState([])
      console.log(cart)
    }
    setTimeout(() => {
      setAuth(false)
    }, 3000);
    */  
    //para archivo local
   const [data,setData]=useState(db)
   console.log(data)

   //para una API
   



   //statements y expresiones
   //statement instruccion para hacer algo
   //expression
   //algo que produce un valor
  return (
    <>
    {
     //rederizado el componente
    
     
    <Header />
    //<Header2 />
    }
  

   

    <main className="container-xl mt-5">
        <h2 /*onClick={registrarHook} */className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {
          /**
          Con las llaves decimos que es codigo JS*/
        }
          
            
           
          //al se un arreglo podemos acceder a todos los array methods que existen para los arreglos
          //colocar un valor inicial si espero una coleccion dentro de un arreglo para tener acceso a esos array methods
          //usamos arrow functions
        

          {data.map(()=> (
            
            //se da por implicito que vamos a retornar algo,por eso no esta el return
            //solo retorna el valor que tengamos en este arraw function
            
            //props
            //2 partes
            //izq-Nombre del prop
            //der-valor que le quiero pasar
            //todos los valores que se van a pasar
            <Guitar 
            price={100}
            auth={true}

            //creamos un prop de guitar y sera igual a guitar
            guitar={guitar}
            
            />

          ))}
         
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
      
    </>
  )
}

export default App









