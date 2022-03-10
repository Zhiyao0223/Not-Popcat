window.addEventListener("click", addCounter);
window.addEventListener("keyup", addCounter);

// Before closing web
window.onbeforeunload = saveCache();

function addCounter() {
    var newCounter = 0;    
    var counterBox = document.getElementById("counter");
    var currentCounter = counterBox.innerHTML;
    
    
    if (currentCounter == "") {
        newCounter = 1;
    }
    else {
        currentCounter = parseInt(currentCounter);
        newCounter = currentCounter + 1;
    }

    counterBox.innerHTML = newCounter;

    // Achievement
    switch(newCounter) {
        case 100:
            achievement(0);
            break;
        case 500:
            achievement(1);
            break;
        case 1000:
            achievement(2);
            break;
        case 2000:
            achievement(3);
            break;
        case 3000: 
            achievement(4);
            break;
        case 4000:
            achievement(5);
            break;
        case 5000:
            achievement(6);
            break;
        default:
            break;
    }

    // textAnimation();

    var background = document.getElementsByClassName("container-close")[0];
    var background1 = document.getElementsByClassName("container-open")[0];

    background.style.display = "none";
    background1.style.display = "block";
    counterBox.style.transform = "skewY(23deg)";

    const timeoutTest1 = setTimeout(function() {
        background.style.display = "block";
        background1.style.display = "none";
        counterBox.style.transform = "none";
    }, 300);
    saveCache(newCounter);

}

function achievement(counter) {
    if (counter == "0") {
        alert("Congrats on ur first 100 clicks ! Keep it UP");
    }
    else if (counter == "1") {
        alert("500 clicks? Do you really have that much free time huh");
    }
    else if (counter == "2") {
        alert("1000?... hallo go do something meaningful please");
    }
    else if (counter == "3") {
        alert("Easter egg? Nah this is the last. Just close this ok?.");
    }
    else if (counter == "4") {
        alert("Why are we still here? Just to suffer..");
    }
    else if(counter == "5") {
        alert("I see yoe are still determine huh OMG just give up");
    }
    else if (computer == "6") {
        alert("WHYYY?? tell me. I m gonna bring u to the end lol");
    }
}


// Trynig to do cache thing but currently fail to make it
function saveCache (currentNumber) {
    // alert(currentNumber);
    localStorage.setItem('score', currentNumber);
    let myScore = localStorage.getItem('score');
    return null;
}

function startup() {
    let myScore = localStorage.getItem('score');
}