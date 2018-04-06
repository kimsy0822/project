
//document ready
$(function(){

  //삭제버튼 confirm창
  $('#delete').on('click',function(){
    confirm("confirm:삭제하겠습니까");
  })

  //비밀번호찾기 팝업

  $('#FindPwd').on('shown.bs.modal', function(){
    $('#idInput').keydown(function(e){
      if(window.event.keyCode == 13) {
        $('.result').slideDown();
      }
    })
    $('#FindPwdBtn').click(function(){
        $('.result').slideDown();
    })
  })

  //달력
  $('#inputDate').datepicker();

  $.datepicker.setDefaults({
      dateFormat: 'yy-mm-dd',
      prevText: '이전 달',
      nextText: '다음 달',
      monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      dayNames: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
      showMonthAfterYear: true,
      yearSuffix: '년',
      changeMonth: true,
      changeYear: true
  });


})
