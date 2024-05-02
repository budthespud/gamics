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

async function getTopSkill(memberList){
    let memberStats = {};
    for(const i in memberList){
        let data = await fetchAsync('https://api.gametools.network/bf4/stats/?format_values=true&name=' + memberList[i] + '&platform=pc');
        memberStats[memberList[i]] = data.skill;
    }
    let arr = [];
    for (var p in memberStats) {
        arr.push({key: p, value: memberStats[p]});
    }
    arr.sort(function(a,b){return b.value - a.value});
    let topTen = arr.slice(0, 10);
    for(const i in topTen){
        console.log(topTen[i].key);
        let appendVar = "https://widgets.gametools.network/stats/pc/name/" + topTen[i].key + "/bf4/en-US/50";
        $('#memList').append("<li><iframe id = newFrame title=\"Stats widget\" src=\"\" height=\"380px\" width=\"600px\" frameborder=\"0\" allowtransparency=\"true\"></iframe></li>")
        document.getElementById("newFrame").id = i
        document.getElementById(i).src =
            appendVar;
    }
}

//let memberList = ["Budthespud95", "Ncognit0", "DJGrouch", 'NWG_BegForMercy', 'Rowebot3339', 'xHotcakes', 'Happycamper_DOD', 'JusticeForSom3', 'lnebriate', 'PearlAWood', 'IBA_Rosco',
//    'WetSheets', 'BarelyHarmless', 'agentfeux', 'm320abuser', 'Copied--DNA', 'HArShA_NeOTrIX', 'samito55', 'SlickShoes76', 'SPACE-CADET871', 'Murdock-MG',
//    'LusciousLou6', 'moosekiller56', 'BurntPlckle', 'Logan_5_68', 'rednckdonut934'];
//let memberStats = getTopSkill(memberList);
////console.log(memberStats);