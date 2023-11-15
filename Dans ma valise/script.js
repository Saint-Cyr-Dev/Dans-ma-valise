    // Script Js 
  function calculatePackingList() {
    // Recuperation des données du formulaire
    var nights = parseInt($('#nights').val());
    var climate = $('#climate').val();

    // Gestion d'erreurs
    if (isNaN(nights) || nights <= 0) {
      alert('Le nombre de nuits doit être strictement supérieur à 0.');
      return;
    }

    // Règles de calcul
    var packingList = '<ul>';
    packingList += '<li>Un sac à dos/valise</li>';
    packingList += '<li>' + nights + ' paire(s) de chaussettes</li>';
    packingList += '<li>' + nights + ' sous-vêtement(s)</li>';
    packingList += '<li>' + nights + ' t-shirt(s)</li>';

    
    if (nights < 4) { // Parking list si le nombre de nuit est inferieur a 4
      packingList += '<li>1 pull</li>';
      packingList += '<li>1 pantalon</li>';
    } else if (nights >= 4 && nights <= 6) { // Parking list si le nombre de nuits est compris entre 4 et 6
      packingList += '<li>2 pulls</li>';
      packingList += '<li>2 pantalons</li>';
    } else { // Parking liste si le nombre de nuit est superieur a 6
      packingList += '<li>3 pulls</li>';
      packingList += '<li>3 pantalons</li>';
      packingList += '<li>1 paire de chaussures</li>';
    }

    
    // Climat
    if (climate === 'chaud') {
      packingList += '<li>Tongs/claquettes</li>';
    } else if (climate === 'froid') {
      packingList += '<li>Gants et bonnets</li>';
      packingList += '<li>1 veste</li>';
    }

    packingList += '</ul>';

    // Affichage de ka packing list
    $('#message').html('Voila se que vous avez besoins pour etres bien');
    $('#packingList').html(packingList);
    $('.result').show();

    // Gérer le cas de plus de 10 nuits
    if (nights > 10) {
      alert('Si vous partez en voyage plus de 10 nuits, faites des machines. Voyagez léger.');
    }
  }

  function resetForm() {
    // Bouton Recommencer qui reset le formulaire
    $('#nights').val(3);
    $('#climate').val('modere');

    // Cacher les résultats
    $('.result').hide();
  }