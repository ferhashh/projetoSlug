import "./cardProduto.css"

export default function CardProduto({
    id,
    title,
    images
}){
    return(
            <div className="card-wrapper">
                <div className="dados">
                    <h2>{title}</h2>
                    <img src={images?.[0]} alt=""/>
                </div>
                <a href={`/produtos/${id}`}>Saiba mais...</a>
            </div>
    )
}