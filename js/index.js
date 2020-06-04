const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navigation = document.getElementsByTagName('a');
console.log(navigation);

navigation[0].textContent = "Services";
navigation[1].textContent = "Product";
navigation[2].textContent = "Vision";
navigation[3].textContent = "Features"
navigation[4].textContent = "About";
navigation[5].textContent = "Contact";

const ctaImg = document.getElementById("cta-img");
console.log(ctaImg);

ctaImg.setAttribute('src', siteContent["cta"]["img-src"] );

const ctaH1 = document.getElementsByTagName('h1')[0];
console.log(ctaH1);
ctaH1.textContent = (siteContent['cta']['h1']);

const ctaBtn = document.getElementsByTagName('button')[0];
console.log(ctaBtn);
ctaBtn.textContent=(siteContent['cta']["button"]);


const middleImg = document.getElementById("middle-img");
console.log(middleImg);

middleImg.setAttribute("src", siteContent['main-content']["middle-img-src"]);

// const allTextContent =document.getElementsByClassName("text-content");
// console.log(allTextContent);

const allH4 = document.getElementsByTagName("h4");
console.log(allH4);

allH4[0].textContent = (siteContent["main-content"]["features-h4"]);
allH4[1].textContent =(siteContent["main-content"]["about-h4"]);
allH4[2].textContent = (siteContent["main-content"]["services-h4"]);
allH4[3].textContent =(siteContent["main-content"]["product-h4"]);
allH4[4].textContent =(siteContent["main-content"]["vision-h4"]);
allH4[5].textContent=(siteContent["contact"]["contact-h4"]);

const allP = document.getElementsByTagName('p');
console.log(allP);

allP[0].textContent = (siteContent["main-content"]["features-content"]);
allP[1].textContent = (siteContent["main-content"]["about-content"]);
allP[2].textContent = (siteContent["main-content"]["services-content"]);
allP[3].textContent = (siteContent["main-content"]["product-content"]);
allP[4].textContent = (siteContent["main-content"]["vision-content"]);
allP[5].textContent = (siteContent["contact"]["address"]);
allP[6].textContent = (siteContent["contact"]["phone"]);
allP[7].textContent = (siteContent["contact"]["email"]);
allP[8].textContent = (siteContent["footer"]["copyright"]);


const navStyle = document.querySelectorAll('a');
console.log(navStyle);

navStyle.forEach(element => {
  element.style.color ='green';
});

// const contact = document.createElement('div');
// console.log(contact);

// const childH4 = document.createElement('h4');
// contact.appendChild(childH4);

// const childP = document.createElement('p');
// contact.appendChild(childP);

const newA1 = document.createElement('a');
newA1.textContent ="End";
newA1.style.color = "hotpink";
console.log(newA1)

const nav = document.querySelector('nav');
nav.appendChild(newA1);

const newA2 = document.createElement('a');
newA2.textContent ="Beginning";
newA2.style.color ="cadetblue";
console.log(newA2);

nav.prepend(newA2);

