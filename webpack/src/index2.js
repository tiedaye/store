import css from './css/style.css'
import sass from './sass/style.scss'
var wei = require('../author.json');
// import $ from 'jquery';
// var oDiv1 = document.getElementById('div1');
// oDiv1.innerHTML = 'hello worldhzhang';
//  let a = 10;
//  let b =(c)=>{
//      console.log(c)
//  };
//  b(a);
$('#div1').html(`微创  作者：${wei.name},年龄：${wei.age}`);