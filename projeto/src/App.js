import logo from './logo.svg';
import './App.css';
import Header from './components/geral/Header';
import Footer from './components/geral/Footer';
import Texto from './components/home/Textos';
import Servico from './components/home/Servico';
import Equipe from './components/home/Equipe';
import anthony from './img/anthony.png';
import jp from './img/jp.png';
import vilela from './img/vilela.png';
import kelmany from './img/kelmany.png';
import luiz from './img/luiz.png';
import miguel from './img/miguel.png'



function App() {
  return (
    <div className="App">
      <Header/>

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

      <section class="services-section">
        <h2 class="text-dark text-center mb-5">Nossos Serviços</h2>
          <div class='container d-flex justify-content-between'>
            <Servico s="Consultoria Técnica"/>
            <Servico s="Desenvolvimento SAAS"/>
            <Servico s="Suporte Dedicado"/>
            <Servico s="Integração de Sistemas"/>
          </div>
      </section>

      <section class="bg-cor1 team-section">
        <h2 class="text-white text-center align-item-center p-5">Conheça Nossa Equipe</h2>
        <div class='d-flex'>
          <Equipe
            src={anthony}
            alt="Anthony Medeiros"
            nome="Anthony Medeiros"
            h6="Desenvolvedor Full Stack"
            p="Responsável pela documentação técnica e gestão das informações legais da empresa."
          />
          <Equipe
            src={luiz}
            alt="Luiz Antônio"
            nome="Luiz Antônio"
            h6="Desenvolvedor Sênior"
            p="Com profundo conhecimento em linguagens de programação e desenvolvimento de grandes projetos."
          />
          <Equipe
            src={jp}
            alt="João Pedro Medeiros"
            nome="João Pedro Medeiros"
            h6="Desenvolvedor Front-End"
            p="Especialista em design e prototipagem, atuando também em interface de usuário."
          />
          <Equipe
            src={vilela}
            alt="Gabriel Vilela"
            nome="Gabriel Vilela"
            h6="Desenvolvedor Full Stack"
            p="Com forte habilidade em tecnologias front-end e back-end, oferece soluções completas."
          />
          <Equipe
            src={kelmany}
            alt="Kelmany Marques"
            nome="Kelmany Marques"
            h6="Scrum Master"
            p="Responsável pela gestão ágil do time e pela coordenação dos sprints e entregas."
          />
          <Equipe
            src={miguel}
            alt="Miguel Rodrigues"
            nome="Miguel Rodrigues"
            h6="Designer UI/UX"
            p="Responsável pela criação de interfaces inovadoras e experiências de usuário excepcionais."
          />
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
