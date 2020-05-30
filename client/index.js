// 2020.05.30 구르딩딩

const AUTOCOMPLETE_API = "http://localhost:3000/autocomplete?keyword=";

const searchField = document.getElementById("search-field");

function showAutoCompleteList(arr) {
    
}

function getAndShowAutoCompleteKey(keyword){
    fetch(AUTOCOMPLETE_API + keyword)
    .then(res => res.json())
    .then(data => showAutoCompleteList(data));
}

function searchKeyInput(e){
    // input 할때마다 autocomplete list를 얻어와서 보여준다.
    getAndShowAutoCompleteKey(e.target.value);
}

function main() {
    console.log("DOM Content Loaded");
    // search input에 input event 추가
    searchField.addEventListener("input", searchKeyInput);
}

document.addEventListener('DOMContentLoaded', main);