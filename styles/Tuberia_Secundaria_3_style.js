var size = 0;
var placement = 'point';
function categories_Tuberia_Secundaria_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '0':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(12,193,209,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '50':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(16,203,217,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '75':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(18,202,221,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '90':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(93,247,247,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '110':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(124,205,250,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '160':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(38,26,244,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.04}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Tuberia_Secundaria_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("DIAMETER");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("DIAMETER") !== null) {
        labelText = String(feature.get("DIAMETER"));
    }
    
    var style = categories_Tuberia_Secundaria_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
