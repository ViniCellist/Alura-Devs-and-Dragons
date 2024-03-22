export class CharacterView {

    chars;

    constructor(chars) {
        this.ulPersonagens = document.querySelector('ul#personagens');
        this.chars = chars;
    };

    render() {
        this.ulPersonagens.innerHTML = '';
        this.chars.forEach(char => {
            const personagemLI = this.criaPersonagem(char);
            this.ulPersonagens.appendChild(personagemLI);
        });
    };
    
    criaPersonagem = (char) => {
        const personagemLI = document.createElement('li');
        personagemLI.classList.add('char', char.constructor.job);
    
        //const estaSelecionado = this.personagensSelecionados.indexOf(personagem) !== -1 //sintaxe para quando encontra no array;
    
        //if (estaSelecionado) personagemLI.classList.add('selecionado');
    
        personagemLI.innerHTML =
    
        `
        <div class="container-superior">
            <div class="cabecalho">
                <div class="combate"></div>
                <div class="level">
                    <button class="diminuir-level">-</button>
                    <p class="level-texto">Level ${char.level}</p>
                    <button class="aumentar-level">+</button>
                </div>
            </div>
            <div class="container-imagem">
                <div class="imagem"></div>
                <div class="container-tipo">
                    <h2 class="tipo">${char.constructor.job}</h2>
                </div>
            </div>
            <div class="container-nome">
                <h3 class="nome">${char.name}</h3>
            </div>
            <div class="container-descricao">
                <p class="descricao">${char.constructor.description}</p>
            </div>
        </div>
        <div class="container-inferior">
            <img src="./src/assets/img/icone-mana.png" class="icone-mana">
            <p class="insignia">${char.obtainBadge()}</p>
            <img src="./src/assets/img/icone-vida.png" class="icone-vida">
            <h4 class="mana">${char.mp}</h4>
            <h4 class="vida">${char.hp}</h4>
        </div>
        `;
    
        /*const containerLevel = personagemLI.querySelector('.level')
        containerLevel.onclick = (evt) => {
            evt.stopPropagation()
    
            if (evt.target.classList.contains('diminuir-level')) personagem.diminuirLevel()
    
            if (evt.target.classList.contains('aumentar-level')) personagem.aumentarLevel()
    
            this.render()
        }*/
    
    
        /*personagemLI.onclick = () => {
            const jaTem2Selecionados = this.personagensSelecionados.length === 2
            if (!jaTem2Selecionados || estaSelecionado) {
                personagemLI.classList.toggle('selecionado')
    
                if (!estaSelecionado) return this.adicionaSelecao(personagem)
    
                this.removeSelecao(personagem)
            }
        }*/
    
        return personagemLI;
    };
    
    
    /*adicionaSelecao = (personagem) => {
        this.personagensSelecionados.push(personagem)
        this.render()
    }
    
    
    removeSelecao = (personagem) => {
        const indexDoPersonagemNoArray = this.personagensSelecionados.indexOf(personagem)
        this.personagensSelecionados.splice(indexDoPersonagemNoArray, 1)
        this.render()
    }
    
    escutarEventoDuelo() {
        const botaoDuelar = document.querySelector('.botao-duelar')
    
        botaoDuelar.addEventListener('click', () => {
            if (this.personagensSelecionados.length < 2) return mostrarModal('Selecione 2 personagens')
    
            const resultadoDuelo = Personagem.verificarVencedor(this.personagensSelecionados[0], this.personagensSelecionados[1])
    
            mostrarModal(resultadoDuelo)
    
            this.personagensSelecionados.splice(0, this.personagensSelecionados.length)
    
            this.render()
        })
    }*/
};

