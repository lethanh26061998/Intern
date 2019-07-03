$(document).ready(function () {
  $("#numTable").on('change keyup paste', function (e) {
      var element = e.target; // truy cap den element input
      let multiTable = ''; 
      for (let i = 0; i < e.target.value; i++) {
          let contentTable = `
          <table id="table${i}" border="1">
              <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
          </table>`;
          multiTable += contentTable;
      }
      
      $(".multiTable").html(multiTable);

      function RandomNumber() {
        return Math.floor(Math.random() * 100);
      }
      for (let i = 0; i < $('table').length; i++) {
          let table = [];
          $('#table'+i +' td').each(function(e) {
              random = RandomNumber();
              while (table.indexOf(random) > -1) {
                  random = RandomNumber();
              }
              $(this).text(random);
              table.push(random);
          });
      }
  });    
});
