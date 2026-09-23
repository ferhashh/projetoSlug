"use client";

import "./produto.css"
import { useState, useEffect } from "react";
import { useParams} from "next/navigation"

export default function Produto(){
    const [produto, setProduto] = useState([]);
    const params = useParams();

    useEffect( () => {
        const produtoEncontrado = produto.find(p => p.id == params.id);
        setProduto(produtoEncontrado);
    }, [])

    return(
        <main>
            {produto != null && <>
                <h1 className="titulo">Descrição do produto {produto.titulo}</h1>
                <div className="dados">
                    <img src={produto.imagem} alt="" />
                    <div className="info">
                        <p>Lançamento: {produto.ano}</p>
                        <p>Duração: {produto.duracaoMinutos} minutos</p>
                        <p>Gênero: {produto.genero}</p>
                    </div>
                </div>
                <p className="sinopse">{produto.sinopse}</p>
            </>}
            
        </main>
    )
}