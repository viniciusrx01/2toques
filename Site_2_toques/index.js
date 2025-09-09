// Dados dos próximos jogos (simulados)
const proximosJogos = [
    {
        data: "25/11/2023",
        horario: "16:00",
        campeonato: "Brasileirão Série A",
        timeCasa: "Nosso Clube",
        timeVisitante: "Adversário 1",
        local: "Estádio Principal"
    },
    {
        data: "02/12/2023",
        horario: "19:30",
        campeonato: "Brasileirão Série A",
        timeCasa: "Adversário 2",
        timeVisitante: "Nosso Clube",
        local: "Estádio Visitante"
    },
    {
        data: "09/12/2023",
        horario: "18:00",
        campeonato: "Brasileirão Série A",
        timeCasa: "Nosso Clube",
        timeVisitante: "Adversário 3",
        local: "Estádio Principal"
    },
    {
        data: "16/12/2023",
        horario: "17:00",
        campeonato: "Brasileirão Série A",
        timeCasa: "Adversário 4",
        timeVisitante: "Nosso Clube",
        local: "Estádio Visitante"
    }
];

// Dados dos produtos da loja
const produtos = [
    {
        id: 1,
        nome: "Uniforme Titular 2023",
        descricao: "Camisa oficial do clube temporada 2023",
        preco: 299.90,
        imagem: "https://via.placeholder.com/300x300/ff0000/ffffff?text=Uniforme+Titular",
        categoria: "uniformes",
        tag: "NOVO"
    },
    {
        id: 2,
        nome: "Uniforme Reserva 2023",
        descricao: "Segundo uniforme oficial temporada 2023",
        preco: 289.90,
        imagem: "https://via.placeholder.com/300x300/0000cc/ffffff?text=Uniforme+Reserva",
        categoria: "uniformes",
        tag: "LANÇAMENTO"
    },
    {
        id: 3,
        nome: "Camisa Treino",
        descricao: "Camisa de treino oficial do clube",
        preco: 199.90,
        imagem: "https://via.placeholder.com/300x300/ff0000/ffffff?text=Camisa+Treino",
        categoria: "camisas"
    },
    {
        id: 4,
        nome: "Camisa Torcedor",
        descricao: "Camisa para torcedor com tecnologia dry fit",
        preco: 249.90,
        imagem: "https://via.placeholder.com/300x300/0000cc/ffffff?text=Camisa+Torcedor",
        categoria: "camisas"
    },
    {
        id: 5,
        nome: "Boné Oficial",
        descricao: "Boné com logo oficial do clube",
        preco: 79.90,
        imagem: "https://github.com/viniciusrx01/2toques/blob/main/Site_2_toques/img/loja/bone.png",
        categoria: "acessorios"
    },
    {
        id: 6,
        nome: "Moletom Oficial",
        descricao: "Moletom com cores oficiais do clube",
        preco: 179.90,
        imagem: "https://via.placeholder.com/300x300/0000cc/ffffff?text=Moletom+Oficial",
        categoria: "acessorios"
    },
    {
        id: 7,
        nome: "Meiões Oficiais",
        descricao: "Par de meiões oficiais do clube",
        preco: 49.90,
        imagem: "https://via.placeholder.com/300x300/ff0000/ffffff?text=Meiões+Oficiais",
        categoria: "acessorios"
    },
    {
        id: 8,
        nome: "Jaqueta Térmica",
        descricao: "Jaqueta térmica para os dias frios",
        preco: 349.90,
        imagem: "https://via.placeholder.com/300x300/0000cc/ffffff?text=Jaqueta+Térmica",
        categoria: "acessorios",
        tag: "OFERTA"
    }
];

// Dados do elenco (simulados)
const elenco = {
    goleiros: [
        {
            id: 1,
            nome: "Carlos Silva",
            apelido: "Carlão",
            numero: 1,
            posicao: "Goleiro",
            idade: 28,
            nacionalidade: "Brasileiro",
            altura: "1,92m",
            peso: "85kg",
            imagem: "https://via.placeholder.com/300x400/ff0000/ffffff?text=CS",
            estatisticas: {
                jogos: 25,
                defesas: 78,
                golsSofridos: 22
            }
        },
        {
            id: 2,
            nome: "João Santos",
            apelido: "Jão",
            numero: 12,
            posicao: "Goleiro",
            idade: 23,
            nacionalidade: "Brasileiro",
            altura: "1,88m",
            peso: "80kg",
            imagem: "https://via.placeholder.com/300x400/0000cc/ffffff?text=JS",
            estatisticas: {
                jogos: 5,
                defesas: 15,
                golsSofridos: 6
            }
        }
    ],
    defensores: [
        {
            id: 3,
            nome: "Ricardo Oliveira",
            apelido: "Ricardão",
            numero: 4,
            posicao: "Zagueiro",
            idade: 26,
            nacionalidade: "Brasileiro",
            altura: "1,85m",
            peso: "78kg",
            imagem: "https://via.placeholder.com/300x400/ff0000/ffffff?text=RO",
            estatisticas: {
                jogos: 28,
                gols: 3,
                desarmes: 45
            }
        },
        {
            id: 4,
            nome: "Marcos Lima",
            apelido: "Marcão",
            numero: 3,
            posicao: "Zagueiro",
            idade: 24,
            nacionalidade: "Brasileiro",
            altura: "1,82m",
            peso: "76kg",
            imagem: "https://via.placeholder.com/300x400/0000cc/ffffff?text=ML",
            estatisticas: {
                jogos: 26,
                gols: 1,
                desarmes: 38
            }
        },
        {
            id: 5,
            nome: "Juan Perez",
            apelido: "Juan",
            numero: 2,
            posicao: "Lateral",
            idade: 29,
            nacionalidade: "Argentino",
            altura: "1,78m",
            peso: "72kg",
            imagem: "https://via.placeholder.com/300x400/ff0000/ffffff?text=JP",
            estatisticas: {
                jogos: 24,
                gols: 2,
                assistencias: 5
            }
        }
    ],
    meioCampistas: [
        {
            id: 6,
            nome: "Pedro Costa",
            apelido: "Pedrinho",
            numero: 8,
            posicao: "Volante",
            idade: 25,
            nacionalidade: "Brasileiro",
            altura: "1,80m",
            peso: "75kg",
            imagem: "https://via.placeholder.com/300x400/0000cc/ffffff?text=PC",
            estatisticas: {
                jogos: 27,
                gols: 4,
                assistencias: 7
            }
        },
        {
            id: 7,
            nome: "Lucas Mendes",
            apelido: "Lucas",
            numero: 10,
            posicao: "Meia",
            idade: 27,
            nacionalidade: "Brasileiro",
            altura: "1,76m",
            peso: "70kg",
            imagem: "https://via.placeholder.com/300x400/ff0000/ffffff?text=LM",
            estatisticas: {
                jogos: 29,
                gols: 8,
                assistencias: 12
            }
        }
    ],
    atacantes: [
        {
            id: 8,
            nome: "Alexandre Souza",
            apelido: "Xande",
            numero: 9,
            posicao: "Atacante",
            idade: 26,
            nacionalidade: "Brasileiro",
            altura: "1,84m",
            peso: "79kg",
            imagem: "https://via.placeholder.com/300x400/0000cc/ffffff?text=AS",
            estatisticas: {
                jogos: 28,
                gols: 15,
                assistencias: 6
            }
        },
        {
            id: 9,
            nome: "Rafael Santos",
            apelido: "Rafa",
            numero: 7,
            posicao: "Atacante",
            idade: 24,
            nacionalidade: "Brasileiro",
            altura: "1,79m",
            peso: "73kg",
            imagem: "https://via.placeholder.com/300x400/ff0000/ffffff?text=RS",
            estatisticas: {
                jogos: 26,
                gols: 10,
                assistencias: 8
            }
        }
    ]
};

// Dados da comissão técnica
const comissaoTecnica = [
    {
        nome: "Roberto Silva",
        cargo: "Técnico",
        experiencia: "15 anos de experiência",
        imagem: "https://via.placeholder.com/200x200/ff0000/ffffff?text=RS"
    },
    {
        nome: "Paulo Costa",
        cargo: "Auxiliar Técnico",
        experiencia: "8 anos de experiência",
        imagem: "https://via.placeholder.com/200x200/0000cc/ffffff?text=PC"
    },
    {
        nome: "Dr. Carlos Mendes",
        cargo: "Médico",
        experiencia: "12 anos no clube",
        imagem: "https://via.placeholder.com/200x200/ff0000/ffffff?text=CM"
    },
    {
        nome: "José Oliveira",
        cargo: "Preparador Físico",
        experiencia: "10 anos de experiência",
        imagem: "https://via.placeholder.com/200x200/0000cc/ffffff?text=JO"
    }
];

// Carrinho de compras
let carrinho = [];
let carrinhoCount = 0;

// Função para carregar os próximos jogos
function carregarProximosJogos() {
    const tabelaJogos = document.querySelector('.tabela-jogos');
    if (!tabelaJogos) return;
    
    tabelaJogos.innerHTML = '';
    
    proximosJogos.forEach(jogo => {
        const jogoItem = document.createElement('div');
        jogoItem.classList.add('jogo-item');
        
        jogoItem.innerHTML = `
            <div class="jogo-data">${jogo.data} - ${jogo.horario}</div>
            <div class="jogo-times">
                <div class="jogo-time">
                    <img src="https://via.placeholder.com/30x30/ff0000/ffffff?text=NC" alt="${jogo.timeCasa}">
                    <span>${jogo.timeCasa}</span>
                </div>
                <span class="vs">x</span>
                <div class="jogo-time">
                    <img src="https://via.placeholder.com/30x30/cccccc/333333?text=ADV" alt="${jogo.timeVisitante}">
                    <span>${jogo.timeVisitante}</span>
                </div>
            </div>
            <div class="jogo-info-small">
                <div>${jogo.campeonato}</div>
                <div>${jogo.local}</div>
            </div>
        `;
        
        tabelaJogos.appendChild(jogoItem);
    });
}

// Função para alternar o menu mobile
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
    
    // Prevenir scroll do body quando o menu está aberto
    if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Função para alternar a exibição dos jogos
function toggleJogos() {
    const calendarioJogos = document.querySelector('.calendario-jogos');
    const verMaisBtn = document.querySelector('#ver-mais-jogos');
    const icon = verMaisBtn.querySelector('i');
    
    calendarioJogos.classList.toggle('hidden');
    
    if (calendarioJogos.classList.contains('hidden')) {
        verMaisBtn.innerHTML = 'MAIS JOGOS <i class="fas fa-chevron-down"></i>';
    } else {
        verMaisBtn.innerHTML = 'MENOS JOGOS <i class="fas fa-chevron-up"></i>';
    }
}

// Função para alternar as abas de mídias
function toggleMidiasTab(tabName) {
    // Esconder todos os conteúdos de abas
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(pane => {
        pane.classList.remove('active');
    });
    
    // Mostrar a aba selecionada
    document.getElementById(tabName).classList.add('active');
    
    // Atualizar botões ativos
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    
    event.currentTarget.classList.add('active');
}

// Função para simular o aumento de sócios
function simularAumentoSocios() {
    const numeroSocios = document.getElementById('numero-socios');
    if (!numeroSocios) return;
    
    let currentValue = parseInt(numeroSocios.textContent.replace('.', ''));
    const newValue = currentValue + Math.floor(Math.random() * 10) + 1;
    
    // Animação de contagem
    let startTimestamp = null;
    const duration = 2000;
    
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (newValue - currentValue) + currentValue);
        numeroSocios.textContent = value.toLocaleString('pt-BR');
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    
    window.requestAnimationFrame(step);
}

// Função para validar o formulário de ouvidoria
function validarFormOuvidoria(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;
    
    if (!nome || !email || !assunto || !mensagem) {
        alert('Por favor, preencha todos os campos do formulário.');
        return false;
    }
    
    // Simular envio do formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    event.target.reset();
    
    return true;
}

// Função para carregar os produtos na loja
function carregarProdutos(categoria = 'todos') {
    const produtosGrid = document.querySelector('.produtos-grid');
    if (!produtosGrid) return;
    
    produtosGrid.innerHTML = '';
    
    const produtosFiltrados = categoria === 'todos' 
        ? produtos 
        : produtos.filter(produto => produto.categoria === categoria);
    
    produtosFiltrados.forEach(produto => {
        const produtoCard = document.createElement('div');
        produtoCard.classList.add('produto-card');
        produtoCard.dataset.categoria = produto.categoria;
        
        produtoCard.innerHTML = `
            <div class="produto-img">
                <img src="${produto.imagem}" alt="${produto.nome}">
                ${produto.tag ? `<span class="produto-tag">${produto.tag}</span>` : ''}
            </div>
            <div class="produto-content">
                <h3>${produto.nome}</h3>
                <p class="produto-desc">${produto.descricao}</p>
                <div class="produto-preco">R$ ${produto.preco.toFixed(2)}</div>
                <div class="produto-acoes">
                    <button class="btn-adicionar" data-id="${produto.id}">
                        <i class="fas fa-shopping-cart"></i> Adicionar
                    </button>
                </div>
            </div>
        `;
        
        produtosGrid.appendChild(produtoCard);
    });
    
    // Adicionar event listeners aos botões de adicionar
    document.querySelectorAll('.btn-adicionar').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            adicionarAoCarrinho(productId);
        });
    });
}

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(productId) {
    const produto = produtos.find(p => p.id === productId);
    const itemExistente = carrinho.find(item => item.id === productId);
    
    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({
            ...produto,
            quantidade: 1
        });
    }
    
    atualizarCarrinho();
    abrirCarrinho();
}

// Função para remover produto do carrinho
function removerDoCarrinho(productId) {
    carrinho = carrinho.filter(item => item.id !== productId);
    atualizarCarrinho();
}

// Função para atualizar a quantidade de um produto no carrinho
function atualizarQuantidade(productId, novaQuantidade) {
    const item = carrinho.find(item => item.id === productId);
    if (item) {
        if (novaQuantidade <= 0) {
            removerDoCarrinho(productId);
        } else {
            item.quantidade = novaQuantidade;
            atualizarCarrinho();
        }
    }
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    const carrinhoItens = document.querySelector('.carrinho-itens');
    const carrinhoCountElement = document.querySelector('.carrinho-count');
    const totalValorElement = document.querySelector('.total-valor');
    
    // Atualizar contador
    carrinhoCount = carrinho.reduce((total, item) => total + item.quantidade, 0);
    if (carrinhoCountElement) {
        carrinhoCountElement.textContent = carrinhoCount;
    }
    
    // Atualizar itens do carrinho (se estiver na página da loja)
    if (carrinhoItens) {
        if (carrinho.length === 0) {
            carrinhoItens.innerHTML = '<div class="carrinho-vazio">Seu carrinho está vazio</div>';
            if (totalValorElement) {
                totalValorElement.textContent = 'R$ 0,00';
            }
            return;
        }
        
        carrinhoItens.innerHTML = '';
        let total = 0;
        
        carrinho.forEach(item => {
            const itemTotal = item.preco * item.quantidade;
            total += itemTotal;
            
            const carrinhoItem = document.createElement('div');
            carrinhoItem.classList.add('carrinho-item');
            carrinhoItem.innerHTML = `
                <div class="carrinho-item-img">
                    <img src="${item.imagem}" alt="${item.nome}">
                </div>
                <div class="carrinho-item-info">
                    <h4>${item.nome}</h4>
                    <div class="carrinho-item-preco">R$ ${item.preco.toFixed(2)}</div>
                    <div class="carrinho-item-quantidade">
                        <button class="quantidade-btn minus" data-id="${item.id}">-</button>
                        <span class="quantidade-value">${item.quantidade}</span>
                        <button class="quantidade-btn plus" data-id="${item.id}">+</button>
                    </div>
                    <button class="remover-item" data-id="${item.id}">Remover</button>
                </div>
            `;
            
            carrinhoItens.appendChild(carrinhoItem);
        });
        
        // Atualizar total
        if (totalValorElement) {
            totalValorElement.textContent = `R$ ${total.toFixed(2)}`;
        }
        
        // Adicionar event listeners aos botões de quantidade e remover
        document.querySelectorAll('.quantidade-btn.minus').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                const item = carrinho.find(item => item.id === id);
                if (item) {
                    atualizarQuantidade(id, item.quantidade - 1);
                }
            });
        });
        
        document.querySelectorAll('.quantidade-btn.plus').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                const item = carrinho.find(item => item.id === id);
                if (item) {
                    atualizarQuantidade(id, item.quantidade + 1);
                }
            });
        });
        
        document.querySelectorAll('.remover-item').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                removerDoCarrinho(id);
            });
        });
    }
}

// Função para abrir o carrinho
function abrirCarrinho() {
    const carrinhoModal = document.querySelector('.carrinho-modal');
    const overlay = document.querySelector('.overlay');
    
    if (carrinhoModal && overlay) {
        carrinhoModal.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Função para fechar o carrinho
function fecharCarrinho() {
    const carrinhoModal = document.querySelector('.carrinho-modal');
    const overlay = document.querySelector('.overlay');
    
    if (carrinhoModal && overlay) {
        carrinhoModal.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Função para finalizar a compra
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    alert('Compra finalizada com sucesso! Obrigado pela preferência.');
    carrinho = [];
    atualizarCarrinho();
    fecharCarrinho();
}

// Função para filtrar produtos por categoria
function filtrarProdutos(categoria) {
    carregarProdutos(categoria);
    
    // Atualizar botões ativos
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    event.currentTarget.classList.add('active');
}

// Funções para FAQ (Perguntas Frequentes)
function initFAQ() {
    const faqPerguntas = document.querySelectorAll('.faq-pergunta');
    
    faqPerguntas.forEach(pergunta => {
        pergunta.addEventListener('click', function() {
            const resposta = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Alternar a classe active na resposta
            resposta.classList.toggle('active');
            
            // Alternar o ícone
            if (resposta.classList.contains('active')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });
}

// Função para animar contadores estatísticos
function animarContadores() {
    const contadores = document.querySelectorAll('.estatistica-numero');
    
    contadores.forEach(contador => {
        const valorFinal = parseInt(contador.getAttribute('data-count'));
        const duracao = 2000;
        const incremento = valorFinal / (duracao / 16);
        let valorAtual = 0;
        
        const timer = setInterval(() => {
            valorAtual += incremento;
            
            if (valorAtual >= valorFinal) {
                contador.textContent = valorFinal.toLocaleString('pt-BR');
                clearInterval(timer);
            } else {
                contador.textContent = Math.floor(valorAtual).toLocaleString('pt-BR');
            }
        }, 16);
    });
}

// Função para filtrar eventos por categoria
function filtrarEventos(categoria) {
    const eventos = document.querySelectorAll('.evento-item');
    
    eventos.forEach(evento => {
        // Não aplicar filtro em eventos passados
        if (evento.classList.contains('passado')) return;
        
        const eventoCategoria = evento.getAttribute('data-categoria');
        
        if (categoria === 'todos' || eventoCategoria === categoria) {
            evento.style.display = 'flex';
        } else {
            evento.style.display = 'none';
        }
    });
    
    // Atualizar botões ativos
    document.querySelectorAll('.eventos-filtros .filtro-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    event.currentTarget.classList.add('active');
}

// Função para validar o formulário de newsletter
function validarNewsletter(event) {
    event.preventDefault();
    
    const emailInput = event.target.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    if (!email) {
        alert('Por favor, informe seu e-mail.');
        return false;
    }
    
    // Simular cadastro
    alert('E-mail cadastrado com sucesso! Você receberá nossas novidades em breve.');
    event.target.reset();
    
    return true;
}

// Função para carregar jogadores na página de elenco
function carregarJogadores(categoria = 'todos') {
    const jogadoresGrid = document.querySelector('.jogadores-grid');
    if (!jogadoresGrid) return;
    
    jogadoresGrid.innerHTML = '';
    
    let jogadores = [];
    
    if (categoria === 'todos') {
        // Combinar todos os jogadores
        jogadores = [
            ...elenco.goleiros,
            ...elenco.defensores,
            ...elenco.meioCampistas,
            ...elenco.atacantes
        ];
    } else {
        // Filtrar por categoria
        jogadores = elenco[categoria] || [];
    }
    
    jogadores.forEach(jogador => {
        const jogadorCard = document.createElement('div');
        jogadorCard.classList.add('jogador-card');
        jogadorCard.dataset.categoria = categoria;
        
        jogadorCard.innerHTML = `
            <div class="jogador-img">
                <img src="${jogador.imagem}" alt="${jogador.nome}">
                <div class="jogador-numero">${jogador.numero}</div>
                <div class="jogador-posicao">${jogador.posicao}</div>
            </div>
            <div class="jogador-info">
                <h4>${jogador.nome}</h4>
                <div class="jogador-apelido">"${jogador.apelido}"</div>
                <div class="jogador-detalhes">
                    <div class="jogador-detalhe">
                        <div class="valor">${jogador.idade}</div>
                        <div class="label">Idade</div>
                    </div>
                    <div class="jogador-detalhe">
                        <div class="valor">${jogador.altura}</div>
                        <div class="label">Altura</div>
                    </div>
                    <div class="jogador-detalhe">
                        <div class="valor">${jogador.nacionalidade}</div>
                        <div class="label">Nacionalidade</div>
                    </div>
                </div>
                <div class="jogador-redes">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                </div>
            </div>
        `;
        
        jogadoresGrid.appendChild(jogadorCard);
    });
}

// Função para carregar comissão técnica
function carregarComissaoTecnica() {
    const comissaoGrid = document.querySelector('.comissao-grid');
    if (!comissaoGrid) return;
    
    comissaoGrid.innerHTML = '';
    
    comissaoTecnica.forEach(membro => {
        const comissaoCard = document.createElement('div');
        comissaoCard.classList.add('comissao-card');
        
        comissaoCard.innerHTML = `
            <div class="comissao-img">
                <img src="${membro.imagem}" alt="${membro.nome}">
            </div>
            <div class="comissao-info">
                <h4>${membro.nome}</h4>
                <div class="comissao-cargo">${membro.cargo}</div>
                <div class="comissao-experiencia">${membro.experiencia}</div>
            </div>
        `;
        
        comissaoGrid.appendChild(comissaoCard);
    });
}

// Função para filtrar jogadores por categoria
function filtrarJogadores(categoria) {
    carregarJogadores(categoria);
    
    // Atualizar botões ativos
    document.querySelectorAll('.elenco-filtros .filtro-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    event.currentTarget.classList.add('active');
}

// Função para detectar dispositivos touch
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

// Função para melhorar a experiência em dispositivos touch
function melhorarExperienciaTouch() {
    if (isTouchDevice()) {
        // Adicionar classe para estilos específicos de touch
        document.body.classList.add('touch-device');
        
        // Melhorar feedback visual para toques
        document.querySelectorAll('.btn, .btn-adicionar, .filtro-btn, .tab-btn, .menu-toggle, nav ul li a').forEach(element => {
            element.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            });
            
            element.addEventListener('touchend', function() {
                this.classList.remove('touch-active');
            });
            
            element.addEventListener('touchcancel', function() {
                this.classList.remove('touch-active');
            });
        });
    }
}

// Função para prevenir comportamentos padrão indesejados em mobile
function prevenirComportamentosMobile() {
    // Prevenir double tap zoom
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}

// Função para ajustar a altura da viewport em mobile
function ajustarAlturaViewport() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Função para fechar o menu ao clicar fora dele
function setupCliqueForaMenu() {
    document.addEventListener('click', function(event) {
        const nav = document.querySelector('nav');
        const menuToggle = document.getElementById('mobile-menu');
        
        if (nav.classList.contains('active') && 
            !nav.contains(event.target) && 
            !menuToggle.contains(event.target)) {
            toggleMenu();
        }
    });
}

// Função para melhorar o desempenho em mobile
function otimizarDesempenhoMobile() {
    // Reduzir a qualidade de imagens em dispositivos móveis (se aplicável)
    if (window.innerWidth < 768) {
        document.querySelectorAll('img').forEach(img => {
            // Adicionar lazy loading para melhor performance
            img.setAttribute('loading', 'lazy');
        });
    }
}

// Inicialização quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Carregar os próximos jogos (se estiver na página inicial)
    carregarProximosJogos();
    
    // Configurar o menu mobile
    const menuToggle = document.getElementById('mobile-menu');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
    
    // Configurar o botão "Mais Jogos" (se estiver na página inicial)
    const verMaisJogos = document.getElementById('ver-mais-jogos');
    if (verMaisJogos) {
        verMaisJogos.addEventListener('click', function(e) {
            e.preventDefault();
            toggleJogos();
        });
    }
    
    // Configurar as abas de mídias (se estiver na página de mídias)
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            toggleMidiasTab(tabName);
        });
    });
    
    // Configurar o formulário de ouvidoria (se estiver na página de ouvidoria)
    const formOuvidoria = document.querySelector('.ouvidoria-form');
    if (formOuvidoria) {
        formOuvidoria.addEventListener('submit', validarFormOuvidoria);
    }
    
    // Simular aumento de sócios a cada 30 segundos (se estiver na página de sócio)
    setInterval(simularAumentoSocios, 30000);
    
    // Adicionar smooth scrolling para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Não aplicar smooth scrolling para links que levam a outras páginas
            if (this.getAttribute('href').includes('.html')) return;
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Carregar produtos na loja (se estiver na página da loja)
    if (document.querySelector('.produtos-grid')) {
        carregarProdutos();
        
        // Configurar filtros de categoria
        const filtroBtns = document.querySelectorAll('.filtro-btn');
        filtroBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const categoria = this.getAttribute('data-categoria');
                filtrarProdutos(categoria);
            });
        });
    }
    
    // Configurar o carrinho (se estiver na página da loja)
    const carrinhoBtn = document.getElementById('carrinho-btn');
    if (carrinhoBtn) {
        carrinhoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            abrirCarrinho();
        });
    }
    
    // Configurar o fechamento do carrinho (se estiver na página da loja)
    const fecharCarrinhoBtn = document.querySelector('.fechar-carrinho');
    if (fecharCarrinhoBtn) {
        fecharCarrinhoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            fecharCarrinho();
        });
    }
    
    // Configurar o overlay para fechar o carrinho (se estiver na página da loja)
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
    
    overlay.addEventListener('click', fecharCarrinho);
    
    // Configurar o botão de finalizar compra (se estiver na página da loja)
    const finalizarCompraBtn = document.querySelector('.finalizar-compra');
    if (finalizarCompraBtn) {
        finalizarCompraBtn.addEventListener('click', finalizarCompra);
    }
    
    // Inicializar FAQ (se estiver na página de ouvidoria ou sócio)
    initFAQ();
    
    // Animação dos contadores (se estiver na página de história)
    if (document.querySelector('.estatistica-numero')) {
        // Aguardar um pouco para que a animação seja perceptível
        setTimeout(animarContadores, 500);
    }
    
    // Configurar filtros de eventos (se estiver na página de eventos)
    const filtroEventosBtns = document.querySelectorAll('.eventos-filtros .filtro-btn');
    filtroEventosBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const categoria = this.getAttribute('data-categoria');
            filtrarEventos(categoria);
        });
    });
    
    // Configurar formulário de newsletter (se estiver na página de eventos)
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', validarNewsletter);
    }
    
    // Carregar jogadores e comissão técnica (se estiver na página de elenco)
    if (document.querySelector('.jogadores-grid')) {
        carregarJogadores();
        carregarComissaoTecnica();
        
        // Configurar filtros de jogadores
        const filtroJogadoresBtns = document.querySelectorAll('.elenco-filtros .filtro-btn');
        filtroJogadoresBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const categoria = this.getAttribute('data-categoria');
                filtrarJogadores(categoria);
            });
        });
    }
    
    // Melhorar experiência em dispositivos touch
    melhorarExperienciaTouch();
    
    // Prevenir comportamentos indesejados em mobile
    prevenirComportamentosMobile();
    
    // Ajustar altura da viewport para mobile
    ajustarAlturaViewport();
    
    // Reajustar altura da viewport quando a janela for redimensionada
    window.addEventListener('resize', ajustarAlturaViewport);
    
    // Fechar menu ao clicar em um link (em mobile)
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            const nav = document.querySelector('nav');
            if (nav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Configurar clique fora do menu para fechá-lo
    setupCliqueForaMenu();
    
    // Otimizar desempenho em mobile
    otimizarDesempenhoMobile();
    
    // Inicializar o carrinho
    atualizarCarrinho();

});
