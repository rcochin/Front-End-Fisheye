function mediaFactory(data, photographername, count) {
    const { photographerID, title, image, likes, date, price, id , video} = data;

    const picture = `assets/images/Sample Photos/${photographername}/${image}`;
    const videoMP4 = `assets/images/Sample Photos/${photographername}/${video}`;

    function getUserCardDOM() {
        //creation des element DOM
        const imageDIV = document.createElement('article');
        const desc = document.createElement('div');
        const img = document.createElement('img');
        const heart = document.createElement('i');
        const mp4 = document.createElement('video');
        const h3 = document.createElement('h3');
        const coeur = document.createElement('p');
        const heartDIV = document.createElement('div');
        //attribution des contenus
        h3.textContent = title;
        coeur.textContent = likes;
        heart.setAttribute('class', 'fas fa-heart');
        heart.setAttribute('aria-hidden', 'true');
        heartDIV.setAttribute("class", "heart-container");
        desc.setAttribute("class", "desc-media");
        imageDIV.setAttribute("class", "bloc-media");
        if(video){
            mp4.setAttribute("class", "imgMedia");
            mp4.setAttribute("id", "video");
            mp4.setAttribute("data-id", count);
            mp4.setAttribute("src", videoMP4);
            mp4.setAttribute("type", "video/mp4");
            mp4.autoplay = true;
            mp4.loop = true;
            imageDIV.append(mp4, desc);
        }else{
            img.setAttribute("class", "imgMedia");
            img.setAttribute("data-id", count);
            img.setAttribute("alt", title);
            img.setAttribute("src", picture);
            imageDIV.append(img, desc);
        }
        heartDIV.append(coeur, heart);
        desc.append(h3, heartDIV);
        return (imageDIV)
    }
    return { getUserCardDOM }
} 
 