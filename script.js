$(function(){

    // function for date and time using day.js
    $("#currentDay").text(dayjs().format("ddd, MMM DD, YYYY h:mm a"));

    $(`.saveBtn`).on("click", function () {
        const id=$(this).parent().attr("id")
        const stuffToDo=$(this).siblings(".description").val()
        localStorage.setItem(id,stuffToDo)
        
      })
     
  for (let i = 9; i <=17;i++){
    $(`#${i} .description`).val(localStorage.getItem(`${i}`))
  }

})