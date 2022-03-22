let favouriteCollection=[];
const superHeroesJSON = `[
    {
      "name": "Batman",
      "url":"../images/Batman.jpg",
      "character": "борец с преступностью, филантроп, миллиардер",
      "abilities":" интеллект, обширные познания, знания боевых искусств, ловкость"
    },
    {
        "name": "Superman",
        "url":"../images/superman.jpg",
        "character": "борец за справедливость",
        "abilities":"непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм"
    },
    {
        "name": "Ironman",
        "url":"../images/ironman.jpg",
        "character": "гений, миллиардер, плейбой, филантроп",
        "abilities":"высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы"
    },
    {
        "name": "Spiderman",
        "url":"../images/spiderman.jpg",
        "character": "борец за справедливость, студент, фотограф",
        "abilities":"сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины"
    },
    {
        "name": "CaptainAmerica",
        "url":"../images/america.jpg",
        "character": "супер-солдат",
        "abilities":" сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя"
    },
    {
        "name": "Tor",
        "url":"../images/tor.jpg",
        "character": "борец за справедливость, скандинавский бог",
        "abilities":" все, что может бог, плюс молот Мьелнир"
    },
    {
        "name": "Halk",
        "url":"../images/halk.jpg",
        "character": "супергерой, борец за справедливость, ученый-биохимик",
        "abilities":" сверхчеловеческая сила искорость, выносливость, полет"
    },
    {
        "name": "Чудо-женщина",
        "url":"../images/woman.jpg",
        "character": "супергероиня, секретарь-референт",
        "abilities":"сверхчеловеческая сила искорость, выносливость, полет"
    },
    {
        "name": "Черная вдова",
        "url":"../images/blackwomen.jpg",
        "character": "супергероиня, шпионка",
        "abilities":"пик человеческого физического потенциала, замедленное старение, знание многих языков"
    },
    {
        "name": "Deadpool",
        "url":"../images/deadpool.jpg",
        "character": "антигерой, наемник",
        "abilities":"высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система"
    }
  ]`;
  
function getHeroes() {
    
    const superHeroes = JSON.parse(superHeroesJSON);

    const collection = localStorage.getItem("favouriteCollection");
    if(collection){
        favouriteCollection = JSON.parse(localStorage.getItem("favouriteCollection"));
    }   

    for (let i = 0; i < superHeroes.length; i++){
         generateCard(superHeroes[i]);
    }
}



//Генерация карточки


const generateCard = (data) => {

  
    let container = document.createElement('div');
    container.classList.add("container");
    document.getElementById('wrapper').appendChild(container);

    let card__image = document.createElement('img');
    card__image.classList.add("img");
    card__image.src =data.url;
    container.appendChild(card__image);

    let div__description = document.createElement('div')
    div__description.classList.add("container_description");
    container.appendChild(div__description);


    let div__name = document.createElement('div')
    div__name.innerHTML = "Имя";
    div__description.appendChild(div__name);


    let container__text = document.createElement('div');
    container__text.classList.add("container__text");
    container__text.innerText = data.name;
    div__description.appendChild(container__text);

    let div__des = document.createElement('div')
    div__des.innerHTML = "Описание";
    div__description.appendChild(div__des);

    let container__des = document.createElement('div');
    container__des.classList.add("container__text");
    container__des.innerText = data.character;
    div__description.appendChild(container__des);

    let div__abil = document.createElement('div')
    div__abil.innerHTML = "Суперсилы";
    div__description.appendChild(div__abil);

    let container__abil = document.createElement('div');
    container__abil.classList.add("container__text");
    container__abil.innerText = data.abilities;
    div__description.appendChild(container__abil);

    let rating = document.createElement('div');
    rating.classList.add("rating");
    container.appendChild(rating);

    let rating_items = document.createElement('div');
    rating_items.classList.add("rating-items");
    rating.appendChild(rating_items);
   

    for (let i = 0; i < 10; i++) {

        let id_hero = data.name + i+1;
        let input = document.createElement("input")
        input.classList.add("rating-item");
        input.setAttribute("type", "radio");
        input.setAttribute("value", i+1);
        input.id = id_hero;
        input.setAttribute("name",data.name);
        rating_items.appendChild(input);
        let label = document.createElement('label');
        label.setAttribute("for",data.name);
        label.classList.add("rating-label");
        label.innerText=i+1;
        rating_items.appendChild(label);
        input.addEventListener("input", toggleLike);

    }
   }

function toggleLike(event){
    let someFavour=[];
    let nameInput=event.target.name;
    let idInput=event.target.id;
    if(favouriteCollection.length==0)
    favouriteCollection.push({name:nameInput,id:idInput});
 else{
 someFavour = favouriteCollection.filter(item => item.name == nameInput);
       if(someFavour.length==0) 
           favouriteCollection.push({name:nameInput,id:idInput});
     
       else
         favouriteCollection.find(item => {if(item.name == nameInput) item.id=idInput;}); 
}


    localStorage.setItem("favouriteCollection", JSON.stringify(favouriteCollection));

}



addEventListener("DOMContentLoaded", function(){getHeroes()});


    
    


      
    