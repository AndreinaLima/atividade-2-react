/* eslint-disable react/prop-types */
import "./CardAluno.css"

function CardAluno(props) {
   let corTexto = props.media >= props.nivelMedia ? "green" : "red"
  return (
    <section className="section-cardAluno">
      <article className="card-aluno">
        <h2>{props.nome}</h2>
        <p>{`Série: ${props.serie}`}</p>
        <p>{`Média: ${props.media}`}</p>
        <p className={corTexto}>
          {props.media >= props.nivelMedia ? "Aprovado!"  : "Reprovado!"}
        </p>
      </article>
    </section>
  )
}

export default CardAluno;