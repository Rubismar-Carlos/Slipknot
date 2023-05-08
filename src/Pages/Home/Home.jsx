// css
import './Home.css'

const Home = () => {

  //const imgLogo = "https://seeklogo.com/images/S/Slipknot_-_Pentagrama-logo-22F7A9AA0C-seeklogo.com.png"
  const imgLogo = "http://2.bp.blogspot.com/-zvsyoJnCbls/VcF2OhoV0tI/AAAAAAAADvY/rj11i0pZ-cQ/s1600/nona%2Bvermelho.png"
  const imgNomeBanda = 'https://www.pngall.com/wp-content/uploads/13/Slipknot-Transparent.png'
  
  return (
    <div className='home'>
      <div className="container-imagens-banda">
        <div className="nome-banda">
          <img src={imgNomeBanda} alt="imagem nome da banda" />
        </div>
          <div className="img">
              <img src={imgLogo} alt="imagem da logo" className='imgrotate'/>
          </div>
      </div>
        <div className="about-banda">
          <p>Slipknot é uma banda norte-americana de metal formada em Des Moines, Iowa, em 1995. Seu estilo musical é o nu metal, que explodiu no fim dos anos 1990 nos Estados Unidos. A banda é conhecida por seu grande número de integrantes, pelas máscaras usadas por cada um, e pelos shows enérgicos, o que garantiu um número grande de fãs jovens até os dias atuais.</p>
        </div>
    </div>
  )
}

export default Home