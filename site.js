$.noConflict();
(function($) {
  $(document).ready(
    function() {

       $('#poke-form').on('submit', function(event) {

        var num = $('#num').val();
        var url = 'http://pokeapi.co/api/v1/pokemon/' + num;
        $.get(url).done(
          function(data,json) {

            //if (data != null) {

           var name = data.name;
           var weight = data.weight;
           var height = data.height;
           //var evo = data.evolutions[0].to;
           //var sprite = data.sprites[0].name;
           var types = "";
           for (var i = 0; i < data.types.length; i++)
           {//iterate through the types array, if there is only one element, add it as the name.
            //if there is more than one name, it get's appended to the types string
             var type_to_add = (data.types[i].name);
             type_to_add=type_to_add.charAt(0).toUpperCase()+type_to_add.slice(1, (type_to_add.length));
             types= types+ type_to_add + " ";
           }
           var abilities = "";
           for (var j = 0; j<data.abilities.length;j++)
           {//iterate through the abilities array, if there is only one element, add it as the name.
            //if there is more than one name, it get's appended to the abilities string
             var abiltoadd=(data.abilities[j].name);
             abiltoadd=abiltoadd.charAt(0).toUpperCase()+abiltoadd.slice(1, (abiltoadd.length));
             abilities= abilities+abiltoadd+" ";
           }


 //};

 //var pokename = name;
 $('#pokename').text(name);
 $('#pokeheight').text(height);
 $('#pokeweight').text(weight);
 //var pokeevo = evo;
 //$('#pokeevo').text(pokeevo);

 //var poketype = types;
 $('#poketype').text(types);

 //var pokeability = abilities;
 $('#pokeability').text(abilities);

  //var url = 'http://pokeapi.co/api/v1/sprite/' + (num + 1);
  /*$.get(url).done(
  function(data,json) {

    if (data != null) {
      var sprite = data.image;

  };

  var pokesprite = sprite;
  $('#pokesprite').text(pokesprite);


      })*/
    }
    )
    .fail(function(data,json) {
      alert("Error, did not load data");
    })
})})})
(jQuery);
