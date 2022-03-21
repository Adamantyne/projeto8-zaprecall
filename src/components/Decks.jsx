function Decks(updateDeck) {
    if (updateDeck === "deck1" || updateDeck === "deck0") {
        return (
            [{
                ask: "O que é JSX? ",
                answer: "Uma extensão de linguagem do JavaScript"
            }, {
                ask: "O React é __",
                answer: "uma biblioteca JavaScript para construção de interfaces"
            }, {
                ask: "Componentes devem iniciar com __",
                answer: " letra maiúscula"
            }, {
                ask: "Podemos colocar __ dentro do JSX",
                answer: "expressões"
            }, {
                ask: "O ReactDOM nos ajuda __ ",
                answer: "interagindo com a DOM para colocar componentes React na mesma"
            }, {
                ask: "Usamos o npm para __",
                answer: "gerenciar os pacotes necessários e suas dependências"
            }, {
                ask: "Usamos props para __",
                answer: "passar diferentes informações para componentes "
            }, {
                ask: " Usamos estado (state) para __",
                answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
            }].sort(() => Math.random() - 0.5)
        );
    }
    else if (updateDeck === "deck2") {
        return (
            [{
                ask: "1+1",
                answer: "1"
            }, {
                ask: "1+4",
                answer: "7"
            }, {
                ask: "1+2-1",
                answer: "6"
            }, {
                ask: "1+1+1",
                answer: "7"
            }, {
                ask: "1+0",
                answer: "1"
            }, {
                ask: "1-1",
                answer: "-1"
            }, {
                ask: "3+2",
                answer: "5"
            }, {
                ask: "1+56",
                answer: "409"
            },{
                ask: "1/1",
                answer: "0"
            },{
                ask: "10+-0",
                answer: "01"
            }].sort(() => Math.random() - 0.5)
        );
    }

}
export default Decks;