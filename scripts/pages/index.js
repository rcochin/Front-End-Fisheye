    async function getPhotographers() {
        fetch('../../data/photographers.json')
        .then(response => {
            return response.json();
          }).then(data => {
            photographer = data.photographers;
            media = data.media;
            tab = { photographer, media}
          }).then(() => {
            displayData(photographer);
          });
          
    }
    
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        await getPhotographers();
    };
    
    init();
    
    
    function addParameterToURL(param){
        _url = 'http://127.0.0.1:5500/photographer.html';
        _url += (_url.split('?')[1] ? '&':'?') + param;
        return _url;
    }
    