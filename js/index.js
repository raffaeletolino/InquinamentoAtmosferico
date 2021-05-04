import '../css/style.css';
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(show_map);
}else{
  alert('La geo-localizzazione NON è possibile');
}

function show_map(positions) {
  // identifico il punto in cui è stato individuato l'utente
  var dot = new google.maps.LatLng(positions.coords.latitude, positions.coords.longitude),
  // definisco una serie di opzioni
  option = {
    zoomControl: true,
    zoom: 12,
    center: dot,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  },
  // definisco l'elemento della pagina che ospiterà la mappa
  container = document.getElementById("map"),
  // creo la mappa
  map = new google.maps.Map(container, option),
  // imposto un marker
  marker = new google.maps.Marker({
    position: dot,
    map: map,
    title: "Tu sei qui!"
  });
}

window.verify = function(){
  let city = document.getElementById("idname").value;
  const air_key = process.env.API_KEY;;
  const air = {};
  getData();

  function getData() {
    let api = 'https://api.waqi.info/feed/'+city+'/?token='+air_key;
    fetch(api)
      .then(function(response) {
        let data = response.json();
        return data;
      })
      .then(function(data) {
        air.index = data.data.aqi;
        if(air.index == undefined){
          document.getElementById("city").innerHTML = city + ' AQI:';
          document.getElementById("indexAir").innerHTML = "-";
          document.getElementById("Risk").innerHTML = '';
          document.getElementById("color").style.backgroundColor = "grey";
          document.getElementById("information").innerHTML = "Non è stato possibile rilevare l'inquinamento dell'aria.Possibile inserimento Città sbagliata. Possibile mancato valore dell'inquinamento";
        }
        air.city = data.data.city.name;

      })
      .then(function() {
        showData();
      })
  }

  // DISPLAY INFORMATIONS
  function showData() {
    document.getElementById("city").innerHTML = air.city + ' AQI:';
    document.getElementById("indexAir").innerHTML = air.index;
    if(air.index>0 && air.index<50){
        document.getElementById("Risk").innerHTML = 'Buono';
        document.getElementById("color").style.backgroundColor = "#009966";
        document.getElementById("information").innerHTML = "La qualità dell'aria è considerata soddisfacente e l'inquinamento atmosferico presenta pochi o nessun rischio";
      }
    if(air.index>50 && air.index<100){
      document.getElementById("Risk").innerHTML = 'Moderato';
      document.getElementById("color").style.backgroundColor = "#ffde33";
      document.getElementById("information").innerHTML = "La qualità dell'aria è accettabile; Potrebbe esserci un moderato problema di salute per un numero molto limitato di persone che sono insolitamente sensibili all'inquinamento atmosferico. ";
    }
    if(air.index>100 && air.index<150){
      document.getElementById("Risk").innerHTML = 'Malsano per i gruppi sensibili';
      document.getElementById("color").style.backgroundColor = "#ff9933";
      document.getElementById("information").innerHTML = "I membri di gruppi sensibili possono subire effetti sulla salute. È improbabile che il pubblico in generale ne risenta";
    }
    if(air.index>150 && air.index<200){
      document.getElementById("Risk").innerHTML = 'Malsano';
      document.getElementById("color").style.backgroundColor = "#cc0033";
      document.getElementById("information").innerHTML = "Tutti possono iniziare ad avere effetti sulla salute; i membri di gruppi sensibili possono subire effetti sulla salute più gravi";
    }
    if(air.index>200 && air.index<300){
      document.getElementById("Risk").innerHTML = 'Molto malsano';
      document.getElementById("color").style.backgroundColor = "#660099";
      document.getElementById("information").innerHTML = "Avvertenze per la salute delle condizioni di emergenza. L'intera popolazione ha maggiori probabilità di essere colpita";
    }
    if(air.index>300){
      document.getElementById("Risk").innerHTML = 'Rischioso';
      document.getElementById("color").style.backgroundColor = "#7e0023";
      document.getElementById("information").innerHTML = "Allerta per la salute: tutti possono avere effetti sulla salute più gravi";
    }
  }
  }
