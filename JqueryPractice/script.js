// Run code after page loads
$(document).ready(function(){

    // ================= TOGGLE =================
    $("#btn_hide").click(function(){
        $("#second").toggle(2000, function(){
            console.log("Toggle completed");
        });
    });

    // ================= FADE =================
    $("#fadding_effect").click(function(){

        // fade out first
        $("#third").fadeOut(1000, function(){

            // then fade to 50% opacity
            $("#third").fadeTo(1000, 0.5);
        });
    });

    // ================= ANIMATION =================
    $("#Box").click(function(){

        $(".box").animate({
            width: "+=200px",
            height: "200px",
            fontSize: "20px"
        }, "slow");
    });

});

// ================= KEYBOARD EVENTS =================
$("body").keydown(function(event){

    // A key → hide
    if(event.which == 65){
        $(".box").hide(2000, function(){
            console.log("Box hidden");
        });
    }

    // D key → show
    if(event.which == 68){
        $(".box").show(2000, function(){
            console.log("Box shown");
        });
    }

    console.log("Key pressed:", event.which);
});