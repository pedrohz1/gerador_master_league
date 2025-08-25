const times = ['Vasco', 'Newcastle (Tyneside)', 'Botafogo', 'Espanyol (CT Blue White)', 'Barcelona', 'PSG', 'Everton', 'Leicester (East Midlands)', 'Hellas Verona', 'Milan', 'River Plate', 'Ajax'];
const tecnicos = ['José Mourinho', 'Fábio Carille', 'Carlo Ancelotti', 'Jorge Jesus', 'Hansi Flick', 'Zinedine Zidane', 'Pep Guardiola', 'Abel Ferreira', 'Jurgen Klopp', 'Mikel Arteta', 'Fernando Diniz'];
const ligas = ['Brasileirão', 'Premier League', 'La Liga', 'Ligue One', 'Serie A Tim', 'Superliga (Crie uma liga com os melhores times do mundo)'];
const formacoes = ['4-5-1', '4-4-2', '4-3-3', '3-5-2', '3-4-3', '5-4-1', '4-2-4', '3-6-1', '5-3-2', '3-3-4'];

const objetivos = ['Ganhar o campeonato continental tendo o artilheiro e o líder de assistências', 'Marcar 100 pontos na liga nacional', 'Ganhar a bola de ouro com 2 jogadores diferentes', 'Ganhar tudo que disputar numa temporada', 'Marcar 100 gols na liga', 'Ganhar a liga nacional invicto', 'Ganhar o campeonato continental sofrendo menos de 5 gols', 'Ganhar o mundial por 4+ gols de diferença'];
const desafios = ['Porém você deve montar um time apenas com sulamericanos', 'Porém você só pode contratar jogadores por menos de 30 milhões de euros', 'Porém você só pode contratar jogadores por empréstimo de uma temporada', 'Porém você só pode contratar africanos', 'Porém você só pode contratar jogadores com exatamente 27 anos', 'Porém você deve vender um jogador toda vez que for contratar outro', 'Porém você não pode repetir nacionalidades no time titular', 'Porém você não pode repetir idades no time titular', 'Porém você só pode usar carecas ou barbudos'];

let firstClick = true;
const infos = [];

function executar(){ 
    if(firstClick){
        const checkboxes = document.querySelectorAll('#inputs input[type="checkbox"]');

        checkboxes.forEach(checkbox => {
            infos.push(checkbox.checked);
        });

        firstClick = false;
    }

    gerarTexto(infos);
}

function gerarTexto(infos){
    document.getElementById("welcome").innerText = " ";
    
    if(infos[0]){
        document.getElementById("times").innerHTML = times[Math.floor(Math.random() * times.length)];
    }
    else{
        document.getElementById("times").innerHTML = " ";
    }

    if(infos[1]){
        document.getElementById("tecnicos").innerHTML = tecnicos[Math.floor(Math.random() * tecnicos.length)];
    }
    else{
        document.getElementById("tecnicos").innerHTML = " ";
    }

    if(infos[2]){
        document.getElementById("ligas").innerHTML = ligas[Math.floor(Math.random() * ligas.length)];
    }
    else{
        document.getElementById("ligas").innerHTML = " ";
    }

    if(infos[3]){
        document.getElementById("formacoes").innerHTML = formacoes[Math.floor(Math.random() * formacoes.length)];
    }
    else{
        document.getElementById("formacoes").innerHTML = " ";
    }

    document.getElementById("objetivos").innerHTML = objetivos[Math.floor(Math.random() * objetivos.length)];
    document.getElementById("desafios").innerHTML = desafios[Math.floor(Math.random() * desafios.length)];
}

