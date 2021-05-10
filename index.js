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

