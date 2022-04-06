function photographerFactory(data) {
    const { name, portrait, tagline, city, country, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        //creation des element DOM
        const article = document.createElement( 'article' );
        const link = document.createElement( 'a' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const div = document.createElement( 'div' );
        const location = document.createElement( 'p' );
        const desc = document.createElement( 'p' );
        const prix = document.createElement( 'p' );
        //attribution des contenus
        link.href = addParameterToURL('id='+id);
        img.setAttribute("src", picture);
        img.setAttribute("alt",name);
        h2.textContent = name;
        location.textContent = city + ', ' + country;
        desc.textContent = tagline;
        prix.textContent = price+'€/jour';
        link.append(img, h2);
        div.append(location, desc, prix);
        article.append(link, div);
        return (article);
    }
    return { name, picture, getUserCardDOM }
} 
