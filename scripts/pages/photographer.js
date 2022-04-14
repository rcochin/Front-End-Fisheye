//Mettre le code JavaScript lié à la page photographer.html
async function getMedia() {
    return await fetch('../../data/photographers.json')
    .then(response => {
        return response.json();
      }).then(data => {
          return data;
      });
}

async function displayMedia(e, users) {
    var count = 0;
    const queryString = window.location.search;
    const urlmedias = new URLSearchParams(queryString);
    const userSection = document.querySelector(".user_section");
    const infoContainer = document.querySelector(".info-container");
    const userPicture = document.querySelector(".user_picture");
    const mediaSection = document.querySelector(".media-section");
    const popupSection = document.querySelector(".popup-section");

    let userID = urlmedias.get('id');
    var photographername = "";
    users.forEach((user) =>{
        const { name, portrait, tagline, city, country, price } = user;

        if(user.id == userID){
            photographername = name;
            const picture = `assets/photographers/${portrait}`;
            const img = document.createElement( 'img' );
            const h2 = document.createElement( 'h2' );
            const location = document.createElement( 'p' );
            const desc = document.createElement( 'p' );
            h2.textContent = name;
            location.textContent = city + ', ' + country;
            desc.textContent = tagline;
            img.setAttribute("src", picture)
            userSection.append(h2, location, desc);
            userPicture.append(img);
            const pricing = document.createElement( 'p' );
            pricing.append(price + "€/jour");
            infoContainer.append(pricing);
        }
    })
    e.forEach((element) => {

        if(element.photographerId == userID){
            const mediaModel = mediaFactory(element, photographername, count);
            const userCardDOM = mediaModel.getUserCardDOM();
            const userCardDOM2 = mediaModel.getUserCardDOM();
            mediaSection.appendChild(userCardDOM);
            popupSection.appendChild(userCardDOM2);
            count++;
        }
    });
    slider();
    const likeBtn = document.querySelectorAll('.fa-heart');

    var likes = document.querySelectorAll('.media-section .heart-container p');
    var totalLikes = 0;
    const heartIcon = document.createElement('i');
    heartIcon.setAttribute('class', 'fas fa-heart');
    heartIcon.setAttribute('aria-hidden', 'true');
    const heart = document.createElement( 'p' );
    heart.setAttribute('id', 'totalHeart');
    for(let i = 0; i < likes.length; i++){
        totalLikes = totalLikes + parseInt(likes[i].textContent);
    }
    heart.append(totalLikes, heartIcon);
    infoContainer.insertAdjacentElement('afterbegin', heart);

    var infoLike = document.getElementById("totalHeart");
    likeBtn.forEach((btn) => btn.addEventListener('click', function(){
        var likeValue = this.previousSibling;
        var newValue = parseInt(likeValue.innerHTML);
        var newTotalValue = parseInt(infoLike.innerHTML);
        newValue++;
        newTotalValue++;
        likeValue.innerHTML = newValue;
        heart.innerHTML = "";
        heart.append(newTotalValue, heartIcon);
    }, {once : true}));
}


function filter(media){
    var select = document.getElementById("filter");
    const sortByMapped = (map,compareFn) => (a,b) => compareFn(map(a),map(b));
    const byValue = (a,b) => a - b;
    const byDescending = (a,b) => b - a;
    const sortBySensitivity = sensitivity => (a, b) => a.localeCompare(b);

    if(select.value == 1){
        const toLikes = e => e.likes;
        const byLikes = sortByMapped(toLikes,byDescending);
        return [...media].sort(byLikes);
    }else if(select.value == 2){
        const toDate = e => new Date(e.date);
        const byDate = sortByMapped(toDate,byValue);
        return [...media].sort(byDate);
    }else if(select.value == 3){
        const toTitle = e => e.title;
        const byVariant = sortByMapped(toTitle,sortBySensitivity('variant'));
        return [...media].sort(byVariant);
    }
}

async function init() {
    // Récupère les datas des photographes
    data = await getMedia();
    displayMedia(filter(data.media), data.photographers);
    document.getElementById('filter').addEventListener('change', function(){
        document.querySelector(".user_section").innerHTML = "";
        document.querySelector(".user_picture").innerHTML = "";
        document.querySelector(".media-section").innerHTML = "";
        document.querySelector(".info-container").innerHTML = "";
        document.querySelector(".popup-section").innerHTML = "<span>&times;</span>";
        displayMedia(filter(data.media), data.photographers);
    })
};

init();

