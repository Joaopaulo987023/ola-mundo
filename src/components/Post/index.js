import PostModelo from 'components/PostModelo';
import React from 'react';
import { useParams } from 'react-router-dom';
import posts from 'json/posts.json';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import "./Post.css";
import NaoEncontrado from 'pages/NaoEncontrado';
import PaginaPadrao from 'components/PaginaPadrao';
import PostCard from 'components/PostCard';
import styles from "./Post.module.css";


export default function Post() {
    const parametros = useParams();
    
    const post = posts.find((post)=>{
        return post.id === Number(parametros.id);
        //procura ou verifica dentro de um array ou objeto sendo que esse retorno vai ser do primeiro elemento que satisfazer o teste    
        })
        if(!post){
          return <NaoEncontrado/>
        }
        const postRecomendados = posts
        .filter((post)=>post.id !== Number(parametros.id))
        .sort((a,b)=>a.id - b.id)
        .slice(0,4)
        console.log(postRecomendados)
  return (
    <PaginaPadrao>
    <PostModelo
        fotoCapa={`/assets/posts/${post.id}/capa.png`}
        titulo={post.titulo}
    >
        <div className="post-markdown-container">
            <ReactMarkdown>
                {post.texto}
            </ReactMarkdown>
        </div>
        <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar</h2>
        <ul className={styles.postsRecomendados}>
          {
            postRecomendados.map((post)=>(
              <li key={post.id}>
                <PostCard post={post}/>
              </li>
            ))
          }
        </ul>
    </PostModelo>
  </PaginaPadrao>

  )
}
