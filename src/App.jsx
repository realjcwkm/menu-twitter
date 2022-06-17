import Title from "./Title";
import PerfilRecomendado from "./PerfilRecomendado";

function App(){
    const perfis_recomendados = [
        {
            url_img: "../imagens/spacex.png",
            perfil: "SpaceX",
            url_perfil: "@SpaceX"
        },
        {
            url_img: "../imagens/nasa.png",
            perfil: "NASA",
            url_perfil: "@NASA"
        },
        {
            url_img: "../imagens/jeffbezos.jpg",
            perfil: "Jeff Bezos",
            url_perfil: "@JeffBezos"
        },
    ];

    return(
        <div>
            <Title/>

            { perfis_recomendados.map( (perfil, key) => {
                return <PerfilRecomendado
                        key={key}
                        img={perfil.url_img}
                        titulo={perfil.perfil}
                        url_perfil={perfil.url_perfil}
                    />
            } )  }
            
        </div>
    );
}

export default App;