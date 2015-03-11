$(function() {
    var $provincia = $('#provincia'),
        $municipio = $('#municipio');

    var fillSelect = function($select, values) {
    	$select.children().remove();
        var options = [];
        for (var i in values) {
            options.push(new Option(values[i], i));
        }
        $select.append(options);
    };

    $.getJSON('../servidor/cargaProvinciasJSON.php', function(provincias){
    	fillSelect($provincia, provincias);
    });
    $provincia.on('change', function(ev) {
        $.ajax('../servidor/cargaMunicipiosJSON.php', {
            method: 'POST',
            data: {
                provincia: $provincia.val()
            },
            dataType: 'json',
            success: function(municipios) {
                fillSelect($municipio, municipios);
            }

        });
    });
});
