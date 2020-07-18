// all index.js files

function getAkanName() {
    /* the formula */
    var result = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;

    /* declaration  and initialisation of date of birth */
    var day = document.getElementById("day").value;
    var dd = parseInt(day);
    var month = document.getElementById("month").value;
    var mm = parseInt(month);
    var year = document.getElementById("year").value;
    var yy = parseInt(year.toString().slice(2, 4));

    /* to get the century*/
    var cc = Math.ceil(year / 100)

    /* array declaraction and initialization*/ 
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    
    // comparing the gender
    if (document.getElementById("gender").checked) {
        var gender = 'male';
      }
      else{
        var gender = 'female';
      }

    //comparing date of the month
    if (dd <= 0 || dd > 31) {
        alert("invalid date");
      }
      else if (mm <= 0 || mm > 12) {
        alert("invalid month");
      }
      else if (mm == 2 && dd > 29) {
        alert("Be serious, invalid day of month")
      }

      //calculations to display Akan Names
      








}  