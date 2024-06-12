import React from 'react';

const Content = () => {
  const alumnos = [
    { nombre: 'Tobias Nieva', miembro: false },
    { nombre: 'Tomas Sosa', miembro: false },
    { nombre: 'Nicolás Contreras', miembro: true },
    { nombre: 'Nazareno Argañaraz', miembro: false },
    { nombre: 'Gonzalo Roldan', miembro: false },
    { nombre: 'Joaquin Jara', miembro: true },
    { nombre: 'Santiago Ibarra', miembro: false },
    { nombre: 'Jorge Sabra', miembro: false },
    { nombre: 'Joaquin Coronel', miembro: true },
    { nombre: 'Juan Robledo', miembro: false },
    
  ];

  return (
    <div className="content">
      <h3 className='tituloContent'>Lista de Alumnos :</h3>
      <ul>
        {alumnos.map((alumno, index) => (
          <li key={index} className={alumno.miembro ? 'miembro' : ''}>
            {alumno.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
