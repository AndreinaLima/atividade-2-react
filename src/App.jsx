import CardAluno from "./components/CardAluno";
import CardProduto from "./components/CardProduto";


function App() {
  return (
    <main>
      <CardAluno
        nome="Henrique"
        serie="6°Ano"
        media={10.0}
        nivelMedia={7.0}
      />
      <CardAluno
        nome="João"
        serie="5°Ano"
        media={6.0}
        nivelMedia={7.0}
      />
      <CardAluno
        nome="Maria"
        serie="8°Ano"
        media={8.0}
        nivelMedia={7.0}
      />
      <CardProduto
        nome="CONTROLE X-BOX"
        linkImagem={
          "https://images.unsplash.com/photo-1708235094342-2c550599223f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        precoUnitario={1500}
        desconto={50}
        comDesconto={true}
      />
      <CardProduto
        nome="SOFÁ 2 LUGARES"
        linkImagem={
          "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        precoUnitario={1500}
        desconto={0}
        comDesconto={false}
      />
    </main>
  )
}

export default App;