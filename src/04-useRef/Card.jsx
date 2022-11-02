import React, {useState , useEffect} from 'react'
import { useRef } from 'react';
import { getPost } from './helpers/getPost'
export const Card = () => {
    const [ post , setPost ] = useState({title: "post1"}) // creamos un post
    const [loading, setLoading] = useState(true); // se esta cargando el post
    const isMounted = useRef(false);


    function getRandomInt(min, max) { // funcion devuelve un numero random
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const updatePost =  () =>{ // actualizamos el post
        getPost(getRandomInt(1,100)) // pedimos un post random
        .then((newPost)=>{ // si devuelve algo  se guarda en newPost
            setTimeout(() => {
                console.log(`log : ${isMounted.current} , in line : 20`)
                if (isMounted.current){
                    setPost(newPost) // cambiamos el post creado por el nuevo
                    setLoading(false); // termino de cargar    
                }
            }, 2000); // esperamos 2 seg para que se vea
         })
    }

    useEffect(() => { // una vez que se renderiza por primera vez
        isMounted.current = true;
        updatePost() // actualizamos el post
        return () =>{
            isMounted.current = false;
        }
    }, [])
    
    if(loading) return <h1>Loading...</h1>
  return (
    <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </>
  )
}
