import React from 'react';

const Appointment = ({
  appointment: { patientName, age, dateAppointment, hourAppointment, symptoms, id },
  deleteAppointment,
}) => (
  <div className="appointment">
    <p>
      <span>Nombre: </span>
      <span> {patientName}</span>
    </p>

    <p>
      <span>Edad:</span>
      <span> {age}</span>
    </p>

    <p>
      <span>Fecha:</span>
      <span> {dateAppointment}</span>
    </p>

    <p>
      <span>Hora:</span>
      <span> {hourAppointment}</span>
    </p>

    <p>
      <span>Síntomas:</span>
      <span> {symptoms}</span>
    </p>

    <button className="button w-100" onClick={() => deleteAppointment(id)}>
      Eliminar
    </button>
  </div>
);
export default Appointment;
