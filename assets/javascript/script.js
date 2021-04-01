let update = function () {
    document.getElementById("currentDay").innerHTML = moment().format(
      "dddd, MMM Do, h:mm:ss a"
    );
  };
  setInterval(update, 1000);

  $(document).ready(function () {
    let timeBlocks = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    function saveNotes() {
      for (let i = 0; i <= timeBlocks.length; i++) {
        $("#" + timeBlocks[i]).val(localStorage.getItem(timeBlocks[i]));
      }
    }
    saveNotes();
  
    $(".saveBtn").click(function () {
      let dataHour = $(this).attr("data-hour");
      let inputField = $("#" + dataHour).val();
  
      localStorage.setItem(dataHour, inputField);
      console.log(inputField);
    });
  });

  $("#9AMClearBTN").click(function () {
    $("#9").val("");
    localStorage.setItem(9, "");
  });