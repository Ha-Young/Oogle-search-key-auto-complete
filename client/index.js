// 2020.05.30 구르딩딩

const AUTOCOMPLETE_API = "http://localhost:3000/autocomplete?keyword=";

const searchField = document.getElementById("search-field");

function main() {
    console.log("DOM Content Loaded");
    // search input에 input event 추가
    searchField.addEventListener("input", searchKeyInput);
}

document.addEventListener('DOMContentLoaded', main);