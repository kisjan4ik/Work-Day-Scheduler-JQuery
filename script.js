// display the current time using moment js
var moment = moment().format("MMMM Do YYYY");

var time = $("#currentDay");

$(time).text(moment);

for (let i = 8; i < 19; i++) {
    $("textarea[type=text]").val(function () {
      let i = "i";
        return localStorage.getItem(i);
    });
    
}
// Click event to save text area content to local storage

$(".saveBtn").on("click", function(event) {
    event.preventDefault();

    if (typeof (window.localStorage) != "undefined") {
        console.log(this);
        
        // $("textarea[type=text]").on("change", function () {
            localStorage.setItem($(this).data("id"), $("#"+$(this).data("id")).val());
       
        console.log($(this).data("id"));
        
        // });
       
       
        // $("textarea[type=text]").val(function () {
        //     return localStorage.getItem(this.id);
        // });
        
    }
});

// $(".saveBtn").on("click", function() {

//    $('textarea[type ="text"]').each(function(){
//     var id = $(this).attr('id');
//         var value = $(this).val();
//        localStorage.setItem(id, value);
        
//     });   
// });

//     $('textarea[type="text"]').on (function(){    
//         var id = $(this).attr('id');
//         var value = localStorage.getItem(id);
        
//         $(this).val(value);
        
//     }); 




// When app opens, display content for each time block from local storage.
// it can be done with a loop (more efficient) or by tagreting each time a block sepaprately

// change time block background color depending on the current hour (past, present and future)

