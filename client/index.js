// 2020.05.30 구르딩딩

const AUTOCOMPLETE_API = "http://localhost:3000/autocomplete?keyword=";

const searchField = document.getElementById("search-field");

function viewList(ulElement, arrList){
    arrList.forEach(data => {
        let liElement = document.createElement("li");
        liElement.className = "autocomplete-item";
        liElement.innerHTML = data;

        ulElement.appendChild(liElement);
    });
}

function removeAllChildElement(element) {
    while ( element.hasChildNodes() ) { element.removeChild( element.firstChild ); }
}

function showAutoCompleteList(dataList){
    const autocompleteResults = document.querySelector(".autocomplete-results");
    // 새로 보여주어야되기 때문에 이전에 존재하던 autoCompleteList li들을 제거한다.
    removeAllChildElement(autocompleteResults);
    viewList(autocompleteResults, dataList);
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