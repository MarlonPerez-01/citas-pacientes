import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const Form = ({ setAppointments, appointments }) => {
  //Iniciando el state
  const [appointment, setAppointment] = useState({
    patientName: '',
    age: '',
    dateAppointment: '',
    hourAppointment: '',
    symptoms: '',
  });

  //Iniciando state de error
  const [error, setError] = useState(false);

  //Actualizando el state
  const setStatePatient = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  //Obteniendo los valores del state
  const { patientName, age, dateAppointment, hourAppointment, symptoms } = appointment;

  //Envio de formulario
  const addAppointment = (e) => {
    e.preventDefault();

    //Validacion

    if (
      patientName.trim() === '' ||
      age.trim() === '' ||
      dateAppointment.trim() === '' ||
      hourAppointment.trim() === '' ||
      symptoms.trim() === ''
    ) {
      setError(true);
      return;
    }

    setError(false);

    //Asigar Id
    appointment.id = uuid();

    //Agregar cita al state
    setAppointments([...appointments, appointment]);

    //Limpiar Form
    setAppointment({
      patientName: '',
      age: '',
      dateAppointment: '',
      hourAppointment: '',
      symptoms: '',
    });
  };

  return (
    <form onSubmit={addAppointment} id='formularioCita'>
      {error ? <p className='error text-center'>Ingrese todos los datos</p> : null}
      <label htmlFor='patientName'>Nombre Paciente</label>
      <input id='patientName' type='text' name='patientName' onChange={setStatePatient} value={patientName} />

      <label htmlFor='age'>Edad</label>
      <input id='age' type='text' name='age' onChange={setStatePatient} value={age} />

      <label htmlFor='dateAppointment'>Fecha</label>
      <input
        id='dateAppointment'
        type='date'
        name='dateAppointment'
        onChange={setStatePatient}
        value={dateAppointment}
      />

      <label htmlFor='hourAppointment'>Hora</label>
      <input
        id='hourAppointment'
        type='time'
        name='hourAppointment'
        onChange={setStatePatient}
        value={hourAppointment}
      />

      <label htmlFor='symptoms'>Síntomas</label>
      <textarea id='symptoms' name='symptoms' onChange={setStatePatient} value={symptoms} />

      <button type='submit' className='button-primary w-100'>
        Crear Nueva Cita
      </button>
    </form>
  );
};

export default Form;
