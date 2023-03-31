'use strict'

const setingValues = document.querySelectorAll('.seting-box');
const accepts = document.querySelector('.accepts');
const accepts2 = document.querySelector('.accepts2');
const settings = document.querySelector('.settings');
const cokkiesBox = document.querySelector('.cokkies-box');
const settingsBox = document.querySelector('.settings-box');
const bigFilter = document.querySelector('.big-filter');
let result = {browser:'', system:'', borWidth:'', borHeight:''};

const checkCookie = setInterval(function(){
    if(document.cookie) {
        cokkiesBox.style.display = 'none';
        settingsBox.style.display = 'none';
        bigFilter.style.display = 'none';
    } else {
        cokkiesBox.style.display = 'block';
        settingsBox.style.display = 'block';
        bigFilter.style.display = 'block';
    }
},1000)

bigFilter.addEventListener('click', () => {
    cokkiesBox.style.display = 'none';
    settingsBox.style.display = 'none';
    bigFilter.style.display = 'none';
    settingsBox.style.zIndex = '1004'
});

settings.addEventListener('click', () => {
    settingsBox.style.zIndex = '1006'
});

accepts.addEventListener('click', () => {
    getCookie();
    setCookie(result.browser,result.system,result.borWidth,result.borHeight);
    console.log(document.cookie)
});

accepts2.addEventListener('click', () => {
    getCookie();
    setCookie(result.browser,result.system,result.borWidth,result.borHeight);
    settingsBox.style.zIndex = '1004'
    console.log(document.cookie);
    setingValues[0].checked = 'checked';
    setingValues[1].checked = 'checked';
    setingValues[2].checked = 'checked';
    setingValues[3].checked = 'checked';
});

setingValues.forEach((element) => {
    element.addEventListener('click', () => {
        getCookie()
    });
});

window.onresize = function() {
    if(setingValues[2].checked) {
        result.borWidth = document.body.clientWidth;
    } else {
        result.borWidth = 'secrecy';
    }

    if(setingValues[3].checked) {
        result.borHeight = document.body.clientHeight;
    } else {
        result.borWidth = 'secrecy';
    }
}

function getCookie() {
    getBrowser()
    getOS()
    
    if(setingValues[2].checked) {
        result.borWidth = document.body.clientWidth;
    } else {
        result.borWidth = 'secrecy';
    }
    
    if(setingValues[3].checked) {
        result.borHeight = document.body.clientHeight;
    } else {
        result.borHeight = 'secrecy';
    }

    return result
}

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

function getBrowser() {
    if(setingValues[0].checked) {
        if(navigator.userAgent.indexOf("Edg") !== -1) {
            result.browser = 'Edg';
        } else if(navigator.userAgent.indexOf("Chrome") !== -1) {
            result.browser = 'Chrome';
        } else {
            result.browser = 'Firefox';
        }
    } else {
        result.browser = 'secrecy';
    }

    return result.browser
}

function getOS() {
    if(setingValues[1].checked) {
        if(navigator.userAgent.indexOf("Windows") !== -1) {
            result.system = 'Windows';
        } else if(navigator.userAgent.indexOf("Linux") !== -1) {
            result.system = 'Linux';
        } else {
            result.system = 'Mac';
        }
    } else {
        result.system = 'secrecy';
    }

    return result.system
}