import './style.css';
import { useState, useEffect } from 'react';


function Count() {

  const [dateDebut, setDateDebut] = useState(0);
  const [dateFin, setDateFin] = useState(0);

  const [clock, setClock] = useState('00h 00m 00s');

  const [isStart, setIsStart] = useState(false);

  function handleClickStartCompteur(event) {
    event.preventDefault();
    setIsStart(true);
    setDateDebut(new Date().getTime());
    startCount(dateDebut);
  }

  function handleClickStopCompteur(event) {
    event.preventDefault();
    setIsStart(false);
    setDateFin(new Date());
  }

  function startCount(dateDebut){
    const date = new Date().getTime();
    const tempsPassé = date - dateDebut;
    const heures  = Math.floor(tempsPassé / (1000 * 60 * 60));
    const h = heures < 10 ? `0${heures}` : heures;

    const minutes = Math.floor((tempsPassé % (1000 * 60 * 60)) / (1000 * 60));
    const m = minutes < 10 ? `0${minutes}` : minutes;

    const secondes = Math.floor((tempsPassé % (1000 * 60)) / 1000);
    const s = secondes < 10 ? `0${secondes}` : secondes;

    return `${h}h ${m}m ${s}s`;
  }

  useEffect(()=>{
    if(isStart){
      const interval = setInterval(() => {
        setClock(startCount(dateDebut));
      }, 1000);
      return () => clearInterval(interval);
    }
  },[isStart, dateDebut])



  return (
    <section className="Count">
      {
        isStart 
        ?  <button onClick={handleClickStopCompteur} type='button'>Arrêter le compteur</button>
        :  <button onClick={handleClickStartCompteur} type='button'>Démarrer un compteur</button>
      }

      <p> Temps passé sur le projet en heure : {clock}

      </p>
    </section>
  );
}

export default Count;
