import Servico from "./Servico";

export default function NossosServicos () {
    return (
        <section class="services-section">
            <h2 class="text-dark text-center mb-5">Nossos Serviços</h2>
            <div class='container d-flex justify-content-between'>
                <Servico s="Consultoria Técnica"/>
                <Servico s="Desenvolvimento SAAS"/>
                <Servico s="Suporte Dedicado"/>
                <Servico s="Integração de Sistemas"/>
            </div>
      </section>
    )
}