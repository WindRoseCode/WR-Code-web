import Integrantes from './Integrantes';
import anthony from '../../../img/anthony.png';
import jp from '../../../img/jp.png';
import vilela from '../../../img/vilela.png';
import kelmany from '../../../img/kelmany.png';
import luiz from '../../../img/luiz.png';
import miguel from '../../../img/miguel.png';

export default function Equipe () {
    return (
        <section class="bg-cor1 team-section">
            <h2 class="text-white text-center align-item-center p-5">Conheça Nossa Equipe</h2>
            <div class=''>
            <Integrantes
                src={anthony}
                alt="Anthony Medeiros"
                nome="Anthony Medeiros"
                h6="Desenvolvedor Full Stack"
                p="Responsável pela documentação técnica e gestão das informações legais da empresa."
            />
            <Integrantes
                src={luiz}
                alt="Luiz Antônio"
                nome="Luiz Antônio"
                h6="Desenvolvedor Sênior"
                p="Com profundo conhecimento em linguagens de programação e desenvolvimento de grandes projetos."
            />
            <Integrantes
                src={jp}
                alt="João Pedro Medeiros"
                nome="João Pedro Medeiros"
                h6="Desenvolvedor Front-End"
                p="Especialista em design e prototipagem, atuando também em interface de usuário."
            />
            <Integrantes
                src={vilela}
                alt="Gabriel Vilela"
                nome="Gabriel Vilela"
                h6="Desenvolvedor Full Stack"
                p="Com forte habilidade em tecnologias front-end e back-end, oferece soluções completas."
            />
            <Integrantes
                src={kelmany}
                alt="Kelmany Marques"
                nome="Kelmany Marques"
                h6="Scrum Master"
                p="Responsável pela gestão ágil do time e pela coordenação dos sprints e entregas."
            />
            <Integrantes
                src={miguel}
                alt="Miguel Rodrigues"
                nome="Miguel Rodrigues"
                h6="Designer UI/UX"
                p="Responsável pela criação de interfaces inovadoras e experiências de usuário excepcionais."
            />
            </div>
        </section>
    )
}