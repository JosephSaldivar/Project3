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
           var pokename = data.name;
           var ability = data.abilities[0];
           var pokeevo = data.evolutions[0].to;
           var pokesprite = data.sprites[0].name;
           //var type1 = data.types[0].name;
           //var type2 = data.types[1].name;
           var poketype = "";
           for (var i = 0; i < data.types.length; i++)
           {
             var type_to_add = (data.types[i].name);
             type_to_add=type_to_add.charAt(0).toUpperCase()+type_to_add.slice(1, (type_to_add.length));
             poketype+= type_to_add + "";
           }
 };

 $('#pokename').text(pokename);
 $('#pokeevo').text(pokeevo);

 //var poketype1 = type1;
 //var poketype2 = type2;
 //var poketype = type1 + ' and ' + type2;
 $('#poketype').text(poketype);


 var url = 'http://pokeapi.co/api/v1/sprite/' + (num + 1);
 $.get(url).done(
   function(data,json) {

     if (data != null) {
    var sprite = data.image;

  };


  $('#pokesprite').text(pokesprite);


      })
    }
    )
})})})
(jQuery);
