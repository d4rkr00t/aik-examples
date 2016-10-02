import Rx from '@rxjs/rx';
import './style.css';
import APPID from './key';

const UPDATE_INTERVAL = 20000;

const $widgetsCont = document.getElementById('widgets');
const $zipcodeInput = document.getElementById('zipcode-input');
const $addLocationBtn = document.getElementById('location-button');

const getTemp = zip =>
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${zip},us&units=metric&appid=${APPID}`)
    .then(res => res.json());

const zipTempStreamFactory = zip =>
  Rx.Observable
    .fromPromise(getTemp(zip))
    .filter(res => res.cod === 200)
    .map(({ main: { temp } }) => ({ temp, zip }));

const createTempWidget = ({ zip, temp }) => {
  const widget = document.createElement('div');
  widget.id = `zip-${zip}`;
  widget.classList.add('location');
  widget.classList.add('color-' + (Math.floor(Math.random() * (7 - 2)) + 1));
  widget.innerHTML = `<div class="zip">${zip}</div>
  <div class="temp">${temp}&deg;C</div>`;
  return widget;
};

const btnClick$
  = Rx.Observable
      .fromEvent($addLocationBtn, 'click')
      .map(() => true);

const zipInput$
  = Rx.Observable
      .fromEvent($zipcodeInput, 'input')
      .map(e => e.target.value)
      .filter(zip => zip.length === 5);

const zipcode$
  = btnClick$
      .withLatestFrom(zipInput$, (click, zip) => zip)
      .distinct();

zipcode$
  .flatMap(zipTempStreamFactory)
  .subscribe(widget => {
    $widgetsCont.appendChild(createTempWidget(widget));
    $zipcodeInput.value = '';
  });

const replayZip$ = new Rx.ReplaySubject();
zipcode$.subscribe(replayZip$);

Rx.Observable
  .interval(UPDATE_INTERVAL)
  .flatMapLatest(() => replayZip$)
  .flatMap(zipTempStreamFactory)
  .subscribe(({ zip, temp }) => {
    console.log('Updating: ', zip, temp);
    const widget = document.getElementById(`zip-${zip}`);
    if (!widget) return;
    widget.querySelector('.temp').innerHTML = `${temp}&deg;C`;
  });
