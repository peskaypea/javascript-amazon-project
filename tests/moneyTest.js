import {formatCurrency} from '../../scripts/utils/money.js'

console.log('test suit: formatCurrent');
console.log('converts cents into dollars')


if(formatCurrency(2095) === '20.95'){
    console.log('Passed')
} else{
    console.log('Failed')
}

if(formatCurrency(0) === '0.00'){
    console.log('passed');
} else{
    console.log('failed');
}

if(formatCurrency(2000.4) === '20.00'){
    console.log('passed');
} else{
    console.log('failed');
}