let countriesWrapper = document.querySelector('#countries');
let searchInput = document.querySelector('#search-country');
let modes = document.querySelector('#modes');
let body = document.querySelector('body');
let dropDown = document.querySelector('#Region-filter');


let request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.onload = function() {
    let data = JSON.parse(this.response);

    if (this.status === 200) {
        data.forEach(country => {
            
            let countryCard = document.createElement('div');
            countryCard.setAttribute('class', 'col-xl-1 py-2');
            
            let countryFlag = document.createElement('img');
            countryFlag.src = country.flag;
            countryCard.appendChild(countryFlag);

            let countryName = document.createElement('h6');
                countryName.setAttribute('class', 'country-name');
                countryName.innerText = country.name;
                countryCard.appendChild(countryName);

                let countryRegion = document.createElement('p');
                countryRegion.setAttribute('class', 'country-region');
                countryRegion.innerText = country.region;
                countryCard.appendChild(countryRegion);
        

            countriesWrapper.appendChild(countryCard);
        });
    }
}

request.send();

searchInput.addEventListener('keyup', function() {
    let input = searchInput.value;
    
    
    let country = document.getElementsByClassName('country-name');

    for(let i = 0; i < country.length; i++) {    
        if(country[i].innerText.toLowerCase().includes(input.toLowerCase())) {
            country[i].parentElement.style.display = 'block';
        } else {
            country[i].parentElement.style.display = 'none';
        }

    }

});    


modes.addEventListener('click', function() {
    body.classList.toggle('dark');

    // body.classList.value === 'dark' ? this.innerText = 'Light Mode' : this.innerText = 'Dark Mode';
    let countries = document.querySelectorAll('.country-name');

    if (body.classList.value === 'dark') {
        this.innerText = 'Light Mode';
        countries.forEach(element => {
            element.style.color = 'white';
        });
        

    } else {
        this.innerText = 'Dark Mode';
        countries.forEach(element => {
            element.style.color = 'black';
        });
        element.style.color = 'black';
    } 
    
});
dropDown.addEventListener('change', function() {
    let selectedRegion = dropDown.options[dropDown.selectedIndex].value;
    let regionName = document.getElementsByClassName('country-region');
    for(let i = 0; i < regionName.length; i++) {
        if(selectedRegion === 'All') {
            regionName[i].parentElement.style.display = 'block';
        } else if (regionName[i].innerText.toLowerCase().includes(selectedRegion.toLowerCase())) {
            regionName[i].parentElement.style.display = 'block';
        } else {
            regionName[i].parentElement.style.display = 'none';
        }
    }

    // for(let i = 0; 1 < regionName.length)
    
})
