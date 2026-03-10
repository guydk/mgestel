var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Nieuwetijdelijketekenlaag_1 = new ol.format.GeoJSON();
var features_Nieuwetijdelijketekenlaag_1 = format_Nieuwetijdelijketekenlaag_1.readFeatures(json_Nieuwetijdelijketekenlaag_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nieuwetijdelijketekenlaag_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nieuwetijdelijketekenlaag_1.addFeatures(features_Nieuwetijdelijketekenlaag_1);
var lyr_Nieuwetijdelijketekenlaag_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nieuwetijdelijketekenlaag_1, 
                style: style_Nieuwetijdelijketekenlaag_1,
                popuplayertitle: 'Nieuwe tijdelijke tekenlaag',
                interactive: true,
                title: '<img src="styles/legend/Nieuwetijdelijketekenlaag_1.png" /> Nieuwe tijdelijke tekenlaag'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Nieuwetijdelijketekenlaag_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Nieuwetijdelijketekenlaag_1];
lyr_Nieuwetijdelijketekenlaag_1.set('fieldAliases', {'fid': 'fid', });
lyr_Nieuwetijdelijketekenlaag_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_Nieuwetijdelijketekenlaag_1.set('fieldLabels', {'fid': 'inline label - always visible', });
lyr_Nieuwetijdelijketekenlaag_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});