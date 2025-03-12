import "./App.css";
import foto from "./img/fotoperfil.jpg";
import Perfil from "./components/perfil/perfil";
import Links from "./components/links/Links";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Rodape from "./components/rodape/Rodape";
import { useState } from "react";

const App = () => {
  // const [isLight, setIsLight] = useState(true)

  // const troca = () =>{
  //   setIsLight(!isLight);
  // }

  return (
    <div id="App" className="light">
      <Perfil fotoPerfil={foto}>@Rayssa</Perfil>

      {/* <Switch troca={troca} isLight={isLight} /> */}
    <div className="sobreMim">
    <p>Sou Rayssa, tenho 17 anos e atualmente curso Desenvolvimento de Sistemas no Ensino Médio. Meu objetivo é ingressar na faculdade de Medicina, pois tenho grande interesse na área da saúde e no impacto positivo que a medicina pode proporcionar. Busco constantemente novos aprendizados e desafios que contribuam para meu crescimento acadêmico e profissional.</p>
    </div>
    
      <ul>
        <Links
          link={
            "https://www.linkedin.com/in/rayssa-nanclares-da-silveira-533995355/"
          }
        >
          Sobre mim
        </Links>
        <Links
          link={
            "https://telemedicinamorsch.com.br/blog/tecnologia-na-medicina?srsltid=AfmBOooPxBlDnjhBHAGpvy_DsI4OQ3p0AbtGZe30gdsqrrcq2dE9p4nh"
          }
        >
          Atualidades da minha área
        </Links>
        <Links link={"https://w.app/aive4o"}>Entre em contato comigo</Links>
      </ul>

      <div id="socialLinks">
        <SocialLinks
          link={"https://www.linkedin.com/in/rayssa-nanclares-da-silveira-533995355/"}
          icon={"logo-linkedin"}
        />
        <SocialLinks
          link={
            "https://telemedicinamorsch.com.br/blog/tecnologia-na-medicina?srsltid=AfmBOooPxBlDnjhBHAGpvy_DsI4OQ3p0AbtGZe30gdsqrrcq2dE9p4nh"
          }
          icon={"medkit-outline"}
        />
        <SocialLinks link={"https://w.app/aive4o"} icon={"logo-whatsapp"} />
        
      </div>
      <Rodape>Rayssa</Rodape>
    </div>
  );
};

export default App;
