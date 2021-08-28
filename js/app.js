const getCountrys = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountry(data));
};
getCountrys();

const displayCountry = (data) => {
  const countryCountainer = document.getElementById("row");
  for (country of data) {
    const div = document.createElement("div");
    div.classList.add("col-lg-4");
    div.innerHTML = `
        <div class="card h-100 " >
            <img src="${country.flag}" onclick="deteils('${country.name}')" class="card-img-top img-fluid " alt="...">
            <div class="card-body">
                <h5 class="card-title">${country.name}</h5>
            </div>
        </div>
        `;
    countryCountainer.appendChild(div);
  }
};

const deteils = (name) => {
  const url = `https://restcountries.eu/rest/v2/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showDetails(data[0]));
};
const showDetails = (data) => {
  const asid = document.getElementById("deteils");
  asid.innerHTML = `
    <img src="${data.flag}" class="detail-img img-fluid">
            <h3 class="text-center">${data.name}</h3>
            <p>Capital: ${data.capital}</p>
            <p>Alpha2 Code : ${data.alpha2Code}</p>
            <p>Alpha3 Code : ${data.alpha3Code}</p>
            <p>Area: ${data.area} </p>
            <p class="text">Borders: ${data.borders}</p>
            <p>Languages: ${data.languages[0].name}</p>
            <p>Population: ${data.population}</p>
            <p>Region: ${data.region}</p>
            <p>Subregion: ${data.subregion}</p>
            <p>Top Level Domain: ${data.topLevelDomain}</p>
            
    `;
};
