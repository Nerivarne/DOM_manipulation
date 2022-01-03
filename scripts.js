let names = ["Matěj", "Sandra", "Honza", "Marek"];

names.forEach(function(name) {
    $("ul").append("<li>" + name + "</li>"); 
    $("li").addClass(function(index) {
        return "item-" + index;  
    })
    $(".item-9").css("font-weight", "bold");

});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };
 
  $("main").append("<h2 class='js-title'>" + additionalBlock.title + "</h2>");
  $(".js-title").css("color", "blue");

  $("main").append("<p class='js-text'>" + additionalBlock.text + "</p>");

  