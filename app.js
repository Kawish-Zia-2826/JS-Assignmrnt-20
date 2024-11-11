// alert("run")
// $(document).ready(function(){

//     $("button").click(function (e) { 
//         e.preventDefault();
//         $("span").toggle();
        
//     });
//     });

$(document).ready(function(){
    $("button").click(function(){
      $("span").toggle();
      if ($("button").text() == "Show Less" ) {
        $("button").text("Show More")
      } else {
        $("button").text("Show Less")
      }
        
      
    });
  });

 
 function abc(){
    var a =  $("input").eq(0).val();
    var b =  $("input").eq(1).val();

  $("#tb").append(`<tr><td>${a}</td><td>${b}</td><td><button type="button" class="btn btn-warning" onclick="$(this).parent().parent().remove()">Warning</button></td></tr>`)
};

function abc() {  }
