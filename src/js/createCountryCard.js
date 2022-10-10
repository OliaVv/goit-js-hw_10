export const countryCard = ({ capital, population, languages }) => {
  return `
  <div class="country-card">
  <p><span class="country-card__item">Capital:</span> <span class="country-card__info">${capital}</span></p>
  <p><span class="country-card__item">Population:</span> <span class="country-card__info">${population}</span></p>
  <p><span class="country-card__item">Languages:</span> <span class="country-card__info">${Object.values(languages).join(', ')}</span></p>
  </div>
  `;
}

//name.official,capital,population,flags.svg,languages