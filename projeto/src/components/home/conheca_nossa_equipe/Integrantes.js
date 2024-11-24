export default function Integrantes ({src,alt,nome,h6,p,href}) {
    return (
        <div class="team-member col-2 mb-4">
            <img src={src} alt={"foto de " + {alt}}/>
            <div>
                <h5>{nome}</h5>
                <h6>{h6}</h6>
                <p>{p}</p>
            </div>
            <a class='btn btn-info btn-sm' href={href}>Saiba Mais</a>
        </div>
    )
}