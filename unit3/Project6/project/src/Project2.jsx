import React, { useState } from "react";
import "./Project2.css";

function Project1() {
  const students = [
    "Arun",
    "Bala",
    "Charan",
    "Dinesh",
    "Gokul",
    "Hari",
    "Karthik",
    "Manoj",
    "Prakash",
    "Rahul"
  ];


  const [attendance, setAttendance] = useState(
    students.reduce((status, student) => {
      status[student] = "";
      return status;
    }, {})
  );


  const handleAttendance = (student, status) => {
    setAttendance({
      ...attendance,
      [student]: status
    });
  };

  const presentCount = Object.values(attendance).filter(
    (status) => status === "Present"
  ).length;

  const absentCount = Object.values(attendance).filter(
    (status) => status === "Absent"
  ).length;

  return (
    <div className="attendance-container">
      <h1>Student Attendance Tracker</h1>

      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Student Name</th>
            <th>Present</th>
            <th>Absent</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr key={student}>
              <td>{index + 1}</td>
              <td>{student}</td>

              <td>
                <input
                  type="radio"
                  name={student}
                  checked={attendance[student] === "Present"}
                  onChange={() => handleAttendance(student, "Present")}
                />
              </td>

              <td>
                <input
                  type="radio"
                  name={student}
                  checked={attendance[student] === "Absent"}
                  onChange={() => handleAttendance(student, "Absent")}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="summary">
        <h2>Attendance Summary</h2>

        <p className="present">
          Total Present: {presentCount}
        </p>

        <p className="absent">
          Total Absent: {absentCount}
        </p>
      </div>
    </div>
  );
}

export default Project1;

