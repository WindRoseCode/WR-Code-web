import Texto from "./Textos"

export default function QuemSomos () {
    return (
        <main class="container">
        <div class='row col-md-8 offset-md-2 mt-5'>
          <h2 class='text-dark text-center mb-4'>Quem Somos</h2>
          <Texto atributo='lead text-muted text-center mb-4'
          p="Na WR Code, nossa missão é fornecer soluções tecnológicas inovadoras e de alta qualidade que impulsionem o crescimento e o sucesso de pequenas e médias empresas."
          />
          <Texto atributo="text-center"
          p="Acreditamos que, com as ferramentas certas, qualquer empresa pode alcançar novos patamares de produtividade e eficiência. Nosso time de especialistas está comprometido em transformar as necessidades dos nossos clientes em soluções eficazes e acessíveis."
          />
          <Texto atributo="text-center"
          p="Com experiência em desenvolvimento de software, consultoria técnica e integração de sistemas, nós da WR Code buscamos sempre a excelência em cada projeto. Trabalhamos para entregar valor real aos nossos clientes, utilizando as melhores práticas de mercado e as mais avançadas tecnologias."
          />
          <Texto atributo="text-center"
          p="Acreditamos na importância de um relacionamento próximo e transparente com nossos clientes, buscando sempre entender suas necessidades para oferecer soluções personalizadas e inovadoras. Junte-se a nós e vamos criar o futuro da sua empresa juntos!"
          />  
        </div>
      </main>
    )
}