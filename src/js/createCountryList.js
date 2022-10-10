export const countriesList = (countries) => {
  return countries.map(
    ({ name, flags}) => `<li class="list">
   <img src="${flags.svg}" width = 100 alt = "flag of ${name.official}"><p class="country-name"> ${name.official}</p>
 
  </li>`
  ).join("");
}


//name.official,capital,population,flags.svg,languages