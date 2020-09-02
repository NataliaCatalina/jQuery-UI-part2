console.log('js');
  $('#loginSection, #controlSection, #myDevices').hide();


$(document).ready(function(){
  $('#login').click(function(){
    $('#loginSection').show();
    $('.top-nav').hide();
  });
  $('#username').click(function(){
    // alert($(this).val());
    document.getElementById('username').value="";
  });
  $('#loginBtn').click(function(){
    $('#controlSection').show();

      $('#loginSection').hide();
    // $('nav').hide();
  });
  $('#controlDevice').click(function(){
    $('#myDevices').show();
    $('#controlSection').hide();
    $('#loginSection').hide();
    // $('nav').hide();
  });

  $( function() {
    $( "#accordion" ).accordion();
  } );

  $('#read-more-btn1').click(function(){
    $('#para12').toggle();
  });

  $( function() {
    $( "#progressbar" ).progressbar({
      value: 95
    });
  } );
});
