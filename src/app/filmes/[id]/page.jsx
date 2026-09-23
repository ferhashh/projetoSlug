"use client";

import "./filme.css"
import { useState, useEffect } from "react";
import dados from "@/filmes.json"
import { useParams} from "next/navigation"

export default function Filme(){
    const [filme, setFilme] = useState(null);
    const params = useParams();

    useEffect( () => {
        const filmeEncontrado = dados.find(f => f.id == params.id);
        setFilme(filmeEncontrado);
    }, [])

    return(
        <main>
            {filme != null && <>
                <h1 className="titulo">Descrição do filme {filme.titulo}</h1>
                <div className="dados">
                    <img src={filme.imagem} alt="" />
                    <div className="info">
                        <p>Lançamento: {filme.ano}</p>
                        <p>Duração: {filme.duracaoMinutos} minutos</p>
                        <p>Gênero: {filme.genero}</p>
                    </div>
                </div>
                <p className="sinopse">{filme.sinopse}</p>
            </>}
            
        </main>
    )
}