const fs = require('fs');

let memberList = ["Budthespud95", "Ncognit0", "DJGrouch", 'NWG_BegForMercy', 'Rowebot3339', 'xHotcakes', 'Happycamper_DOD', 'JusticeForSom3', 'lnebriate', 'PearlAWood', 'IBA_Rosco',
    'WetSheets', 'BarelyHarmless', 'agentfeux', 'm320abuser', 'Copied--DNA', 'HArShA_NeOTrIX', 'samito55', 'SlickShoes76', 'SPACE-CADET871', 'Murdock-MG',
    'LusciousLou6', 'moosekiller56', 'BurntPlckle', 'Logan_5_68', 'rednckdonut934'];

async function getMemberStats(memberList){
    let clanData = {};
    for(const i in memberList){
        clanData[memberList[i]] = await fetchAsync('https://api.gametools.network/bf4/stats/?format_values=true&name=' + memberList[i] + '&platform=pc');
    }
    if(fs.existsSync('output.txt')){
        console.log('output.txt found, updating current stats!')
        fs.writeFile('today.txt', JSON.stringify(clanData), (err) => {
            if(err) throw err;
        })
    }
    else{
        console.log('output.txt not found, creating...')
        fs.writeFile('output.txt', JSON.stringify(clanData), (err) => {
            if(err) throw err;
        })
    }
}

function readFileObj(){
    fs.readFile('output.txt', function (err, data) {
        if (err) throw err;
        data =JSON.parse(data);
        console.log(data)
    });
}

async function fetchAsync(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

getMemberStats(memberList).then(r => console.log('job complete!'));

//readFileObj();
