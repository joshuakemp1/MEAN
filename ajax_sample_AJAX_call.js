 <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
  
  <script>
    function sendAJAX() {
     $("#ajax").load("sidebar.html");
     $("#load").hide();
    }


// This is the same AJAX call done in jQuery versus Javascript
$(document).ready(function () {
  var url ="../data/employees.json";
  $.getJSON(url, function (response) {
    var statusHTML = '<ul class="bulleted">';
    $.each(response, function (index, employee) {
      if (employee.inoffice === true) {
          statusHTML +='<li class="in">'; 
      } else {
        statusHTML +='<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += '</ul>';
    $("#employeeList").html(statusHTML);
  }); // End getJSON  
}); // End ready

