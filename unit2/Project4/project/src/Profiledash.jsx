<!DOCTYPE html>
<html>
<head>
    <title>Employee Attendance Dashboard</title>
</head>
<body>

<h2>Company Employee Attendance Dashboard</h2>

<form onsubmit="addAttendance(); return true;">
    Employee ID:
       <input type="text" id="id" ><br><br>

    Employee Name:
       <input type="text" id="name"><br><br>

    Department:
       <input type="text" id="dept"><br><br>

    Working Days:
       <input type="number" id="work"><br><br>

    Present Days:
       <input type="number" id="present"><br><br>

    Leave Days:
       <input type="number" id="leave"><br><br>

       <input type="submit" value="Submit">
</form>

  <br>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Department</th>
        <th>Working Days</th>
        <th>Present Days</th>
        <th>Leave Days</th>
        <th>Attendance %</th>
    </tr>
    <tbody id="report"></tbody>
</table>

<script>
function addAttendance() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let dept = document.getElementById("dept").value;
    let work = Number(document.getElementById("work").value);
    let present = Number(document.getElementById("present").value);
    let leave = Number(document.getElementById("leave").value);
 <tr>
        <td>id</td>
        <td>name</td>
        <td>dept</td>
        <td>work</td>
        <td>present</td>
        <td>leave</td>
        <td>percent</td>
     </tr>;
     }
  </script>
 </body>
</html>