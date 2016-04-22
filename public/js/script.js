$(document).ready(function(){
  $("#create").on('click',".btn-submit", createUser);
  $("#songinfo").on('click','.del', deleteUser);
  $("#songinfo").on('click','.update',updateUser);
  $("#update").on('click',".btn-update",submitUser);
  $("#create").on('click',".pixiv-submit", createPixiv);
});

$('#sel').change(function(){
  var sel = $(this).val();
  if(sel === 'song'){
    var html = new EJS({url:'views/songTable.ejs'}).render({});
    $('#create').html(html);
  }
  else if(sel === 'pixiv'){
    var html = new EJS({url:'views/pixivTable.ejs'}).render({});
    $('#create').html(html);
  }
  else {
    alert('請選擇想更新的資料');
    return false;
  }
})

function createUser(event) {
  event.preventDefault();
  var errorCount = 0;
  $("#create input").each(function(index, val){
    if($(this).val() === '') errorCount++;
  });

  if (errorCount === 0){
    var atarashi = {
      'name': $('input#name').val(),
      'producer': $('input#producer').val(),
      'link': $('input#link').val()
    };

    $.ajax({
      type: 'POST',
      url: '/song',
      data: atarashi,
      dataType:"JSON"
    }).done(function(res){
      var html = new EJS({url: 'views/song.ejs'}).render(res);
      $("#songinfo").html(html);
      $("input").val('');
    });
  }
  else{
    alert("請填滿謝謝");
    return false;
  }
};

function deleteUser(event){
  var confirmation = confirm("確定要刪除嗎？");
  if(confirmation === true){
    event.preventDefault();
    $.ajax({
      type: 'DELETE',
      url: '/song/' + $(this).attr('rel')
    }).done(function(res){
      var html = new EJS({url:'views/song.ejs'}).render(res);
      $('#songinfo').html(html);
    });
  }
  else{
    return false;
  }
}
function updateUser(event){
  event.preventDefault();
  $.ajax({
    type:'GET',
    url:'/song/'+ $(this).attr('rel')
  }).done(function(res){
    var html = new EJS({url: 'views/songUpdate.ejs'}).render(res);
    $("#update").html(html);
  });
};
