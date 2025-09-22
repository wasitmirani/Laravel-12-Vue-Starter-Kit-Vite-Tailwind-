(function () {
    "use strict";

    /* default map */
    const map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    /* maps with markers circles and polygons */
    const shapesmap = L.map('map1').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap'
    }).addTo(shapesmap);
    const marker = L.marker([51.5, -0.09]).addTo(shapesmap);
    const circle = L.circle([51.508, -0.11], {
        color: '#d77cf7',
        fillColor: '#d77cf7',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(shapesmap);
    const polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ], {
        color: "#fe5454",
        fillColor: "#fe5454"
    }).addTo(shapesmap);

    /* maps with popup */
    const popupmap = L.map('map-popup').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap'
    }).addTo(popupmap);
    const marker1 = L.marker([51.5, -0.09]).addTo(popupmap);
    const circle1 = L.circle([51.508, -0.11], {
        color: '#ffc102',
        fillColor: '#ffc102',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(popupmap);
    const polygon1 = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ], {
        color: "#7b76fe",
        fillColor: "#7b76fe"
    }).addTo(popupmap);
    marker1.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    circle1.bindPopup("I am a circle.");
    polygon1.bindPopup("I am a polygon.");
    const popup = L.popup()
        .setLatLng([51.513, -0.09])
        .setContent("I am a standalone popup.")
        .openOn(popupmap);

    /* maps with custom icon */
    const customicon = L.map('map-custom-icon').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap'
    }).addTo(customicon);
    const greenIcon = L.icon({
        iconUrl: '../assets/images/brand-logos/desktop-logo.png',
        iconSize: [80, 25], // size of the icon
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    L.marker([51.5, -0.09], { icon: greenIcon }).addTo(customicon);

    /* interactive chloropleth map */
    const geomap = L.map('interactive-map').setView([37.8, -96], 4);
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(geomap);
    // L.geoJson(statesData).addTo(geomap);
    function getColor(d) {
        return d > 1000 ? '#800026' :
            d > 500 ? '#BD0026' :
                d > 200 ? '#E31A1C' :
                    d > 100 ? '#FC4E2A' :
                        d > 50 ? '#FD8D3C' :
                            d > 20 ? '#FEB24C' :
                                d > 10 ? '#FED976' :
                                    '#FFEDA0';
    }
    function style(feature) {
        return {
            fillColor: getColor(feature.properties.density),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7,
            // fillColor: '#fff'
        };
    }
    // L.geoJson(statesData, { style: style }).addTo(geomap);
    function highlightFeature(e) {
        const layer = e.target;
        layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });
        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
    }
    function resetHighlight(e) {
        geojson.resetStyle(e.target);
    }
    function zoomToFeature(e) {
        map.fitBounds(e.target.getBounds());
    }

})();