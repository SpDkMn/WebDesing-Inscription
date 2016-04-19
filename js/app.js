$(function () {
  $('[data-toggle="tooltip"]').tooltip()
  $('.calendar').datepicker({language:'es'})
  .on('changeDate',function(ev){
    date = ev.dates
    day = date[0].getDate()
    month = ((date[0].getMonth()).toString().length == 1) ? "0"+(date[0].getMonth()+1) : date[0].getMonth()
    year = date[0].getUTCFullYear()
    EndDate =  day+"-"+month+"-"+year
    $('.datepicke').val(EndDate)
  })
  var departamentos = [
    {"value": "amazonas","text": "Amazonas"},
    {"value": "ancash","text": "Ancash"},
    {"value": "apurimac","text": "Apurimac"},
    {"value": "arequipa","text": "Arequipa"},
    {"value": "ayacucho","text": "Ayacucho" },
    {"value": "cajamarca","text": "Cajamarca"},
    {"value": "callao","text": "Callao"},
    {"value": "cusco","text": "Cusco"},
    {"value": "huancavelica","text": "Huancavelica"},
    {"value": "huanuco","text": "Huanuco"},
    {"value": "ica","text": "Ica"},
    {"value": "junin","text": "Junin"},
    {"value": "la-libertad","text":" La Libertad"},
    {"value": "lambayeque","text": "Lambayeque"},
    {"value": "lima","text": "Lima"},
    {"value": "loreto","text": "Loreto"},
    {"value": "madre-de-dios","text": "Madre De Dios"},
    {"value": "moquegua","text": "Moquegua"},
    {"value": "pasco","text": "Pasco"},
    {"value": "piura","text": "Piura"},
    {"value": "puno","text": "Puno"},
    {"value": "san-martin","text": "San Martin"},
    {"value": "tacna","text": "Tacna"},
    {"value": "tumbes","text": "Tumbes"},
    {"value": "ucayali","text": "Ucayali"}
  ]
  var depart = {
    "amazonas":["Chachapoyas","Bagua","Bongará","Condorcanqui","Luya","Rodríguez de Mendoza","Utcubamba"],
    "ancash":["Huaraz","Aija","Antonio Raimondi","Asunción","Bolognesi","Carhuaz","Carlos Fermín Fitzcarrald","Casma","Corongo","Huari","Huarmey","Huaylas","Mariscal Luzuriaga","Ocros","Pallasca","Pomabamba","Recuay","Santa","Sihuas","Yungay"],
    "apurimac":["Abancay","Andahuaylas","Antabamba","Aymaraes","Cotabambas","Chincheros","Grau"],
    "arequipa":["Arequipa","Camaná","Caravelí","Castilla","Caylloma","Condesuyos","Islay","La Unión"],
    "ayacucho":["Huamanga","Cangallo","Huancasancos","Huanta","La Mar","Lucanas","Parinacochas","Páucar del Sara Sara","Sucre","Víctor Fajardo","Vilcashuamán"],
    "cajamarca":["Cajamarca","Cajabamba","Celendín","Chota","Contumazá","Cutervo","Hualgayoc","Jaén","San Ignacio","San Marcos","San Miguel","San Pablo","Santa Cruz"],
    "callao":["Callao"],
    "cusco":["Cusco","Acomayo","Anta","Calca6","Canas","Canchis","Chumbivilcas","Espinar","La Convención","Paruro","Paucartambo","Quispicanchi","Urubamba"],
    "huancavelica":["Huancavelica","Acobamba","Angaraes","Castrovirreyna","Churcampa","Huaytará","Tayacaja"],
    "huanuco":["Huánuco","Ambo","Dos de Mayo","Huacaybamba","Huamalíes","Leoncio Prado","Marañón","Pachitea","Puerto Inca","Lauricocha","Yarowilca"],
    "ica":["Ica","Chincha","Nazca","Palpa","Pisco"],
    "junin":["Huancayo","Concepción","Chanchamayo","Jauja","Junín","Satipo","Tarma","Yauli","Chupaca"],
    "la-libertad":["Trujillo","Ascope","Bolívar","Chepén","Julcán","Otuzco","Pacasmayo","Pataz","Sánchez Carrión","Santiago de Chuco","Gran Chimú","Virú"],
    "lambayeque":["Chiclayo","Ferreñafe","Lambayeque"],
    "lima":["Lima","Barranca","Cajatambo","Canta","Cañete","Huaral","Huarochirí","Huaura","Oyón","Yauyos"],
    "loreto":["Maynas","Alto Amazonas","Loreto","Mariscal Ramón Castilla","Requena","Ucayali","Datem del Marañón","Putumayo"],
    "madre-de-dios":["Tambopata","Manu","Tahuamanu"],
    "moquegua":["Mariscal Nieto","General Sánchez Cerro","Ilo"],
    "pasco":["Pasco","Daniel Alcides Carrión","Oxapampa"],
    "piura":["Piura","Ayabaca","Huancabamba","Morropón","Paita","Sullana","Talara","Sechura"],
    "puno":["Puno","Azángaro","Carabaya","Chucuito","El Collao","Huancané","Lampa","Melgar","Moho","San Antonio de Putina","San Román","Sandia","Yunguyo"],
    "san-martin":["Moyobamba","Bellavista","El Dorado","Huallaga","Lamas","Mariscal Cáceres","Picota","Rioja","San Martín","Tocache"],
    "tacna":["Tacna","Candarave","Provincia de Jorge Basadre","Tarata"],
    "tumbes":["Tumbes","Contralmirante Villar","Zarumilla"],
    "ucayali":["Coronel Portillo","Atalaya","Padre Abad","Purús"]
  }
  var sede = ["Sede 1", "Sede 2", "Sede 3"]
  var residencia = ['Padre','Madre','Tutor']
  var prepa = ['Colegio','Academia Preuniversitaria', 'Solo']
  var medio = ['Radio','Television','Periodico','Pagina web','Redes Sociales','Amigos','Familiares']
  var tipoDocIdentidad = ['DNI','Carnet de extranjeria']
  var tipoInstituto = ['Estatal', 'Privado','Parroquial']
  var especialidadPostula = ['Medicina Humana','Obstetricia','Enfermería','Tecnología Médica: Laboratorio Clínico y Anatomía Patológica','Tecnología Médica: Terapia Física y Rehabilitación','Tecnología Médica: Radiología','Tecnología Médica: Terapia Ocupacional','Nutrición','Derecho','Literatura','Filosofía','Lingüística','Comunicación Social','Arte','Bibliotecología y Ciencias de la Información','Farmacia y Bioquímica','Ciencia de los Alimentos','Toxicología ','Odontología','Educación Inicial','Educación Primaria','Educación Secundaria Inglés y Castellano','Educación Secundaria Lenguaje y Literatura','Educación Secundaria Historia y Geografía','Educación Secundaria Filosofía, Tutoría y Ciencias Sociales','Educación Secundaria Matemática y Física','Educación Secundaria Biología y Química','Educación Física','Química','Ingeniería Química','Ingeniería Agroindustrial','Medicina Veterinaria','Administración','Administración de Turismo','Administración de Negocios Internacionales','Ciencias Biológicas','Genética y Biotecnología','Microbiología y Parasitología','Contabilidad','Economía','Física','Ingeniería Mecánica de Fluidos','Matemática','Estadística','Investigación Operativa','Computación Científica','Historia','Sociología','Antropología','Arqueología','Trabajo Social','Geografía','Ingeniería Geológica','Ingeniería Geográfica','Ingeniería de Minas','Ingeniería Metalúrgica','Ingeniería Industrial','Psicología','Ingeniería Electrónica','Ingeniería Eléctrica','Ingeniería de Sistemas','Ingeniería de Software']

  $('option', '.chosen-select').remove()
  $('.chosen-select').append(new Option("", ""))
  $.each(departamentos, function(val, text) {
      $('#departamentoNacimiento').append(new Option(text.text, text.value))
      $('#departamentoResidencia').append(new Option(text.text, text.value))
      $('#departamentoColegio').append(new Option(text.text, text.value))
  })
  $.each(sede, function(val, text) {
      $('#SedeExamen').append(new Option(text,val))
  })
  $.each(residencia, function(val, text) {
      $('#quienResidencia').append(new Option(text,val))
  })
  $.each(prepa, function(val, text) {
      $('#preparacion').append(new Option(text,val))
  })
  $.each(medio, function(val, text) {
      $('#infoExamen').append(new Option(text,val))
  })
  $.each(tipoDocIdentidad, function(val, text) {
      $('#tipoDocIdentidad').append(new Option(text,val))
  })
  $.each(tipoInstituto, function(val, text) {
      $('#tipoInstituto').append(new Option(text,val))
  })
  $.each(especialidadPostula, function(val, text) {
      $('#especialidadPostula').append(new Option(text,val))
  })
  for (i = (2016-14); i > (2016-60); i--) { 
      $('#yearSecundaria').append(new Option(i,i))
  }
  $('.chosen-select').chosen()
  $('#departamentoResidencia').on('change',function(){
    var valor = $(this).val()
    $("#provinciaResidencia_chosen").remove()
    $("#provinciaResidencia").remove()
    $("#campProv").append('<select data-placeholder="provincias" id="provinciasResidencia" class="chosen-select" tabindex="2"></select>')
    $('#provinciasResidencia').append(new Option("", ""))
    $.each(depart[valor], function(val,text) {
      $('#provinciasResidencia').append(new Option(text,val))
    })
    $('#provinciasResidencia').chosen()
  })
})
