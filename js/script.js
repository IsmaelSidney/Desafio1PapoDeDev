function changeColor(color) {
    switch (color) {
        case 'green':
            setTimeout(function() {
                document.getElementById('shoes-img').src = "assets/sneakers.png";
                document.querySelector('#green').classList.add('active')
                document.querySelector('#red').classList.remove('active')
                document.querySelector('#blue').classList.remove('active')
                document.querySelector('.btnBuy').style.background = '#B5DB48'
                document.querySelector('.brand').style.color = '#B5DB48'
            }, 600);

            break;
        case 'red':
            setTimeout(function() {
                document.getElementById('shoes-img').src = "assets/redSneakers.png";
                document.querySelector('#green').classList.remove('active')
                document.querySelector('#red').classList.add('active')
                document.querySelector('#blue').classList.remove('active')
                document.querySelector('.btnBuy').style.background = '#FF3838'
                document.querySelector('.brand').style.color = '#FF3838'
            }, 600);

            break;
        case 'blue':
            setTimeout(function() {
                document.getElementById('shoes-img').src = "assets/blueSneakers.png";
                document.querySelector('#green').classList.remove('active')
                document.querySelector('#red').classList.remove('active')
                document.querySelector('#blue').classList.add('active')
                document.querySelector('.btnBuy').style.background = '#3864FF'
                document.querySelector('.brand').style.color = '#3864FF'

            }, 600);
            break;
    }
}

const container = document.querySelector('.container');
const card = document.querySelector('.card');
const description = document.querySelector("h2");
const price = document.querySelector('.price');
const content = document.querySelector('.content-area');

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateX(${xAxis}deg) rotateY(${yAxis}deg)`
})
container.addEventListener('mouseenter', (e) => {
    card.style.transition = `none`;

    description.style.transform = "translateZ(150px)";
})
container.addEventListener('mouseleave', (e) => {
    card.style.transition = `all 0.5s ease `;
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    description.style.transform = "translateZ(0)"
})