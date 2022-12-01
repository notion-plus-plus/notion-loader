//you will need to host this somewhere so you can add custom pages

function loadHTML(page = "examplepage") {
    const url = "https://raw.githubusercontent.com/notion-plus-plus/notion-loader/main/html/"+page+".html"

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const html = xhr.responseText;
            document.getElementsByTagName('body')[0].innerHTML = html; 
        }
    };
    xhr.send();
}

let url = new URL(window.location.href);
let params = new URLSearchParams(url.search);
let page = params.get('page');

loadHTML(page) 