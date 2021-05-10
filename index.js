/*
 * Add your JavaScript to this file to complete the assignment.  Don't forget
 * to add your name and @oregonstate email address below.
 *
 * Name: Jozias de Jonge
 * Email: dejongej@oregonstate.edu
 */

var button = document.getElementById("create-twit-button")
var modalBackdrop = document.getElementById("modal-backdrop")
var modal = document.getElementById("create-twit-modal")
var modalCancelButton = document.getElementsByClassName("modal-cancel-button")[0]
var modalCloseButton = document.getElementsByClassName("modal-close-button")[0]
var modalAcceptButton = document.getElementsByClassName("modal-accept-button")[0]
var twitText = document.getElementById("twit-text-input")
var twitAuthor = document.getElementById("twit-attribution-input")
var twitSearch = document.getElementById("navbar-search-input")
var twitSearchButton = document.getElementById("navbar-search-button")

function modalToggle(event) {
    if (modal.classList.contains("hidden")) {
        twitText.value = ""
        twitAuthor.value = ""
        modal.classList.remove('hidden')
        modalBackdrop.classList.remove('hidden')
    }
    else {
        modal.classList.add('hidden')
        modalBackdrop.classList.add('hidden')
    }
}

function addTwit(event) {
    if ((twitText.value == "") || (twitAuthor.value == "")) {
        alert("Please enter Text and Author information")
        return;
    }

    var icon = document.createElement('i');
    icon.classList.add('fa');
    icon.classList.add('fa-bullhorn');

    var twitIcon = document.createElement('div');
    twitIcon.classList.add('twit-icon');
    twitIcon.appendChild(icon);

    var text = document.createElement('p');
    text.classList.add('twit-text');
    text.textContent = twitText.value;

    var author = document.createElement('a');
    author.href = '#';
    author.textContent = twitAuthor.value;

    var attribution = document.createElement('p');
    attribution.classList.add('twit-attribution');
    attribution.appendChild(author);

    var twitContent = document.createElement('div');
    twitContent.classList.add("twit-content");
    twitContent.appendChild(text);
    twitContent.appendChild(attribution);


    var twit = document.createElement('article');
    twit.classList.add('twit');
    twit.appendChild(twitIcon);
    twit.appendChild(twitContent);

    var body = document.getElementsByClassName('twit-container')[0];
    body.appendChild(twit);

    modalToggle();
}