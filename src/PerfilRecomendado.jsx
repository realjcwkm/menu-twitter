import "./PerfilRecomendado.css";

function PerfilRecomendado({img, titulo, url_perfil}){
    return(
        <div className="containerPerfil">
            <div className="imgPerfil">
                <img src={img} alt="" />
            </div>
            <div className="infoPerfil">
                <p className="title">{titulo}</p>
                <p className="arroba">{url_perfil}</p>
            </div>
        </div>
    );
}

export default PerfilRecomendado;