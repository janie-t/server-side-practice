console.log('It works');

var source   = $("#home").html();
var template = Handlebars.compile(source);

document.addEventListener('DOMContentLoaded', function(e){
  $.get('api/v1/resources')
  .done(response => {
    $('.container').append(template(response))
  })

  $('#submit').on('click', event => {
    event.preventDefault()
    var data = $('#form').serializeArray()
    $.post("/api/v1/resources/", data)
  })
})
