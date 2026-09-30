"use client";

import "./produto.css"
import { useState, useEffect } from "react";
import { useParams} from "next/navigation"

export default function Produto(){
    const [produto, setProduto] = useState(null);
    const params = useParams();

    useEffect( () => {
        fetch(`https://dummyjson.com/products/${params.id}`)
        .then(res => res.json())
        .then(produtoEncontrado => {
            setProduto(produtoEncontrado);
        });
    }, [params.id]);

    return(
        <main>
            {produto != null && <>
                <h1 className="titulo">Descrição do produto {produto.title}</h1>
                <div className="dados">
                    <img src={produto.images?.[0]} alt="" />
                    <div className="info">
                        <p>Marca: {produto.brand}</p>
                        <p>Preço: <b>{produto.price}</b></p>
                        <p>Estoque: {produto.stock}</p>
                        <p>Categoria: {produto.category}</p>
                        <p >{produto.returnPolicy}</p>
                <p>Peso: {produto.weight}g</p>
                <p className="qtd-minima">Quantidade mínima: {produto.minimumOrderQuantity}</p>
                    </div>
                </div>
                <p className="descricao">{produto.description}</p>
            </>}
            
        </main>
    )
}