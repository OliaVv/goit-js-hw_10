// 'use strict';
import '../css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const debounce = require('lodash.debounce');
import { refs } from './refs';
import { fetchCountries } from './fetchCountries';
import { countriesList } from './createCountryList';
import { countryCard } from './createCountryCard';
const notifyOptions = {
    position: 'center-center',
    backOverlay: true,
    clickToClose: true,
}

const DEBOUNCE_DELAY = 300;

console.log(refs.inputEl);
console.log(refs.outputEl);


const handleInput = event => {
  const { value } = event.target;
  const normalizedValue = value.trim().toLowerCase();

  if (normalizedValue === "") {
    refs.listEl.innerHTML = '';
    refs.outputEl.innerHTML = '';
    return;
  }
  fetchCountries(normalizedValue).then(data => {
    //console.log(data);
 
if (data.length > 10) {
    Notify.info("Надто багато країн співпадають з вашим запитом. Спробуйте звузити пошук.", notifyOptions);
    refs.listEl.innerHTML = '';
    refs.outputEl.innerHTML = '';
  return;
  }
  if (data.length > 1 && data.length < 10 ) {
    refs.outputEl.innerHTML = '';
    refs.listEl.innerHTML = countriesList(data);
    return;
  }
    if (data.length === 1) {
    refs.listEl.innerHTML = countriesList(data);  
    refs.outputEl.innerHTML = countryCard(data[0]);
    return;
  }
  }).catch(error => {
    Notify.failure("На жаль, ми не знайшли таку країну :( Спробуйте пошукати щось інше!", notifyOptions);
    refs.listEl.innerHTML = '';
    refs.outputEl.innerHTML = '';
  })  
};

const debouncedInput = debounce(handleInput, DEBOUNCE_DELAY);

refs.inputEl.addEventListener('input', debouncedInput);

