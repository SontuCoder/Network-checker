

let netConnection = false;

let text1 = document.getElementsByTagName("span")[0];
let text2 = document.getElementsByTagName("p")[0];

let wrap = document.getElementsByClassName("wrapper")[0];

let wifi = document.getElementsByClassName("net-img")[0];

function addHiddenIn(sec){
    setTimeout(() => {
        wrap.classList.remove("hidden-out");
        wrap.classList.add("hidden-in");
    }, sec);
}

function addHiddenOut(){
    wrap.classList.remove("hidden-in");
    wrap.classList.add("hidden-out")
}

function updateStatus(){
    if(navigator.onLine){
        netConnection = true;
        text1.innerText = "You're online now";
        text2.innerText = "All systems go!";
        wifi.style.backgroundColor = "#2ecc71"
    } else {
        netConnection = false;
        text1.innerText = "You're offline!";
        text2.innerText = "Ohh! Internet is disconnected.";
        wifi.style.backgroundColor = "rgba(68, 67, 67, 0.4)";
    }
}

document.getElementsByClassName("cancel-img")[0].addEventListener("click",()=>{
    if(netConnection){
        addHiddenOut();
        addHiddenIn(2000);
    } else {
        addHiddenOut();
        addHiddenIn(500);
    }
});


updateStatus();

window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);




