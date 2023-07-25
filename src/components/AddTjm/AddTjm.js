import './style.css';
import { useState } from 'react';

function AddTjm() {

  
  const [tjm, setTjm] = useState(0);
  const [jours, setJours] = useState(0);

 function handleSubmitTJM(event) {
    event.preventDefault();
    setTjm(event.target.tjm.value);
    setJours(event.target.jours.value);
  }
  
  function calcTauxHoraire(tjm) {
    const tauxHoraire = (tjm / 7);
    return tauxHoraire.toFixed(2);
  }

  function calcSalaire(tjm, jours) {
    const salaire = (tjm * jours);
    return salaire.toFixed(2);
  }


  return (
    <section className="AddTjm">
      <form onSubmit={handleSubmitTJM}>
        <label htmlFor="tjm">TJM</label>
        <input type="number" id="tjm" name="tjm" />

        <label htmlFor="jours">Jours de mission</label>
        <input type="number" id="jours" name="jours" />

        <button type="submit">Calculer</button>
      </form>


      <p>Le taux horaire est de {calcTauxHoraire(tjm)} € (pour une journée de 7 heures).</p>
      <p>Le salaire est de {calcSalaire(tjm, jours)} €.</p>
    </section>
  );
}

export default AddTjm;
