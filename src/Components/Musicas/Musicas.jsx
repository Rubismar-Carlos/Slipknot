// css
import './Musicas.css'

//react
import { useState } from 'react'
import MusicasBox from './MusicasBox'

const Musicas = () => {

    const [musicas, setMusicas] = useState([
        {
            id: 1,
            topRank: "Top 1",
            nomeMusica: "Psychosocial",
            bioMusica: "Lançada em 2008, a música também foi indicada ao Grammy e perdeu, dessa vez para My Apocalypse do Metallica. Mas mereceu o topo da nossa lista mesmo assim – é uma música no estilo clássico do Slipknot, com uma letra que critica a nossa sociedade, além de muita guitarra e vocais gritados. ",
            imgMusica: "https://scontent.fgyn11-1.fna.fbcdn.net/v/t1.6435-9/40313566_1679944858784105_1770212466588909568_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGGkDkhIU7MwolYw7L2XXte9MDxgPC_Ig_0wPGA8L8iDwNxwDvZux8zZVRxPDFS_1nujgRi6kgBmMiSJAP0_KWx&_nc_ohc=Y7hI7gHarIgAX9ymbhF&_nc_ht=scontent.fgyn11-1.fna&oh=00_AfBm-xbGY0WJDj51-Ov_Zc2EZEX6NCAAq8U6YEfKjMng_g&oe=647DF743",
            urlYoutube: "https://www.youtube.com/watch?v=5abamRO41fE"
        },
        {
            id: 2,
            topRank: "Top 2",
            nomeMusica: "Duality",
            bioMusica: "Sabe quando você se sente em uma encruzilhada na vida e tem que decidir que rumo seguir? Esse é o tema de Duality, que trata exatamente dessas dualidades que aparecem no nosso caminho. O clipe foi gravado na casa de um fã e resultou em tanta destruição que a gravadora teve que pagar 55 mil dólares à família desse fã para restaurar o local.",
            imgMusica: "https://i.discogs.com/_eIHTQBRvEmGQTd9wa94wRut401zhtYrFEMuiLb9Yv0/rs:fit/g:sm/q:90/h:523/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4MTk3/My0xNjU2MzA0Njk0/LTMwOTguanBlZw.jpeg",
            urlYoutube: "https://www.youtube.com/watch?v=6fVE8kSM43I"
        },
        {
            id: 3,
            topRank: "Top 3",
            nomeMusica: "Wait And Bleed",
            bioMusica: "A ótima Wait And Bleed fala sobre um homem que sonha constantemente que está cortando os próprios pulsos até que, um dia, ele o faz na vida real e entra em desespero. Foi uma das músicas nomeadas para o Grammy de Melhor Performance de Metal, em 2001.",
            imgMusica: "https://i.discogs.com/bxCCVgwQO-aOsCrjfl3oBpvkQ0hHKWtq-2C5X4H-_xw/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMxMDA4/ODItMTYzNTE1NzM2/OS0zMDI1LmpwZWc.jpeg",
            urlYoutube: "https://www.youtube.com/watch?v=B1zCN0YhW1s"
        },
        {
            id: 4,
            topRank: "Top 4",
            nomeMusica: "Snuff",
            bioMusica: "Snuff é um exemplo legal de como a banda explora diferentes sonoridades: nessa música, o Slipknot mostra seu lado acústico e lento. A letra é um desabafo bastante triste sobre como o vocalista se sentia, percebendo que amava uma mulher que não o amava de volta.",
            imgMusica: "https://i.discogs.com/fs9YE2fcZe7CkLqqtxLPBMkT5CXIpXQosh7nxtZLEQs/rs:fit/g:sm/q:90/h:205/w:205/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4MjE1/NTctMTYwNTAzMTQ3/MS0xMzA3LnBuZw.jpeg",
            urlYoutube: "https://www.youtube.com/watch?v=LXEKuttVRIo"
        },
        {
            id: 5,
            topRank: "Top 5",
            nomeMusica: "Before I Forget",
            bioMusica: "Apesar de ter sido indicada várias vezes, a banda só venceu o Grammy por uma música: Before I Forget (2006). É uma daquelas canções que é tipo cartão postal da banda, que a gente recomenda ouvir se você não conhece muito o Slipknot",
            imgMusica: "https://i.discogs.com/8AJUBzXk_tRHQ2ayK0LTWzoXU_3VK6VLYGVjQYiqZMw/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI1MDAy/ODctMTM2NjY1MTky/NS01MTU4LmpwZWc.jpeg",
            urlYoutube: "https://www.youtube.com/watch?v=qw2LU1yS7aw"
        },
        {
            id: 6,
            topRank: "Top 6",
            nomeMusica: "The Devil In I",
            bioMusica: "Depois de tudo que a banda passou, The Devil In I fala um pouco sobre a guerra interna que os músicos viviam, especialmente depois da perda do querido baixista Paul Gray. Com essa perda, a banda teve que lidar com muitos sentimentos ruins, mas era necessário encará-los para poder seguir em frente. ",
            imgMusica: "https://www.audiograma.com.br/wp-content/uploads/2014/08/slipknot_tdii1.jpg",
            urlYoutube: "https://www.youtube.com/watch?v=XEEasR7hVhA"
        },
        {
            id: 7,
            topRank: "Top 7",
            nomeMusica: "Vermilion (pt. 1 e 2)",
            bioMusica: "No álbum Vol. 3 (The Subliminal Verses), há duas músicas que se completam: Vermilion e Vermilion pt 2. A história que atravessa as duas faixas é a de um assassino e sua obsessão neurótica por uma vítima específica. Assim, a primeira parte fala sobre a antecipação e ansiedade do homicida antes de executar o crime; já a segunda, sobre as consequências e o sentimento dele depois do assassinato.",
            imgMusica: "https://i.discogs.com/rsUldN4VrD8JSPklQFdmCTa3mgT6Z5AwdVDjY59OXMQ/rs:fit/g:sm/q:90/h:471/w:540/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5Njk3/NzgtMTMwOTcwNzcw/NS5qcGVn.jpeg",
            urlYoutube: "https://www.youtube.com/watch?v=xKcbYUwmmlE"
        },
        {
            id: 8,
            topRank: "Top 8",
            nomeMusica: "All Out Life",
            bioMusica: "Lançada no fim de 2018, All Out Life tem uma sonoridade diferente do que era esperado para o Slipknot — o que, como sempre, alguns acharam ótimo e outros detestaram. De acordo com Corey, a letra fala sobre como a indústria descarta rapidamente a música do passado e sempre quer algo inovador logo em seguida.",
            imgMusica: "https://i.discogs.com/VGyfJmBBHvqfuAfH0HQq7NwKvPLAiBk_TXwHaKC_fNI/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NDYz/MDEyLTE1NzUwNDI3/NTgtNDU5NS5qcGVn.jpeg",
            urlYoutube: "https://www.youtube.com/watch?v=wLoYIBEZEfw"
        },
        {
            id: 9,
            topRank: "Top 9",
            nomeMusica: "People = Shit",
            bioMusica: "Uma curiosidade sobre essa música é que, durante o processo de criação do álbum Iowa (2001), o avô de Sid Wilson (DJ da banda) faleceu; assim, a banda decidiu usar o luto e a raiva de Sid como parte do processo de gravação.",
            imgMusica: "https://i.discogs.com/phWCOlJdgG8hGDWhbfT4QGM6odx8C7r7ptkXZI5ys2I/rs:fit/g:sm/q:90/h:574/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg4NDcz/NjctMTQ3MDAwODU5/Ny04MTAxLmpwZWc.jpeg",
            urlYoutube: "https://www.youtube.com/watch?v=qqK1FrO3BdM"
        },
        {
            id: 10,
            topRank: "Top 10",
            nomeMusica: "Dead Memories",
            bioMusica: "Dead Memories, do álbum All Hope Is Gone (2008). Segundo o vocalista Corey Taylor, a música fala sobre os últimos dez anos da vida dele. Assim, a letra fala sobre um amor que não deu certo e o fez mal, deixando memórias mortas em seu coração.",
            imgMusica: "https://i.discogs.com/hFqkUpp6TWh0JWMR-jjcxuX2yAeRd6JhSAp1lxSsxKY/rs:fit/g:sm/q:90/h:600/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5NDEz/MzAtMTM3OTY1MTUw/MC0yMzkzLmpwZWc.jpeg",
            urlYoutube: "https://www.youtube.com/watch?v=9gsAz6S_zSw"
        }
    ])

  return (
    <div>
        <div className="musicas-top-10">
            {musicas && musicas.map((msc) => (
                <MusicasBox 
                    key={msc.id}
                    topRank={msc.topRank}
                    nomeMusica={msc.nomeMusica}
                    bioMusica={msc.bioMusica}
                    imgMusica={msc.imgMusica}
                    urlYoutube={msc.urlYoutube}
                />
            ))}
        </div>
    </div>
  )
}

export default Musicas