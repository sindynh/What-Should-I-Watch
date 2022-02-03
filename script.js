let horror = ["Hush", "The Nun", "Get Out"];

$(".horror").click(function() {
    for (let horrorr of horror) {
        $(".horror-recommend").append(horrorr + "<br>");
    }
});
let action = ["The 100", "King Kong vs. Godzilla", "Maze Runner"];

$(".action").click(function() {
    for (let actionn of action) {
        $(".action-recommend").append(actionn + "<br>");
    }
});

let Comedy = ["Home Alone", "Central Intelligence", "Ride Along"];

$(".comedy").click(function() {
    for (let Comedyy of Comedy) {
        $(".comedy-recommend").append(Comedyy + "<br>");
    }
});




