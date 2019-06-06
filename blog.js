// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text 
// with the textContent property to "Welcome to the {insert your name here} blog"

const hNewText = document.querySelectorAll('.article__header')
console.log (hNewText);
hNewText[0].textContent = "Welcome to the Curt Cato blog"

// Use JavaScript to obtain a reference to all article__header elements and change their classList 
// property value to article__header important.

hNewText[0].classList.add("important")
hNewText[1].classList.add('important')

// Obtain a reference the element with a class of dashed and remove it.

const dashed = document.querySelectorAll('.dashed')
console.log (dashed)
dashed[0].classList.remove('dashed')

// Obtain a reference the element with a class of article_footer and add the class of goldenrod it

const footerrod = document.querySelectorAll('.article__footer')
console.log (footerrod)
footerrod[0].classList.add('goldenrod')








