document.addEventListener('DOMContentLoaded', () => {

  const horloge = () => {

    // ciblage
    const divHorloge = document.getElementById('horloge');

    // Initialisation de la date
    let maDate = new Date();

    // Récupération des infos
    let annee = maDate.getFullYear(),
        mois = maDate.getMonth(),
        jour = maDate.getDate(),
        heures = maDate.getHours(),
        minutes = maDate.getMinutes(),
        secondes = maDate.getSeconds();

    // Formatage de l'heure
    const formatHeure = (nombre) => nombre < 10 ? `0${nombre}` : nombre;
    heures = formatHeure(heures);
    minutes = formatHeure(minutes);
    secondes = formatHeure(secondes);

    // Affichage
    divHorloge.innerHTML = `Nous sommes le ${jour}/${mois}/${annee}<br>
                            Il est ${heures} : ${minutes} : ${secondes}`;
  }

  setInterval(horloge, 1000);
});
