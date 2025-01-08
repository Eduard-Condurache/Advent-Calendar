const source = [
    {
        "type": "image",
        "icon": "ico-neve",
        "url": "images/gremlins.gif"
    },
    {
        "type": "image",
        "icon": "ico-albero",
        "url": "images/friends.gif"
    },
    {
        "type": "text",
        "icon": "ico-fiocco",
        "text": "Se fossi nato fra il 1647 al 1660 non avresti potuto festeggiare il Natale! In quegli anni fu bandito e cambiato in un giorno di digiuno."
    },
    {
        "type": "image",
        "icon": "ico-stella",
        "url": "images/homealone.gif"
    },
    {
        "type": "text",
        "icon": "ico-omino",
        "text": "La stella di Natale sembra una pianta tipicamente invernale, invece nasce come cespuglio nel caldo del Messico ed era conosciuta fin dai tempi degli Aztechi"
    },
    {
        "type": "image",
        "icon": "ico-stella",
        "url": "images/griffin.gif"
    },
    {
        "type": "text",
        "icon": "ico-pupazzo",
        "text": "Babbo Natale non ha sempre indossato abiti rossi!Lo sapevi che anni fa indossava il verde?"
    },
    {
        "type": "text",
        "icon": "ico-caramella",
        "text": "Jingle Bells, Jingle Bells: non mentire, l’hai letta cantando. Sapevi che la canzone più famosa del natale è anche stata la prima cantata nello spazio?"
    },
    {
        "type": "image",
        "icon": "ico-calza",
        "url": "images/skeleton.gif"
    },
    {
        "type": "text",
        "icon": "ico-pupazzo",
        "text": "Natale a Luglio? A Cuba è stato così per quasi 30 anni, fra il 1968 e il 1997: i festeggiamenti avvenivano in piena estate"
    },
    {
        "type": "text",
        "icon": "ico-fiocco",
        "text": "Oltre a Pasqua, anche Natale ha la sua isola: è Christmas Island nell’Oceano Indiano, scoperta il 25 dicembre 1643."
    },
    {
        "type": "text",
        "icon": "ico-fiocco",
        "text": "Anche Babbo Natale cede al lato oscuro della Forza. Il suo alter ego è Krampus, un demone che va alla ricerca di bambini cattivi."
    },
    {
        "type": "text",
        "icon": "ico-calza",
        "text": "Pensi di essere un campione seriale di regali? Beh, i francesi hanno regalato agli americani la Statua della Libertà in segno di amicizia nel Natale del 1883"
    },
    {
        "type": "image",
        "icon": "ico-stella",
        "url": "images/nightmare.gif"
    },
    {
        "type": "text",
        "icon": "ico-stella",
        "text": "In Svezia c’è una versione local di Babbo Natale: si chiama Tomte, è basso come un folletto e gira accompagnato da Yule, la sua capra"
    },
    {
        "type": "image",
        "icon": "ico-calza",
        "url": "images/grinch.gif"
    },
    {
        "type": "text",
        "icon": "ico-caramella",
        "text": "Anche tu addobbi l’albero solo da un lato?Chissà se lo fecero anche gli antichi Egizi quando nel loro equivalente del Natale addobbavano le Piramidi"
    },
    {
        "type": "text",
        "icon": "ico-omino",
        "text": "In Giappone il Natale è festeggiato come una sorta di San Valentino durante il quale solo le coppie si scambiano i doni"
    },
    {
        "type": "text",
        "icon": "ico-caramella",
        "text": "È tempo di panettone, ma da dove viene questo nome? È quello di un dolce, il Pan di Toni inventato dall’aiuto cuoco della famiglia Sforza"
    },
    {
        "type": "text",
        "icon": "ico-calza",
        "text": "Ma Babbo Natale abita in Puglia? Il nostro barbuto personaggio si ispira a San Nicola di Myra, un vescovo le cui spoglie sono custodite a Bari"
    },
    {
        "type": "image",
        "icon": "ico-caramella",
        "url": "images/poltrona.gif"
    },
    {
        "type": "image",
        "icon": "ico-caramella",
        "url": "images/spongebob.gif"
    },
    {
        "type": "image",
        "icon": "ico-neve",
        "url": "images/elf.gif"
    },
    {
        "type": "text",
        "icon": "ico-neve",
        "text": "Se pensi di non aver fritto abbastanza durante le scorse festività, ti sproniamo dicendo che in Polonia il pranzo natalizio è di 12 portate, una per ogni apostolo "
    },
    {
        "type": "image",
        "icon": "ico-caramella",
        "url": "images/dance.gif"
    }
];

const boxContainer = document.querySelector('.box-container');

let clickedBoxes = JSON.parse(sessionStorage.getItem('clickedBoxes')) || [];
let usedModals = JSON.parse(sessionStorage.getItem('usedModals')) || [];

source.forEach((item, index) => {
    const box = document.createElement('div');
    box.className = 'box';

    const boxContent = document.createElement('div');
    boxContent.className = 'box-content';

    const modal = document.createElement('div');
    modal.className = 'modal';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const closeSpan = document.createElement('span');
    closeSpan.className = 'close';
    closeSpan.innerHTML = 'CHIUDI';

    if (item.icon) {
        const img = document.createElement('img');

        const number = document.createElement('p');

        img.src = './images/icons/' + item.icon + '.png';

        img.alt = item.icon;

        boxContent.append(img);

        number.innerHTML = index + 1;

        boxContent.append(number);

    }

    modal.append(modalContent);

    box.append(boxContent);

    box.append(modal);

    boxContainer.append(box);

    modalContent.append(closeSpan);

    let boxClicked = false;

    if (clickedBoxes.includes(index)) {
        box.style.backgroundColor = '#100B42';
        boxContent.style.opacity = '0.2';

        boxClicked = true;
    }

    box.addEventListener ('click', function () {
        if (!boxClicked) {
            modal.style.display = 'block';
            box.style.backgroundColor = '#100B42';
            boxContent.style.opacity = '0.2';

            let randomIndex;

            do {
                randomIndex = getRndInteger(0, source.length - 1);
            } while (usedModals.includes(randomIndex));

            const randomItem = source[randomIndex];

            const currentCloseSpan = modalContent.querySelector('.close');
            modalContent.innerHTML = '';  
            
            if (randomItem.type === 'image') {
                const img = document.createElement('img');
                img.src = randomItem.url;
                modalContent.append(img);
            } else if (randomItem.type === 'text') {
                const text = document.createElement('p');
                text.textContent = randomItem.text;
                modalContent.append(text);
            }

            modalContent.append(currentCloseSpan);  

            usedModals.push(randomIndex);
            sessionStorage.setItem('usedModals', JSON.stringify(usedModals));

            clickedBoxes.push(index);
            sessionStorage.setItem('clickedBoxes', JSON.stringify(clickedBoxes));

            boxClicked = true;
        }
    });

    closeSpan.addEventListener('click', function(event) {
        event.stopPropagation();  
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

let resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', function() {
    sessionStorage.clear();
})

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}