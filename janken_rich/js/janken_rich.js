$(".a, .aiko").on('click', function() {
    var random = Math.floor(Math.random() * 3 )
    console.log(random, "ランダムな数字")

    if (random === 0) {
        console.log("グー")
        $(".a").text("グー")
    }else if (random === 1) {
        console.log("チョキ")
        $(".a").text("チョキ")
    }else if (random === 2) {
        console.log("パー")
        $(".a").text("パー")
    }
})

$(".win").on('click', function(){
        alert("おめでとう!")
    })

$(".lose").on('click', function(){
    alert("残念!")
})