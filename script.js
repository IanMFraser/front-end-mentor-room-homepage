const menuButton = document.querySelector('.hamburger')
const menuIcon = menuButton.firstChild
const navigation = document.querySelector('.navigation')
const navbar = document.querySelector('.navbar')
const overlay = document.querySelector('.overlay')
const arrowLeft = document.querySelector('#left')
const arrowRight = document.querySelector('#right')
const heroImage = document.querySelector('.hero-img')
const heroHeader = document.querySelector('.hero-header')
const heroParagraph = document.querySelector('.hero-paragraph')
const data = [
    {
        desktopImage: 'images/desktop-image-hero-1.jpg',
        mobileImage: 'images/mobile-image-hero-1.jpg',
        header: 'Discover innovative ways to decorate',
        paragraph: ` We provide unmatched quality, comfort, and style for property owners across the country.
        Our experts combine form and function in bringing your vision to life. Create a room in your
        own style with our collection and make your property a reflection of you and what you love.`
    },
    {
        desktopImage: 'images/desktop-image-hero-2.jpg',
        mobileImage: 'images/mobile-image-hero-2.jpg',
        header: 'We are available all across the globe',
        paragraph: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`
    },
    {
        desktopImage: 'images/desktop-image-hero-3.jpg',
        mobileImage: 'images/mobile-image-hero-3.jpg',
        header: 'Manufactured with the best materials',
        paragraph: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`
    }
]

//which header page are we on?
let currentPage = 0;

//navigation menu handler
menuButton.addEventListener('click', () => {
    if(navigation.style.display === 'none') {
        navigation.style.display = 'flex'
        menuIcon.src = 'images/icon-close.svg'
        navbar.style.backgroundColor = 'white';
        overlay.style.display = 'block'
    } else {
        navigation.style.display = 'none'
        menuIcon.src = 'images/icon-hamburger.svg'
        navbar.style.background = 'none';
        overlay.style.display = 'none'
    }
})

//left arrow button handler
arrowLeft.addEventListener('click', () => {
    currentPage--
    if(currentPage < 0){
        currentPage = data.length - 1
    }
    if(window.innerWidth < 750) {
        heroImage.style.backgroundImage = `url(${data[currentPage].mobileImage})`
        heroHeader.innerHTML = data[currentPage].header
        heroParagraph.innerHTML = data[currentPage].paragraph  
        console.log(currentPage)
    } else {
        heroImage.style.backgroundImage = `url(${data[currentPage].desktopImage})`
        heroHeader.innerHTML = data[currentPage].header
        heroParagraph.innerHTML = data[currentPage].paragraph  
        console.log(currentPage)
    }   

})

//right arrow button handler
arrowRight.addEventListener('click', () => {
    currentPage++
    if(currentPage > data.length-1){
        currentPage = 0
    }  
    if(window.innerWidth < 750){
        heroImage.style.backgroundImage = `url(${data[currentPage].mobileImage})`
        heroHeader.innerHTML = data[currentPage].header
        heroParagraph.innerHTML = data[currentPage].paragraph  
        console.log(currentPage)
    }  else {
        heroImage.style.backgroundImage = `url(${data[currentPage].desktopImage})`
        heroHeader.innerHTML = data[currentPage].header
        heroParagraph.innerHTML = data[currentPage].paragraph  
        console.log(currentPage)
    }
})

//this sets the correct header image based on screen size when page first renders
window.onload = () => {
    currentPage = 0;
    if(window.innerWidth < 750){
        heroImage.style.backgroundImage = `url(${data[currentPage].mobileImage})`
        heroHeader.innerHTML = data[currentPage].header
        heroParagraph.innerHTML = data[currentPage].paragraph  
        console.log(currentPage)
    }  else {
        heroImage.style.backgroundImage = `url(${data[currentPage].desktopImage})`
        heroHeader.innerHTML = data[currentPage].header
        heroParagraph.innerHTML = data[currentPage].paragraph  
        console.log(currentPage)
    } 

}