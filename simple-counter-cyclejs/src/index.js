import xs from 'xstream';
import { run } from '@cycle/xstream-run';
import { makeDOMDriver, div, button } from '@cycle/dom';
import './style.css';

function main(sources) {
  const plusButton = sources.DOM.select('.plus');
  const minusButton = sources.DOM.select('.minus');
  const plusClicks$ = plusButton.events('click').map(() => +1);
  const minusClicks$ = minusButton.events('click').map(() => -1);
  const count$ = xs.merge(plusClicks$, minusClicks$).fold((acc, i) => acc + i, 0);

  return {
    DOM: count$.map(i => {
      return div('.container', [
        div('.counter' + (i >= 0 ? '.positive' : '.negative'), ['' + i]),
        div([
          button('.minus.button', ['-1']),
          button('.plus.button', ['+1'])
        ])
      ]);
    })
  };
}

run(main, {
  DOM: makeDOMDriver('#app')
});
