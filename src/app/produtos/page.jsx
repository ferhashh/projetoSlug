"use client"



import CardProduto from "@/components/CardProduto";
import { useState, useEffect } from "react";

export default function Produtos() {

    const [listaProdutos, setListaProdutos] = useState([]);
    const [msgErro, setMsgErro] = useState("");

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=10&skip=10&select=id,title,price,images,description,brand,stock")
            .then(res => res.json())
            .then(produtos => {
                console.log(produtos);
                setListaProdutos(produtos.products);
                setMsgErro("");
            })
            .catch(error => setMsgErro(error.message));

    }, []);

    return (
        <main>
            <h1>Produtos</h1>

            {msgErro !== "" && <p>ERRO: {msgErro}</p>}

            {listaProdutos.length > 0 ?
                <div className="container">
                    {listaProdutos.map((produto) => {
                        return (
                            <CardProduto
                                key={produto.id}
                                id={produto.id}
                                title={produto.title}
                                images={produto.images}
                                price={produto.price}
                                description={produto.description}
                                brand={produto.brand}
                                stock={produto.stock}
                            />
                        );
                    })}
                </div>
                :
                <div>
                    <p>Sem nenhum produto por enquanto</p>
                </div>
            }

        </main>
    )
}