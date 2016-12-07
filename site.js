$.noConflict();
(function($) {
  $(document).ready(
    function() {

       $('#poke-form').on('submit', function(event) {

        var num = $('#num').val();
        var url = 'http://pokeapi.co/api/v1/pokemon/' + num;
        $.get(url).done(
          function(data,json) {

            if (data != null) {
           var name = data.name;
           //var ability = data.abilities[0];
           var evo = data.evolutions[0].to;
           var sprite = data.sprites[0].name;
           //var type1 = data.types[0].name;
           //var type2 = data.types[1].name;
           var types = "";
           for (var i = 0; i < data.types.length; i++)
           {
             var type_to_add = (data.types[i].name);
             type_to_add=type_to_add.charAt(0).toUpperCase()+type_to_add.slice(1, (type_to_add.length));
             types+= type_to_add + " ";
           }
           var abilities =""+ data.abilities.join(", ");
           //var types = ""+data.types.join(", ");
           //var abilities = "";
           
           
 };

 var pokename = name;
 $('#pokename').text(pokename);

 var pokeevo = evo;
 $('#pokeevo').text(pokeevo);

 //var poketype1 = type1;
 //var poketype2 = type2;
 //var poketype = type1 + ' and ' + type2;
 var poketype = types;
 $('#poketype').text(poketype);

 var pokeability = abilities;
 $('#pokeability').text(pokeability);
 
  var url = 'http://pokeapi.co/api/v1/sprite/' + (num + 1);
  $.get(url).done(
  function(data,json) {

    if (data != null) {
      var sprite = data.image;

  };
  
  var pokesprite = sprite;
  $('#pokesprite').text(pokesprite);


      })
    }
    )
})})})
(jQuery);
