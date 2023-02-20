const citiesImg = document.querySelectorAll('.city');
const body = document.body;
const blur = document.querySelector('.blur');
const headers = document.querySelectorAll('.header');
const cityNames = document.querySelectorAll('city-name');
let city;

function hoverCity() {
    this.classList.add('city-hover');
    blur.classList.add('blur-active');
    headers.forEach(header => {
        header.classList.add('blur-active');
    });
    const paragraph = this.querySelector('.city-name');
    paragraph.classList.add('active');
}
function unhoverCity() {
    this.classList.remove('city-hover');
    blur.classList.remove('blur-active');
    headers.forEach(header => {
        header.classList.remove('blur-active');
    });
    const paragraph = this.querySelector('.city-name');
    paragraph.classList.remove('active');
}

function openGallery() {
    this.classList.remove('city-hover');
    galleryPage = document.createElement('div');
    galleryPage.classList.add('gallery-page');
    document.body.appendChild(galleryPage);
    const closeGallDiv = document.createElement('div');
    closeGallDiv.classList.add('close-gall-div');
    body.appendChild(closeGallDiv);
    closeGallDiv.addEventListener('click', closeGallery);
    switch (this.innerText) {
        case 'Kraków':
            city = {
                name: "Kraków",
                description: "Kraków to piękne miasto, które jest pełne historii, kultury i turystycznych atrakcji. To doskonałe miejsce na wakacje dla osób interesujących się historią, architekturą i kulturą. Oto pięć popularnych miejsc, które warto zobaczyć w Krakowie:",                
                images: {
                    1: 'img/krakow/krk1.jpg',
                    2: 'img/krakow/krk2.jpg',
                    3: 'img/krakow/krk3.jpg',
                    4: 'img/krakow/krk4.jpg',
                    5: 'img/krakow/krk5.jpg'
                },
                imagesHeaders: {
                    1: 'Rynek Główny',
                    2: 'Wawel',
                    3: 'Kościół Mariacki',
                    4: 'Kazimierz',
                    5: 'Wieliczka'
                },
                imagesDescriptions: {
                    1: 'Centralny plac w Krakowie, który jest sercem miasta i jednym z największych rynków w Europie. Na środku znajduje się Sukiennice, a wokół niej otaczają budynki z pięknymi fasadami i wiele kawiarni i restauracji.',
                    2: 'Zamek królewski położony na wzgórzu nad rzeką Wisłą, który był siedzibą władców Polski od XI do XVIII wieku. Wawel jest ważnym miejscem dla polskiej historii i kultury i warto zobaczyć jego zachwycające zamkowe wnętrza i ogrody.',
                    3: 'Imponujący kościół gotycki z XIII wieku, który jest największym kościołem w Krakowie i jednym z najważniejszych zabytków sakralnych w Polsce. Wewnątrz znajduje się wiele cennych dzieł sztuki, a na dziedzińcu można podziwiać piękne widoki na miasto.',
                    4: 'Dawna dzielnica żydowska w Krakowie, która jest teraz popularnym miejscem turystycznym i centrum kulturalnym. W Kazimierzu znajdują się piękne synagogi, urokliwe kamienice i wiele restauracji i kawiarni.',
                    5: 'Podziemna kopalnia soli, która jest jednym z największych i najlepiej zachowanych kompleksów podziemnych na świecie. Wieliczka oferuje wycieczki, które pozwala zobaczyć piękne komory, katedry i rzeźby wykonane z soli, a także dowiedzieć się o historii i technologii kopalni. Jest to niezapomniana wycieczka dla całej rodziny i osób interesujących się historią i geologią.'
                }
            }
            break;
        case 'Warszawa':
            city = {
                name: "Warszawa",
                description: "Warszawa, stolica Polski, jest miastem bogatym w historię, kulturę i piękno architektoniczne. Oto pięć miejsc, które warto odwiedzić podczas zwiedzania Warszawy:",
                images: {
                    1: 'img/warszawa/waw1.jpg',
                    2: 'img/warszawa/waw2.jpg',
                    3: 'img/warszawa/waw3.jpg',
                    4: 'img/warszawa/waw4.jpg',
                    5: 'img/warszawa/waw5.jpg'
                },
                imagesHeaders: {
                    1: 'Stare Miasto',
                    2: 'Łazienki Królewskie',
                    3: 'Muzeum Powstania Warszawskiego',
                    4: 'Muzeum Narodowe',
                    5: 'Pałac Kultury i Nauki'
                },
                imagesDescriptions: {
                    1: 'Znane jako jedna z najpiękniejszych starówek w Europie, Stare Miasto w Warszawie to zabytkowy obszar, który został odbudowany po zniszczeniach w czasie II wojny światowej. Znajdziesz tu kolorowe kamieniczki, wąskie uliczki i malownicze place, a także zabytki takie jak Katedra św. Jana Chrzciciela i Zamek Królewski.',
                    2: 'Łazienki Królewskie to jeden z najpiękniejszych parków w Europie, znanym ze swoich ogrodów, pałaców i rzeźb. Na terenie parku znajduje się wiele atrakcji, w tym słynny Pałac na Wodzie, Teatr na Wodzie i Belweder.',
                    3: 'Muzeum Powstania Warszawskiego to muzeum poświęcone jednemu z najważniejszych wydarzeń w historii Warszawy - Powstaniu Warszawskiemu. Znajdują się tu wiele eksponatów, zdjęć i filmów dokumentujących to tragiczne wydarzenie, które miało miejsce w 1944 roku.',
                    4: 'Muzeum Narodowe to największe muzeum sztuki w Polsce, znanym ze swojej kolekcji malarstwa i rzeźby, w tym dzieł takich artystów jak Jan Matejko, Józef Chełmoński i Władysław Hasior. Znajdziesz tu także eksponaty związane z historią Polski, w tym zbiory archeologiczne i etnograficzne.',
                    5: 'Pałac Kultury i Nauki to jedna z najbardziej charakterystycznych budowli w Warszawie, zaprojektowana przez radzieckiego architekta Lev Rudniewa i otwarta w 1955 roku. Jest to wieżowiec o wysokości 237 metrów, który pierwotnie był darem Związku Radzieckiego dla Polski. Na terenie pałacu znajduje się wiele instytucji kulturalnych, w tym teatry, muzea i kina.'
                }
            }
            break;
        case "Gdańsk":
            city = {
                name: "Gdańsk",
                description: "Gdańsk, położony nad Morzem Bałtyckim, to miasto z bogatą historią, pięknymi zabytkami i kulturalnym dziedzictwem. Oto pięć miejsc, które warto odwiedzić podczas zwiedzania Gdańska:",
                images: {
                    1: 'img/gdansk/gdk1.jpg',
                    2: 'img/gdansk/gdk2.jpg',
                    3: 'img/gdansk/gdk3.jpg',
                    4: 'img/gdansk/gdk4.jpg',
                    5: 'img/gdansk/gdk5.jpg'
                },
                imagesHeaders: {
                    1: 'Stare Miasto',
                    2: 'Muzeum II Wojny Światowej',
                    3: 'Łaźnia II',
                    4: 'Westerplatte',
                    5: 'Muzeum Amber'
                },
                imagesDescriptions: {
                    1: 'Gdańsk Stare Miasto to urocza, kolorowa dzielnica zbudowana z charakterystycznej cegły. W centrum miasta znajduje się Długi Targ, gdzie możesz podziwiać piękne kamienice i Ratusz Głównego Miasta. Wśród innych zabytków znajdują się m.in. Kościół Mariacki, Złota Brama i Fontanna Neptuna.',
                    2: 'To nowoczesne muzeum, które poświęcone jest wydarzeniom II wojny światowej, szczególnie na obszarze Polski i Gdańska. Muzeum oferuje wyczerpującą opowieść o okrucieństwach i cierpieniach ludzi podczas wojny, jak również o powojennym odbudowaniu i rozwoju miasta.',
                    3: 'Łaźnia II to centrum kultury współczesnej zlokalizowane w zabytkowym budynku dawnej kotłowni elektrowni wodnej. W Łaźni II organizowane są wystawy sztuki współczesnej, koncerty, wykłady i spotkania z artystami.',
                    4: 'Westerplatte to miejsce, gdzie rozpoczęła się II wojna światowa w Europie. W 1939 roku niemiecki pancernik Schleswig-Holstein ostrzelał polskie wojska stacjonujące na Westerplatte, co było początkiem wojny. Obecnie na Westerplatte znajduje się Muzeum Westerplatte i Wojny 1939.',
                    5: 'Muzeum Amber to jedno z najciekawszych muzeów w Gdańsku, które poświęcone jest jantaru - najcenniejszemu surowcowi naturalnemu, który przez wieki był jednym z głównych towarów handlowych miasta. W muzeum można podziwiać cenne zbiory związane z wydobyciem, obróbką i wykorzystaniem jantaru.'
                }
            }
            
            break;
    }
    let galleryPageHeader = document.createElement('h1');
    galleryPageHeader.textContent = city.name;
    galleryPage.appendChild(galleryPageHeader);
    let galleryPageDescription = document.createElement('p');
    galleryPageDescription.textContent = city.description;
    galleryPageDescription.classList.add('gallery-page-description');
    galleryPage.appendChild(galleryPageDescription);
    for (let i = 1; i < 6; i++) {
        const header = document.createElement('h2');
        header.textContent = city.imagesHeaders[i];
        galleryPage.appendChild(header);

        const description = document.createElement('p');
        description.textContent = city.imagesDescriptions[i];
        description.classList.add('description-images');
        galleryPage.appendChild(description);

        const image = document.createElement('img');
        image.src = city.images[i];
        image.classList.add('gallery-page-img');
        galleryPage.appendChild(image);
    }

}
function closeGallery() {
    galleryPage.remove();
    this.remove();
}

citiesImg.forEach(city => {
    city.addEventListener('mouseenter', hoverCity)
});
citiesImg.forEach(city => {
    city.addEventListener('mouseout', unhoverCity)
});

citiesImg.forEach(city => {
    city.addEventListener('click', openGallery);
});
