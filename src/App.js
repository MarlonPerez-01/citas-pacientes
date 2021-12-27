import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {
  // Obteniendo las citas del local storage SI EXISTEN
  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));

  if (!initialAppointments) initialAppointments = [];

  // Arreglo de citas
  const [appointments, setAppointments] = useState(initialAppointments);

  // Use Effect para realizar los cambios en el localStorage del state de citas
  useEffect(() => {
    let initialAppointments = JSON.parse(localStorage.getItem('appointments'));

    if (initialAppointments) {
      localStorage.setItem('appointments', JSON.stringify(appointments));
    } else {
      localStorage.setItem('appointments', JSON.stringify([]));
    }
  }, [appointments]);

  //Funcion para eliminar citas
  const deleteAppointment = (id) => {
    const newAppointments = appointments.filter((appointment) => appointment.id !== id);
    setAppointments(newAppointments);
  };

  return (
    <div className="container">
      <h1 className="title-main text-center">Administrador de Citas</h1>
      <div className="container-form">
        <h2 className="text-center">Crear Cita</h2>
        <Form setAppointments={setAppointments} appointments={appointments} />
      </div>
      <div className="container-list">
        {appointments.length !== 0 ? (
          <h2 className="text-center">Listado de Citas</h2>
        ) : (
          <h2 className="text-center">Aún no hay citas</h2>
        )}

        {appointments.map((appointment) => (
          <Appointment key={appointment.id} appointment={appointment} deleteAppointment={deleteAppointment} />
        ))}
      </div>
    </div>
  );
}

export default App;
