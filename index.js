
scoreOne = document.getElementById("score-1")
scoreTwo = document.getElementById("score-2")

let sc1 = 0
let sc2 = 0

function team1increase(clicked){
    if(clicked == "team-one-plus-one"){
        sc1 += 1
        scoreOne.textContent = sc1
    } else if (clicked == "team-one-plus-two"){
        sc1 += 2
        scoreOne.textContent = sc1
    } else if (clicked == "team-one-plus-three"){
        sc1 += 3
        scoreOne.textContent = sc1
    } else if (clicked == "team-two-plus-one"){
        sc2 += 1
        scoreTwo.textContent = sc2
    } else if (clicked == "team-two-plus-two"){
        sc2 += 2
        scoreTwo.textContent = sc2
    } else if (clicked == "team-two-plus-three"){
        sc2 += 3
        scoreTwo.textContent = sc2
    }
}