let editProfile = document.getElementById("editProfile");
editProfile.addEventListener("click", function () {
    let newName = prompt("Enter your new name");
    document.getElementById("name").innerHTML = newName;
});

// Solved using Using the spread operator
let deny = [...document.getElementsByClassName("fa-circle-xmark")];
let accept = [...document.getElementsByClassName("fa-circle-check")];
let reqNum = document.getElementById("requests-number");
let connNum = document.getElementById("connections-number");

accept.forEach(function (btn) {
    btn.addEventListener("click", function () {
        btn.parentNode.parentNode.remove();
        reqNum.innerText = parseInt(reqNum.innerText) - 1;
        connNum.textContent = parseInt(connNum.textContent) + 1;
        let personContainer = btn.parentNode.previousElementSibling;
        let firstConnection = document.querySelector(".person-connections");
        let newConnection = document.createElement("div");
        newConnection.className = "person-connections";
        firstConnection.parentNode.insertBefore(newConnection, firstConnection);
        //newConnection.innerHTML = btn.parentNode.previousElementSibling;
        newConnection.innerHTML = personContainer.outerHTML;

    });
});

deny.forEach(function (btn) {
    btn.addEventListener("click", function () {
        btn.parentNode.parentNode.remove();
        reqNum.textContent = parseInt(reqNum.textContent) - 1;
    });
});