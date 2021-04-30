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

// Images
// selecting elements using bracket notation
const logo = document.getElementById("logo-img")
logo.setAttribute('src', siteContent["nav"]["img-src"])

const headerImg = document.getElementById("cta-img")
headerImg.setAttribute('src', siteContent["cta"]['img-src'])

const middleImg = document.getElementById('middle-img')
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

// Navigation bar
// selecting elements using dot notation 
const anchorTags = document.querySelectorAll('nav a')
anchorTags[0].textContent = siteContent.nav['nav-item-1']
anchorTags[1].textContent = siteContent.nav['nav-item-2']
anchorTags[2].textContent = siteContent.nav['nav-item-3']
anchorTags[3].textContent = siteContent.nav['nav-item-4']
anchorTags[4].textContent = siteContent.nav['nav-item-5']
anchorTags[5].textContent = siteContent.nav['nav-item-6']

anchorTags.forEach(item => item.style.color = 'green')

const resource = document.createElement('a')
resource.textContent = 'Resource'
resource.href = '#'
resource.classList.add('nav-item-7')
document.querySelector('nav').appendChild(resource)
resource.style.color = 'green'

const info = document.createElement('a')
info.textContent = 'Info'
info.href = '#'
info.classList.add('nav-item-8')
document.querySelector('nav').prepend(info)
info.style.color = 'green'


// CTA section
const headingOne = document.querySelector('h1')
headingOne.innerHTML = 'DOM<br>Is<br>Awesome'

const button = document.querySelector('button')
button.textContent = siteContent.cta['button']

// Main Content
const headingFour = document.querySelectorAll('h4')
headingFour[0].textContent = siteContent["main-content"]['features-h4']
headingFour[1].textContent = siteContent['main-content']['about-h4']
headingFour[2].textContent = siteContent['main-content']['product-h4']
headingFour[3].textContent = siteContent['main-content']['services-h4']
headingFour[4].textContent = siteContent['main-content']['vision-h4']

const paragraphs = document.querySelectorAll('p')
paragraphs[0].textContent = siteContent["main-content"]['features-content']
paragraphs[1].textContent = siteContent['main-content']['about-content']
paragraphs[2].textContent = siteContent['main-content']['services-content']
paragraphs[3].textContent = siteContent['main-content']['products-content']
paragraphs[4].textContent = siteContent['main-content']['vision-content']

// Contact
headingFour[5].textContent = siteContent.contact['contact-h4']
paragraphs[5].textContent = siteContent.contact['address']
paragraphs[6].textContent = siteContent.contact['phone']
paragraphs[7].textContent = siteContent.contact['email']

// Footer
paragraphs[8].textContent = siteContent.footer['copyright']