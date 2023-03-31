'use strict'

/* const xx = 'sss'

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
  
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

console.log(getCookie(xx)) */

const setingValues = document.querySelectorAll('.seting-box');

const accepts = document.querySelector('.accepts');

const cokkiesBox = document.querySelector('.cokkies-box');
const settingsBox = document.querySelector('.settings-box');
const bigFilter = document.querySelector('.big-filter');



const checkCookie = setInterval(function(){
    if(document.cookie) {
        cokkiesBox.style.display = 'none';
        settingsBox.style.display = 'none';
        bigFilter.style.display = 'none';
    } else {
        cokkiesBox.style.display = 'block';
        settingsBox.style.display = 'none';
        bigFilter.style.display = 'block';
    }
},1000)

setingValues.forEach((element,index) => {
    element.addEventListener('click', () => {

        if(element.checked && index===0) {
            console.log('获取浏览器')
        }

        if(element.checked && index===1) {
            console.log('获取系统')
        } 

        if(element.checked && index===2) {
            console.log('获取宽度')
        } 

        if(element.checked && index===3) {
            console.log('获取高度')
        } 
     });
});

/* if(setingValue[0].checked) {
    console.log('获取浏览器')
} */

let browser = '';
let system = '';
let borWidth = '';
let borHeight = '';


if(setingValues[0].checked) {
    browser = 'Chrome';
    //console.log()
    /* if(navigator.appVersion.indexOf("Chrome")) {
        console.log('是Chrome浏览器')
    } */
    /* console.log(navigator.userAgent) */
    /* if(navigator.appVersion.indexOf("Chrome")) {
        console.log('是Chrome浏览器')
    }

    if(navigator.appVersion.indexOf("Chrome")) {
        console.log('是Chrome浏览器')
    } */
} else {
    browser = '不同意获取浏览器信息';
}

if(setingValues[1].checked) {
    system = 'WIN';
} else {
    system = '不同意获取系统信息';
}



if(setingValues[2].checked) {
    borWidth = document.body.clientWidth;
} else {
    borWidth = '不同意获取浏览器宽度';
}

if(setingValues[3].checked) {
    borHeight = document.body.clientHeight;
} else {
    borWidth = '不同意获取浏览器宽度';
}

window.onresize = function() {
    
    if(setingValues[2].checked) {
        borWidth = document.body.clientWidth;
    } else {
        borWidth = '不同意获取浏览器宽度';
    }

    if(setingValues[3].checked) {
        borHeight = document.body.clientHeight;
    } else {
        borWidth = '不同意获取浏览器宽度';
    }
}

accepts.addEventListener('click', () => {
    setCookie(browser,system,borWidth,borHeight);
    console.log(document.cookie)
 });

function setCookie(browser,system,borWidth,borHeight) {
    let borrwserKey = encodeURIComponent('Browser')
    let browserValue = encodeURIComponent(browser)
    document.cookie = `${borrwserKey}=${browserValue}; path=/; max-age=15`;

    let systemKey = encodeURIComponent('System')
    let systemValue = encodeURIComponent(system)
    document.cookie = `${systemKey}=${systemValue}; path=/; max-age=15`;

    let borWidthKey = encodeURIComponent('BorWidth')
    let borWidthValue = encodeURIComponent(borWidth)
    document.cookie = `${borWidthKey}=${borWidthValue}; path=/; max-age=15`;

    let borHeightKey = encodeURIComponent('BorHeight')
    let borHeightValue = encodeURIComponent(borHeight)
    document.cookie = `${borHeightKey}=${borHeightValue}; path=/; max-age=15`;
}

//console.log(document.cookie)