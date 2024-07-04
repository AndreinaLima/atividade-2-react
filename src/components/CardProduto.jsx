/* eslint-disable react/prop-types */

import "./CardProduto.css"


function CardProduto(props) {

  const descontoProduto = (props.desconto / 100) * props.precoUnitario;

  return (
    <section className="card">
      <article>
        <img src={props.linkImagem} alt="Imagem" />
        <h4>{props.nome}</h4>
        {props.comDesconto && (
          <p className="comDesconto">De: R${props.precoUnitario}</p>
        )}

        <div className="desconto">
          <h3>
            {props.comDesconto ? `Por: R$${descontoProduto}` : `Por: R$${props.precoUnitario}`}
          </h3>
          {props.comDesconto && (
            <p className="paragrafo">{props.desconto}% OFF</p>
          )}
        </div>
      </article>
    </section>
  )
}

export default CardProduto;