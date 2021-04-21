let moment = require('./node_modules/moment')

console.log(moment().format('YYYY-MM-DD'));

// custom text
console.log(moment().format('YYYY [is hetzelfde als] YYYY'));

// time compared to other moment
console.log(moment("20111031", "YYYYMMDD").fromNow());
console.log(moment().startOf('day').fromNow());
console.log(moment().endOf('hour').fromNow());

// subtract days
console.log(moment().subtract(3, 'days').calendar());
console.log(moment().subtract(3, 'days').format('MM-DD'));

// add days
console.log(moment().add(3, 'days').calendar());
console.log(moment().add(3, 'days').format('MM-DD'));

// language change
console.log(moment().locale('nl').subtract(3, 'days').calendar());

// link https://momentjs.com/

// Voor de rest kan ik deze package niet in een HTML file krijgen. Ik krijg dan elke keer de error dat ik niet iets mag importen in een component.