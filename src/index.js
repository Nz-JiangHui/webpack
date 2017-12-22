/**
 * Created by Nz on 2017/12/22.
 */

import _ from  'lodash';

import printMe from './print';
import './style.css';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['hellow','webpack']);
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);


    return element;
}

document.body.appendChild(component());

if(module.hot){
    module.hot.accept('./print.js',function () {
        // console.log('Accept the updated printMe module!');
        // printMe();
    });
}