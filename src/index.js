import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import registerServiceWorker from './registerServiceWorker';

const arr = [5, 3, 6, 4, 2, 1, 0, 8];
// const compare = (value1, value2) => {
//     if(value1 > value2){
//         return -1;
//     }else if(value1 < value2){
//         return  1;
//     }else{
//         return 0;
//     }
// };
//
// arr.sort(compare);

// arr.splice(0, 3);//delete
// arr.splice(1, 0, 1, 23, 4);//insert
// arr.splice(0, 2, 7, 4); //replace
const index = arr.lastIndexOf(4);
console.log(index);

const person = {name: 'Zacks'};
const people = [{name: 'Zakcs'}];

// console.log(person === {name: 'Zakcs'});

const increment_arr = arr.map(it => it + 1);

console.log(increment_arr);

const sum = arr.reduce((prev, cur, index, array) => prev + cur);
console.log(sum);

const date = new Date();
const regexp = /\//g;
console.log(date.toLocaleDateString().replace(regexp, '-'))
console.log(date.toTimeString());

console.log(regexp.global);
console.log(regexp.source);

// const text = "zmom and dad and baby";
// const pattern = /mom( and dad( and baby)?)?/gi;
// const matches = pattern.exec(text);
// console.log(matches);

const text = "cat, bat, sat, fat";
const pattern1 = /.at/;
var matches = pattern1.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern1.lastIndex);

const pattern2 = /.at/g;
var matches = pattern2.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern2.lastIndex);

console.log(typeof pattern2.valueOf());
console.log(pattern2.toString());

const ptext = 'this has been a bshort summer';
const pattern3 = /(.)hort/g;
var matches = pattern3.exec(ptext);
console.log(RegExp.$_);
console.log(RegExp.$1);
console.log(matches);

var sumfunction = (num1, num2) => num1 + num2;
const anthorsum = sumfunction;
sumfunction = null;
console.log(anthorsum(1, 4));

const factorial = (num) => {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
};
console.log(factorial(3));

const o = {color: 'blue'};

// const sayColor = () => {console.log(this.color)};
function sayColor() {
    console.log(this.color)
};
sayColor.call(o);
// o.sayColor = sayColor;
// o.sayColor();

const stringValue = 'hello world';
console.log(stringValue.charAt(1));
console.log(stringValue.charCodeAt(1));

console.log(stringValue.slice(3, 7));

const phonenum = '13260870613';
console.log(phonenum.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2'));

const stringValue2 = '   hello world    ';
console.log(stringValue2.trim());

const atext = 'cat, bat, sat, fat';
// var pos = null;
// for(let i = 0; i <= 1; i++){
//     pos = atext.search(/at/);
//     console.log(pos);
// }

// const patternat = /at/g;
// var tindex = null;
// for(let i = 0; i <= 1; i++){
//     tindex = patternat.exec(atext);
//     console.log(tindex.index);
// }

console.log(atext.replace(/(at)/g, '($1)'));

const htmlEscape = (text) => {
    return text.replace(/[<>"]/g, (match, pos, originalText) => {
        switch (match) {
            case "<":
                return '&lt;';
            case ">":
                return '&gt';
            case "\"":
                return '&amp';
        }
    });
};

const regText = `<p class="greeting">Hello World!</p>`;
console.log(htmlEscape(regText));



ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
