//burger code
let conteiner = document.getElementById('navigation');
let toggleButton = document.getElementById('burger-bar');

toggleButton.addEventListener('click', function() {
    conteiner.classList.toggle('activenav');
});



//სლაიდერი
let data = [
    {
       id: 1,
       imageUrl: 'https://media.istockphoto.com/photos/barber-shop-picture-id1096942614?k=20&m=1096942614&s=612x612&w=0&h=qHaM1WQ212tgDLs3gWzyCO7dIY-RXvVXYaqkfcPdYxE=' ,
       title: '',
       url: 'https://google.com'
    },
    {
        id: 2,
        imageUrl: 'https://www.greeka.com/photos/greece-wellness/barber-shop/hero/greece-wellness-barber-shop-1-1920.jpg' ,
        title: '',
        url: 'https://google.com'
    },
    {
        id: 3,
        imageUrl: 'https://www.timeoutriyadh.com/cloud/timeoutriyadh/2021/11/03/Barbershop-in-riyadh.jpg' ,
        title: '',
        url: 'https://google.com'
    },
    {
        id: 4,
        imageUrl: 'https://manofmany.com/wp-content/uploads/2020/07/Best-Barbershop-Melbourne-Feature.jpg.png' ,
        title: '',
        url: 'https://google.com'
    }

]


let sliderIndex = 0;


let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');
let sliderContent = document.getElementById('slider-content');
let dotsList = document.getElementsByClassName('dot');

// ფუნქციის საშუალებით ვქმნით ა ტეგს;
function createAtag(item) {
    // item - არის სათითაოდ თითეოლი ობიექტი data მასივიდან
    let tag = document.createElement('a');
    tag.setAttribute('href', item.url);
    tag.classList.add('slide');

    return tag;
}

// ფუნქციის საშუალებით ვქმნით სურათს;
function createImgTag(item) {
    let tagImage = document.createElement('img');
    tagImage.setAttribute('src', item.imageUrl);
    tagImage.setAttribute('alt', item.title);
    tagImage.classList.add('image-slider');

    return tagImage;
}

// ფუნქციის საშუალებით ვქმნით სათაურს ტეგს;
function createH2tag(item) {
    let tagTitle = document.createElement('h2');
    // tagTitle.textContent = item.title;
    // tagTitle.innerHTML = item.title;
    tagTitle.append(item.title);
    tagTitle.classList.add('image-title');

    return tagTitle;
}


function createDots(item) {
    let dots = document.createElement('div');
    dots.classList.add('dots');

    data.forEach( (element) => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-id', element.id - 1);

        dot.onclick = function(event) {
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlide();
        }

        dots.appendChild(dot);
    });

    console.log(dots);

    return dots;
}

// ვიძახებთ შექმნილ ფუნქციებს
function setSlide() {
    sliderContent.innerHTML = ' ';
    let slideItem = createAtag(data[sliderIndex]);
    let imgTag = createImgTag(data[sliderIndex]);
    let h2Tag = createH2tag(data[sliderIndex]);
    let dots = createDots();

    //ა ტეგში ვამატებთ სურათს და სათაურს
    slideItem.appendChild(imgTag);
    slideItem.appendChild(h2Tag);

    // გამზადებულ ა ტეგს ვაგდებთ ჩვენს დივში რომლიც გვაქვს შემქნილი სტატიკურად
    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(dots);

    CurrentDotActive();

    console.log(slideItem);
}

function CurrentDotActive() {
    dotsList[sliderIndex].classList.add('active');
}

// ქლიქის დამატება ისარზე
function arrowLeftClick() {
    if (sliderIndex <= 0) {
        sliderIndex = data.length - 1;
        setSlide();
        return;
    }
    sliderIndex--;
    setSlide();
}


function arrowRightClick() {
    if (sliderIndex >= data.length - 1) {
        sliderIndex = 0;
        setSlide();
        return;
    }
    sliderIndex++;
    // sliderIndex +=1;
    setSlide();
}


arrowLeft.addEventListener('click', arrowLeftClick);

arrowRight.addEventListener('click', arrowRightClick);

// setInterval( () => {
//     arrowRightClick();
// }, 3000);

setSlide();


// ბურგერის ანიმაცია
let burgerButton = document.getElementById('toggleButton');
let navBar = document.getElementById('navigation-ul');


burgerButton.addEventListener('click', function() {
    navBar.classList.toggle('toggle');
    burgerButton.classList.toggle('active');
});
