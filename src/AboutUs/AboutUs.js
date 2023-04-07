import React from "react";
import Footer from "../Footer/Footer";
import './AboutUs.css'

function AboutUs() {
  return(
    <>
      <div id = "aboutUs" class=" flex flex-col justify-between h-full">
        <div clas="flex justify-center">
          <div
            class="font-light text-5xl self-center pb-10 text-[#6c8ea7] flex justify-center mt-36">
            Mariana & João
          </div>
          <div
            class="self-center text-4xl align-middle pb-10 text-[#6c8ea7] font-light flex justify-center mb-10">
            1 de Julho 2023
          </div>
        </div>   

        <div class="mx-10 sm:mx-36 flex flex-col lg:flex-row">
        <div class="text-justify">
        <p class="mb-4">Queridos família e amigos!</p>
        <p class="mb-4">Bem-vindos ao evento DO ANO!</p>
        <p>Para quem não nos conhece tão bem... Cá vai um bocadinho da nossa história.</p>
        <p class="mb-4">Corria o mês de Julho de 2013 quando começamos a namorar. Início difícil, mas o João é persistente e com muita paciência convenceu a Mariana que era o pretendente certo. A verdade é que desde então não nos largamos mais!</p>
        <p>A partir daqui foi sempre a somar. No ano seguinte adotámos a Íris, uma gata de personalidade refinada (diz que sai à dona... ups) de quem gostamos muito.</p>
        <p class="mb-4">Fizemos muitas viagens juntos – Inglaterra, França, Holanda, República Checa, Hungria e mais uns quantos países. Atividade largamente apreciada que esperamos ir mantendo! Idealmente intercalamos estas viagens com festivais de tunas, brindes com finos Superbock, idas ao cinema, eventos familiares (atividade intensa, dado o tamanho da família da Mariana) e jantares com os nossos amigos.</p>
        <p>Namoramos à distância durante o tempo em que a Mariana esteve de Erasmus e depois quando foi morar para Londres – e foi desde aí que decidimos que nunca mais queríamos embarcar nestas aventuras um sem o outro.</p>
        <p>Em Fevereiro do ano passado, durante uma viagem a Liverpool (paragem imprescindível para uma fã dos Beatles como a Mariana) o João encheu-se de coragem, ajoelhou-se e o inevitável aconteceu: ficámos noivos!</p>
        <p class="mb-4">Em Maio do mesmo ano juntamos as escovas de dentes e fomos morar juntos, na mesma casa onde começamos a namorar em Julho de 2013.</p>
        <p></p>
        <p>Casar e construir uma família foi sempre o nosso maior desejo, inspirados pelas nossas famílias e excelentes exemplos de valores familiares, que nos deixam tão vaidosos. Este dia representa para nós o início da nossa família e não podíamos estar mais contentes por partilhar este momento convosco. Vamos a isto!</p>
        </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default AboutUs;