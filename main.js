function countdownTimer(){
    // Set the date we're counting down to
    var countDownDate = new Date("May 4, 2024 1:00:00").getTime();

// Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("demo").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}

async function fetchAsync(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

async function getTopSkill(memberData){
    let arr = [];
    for (const p in memberData) {
        arr.push({key: p, value: memberData[p].skill});
    }
    arr.sort(function(a,b){return b.value - a.value});
    let topTen = arr.slice(0, 10);
    for(const i in topTen){
        //console.log(topTen[i].key);
        let appendVar = "https://widgets.gametools.network/stats/pc/name/" + topTen[i].key + "/bf4/en-US/50";
        $('#memList').append("<li><iframe id = newFrame title=\"Stats widget\" src=\"\" height=\"380px\" width=\"600px\" frameborder=\"0\" allowtransparency=\"true\"></iframe></li>")
        document.getElementById("newFrame").id = i
        document.getElementById(i).src =
            appendVar;
    }
}


//let memberStats = getTopSkill(memberList);
////console.log(memberStats);