
let autocomplete;
function initAutocomplete(){
    autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('autocomplete'),
    {

       
         types: ['establishment'],
         componentRestrictions: { 'country' : ['AU'] },
         fields: ['place_id', 'geometry', 'name']
});
autocomplete.addListener('place_changed',onPlaceChanged);
}
function onPlaceChanged() {
    var place = autocomplete.getPlace();

     if (!place.geometry){
       // User did not select a prediction; reset the input field
      document.getElementById('autocomplete').Placeholder='Enter a place';
  }
  else{
    document.getElementById('details').innerHTML=place.name;
  }
}
