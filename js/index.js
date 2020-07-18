// all index.js files
function getAkanName() {
    /* the formula */
  var result = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;



    /* array declaraction and initialization*/ 






    /* declaration  and initialisation of date of birth */
    var day = document.getElementById("day").value;
    var dd = parseInt(day);
    var month = document.getElementById("month").value;
    var mm = parseInt(month);
    var year = document.getElementById("year").value;
    var yy = parseInt(year.toString().slice(2, 4));

    /* to get the century*/
    var cc = Math.ceil(year / 100)










}  