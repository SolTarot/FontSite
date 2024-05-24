let selectedCount = 0;
let cardIndex = 999;

function createCards() {
    const container = document.getElementById('cardContainer');
    const cardsData = [
        { frontImg: "https://static.tildacdn.com/tild3330-6637-4164-a465-316465343861/04d219dd-ecd5-4ffc-9.png", backImg: "https://i.imgur.com/8UcyimP.png", name: "Card 1" },
        { frontImg: "https://static.tildacdn.com/tild3330-6637-4164-a465-316465343861/04d219dd-ecd5-4ffc-9.png", backImg: "https://i.imgur.com/8UcyimP.png", name: "Card 2" },
        { frontImg: "https://static.tildacdn.com/tild3330-6637-4164-a465-316465343861/04d219dd-ecd5-4ffc-9.png", backImg: "https://i.imgur.com/8UcyimP.png", name: "Card 3" },
        { frontImg: "https://static.tildacdn.com/tild3330-6637-4164-a465-316465343861/04d219dd-ecd5-4ffc-9.png", backImg: "https://i.imgur.com/8UcyimP.png", name: "Card 4" },
        { frontImg: "https://static.tildacdn.com/tild3330-6637-4164-a465-316465343861/04d219dd-ecd5-4ffc-9.png", backImg: "https://i.imgur.com/8UcyimP.png", name: "Card 5" },
        { frontImg: "https://static.tildacdn.com/tild3330-6637-4164-a465-316465343861/04d219dd-ecd5-4ffc-9.png", backImg: "https://i.imgur.com/8UcyimP.png", name: "Card 6" },
        { frontImg: "https://static.tildacdn.com/tild3330-6637-4164-a465-316465343861/04d219dd-ecd5-4ffc-9.png", backImg: "https://i.imgur.com/8UcyimP.png", name: "Card 7" },
        { frontImg: "https://static.tildacdn.com/tild3330-6637-4164-a465-316465343861/04d219dd-ecd5-4ffc-9.png", backImg: "https://i.imgur.com/8UcyimP.png", name: "Card 8" },
        { frontImg: "https://static.tildacdn.com/tild3330-6637-4164-a465-316465343861/04d219dd-ecd5-4ffc-9.png", backImg: "https://i.imgur.com/8UcyimP.png", name: "Card 9" },
        { frontImg: "https://static.tildacdn.com/tild3330-6637-4164-a465-316465343861/04d219dd-ecd5-4ffc-9.png", backImg: "https://i.imgur.com/8UcyimP.png", name: "Card 10" },
        { frontImg: "https://static.tildacdn.com/tild3330-6637-4164-a465-316465343861/04d219dd-ecd5-4ffc-9.png", backImg: "https://i.imgur.com/8UcyimP.png", name: "Card 11" },
        { frontImg: "https://static.tildacdn.com/tild3330-6637-4164-a465-316465343861/04d219dd-ecd5-4ffc-9.png", backImg: "https://i.imgur.com/8UcyimP.png", name: "Card 12" },
        { frontImg: "https://static.tildacdn.com/tild3330-6637-4164-a465-316465343861/04d219dd-ecd5-4ffc-9.png", backImg: "https://i.imgur.com/8UcyimP.png", name: "Card 13" },
        { frontImg: "https://static.tildacdn.com/tild3330-6637-4164-a465-316465343861/04d219dd-ecd5-4ffc-9.png", backImg: "https://i.imgur.com/8UcyimP.png", name: "Card 14" },
        { frontImg: "https://static.tildacdn.com/tild3330-6637-4164-a465-316465343861/04d219dd-ecd5-4ffc-9.png", backImg: "https://i.imgur.com/8UcyimP.png", name: "Card 15" },
        { frontImg: "https://static.tildacdn.com/tild3330-6637-4164-a465-316465343861/04d219dd-ecd5-4ffc-9.png", backImg: "https://i.imgur.com/8UcyimP.png", name: "Card 16" },
        { frontImg: "https://static.tildacdn.com/tild3330-6637-4164-a465-316465343861/04d219dd-ecd5-4ffc-9.png", backImg: "https://i.imgur.com/8UcyimP.png", name: "Card 17" },
        { frontImg: "https://static.tildacdn.com/tild3330-6637-4164-a465-316465343861/04d219dd-ecd5-4ffc-9.png", backImg: "https://i.imgur.com/8UcyimP.png", name: "Card 18" },
        { frontImg: "https://static.tildacdn.com/tild3330-6637-4164-a465-316465343861/04d219dd-ecd5-4ffc-9.png", backImg: "https://i.imgur.com/8UcyimP.png", name: "Card 19" },
        { frontImg: "https://static.tildacdn.com/tild3330-6637-4164-a465-316465343861/04d219dd-ecd5-4ffc-9.png", backImg: "https://i.imgur.com/8UcyimP.png", name: "Card 20" },
        { frontImg: "https://static.tildacdn.com/tild3330-6637-4164-a465-316465343861/04d219dd-ecd5-4ffc-9.png", backImg: "https://i.imgur.com/8UcyimP.png", name: "Card 21" },
        { frontImg: "https://static.tildacdn.com/tild3330-6637-4164-a465-316465343861/04d219dd-ecd5-4ffc-9.png", backImg: "https://i.imgur.com/8UcyimP.png", name: "Card 22" }
    ];
    let leftPosition = 0; // начальное значение для left первой карточки относительно контейнера

    cardsData.forEach(data => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.left = leftPosition + 'px'; // устанавливаем left для текущей карточки
        card.style.top = '0'; // устанавливаем top для всех карточек относительно контейнера
        leftPosition += 37; // увеличиваем left для следующей карточки на 22px

        const cardInner = document.createElement('div');
        cardInner.className = 'card-inner';

        const cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        const frontImg = document.createElement('img');
        frontImg.className = 'card-img';
        frontImg.src = data.frontImg;
        cardFront.appendChild(frontImg);

        const cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        const backImg = document.createElement('img');
        backImg.className = 'card-img';
        backImg.src = data.backImg;
        const cardName = document.createElement('p');
        cardName.className = 'card-name';
        cardName.textContent = data.name;
        cardBack.appendChild(backImg);
        cardBack.appendChild(cardName);

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);

        card.addEventListener('click', () => selectCard(card, data));
        container.appendChild(card);
        
        if(selectedCount == 10){
            const continueButton = document.getElementById('continueButton');
            continueButton.addEventListener('click', () => continueToNextStage());
        }
    });
}

function selectCard(card, data) {
    if (selectedCount >= 10) return;
    const cardInner = card.querySelector('.card-inner');
    cardInner.classList.add('is-flipped');
    
    // Устанавливаем z-index для перевернутой карты
    card.style.zIndex = '1000';
    card.classList.add('animating-card'); // Отключаем эффекты на время анимации
    
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.classList.add('non-clickable');
    
    setTimeout(() => {
        // Перемещаем карту вниз на уровень контейнера выбранных карточек
        const initialTop = '0px';
        const initialLeft = card.getBoundingClientRect().left + 'px';
        card.style.top = '225px';
        setTimeout(() => {
            selectedCount++;
            // Перемещаем карту влево на позицию в контейнере выбранных карточек
            card.style.left = (85.2 * (selectedCount - 1)) + 'px';
            const cloneCard = card.cloneNode(true);
            cloneCard.classList.add('hidden');

            setTimeout(() => {
                // Перемещаем карту обратно вверх на позицию в контейнере выбранных карточек
                cloneCard.style.top = '0';
                document.getElementById('selectedContainer').appendChild(cloneCard);
                cloneCard.classList.remove('hidden');
                card.classList.add('hidden');
                card.top = initialTop;
                card.left = initialLeft;
                card.style.display = 'none';
                // Сброс z-index и добавление класса для отключения кликабельности и эффектов
                cloneCard.style.zIndex = '';
                cloneCard.classList.remove('animating-card'); // Убираем временный класс
                cloneCard.classList.add('selected-card'); // Окончательно отключаем эффекты
                cardContainer.classList.remove('non-clickable'); // Включаем кликабельность остальных карт
                
                // Показать кнопку, если выбрано 10 карт
                if (selectedCount === 10) {
                    cardContainer.classList.add('non-clickable');
                    continueToNextStage();
                }
            }, 500); // задержка для завершения анимации left и top
        }, 500); // задержка перед изменением позиции left
    }, 500); // задержка перед перемещением вниз
}


function continueToNextStage() {
    
    const cardContainer = document.getElementById('cardContainer');
    const selectedContainer = document.getElementById('selectedContainer');
    const strengthContainer = document.getElementById('strengthContainer');
    const selectedCards = selectedContainer.querySelectorAll('.card');
    const mainText = document.getElementById('mainText');
    const submainText = document.getElementById('submainText');
    // Скрываем контейнер начальных карт и контейнер выбранных карт плавно
    cardContainer.classList.add('hidden');
    selectedContainer.classList.add('hidden');
    mainText.classList.add('hidden');
    submainText.classList.add('hidden');
    

    setTimeout(() => {
        // После скрытия скрываем элементы полностью
        cardContainer.style.display = 'none';
        selectedContainer.style.display = 'none';
        submainText.style.display = 'none';

        // Плавно отображаем контейнер strengthContainer
        strengthContainer.style.display = 'flex';
        strengthContainer.classList.add('visible');
        strengthContainer.style.top = '128px';

        // Плавно отображаем текст стадии

        mainText.textContent = "Please choose 3 cards that you think represent your strength.";
        mainText.style.top = '49px';
        mainText.style.fontSize = '25px';
        mainText.style.color = '#FFFFFF';
        mainText.classList.add('visible');

        // Располагаем карточки в контейнере strengthContainer
        selectedCards.forEach((card, index) => {
            const cloneCard = card.cloneNode(true);
            // Вычисляем позицию для каждой карточки
            const row = Math.floor(index / 5); // 0 для первой строки, 1 для второй строки
            const col = index % 5; // Позиция в строке от 0 до 4

            const newTop = row * 215 + 'px';
            const newLeft = col * 148.7 + 'px';

            // Устанавливаем новые координаты относительно контейнера pickingContainer
            cloneCard.style.position = 'absolute';
            cloneCard.width = '133.7px';
            cloneCard.style.top = newTop;
            cloneCard.style.left = newLeft;

            // Сбрасываем временные стили и добавляем постоянные стили
            cloneCard.classList.remove('animating-card');
            cloneCard.classList.add('picking-card'); // Добавляем класс для кликабельности и эффекта при наведении
            
            

            // Добавляем обработчик клика для выбора карточек силы
            cloneCard.addEventListener('click', selectStrengthCard);
            
              // Перемещаем карту в новый контейнер
            strengthContainer.appendChild(cloneCard);
        });
    }, 500); // Время совпадает с transition: opacity 0.5s
}



let isSelecting = false; // Флаг для предотвращения быстрого выбора
const maxSelectionCount = 3;


const strengthCards = [];
function selectStrengthCard(event) {
    
  if (isSelecting || strengthCards.length >= maxSelectionCount) return; // Проверка на количество выбранных карточек
  isSelecting = true; // Устанавливаем флаг
  
  const card = event.currentTarget;
    strengthCards.push(card);
    card.classList.add('hidden'); // Плавно скрываем карточку

    setTimeout(() => {
        card.style.display = 'none'; // Полностью убираем карточку после анимации
        isSelecting = false;
    }, 500); // Время совпадает с transition: opacity 0.3s

    if (strengthCards.length == 3) {
        const mainText = document.getElementById('mainText');
        const currContainer = document.getElementById('strengthContainer');
        currContainer.classList.remove('visible');
        currContainer.classList.add('hidden');
        mainText.classList.remove('visible');
        mainText.classList.add('hidden');
        let index = 0;

        setTimeout(() => {
            currContainer.style.display = 'none';
            const weaknessContainer = document.getElementById('weaknessContainer');
            // Изменяем размеры и позицию контейнера
            weaknessContainer.style.width = '579.79px';
            weaknessContainer.style.height = '415px';
            weaknessContainer.style.left = '310px';
            weaknessContainer.style.top = '128px';

            // Обновляем позиции карточек
            currContainer.querySelectorAll('.card').forEach((card) => {
                if (!card.classList.contains('hidden')) {
                    const cloneCard = card.cloneNode(true);
                    cloneCard.style.width = '133.7px';
                    const raw = Math.floor(index / 4);
                    if (raw == 0){
                        newTop = 0 + 'px';
                        col = (index % 4);
                        newLeft = col * 148.7 + 'px';
                    }

                    else{
                        newTop = 215 + 'px';
                        col = index % 3;
                        newLeft = 66 + col * 148.7 + 'px';
                    }
                    

                    cloneCard.style.top = newTop;
                    cloneCard.style.left = newLeft;
                    cloneCard.removeEventListener('click', selectStrengthCard);
                    cloneCard.addEventListener('click', selectWeaknessCard);
                    weaknessContainer.appendChild(cloneCard);
                    index++;
                }
            });
            
            mainText.textContent = "Please choose 3 cards that you think represent your weakness.";

            // Плавно показываем контейнер
            setTimeout(() => {
                mainText.classList.remove('hidden');
                mainText.classList.add('visible');
                weaknessContainer.style.display = 'flex';
                weaknessContainer.classList.add('visible');
            }, 300); // Небольшая задержка для активации перехода
        }, 500); // Задержка для завершения анимации скрытия
    }
}


const weaknessCards = [];
function selectWeaknessCard(event) {
    if (isSelecting || weaknessCards.length >= maxSelectionCount) return; // Проверка на количество выбранных карточек
    isSelecting = true; // Устанавливаем флаг
    const maintText = document.getElementById('mainText');
    const card = event.currentTarget;
    weaknessCards.push(card);
    card.classList.add('hidden'); // Плавно скрываем карточку

    setTimeout(() => {
        card.style.display = 'none'; // Полностью убираем карточку после анимации
        isSelecting = false; // Сбрасываем флаг
    }, 500); // Время совпадает с transition: opacity 0.3s

    if (weaknessCards.length == 3) {
        const predictionText = document.getElementById('futureText');
        const currContainer = document.getElementById('weaknessContainer');
        currContainer.classList.remove('visible');
        currContainer.classList.add('hidden');
        mainText.classList.remove('visible');
        maintText.classList.add('hidden');

        let index = 0;

        setTimeout(() => {
            currContainer.style.display = 'none';
            const futureContainer = document.getElementById('futureContainer');
            // Изменяем размеры и позицию контейнера
            futureContainer.style.width = '579.79px';
            futureContainer.style.left = '310px';
            futureContainer.style.height = '200px';
            futureContainer.style.top = '200px';

            // Обновляем позиции карточек
            currContainer.querySelectorAll('.card').forEach((card) => {
                if (!card.classList.contains('hidden')) {
                    const cloneCard = card.cloneNode(true);
                    const col = index % 4; // Позиция в строке от 0 до 4

                    const newTop = 0 + 'px';
                    const newLeft = col * 148.7 + 'px';

                    cloneCard.style.top = newTop;
                    cloneCard.style.left = newLeft;
                    cloneCard.removeEventListener('click', selectWeaknessCard);
                    cloneCard.addEventListener('click', selectFutureCard);
                    futureContainer.appendChild(cloneCard);
                    index++;
                }
            });
            
            maintText.textContent = "Please choose 3 cards that you think represent your FUTURE.";

            // Плавно показываем контейнер
            setTimeout(() => {
              maintText.classList.remove('hidden');
              maintText.classList.add('visible');  
              futureContainer.style.display = 'flex';
              futureContainer.classList.add('visible');
            }, 300); // Небольшая задержка для активации перехода
        }, 500); // Задержка для завершения анимации скрытия
    }
}


const futureCards = [];
let lastCard;

function selectFutureCard(event) {
    if (isSelecting || futureCards.length >= maxSelectionCount) return; // Проверка на количество выбранных карточек
    isSelecting = true; // Устанавливаем флаг
    const card = event.currentTarget;
    futureCards.push(card);
    card.classList.add('hidden'); // Плавно скрываем карточку


    setTimeout(() => {
        card.style.display = 'none'; // Полностью убираем карточку после анимации
        isSelecting = false; // Сбрасываем флаг
    }, 500); // Время совпадает с transition: opacity 0.3s

    if (futureCards.length == 3) {
        const currContainer = document.getElementById('futureContainer');
        currContainer.classList.remove('visible');
        currContainer.classList.add('hidden');
        

        setTimeout(() => {
            const mainText = document.getElementById('mainText');
            currContainer.style.display = 'none';
            const lastContainer = document.getElementById('lastCardContainer');
            // Изменяем размеры и позицию контейнера
            lastContainer.style.width = '133px';
            lastContainer.style.left = '533.5px';
            lastContainer.style.height = '200px';
            lastContainer.style.top = '88.5px';

            // Обновляем позиции карточек
            currContainer.querySelectorAll('.card').forEach((card) => {
                if (!card.classList.contains('hidden')) {
                    const cloneCard = card.cloneNode(true);

                    const newTop = '0px';
                    const newLeft = '0px';

                    cloneCard.style.top = newTop;
                    cloneCard.style.left = newLeft;
                    cloneCard.removeEventListener('click', selectWeaknessCard);
                    cloneCard.classList.add('non-clickable');
                    lastContainer.appendChild(cloneCard);
                    lastCard = cloneCard;
                }
            });

            mainText.textContent = "The Last Card";

            // Плавно показываем контейнер
            setTimeout(() => {
                lastContainer.style.display = 'flex';
                lastContainer.classList.add('visible');
                mainText.classList.remove('hidden');
                mainText.classList.add('visible');

                // Скрываем контейнер через 1 секунду
                setTimeout(() => {
                    lastContainer.classList.remove('visible');
                    lastContainer.classList.add('hidden');
                    mainText.classList.remove('visible');
                    mainText.classList.add('hidden');

                    // Полностью убираем контейнер после анимации
                    setTimeout(() => {
                        lastContainer.style.display = 'none';
                        mainText.style.display = 'none'
                    }, 500); // Время совпадает с transition: opacity 0.5s
                    let button = document.getElementById('strengthButton');
                    activateButton(button);
                    document.querySelector('.prediction-buttons').style.display = 'flex';
                }, 1000); // Контейнер показывается на 1 секунду
            }, 10); // Небольшая задержка для активации перехода
        }, 500); // Задержка для завершения анимации скрытия currContainer
        
    }
}


const weaknessPrediction = generateRandomText('weakness')
const strengthPrediction = generateRandomText('strength');
const futurePrediction = generateRandomText('future');
const lastCardPrediction = generateRandomText('last');

let buttonClicked = {};
function showPrediction(button){
const fullContainer = document.getElementById('lastContainer');
const discriptionContainer = document.getElementById('lastPrediction');
const titleContainer = document.getElementById('lastTitle'); // добавил получение элемента заголовка

let selectedCards = [];
let lastTitle = ''; 
let lastPrediction = ''; 
const buttonId = button.id;

switch(buttonId){
    case 'strengthButton':
        selectedCards = strengthCards;
        lastTitle = "Prediction for Strength";
        lastPrediction = strengthPrediction;
        break;
    case 'weaknessButton':
        selectedCards = weaknessCards;
        lastTitle = "Prediction for Weakness";
        lastPrediction = weaknessPrediction;
        break;
    case 'futureButton':
        selectedCards = futureCards;
        lastTitle = "Prediction for Future";
        lastPrediction = futurePrediction;
        break;
    case 'lastButton':
        selectedCards = [lastCard];
        lastTitle = "Prediction for Last Card";
        lastPrediction = lastCardPrediction;
        break;
}

if (selectedCards && selectedCards.length > 0) {
    const cardContainer = document.getElementById('lastCards');

    if (selectedCards.length > 1){
        selectedCards.forEach((card, index) => {
            const cloneCard = card.cloneNode(true);
            cloneCard.style.position = 'absolute';
            cloneCard.style.top = '0px';
            cloneCard.style.left = index * 183.5 + 'px';
            cloneCard.classList.remove('hidden');
            cloneCard.classList.add('visible');
            cloneCard.style.display = 'flex';
            cloneCard.classList.add('non-clickable');
            cardContainer.appendChild(cloneCard);
        });
    } else if (selectedCards.length == 1) {
        const cloneCard = selectedCards[0].cloneNode(true);
        cloneCard.style.position = 'absolute';
        cloneCard.style.top = '0px';
        cloneCard.style.left = '183.5px';
        cloneCard.classList.remove('hidden');
        cloneCard.classList.add('visible');
        cloneCard.style.display = 'flex';
        cloneCard.classList.add('non-clickable');
        cardContainer.appendChild(cloneCard);
    }

    fullContainer.appendChild(cardContainer);
    titleContainer.textContent = lastTitle; // добавил установку текста заголовка
    if (!buttonClicked[buttonId]){
        buttonClicked[buttonId] = true;
        discriptionContainer.textContent=lastPrediction;
        fullContainer.style.display = 'flex';
        discriptionContainer.style.display='flex';
        titleContainer.style.display='flex';
        typeText(lastPrediction, discriptionContainer);
    } else {
        discriptionContainer.textContent = lastPrediction;

        fullContainer.style.display = 'flex';
        discriptionContainer.style.display ='flex';
        titleContainer.style.display='flex';
    }
} else {
    console.error('No selected cards found for the stage:', buttonId);
}
}

function activateButton(button) {
    const buttons = document.querySelectorAll('.common-button');
    buttons.forEach(btn => {
        btn.classList.remove('active-button');
    });
    button.classList.add('active-button');
    showPrediction(button);
}

function generateRandomText(type){

const getRandomIndex = (length) => {
const randomArray = new Uint32Array(1);
window.crypto.getRandomValues(randomArray);
return randomArray[0] % length;
}

if (type == 'strength'){
const texts = [
  "First Random Prediction for strength. First Random Prediction for strength. First Random Prediction for strength. First Random Prediction for strength. First Random Prediction for strength. First Random Prediction for strength. ",
  "Second Random Prediction for strength. Second Random Prediction for strength. Second Random Prediction for strength. Second Random Prediction for strength. Second Random Prediction for strength. Second Random Prediction for strength. ",
  "Third Random Prediction for strength. Third Random Prediction for strength. Third Random Prediction for strength. Third Random Prediction for strength. Third Random Prediction for strength. Third Random Prediction for strength. Third Random Prediction for strength. ",
  "Fourth Random Prediction for strength. Fourth Random Prediction for strength. Fourth Random Prediction for strength. Fourth Random Prediction for strength. Fourth Random Prediction for strength. Fourth Random Prediction for strength. Fourth Random Prediction for strength. ",
  "Fifth Random Prediction for strength. Fifth Random Prediction for strength. Fifth Random Prediction for strength. Fifth Random Prediction for strength. Fifth Random Prediction for strength. Fifth Random Prediction for strength. Fifth Random Prediction for strength. Fifth Random Prediction for strength. "
];

const randomIndex = getRandomIndex(texts.length);
return(texts[randomIndex]);
}

else if (type == 'weakness'){
const texts = [
  "First Random Prediction for weakness. First Random Prediction for weakness. First Random Prediction for weakness. First Random Prediction for weakness. First Random Prediction for weakness. First Random Prediction for weakness. First Random Prediction for weakness. ",
  "Second Random Prediction for weakness. Second Random Prediction for weakness. Second Random Prediction for weakness. Second Random Prediction for weakness. Second Random Prediction for weakness. Second Random Prediction for weakness. Second Random Prediction for weakness. ",
  "Third Random Prediction for weakness. Third Random Prediction for weakness. Third Random Prediction for weakness. Third Random Prediction for weakness. Third Random Prediction for weakness. Third Random Prediction for weakness. Third Random Prediction for weakness. Third Random Prediction for weakness. ",
  "Fourth Random Prediction for weakness. Fourth Random Prediction for weakness. Fourth Random Prediction for weakness. Fourth Random Prediction for weakness. Fourth Random Prediction for weakness. Fourth Random Prediction for weakness. Fourth Random Prediction for weakness. Fourth Random Prediction for weakness. ",
  "Fifth Random Prediction for weakness. Fifth Random Prediction for weakness. Fifth Random Prediction for weakness. Fifth Random Prediction for weakness. Fifth Random Prediction for weakness. Fifth Random Prediction for weakness. Fifth Random Prediction for weakness. Fifth Random Prediction for weakness. Fifth Random Prediction for weakness. "
];
const randomIndex = getRandomIndex(texts.length);
return(texts[randomIndex]);
}
else if(type=='future'){
const texts = [
  "First Random Prediction for future. First Random Prediction for future. First Random Prediction for future. First Random Prediction for future. First Random Prediction for future. First Random Prediction for future. First Random Prediction for future. First Random Prediction for future. First Random Prediction for future. ",
  "Second Random Prediction for future. Second Random Prediction for future. Second Random Prediction for future. Second Random Prediction for future. Second Random Prediction for future. Second Random Prediction for future. Second Random Prediction for future. Second Random Prediction for future. ",
  "Third Random Prediction for future. Third Random Prediction for future. Third Random Prediction for future. Third Random Prediction for future. Third Random Prediction for future. Third Random Prediction for future. Third Random Prediction for future. Third Random Prediction for future. ",
  "Fourth Random Prediction for future. Fourth Random Prediction for future. Fourth Random Prediction for future. Fourth Random Prediction for future. Fourth Random Prediction for future. Fourth Random Prediction for future. Fourth Random Prediction for future. Fourth Random Prediction for future. Fourth Random Prediction for future. ",
  "Fifth Random Prediction for future. Fifth Random Prediction for future. Fifth Random Prediction for future. Fifth Random Prediction for future. Fifth Random Prediction for future. Fifth Random Prediction for future. Fifth Random Prediction for future. Fifth Random Prediction for future. Fifth Random Prediction for future. "
];
const randomIndex = getRandomIndex(texts.length);
return(texts[randomIndex]);
}

else{
const texts = [
  "First Random Prediction for last card. First Random Prediction for last card. First Random Prediction for last card. First Random Prediction for last card. First Random Prediction for last card. First Random Prediction for last card. First Random Prediction for last card. First Random Prediction for last card. ",
  "Second Random Prediction for last card. Second Random Prediction for last card. Second Random Prediction for last card. Second Random Prediction for last card. Second Random Prediction for last card. Second Random Prediction for last card. Second Random Prediction for last card. Second Random Prediction for last card. ",
  "Third Random Prediction for last card. Third Random Prediction for last card. Third Random Prediction for last card. Third Random Prediction for last card. Third Random Prediction for last card. Third Random Prediction for last card. Third Random Prediction for last card. Third Random Prediction for last card. Third Random Prediction for last card. ",
  "Fourth Random Prediction for last card. Fourth Random Prediction for last card. Fourth Random Prediction for last card. Fourth Random Prediction for last card. Fourth Random Prediction for last card. Fourth Random Prediction for last card. Fourth Random Prediction for last card. Fourth Random Prediction for last card. ",
  "Fifth Random Prediction for last card. Fifth Random Prediction for last card. Fifth Random Prediction for last card. Fifth Random Prediction for last card. Fifth Random Prediction for last card. Fifth Random Prediction for last card. Fifth Random Prediction for last card. Fifth Random Prediction for last card. Fifth Random Prediction for last card. ",
];
const randomIndex = getRandomIndex(texts.length);
return(texts[randomIndex]);
}
}

function typeText(text, container) {
container.textContent = '';
container.style.display = 'block';
container.style.opacity = '1';

let i = 0;
const speed = 50; // скорость печати

function typeWriter() {
    if (i < text.length) {
        container.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
}

window.onload = createCards;

