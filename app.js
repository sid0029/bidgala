var api_key = '2df9ab12'
var parameter = ''

$(document).ready(function(){

      $("#movieform").submit(function(event){
      event.preventDefault();
      var url = "http://www.omdbapi.com/?apikey="+api_key;
      var result="";
      var search_value = $("#movie").val();
      $.ajax({
        method: "GET",
        url: url+"&t="+search_value,
        success: function(data){
        result = `<div class="container resultcont">
                    <img src="${data.Poster}" class="img-thumbnail poster float-left" width="150px" height="150px"/>
                    <p>Title: ${data.Title}</p>
                    <p>Release Date: ${data.Released}</p>
                    <p>Ratings: ${data.imdbRating}</p>
                    <button class="btn btn-dark btn-block" id="wlbtn" onclick="watchlist()">Add</button>
                    </div>`
                  
          parameter = `<div class="container resultcont">
                        <img src="${data.Poster}" class="img-thumbnail poster float-left" width="150px" height="150px"/>
                        <p>Title: ${data.Title}</p>
                        <p> Release Date: ${data.Released}</p>
                        <p>Ratings: ${data.imdbRating}</p>
                        </div>`
          
          $("#searchresults").html(result)
        }
      })

    })

})


function watchlist(){
  document.getElementById("wlbtn").setAttribute("style","display:none")
  var remove_btn = `<button class="btn btn-dark btn-block" float="right" id="wlbtn" onclick="removewatchlist()">Remove</button>`
  $("#watchlist").html(parameter+remove_btn)
}

function removewatchlist(){
  var nothing = ``
  $("#watchlist").html(nothing)
}