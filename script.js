var submit = document.getElementById("submit")
var container = document.getElementById("container")
submit.addEventListener("click", function () {
    var Gender = document.getElementsByName("Gender");
    var gender = "";
    for (var i = 0; i < Gender.length; i++) {
        if (Gender[i].checked) {
            gender = Gender[i].value;
            break;
        }
    }
    var name = document.getElementById("name")
    var age = document.getElementById("age")
    var course = document.getElementById("course").value
    var email = document.getElementById("email")
    var row = document.createElement("tr", "td", "button")
    row.innerHTML = "<tr><td>" + name.value + "</td><td>" + age.value + "</td><td>" + course + "</td><td>" + gender + "</td><td>" + email.value + '</td><td><button onclick="deleteRow(this)">Delete</button></td></tr>'
    container.append(row)
})
function deleteRow(button) {
    // Get the reference to the row and remove it
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}