function getCryptoInfo() {
    var crypto = document.getElementById("cryptos").value;
    var url = "https://api.coingecko.com/api/v3/simple/price?ids=" + crypto + "&vs_currencies=usd,eur,brl";
    var amount = document.getElementById("amount").value;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        
        if (!data || !data[crypto]) {
            console.error("Dados de informações da criptomoeda não encontrados");
            return; 
        }

        var cryptoInfoDiv = document.getElementById("cryptoInfo");
        cryptoInfoDiv.innerHTML = "<h3>Informações sobre " + crypto + "</h3>";
        
        var usdPrice = parseFloat(data[crypto].usd) * amount;
        var eurPrice = parseFloat(data[crypto].eur) * amount;
        var brlPrice = parseFloat(data[crypto].brl) * amount;

        cryptoInfoDiv.innerHTML += "<p>Preço em USD: $" + usdPrice.toFixed(2) + "</p>"; 
        cryptoInfoDiv.innerHTML += "<p>Preço em EUR: €" + eurPrice.toFixed(2) + "</p>";
        cryptoInfoDiv.innerHTML += "<p>Preço em BRL: R$" + brlPrice.toFixed(2) + "</p>";
        
        
        var imageSrc;
        var description;

        switch(crypto) {
            case 'solana':
                    imageSrc = "stark.jpg";
                    description = "Stark Coin: A Moeda do Futuro\n\
                    A Stark Coin é uma criptomoeda revolucionária que tem conquistado o mundo financeiro com sua abordagem inovadora e tecnologia de ponta. Criada pela Stark Corporation, uma das líderes globais em tecnologia e inovação, a Stark Coin promete transformar a maneira como realizamos transações financeiras\n\
                    Baseada em uma blockchain sólida e segura, a Stark Coin oferece rapidez e eficiência em todas as transações, eliminando intermediários e reduzindo custos. Sua arquitetura descentralizada garante a segurança e a transparência das operações, tornando-a uma escolha confiável para investidores e usuários em todo o mundo.\n\
                    Com uma equipe de desenvolvimento altamente qualificada e dedicada, a Stark Corporation continua a aprimorar a Stark Coin, implementando novos recursos e melhorias para atender às demandas do mercado. Sua visão de democratizar o acesso aos serviços financeiros e promover a inclusão financeira impulsiona o desenvolvimento contínuo da Stark Coin.\n\
                    Além disso, a Stark Coin está se tornando cada vez mais integrada ao ecossistema financeiro global, com parcerias estratégicas sendo estabelecidas com instituições financeiras tradicionais e empresas inovadoras. Essas colaborações visam expandir o alcance e a utilidade da Stark Coin, proporcionando aos usuários uma variedade de opções e oportunidades.\n\
                    Com uma comunidade vibrante e engajada de entusiastas e investidores, a Stark Coin está rapidamente se consolidando como uma das principais criptomoedas do mercado. Seu potencial de crescimento e sua visão futurista atraem cada vez mais atenção e adoção, preparando o cenário para uma nova era de inovação financeira global.";
                    break;
            case 'bitcoin':
                imageSrc = "bitcoin.png";
                description = "Bitcoin é a primeira criptomoeda descentralizada do mundo.";
                break;
            case 'ethereum':
                imageSrc = "ethereum.png";
                description = "Ethereum é uma plataforma para contratos inteligentes e aplicativos descentralizados.";
                break;
            case 'cardano':
                imageSrc = "cardano.png";
                description = "Cardano é uma plataforma de contratos inteligentes que visa oferecer mais recursos do que concorrentes.";
                break;
            case 'binancecoin':
                imageSrc = "binance.png";
                description = "Binance Coin é a criptomoeda nativa da exchange Binance.";
                break;
            default:
                imageSrc = "";
                description = "";
        }

        if (imageSrc !== "") {
            cryptoInfoDiv.innerHTML += "<div class='crypto-details'><img src='" + imageSrc + "' alt='" + crypto + "'><p>" + description + "</p></div>";
        }
       
        cryptoInfoDiv.style.display = "block";
    })
    .catch(error => {
        console.error("Erro ao obter informações da criptomoeda:", error);
    });
}
