// css
import './Artistas.css'

// react 
import { useState } from 'react'
import ArtistasBox from './ArtistasBox'

const Artistas = () => {

  const [artistas, setArtistas] = useState([
    {
      id: 1,
      nmrArtista: 8,
      nomeArtista: "Corey Taylor",
      funcaoArtista: "Vocal",
      imgArtista: "https://confererock.com.br/wp-content/uploads/2022/09/Slipknot-Corey-Taylor-July-2022-credit-Jonathan-Weiner-800x445.jpg",
      imgModal: "https://confererock.com.br/wp-content/uploads/2022/09/Slipknot-Corey-Taylor-July-2022-credit-Jonathan-Weiner-800x445.jpg",
      bioArtista: "Corey Todd Taylor é um compositor, escritor e vocalista das bandas Stone Sour e Slipknot. Na banda Slipknot, Corey é o número #8.",
    },
    {
      id: 2,
      nomeArtista: "Craig Jones",
      nmrArtista: 5,
      funcaoArtista: "Sampler",
      imgArtista: "https://i.pinimg.com/originals/7e/43/a5/7e43a548020ed24831d55f59080939d5.jpg",
      imgModal: "https://steamuserimages-a.akamaihd.net/ugc/850465965363559298/107579B93CF02DF38B379AFB3D5E68FB35E197BD/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
      bioArtista: "Craig Michael Jones é um músico norte-americano. Nascido em Des Moines, Iowa, ele é mais conhecido por ser o sampler e tecladista da banda Slipknot, no qual escolheu o número #5. Jones ingressou na banda em 1996 logo após a gravação de Mate. Feed. Kill."
    },
    {
      id: 3,
      nmrArtista: 7,
      nomeArtista: "Mick Thomson",
      funcaoArtista: "Guitarra",
      imgArtista: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Mick_Thomson-JD.jpg",
      imgModal: "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2017/02/Mick-Thomson.jpg",
      bioArtista: "Mickael Gordon Thomson, conhecido como Mick ou pelo seu número #7, é um músico norte-americano e um dos guitarristas do Slipknot. Após a saída de Joey Jordison em 2013, Thomson se tornou o terceiro membro mais antigo do Slipknot"
    },
    {
      id: 4,
      nmrArtista: 4,
      nomeArtista: "James Root",
      funcaoArtista: "Guitarra",
      imgArtista: "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2019/06/Jim-Root-do-Slipknot.jpg",
      imgModal: "https://rollingstone.uol.com.br/media/_versions/jim_root_-_foto_amy_harris__invision__ap_widelg.jpg",
      bioArtista: "James Donald Root, ou simplesmente Jim Root, é um guitarrista estadunidense integrante da banda de metal Slipknot e ex integrante da banda de metal alternativo/post-grunge Stone Sour. Jim foi demitido da banda em maio de 2013, para se dedicar ao Slipknot. O Jim foi a última aquisição da banda Slipknot",
    },
    {
      id: 5,
      nomeArtista: "Sid Wilson",
      nmrArtista: 0,
      funcaoArtista: "DJ",
      imgArtista: "https://i0.wp.com/www.wikimetal.com.br/wp-content/uploads/2018/07/sid-wilson-slipknot-anuncia-disco-solo.jpg?w=696&ssl=1",
      imgModal: "https://media.rockbizz.com.br/2019/11/slipknot-sid-wilson-knotfest.jpg",
      bioArtista: "Sidney George Wilson III, também conhecido como The DJ, DJ Starscream e #0 é um músico americano que atualmente faz parte da banda Slipknot",
    },
    {
      id: 6,
      nomeArtista: "Shwan Crahan",
      nmrArtista: 6,
      funcaoArtista: "Percussão",
      imgArtista: "https://cdn.mos.cms.futurecdn.net/ZV5vTCpURJvVDMpGGixV7S-970-80.jpg.webp",
      imgModal: "https://i0.wp.com/www.wikimetal.com.br/wp-content/uploads/2021/06/Shawn-Clown-Crahan-Slipknot.jpg?resize=1170%2C658&ssl=1",
      bioArtista: "Michael Shawn Crahan também conhecido como Clown, Kong, ou pelo seu número # 6, é um músico americano conhecido como percussionista e fundador da banda de Nu-Metal Slipknot, é o baterista do To My Surprise e Dirty Little Rabbits.",
    },
    {
      id: 7,
      nmrArtista: "",
      nomeArtista: "Jay Weinberg",
      funcaoArtista: "Bateria",
      imgArtista: "https://revistafreak.com/wp-content/uploads/2019/06/JayWeinberg01.jpg",
      imgModal: "https://headbangersbr.com/wp-content/uploads/2020/07/jay-weinberg.jpg",
      bioArtista: "Jay Weinberg, é um baterista nascido nos Estados Unidos e filho do baterista Max Weinberg. Na turnê de 2009, ele substituiu seu pai na E Street Band de Bruce Springsteen. Em 2010, ele foi brevemente o baterista do Madball. Durante 2011 e 2012, Weinberg tocou no Against Me!. Em 2014, se tornou o baterista do Slipknot.",
    },
    {
      id: 8,
      nmrArtista: "",
      nomeArtista: "Alessandro V.",
      funcaoArtista: "Baixo",
      imgArtista: "https://i.pinimg.com/originals/f8/4a/8b/f84a8bef5801848f4c9ac31480934935.jpg",
      imgModal: "https://cdn.mos.cms.futurecdn.net/6Bz8CpVSUdXAFELp36L7zL-970-80.jpg.webp",
      bioArtista: "Alessandro Venturella é um músico britânico que já foi guitarrista do Krokodil e do Cry For Silence. Ele também já foi técnico de guitarra de Brent Hinds do Mastodon, Coheed and Cambria, e do Fightstar. Atualmente é baixista do Slipknot.",
    },
    {
      id: 9,
      nmrArtista: "",
      nomeArtista: "Michael Pfaff",
      funcaoArtista: "Percussão",
      imgArtista: "https://musicfeeds.com.au/wp-content/uploads/sites/7/2022/03/Slipknot-Tortilla-Man.jpg?resize=1024,683",
      imgModal: "https://artesonora.pt/wp-content/uploads/2022/03/Tortilla-Man.jpg",
      bioArtista: "Michael Pfaff, também conhecido como Tortilla Man, é um músico americano, mais conhecido como um dos dois atuais percussionistas da banda de nu metal Slipknot. Ele também foi membro da banda de rock alternativo Dirty Little Rabbits como tecladista do então futuro colega de banda do Slipknot, Shawn Crahan."
    }

  ])

  return (
    <div>
      <div className='container-artistas'>
        {artistas && artistas.map((art) => (
          <ArtistasBox 
            key={art.id}
            nmrArtista={art.nmrArtista}
            nomeArtista={art.nomeArtista}
            funcaoArtista={art.funcaoArtista}
            imgArtista={art.imgArtista}
            imgModal={art.imgModal}
            bioArtista={art.bioArtista}
          />
        ))}
      </div>
    </div>
  )
}

export default Artistas