// css
import './Artistas.css'

// react
import { useState } from 'react'

//component
import ArtistasBox from './ArtistasBox'

const ExArtistas = () => {

    const [exArtistas, setExArtistas] = useState([
        {
          id: 1,
          nomeArtista: "Joey Jordison",
          nmrArtista: 1,
          funcaoArtista: "Bateria",
          imgArtista: "https://i.guim.co.uk/img/media/bbce8290fc0faa701faf4325880fe150665f6775/0_0_3328_4992/master/3328.jpg?width=380&quality=85&dpr=1&s=none",
          imgModal: "https://i0.wp.com/www.wikimetal.com.br/wp-content/uploads/2021/07/joey-jordison-slipknot.jpg?resize=1170%2C658&ssl=1",
          bioArtista: "Nathan Jonas Jordison foi um músico, compositor e produtor musical estadunidense, conhecido por ter sido baterista e co-fundador da banda de heavy metal Slipknot. Após deixar o grupo em 2013, o músico formou a banda Scar the Martyr. Joey também foi o guitarrista da banda de horror punk Murderdolls."
        },
        {
          id: 2,
          nmrArtista: 2,
          nomeArtista: "Paul Gray",
          funcaoArtista: "Baixo",
          imgArtista: "https://townsquare.media/site/366/files/2020/09/GettyImages-85353729.jpg?w=980&q=75",
          imgModal: "https://ogimg.infoglobo.com.br/in/6015217-b15-50f/FT1086A/paul-grey.jpg",
          bioArtista: "Paul Dedrick Gray foi um baixista estadunidense, conhecido por tocar na banda de nu metal Slipknot, seu número era o #2. Paul foi o co-fundador do Slipknot junto com Shawn e Anders, sendo o único dos integrantes da banda que anteriormente não morava no estado de Iowa."
        },
        {
          id: 3,
          nmrArtista: 3,
          nomeArtista: "Chris Fehn",
          funcaoArtista: "Percussionista",
          imgArtista: "https://i0.wp.com/www.wikimetal.com.br/wp-content/uploads/2020/11/Chis-Fehn-Slipknot.png?resize=1170%2C658&ssl=1",
          imgModal: "https://rollingstone.uol.com.br/media/_versions/slipknot-amy-harris-invision-ap_widelg.jpg",
          bioArtista: "Chris Fehn é um músico estadunidense, conhecido por ter sido percussionista e vocalista da banda de Nu Metal Slipknot. No Slipknot, Chris era o número #3."
      },
    ])

  return (
    <div>
        <div className='container-artistas'>
            {exArtistas && exArtistas.map((art) => (
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

export default ExArtistas