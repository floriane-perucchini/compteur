import './style.css';
import { useState } from 'react';

function AddTime() {

  const [dateDebut, setDateDebut] = useState(0);
  const [dateFin, setDateFin] = useState(0);

  function handleSubmitTime(event) {
    event.preventDefault();

    const dateStart = new Date(`${event.target.dateDebut.value}T${event.target.heureDebut.value}`);
    const dateEnd = new Date(`${event.target.dateFin.value}T${event.target.heureFin.value}`);
    console.log({dateStart, dateEnd});
    setDateDebut(dateStart);
    setDateFin(dateEnd);
  }

  function calcTempsPassé(dateDebut, dateFin) {
    
    const tempsPassé = dateFin - dateDebut;
    const heures  = Math.floor(tempsPassé / (1000 * 60 * 60));
    const h = heures < 10 ? `0${heures}` : heures;

    const minutes = Math.floor((tempsPassé % (1000 * 60 * 60)) / (1000 * 60));
    const m = minutes < 10 ? `0${minutes}` : minutes;

    return `${h}h ${m}m`;

  }
  return (
    <section className="AddTime">
      <form onSubmit={handleSubmitTime}>
        <label htmlFor="dateDebut">Date de début</label>
        <input type="date" id="dateDebut" name="dateDebut" />

        <label htmlFor="heureDebut">Heure de début</label>
        <input type="time" id="heureDebut" name="heureDebut" />

        <label htmlFor="dateFin">Date de fin</label>
        <input type="date" id="dateFin" name="dateFin" />

        <label htmlFor="heureFin">Heure de fin</label>
        <input type="time" id="heureFin" name="heureFin" />

        <button type="submit">Ajouter des heures de travail</button>
      </form>

      
      <p> Temps passé sur le projet en heure : {calcTempsPassé(dateDebut, dateFin)}</p>
    </section>
  );
}

export default AddTime;
