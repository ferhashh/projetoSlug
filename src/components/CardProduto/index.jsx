import "./cardProduto.css"

export default function CardProduto({
    id,
    title,
    description,
    images,
    price,
    stock,
    brand
}){
    return(
            <div className="card-wrapper">
                <h2>{title}</h2>
                <img src={images?.[0]} alt=""/>
                <h4><b>{price}</b></h4>
                <p>{description}</p>
                <p className="inst">{brand}</p>
                <p className="dif">{stock}</p>
                <a href={`/produtos/${id}`}>Saiba mais...</a>
            </div>
    )
}