// script.js
document.getElementById("moreInfoBtn").addEventListener("click", function() {
    const moreInfo = document.getElementById("moreInfo");
    moreInfo.style.display = moreInfo.style.display === "none" ? "block" : "none";
});
// script.js
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Megakadályozzuk az űrlap elküldését
    const formResponse = document.getElementById("formResponse");
    formResponse.innerText = "Köszönjük! Az üzeneted elküldve!";
    formResponse.style.display = "block";
    this.reset(); // Űrlap törlése
});
document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ne küldje el a formot

    const selectedProduct = document.querySelector('input[name="product"]:checked');
    const selectedPrice = document.querySelector('input[name="price"]:checked');
    const selectedFeatures = Array.from(document.querySelectorAll('input[name="feature"]:checked'))
                                  .map(el => el.value);

    const responseDiv = document.getElementById('quizResponse');
    responseDiv.style.display = 'block';

    let responseMessage = 'Köszönjük a válaszaidat!';

    if (selectedProduct) {
        responseMessage += `<br>1. Te a következő terméket választottad: <strong>${selectedProduct.value}</strong>`;
    }

    if (selectedPrice) {
        responseMessage += `<br>2. Az árfekvésed: <strong>${selectedPrice.value}</strong>`;
    }

    if (selectedFeatures.length > 0) {
        responseMessage += `<br>3. A következő funkciókat keresed: <strong>${selectedFeatures.join(', ')}</strong>`;
    } else {
        responseMessage += '<br>3. Nem választottál funkciókat.';
    }

    responseDiv.innerHTML = responseMessage;
});
document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ne küldje el a formot

    const selectedProduct = document.querySelector('input[name="product"]:checked');
    const customProduct = document.getElementById('customProduct').value;
    const selectedPrice = document.querySelector('input[name="price"]:checked');
    const selectedFeatures = Array.from(document.querySelectorAll('input[name="feature"]:checked'))
                                  .map(el => el.value);

    const responseDiv = document.getElementById('quizResponse');
    const answersDiv = document.getElementById('quizAnswers');
    responseDiv.style.display = 'block';

    let responseMessage = '';

    if (selectedProduct) {
        const productChoice = selectedProduct.id === 'customProductRadio' && customProduct ? customProduct : selectedProduct.value;
        responseMessage += `<p>1. Te a következő terméket választottad: <strong>${productChoice}</strong></p>`;
    }

    if (selectedPrice) {
        responseMessage += `<p>2. Az árfekvésed: <strong>${selectedPrice.value}</strong></p>`;
    }

    if (selectedFeatures.length > 0) {
        responseMessage += `<p>3. A következő funkciókat keresed: <strong>${selectedFeatures.join(', ')}</strong></p>`;
    } else {
        responseMessage += '<p>3. Nem választottál funkciókat.</p>';
    }

    answersDiv.innerHTML = responseMessage;
    
    // Köszönő üzenet
    const thankYouMessage = document.createElement('p');
    thankYouMessage.innerText = "Köszönöm, hogy kitöltésével segít nekem!";
    responseDiv.appendChild(thankYouMessage);
});
const sections = document.querySelectorAll('.section');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // 10% láthatóság
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Alternáló érkezés: balról vagy jobbról
            if (entry.target.classList.contains('section-left')) {
                entry.target.style.transform = 'translateX(100%)'; // Jobbra csúszik
            }
            observer.unobserve(entry.target); // Ne figyeljük tovább ezt a szekciót
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section); // Figyeld a szekciókat
});
