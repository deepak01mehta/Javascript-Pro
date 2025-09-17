let form = document.getElementById("appointmentForm");
let list = document.getElementById("appointmentList");
let btn= document.getElementById("btn");

function appointmentList() {
  list.innerHTML = "";
  let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  appointments.forEach((appt, index) => {
    let li = document.createElement("li");
    li.textContent = `${appt.patientName} → 
    ${appt.doctorName} 
    on ${appt.date} 
    ${appt.time}`;

    let btn = document.createElement("button");
    btn.textContent = "Cancel";
    btn.onclick = () => cancelAppointment(index);
    li.appendChild(btn);
    list.appendChild(li);
  });
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const appointment = {
    patientName: document.getElementById("name").value,
    email: document.getElementById("email").value,
    doctorName: document.getElementById("doctor").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
  };

  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  appointments.push(appointment);
  localStorage.setItem("appointments", JSON.stringify(appointments));

 
  appointmentList();
});

function cancelAppointment(index) {
  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  appointments.splice(index, 1);

  localStorage.setItem("appointments", JSON.stringify(appointments));
  appointmentList();
}

appointmentList();
