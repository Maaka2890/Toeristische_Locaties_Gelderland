	mapboxgl.accessToken = 'pk.eyJ1IjoibWFha2EiLCJhIjoiY2lzZnp4eWhvMDAzejJwbnExNmY5ODdsMCJ9.EeEx5fDH-zH3pdvuHMuncg';
  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/maaka/ckobdwl0m10cy17noalk7uzot',
      center: [5.922896, 51.975716],
      zoom: 11.15
  });

  map.on('load', function () {
      
      // Add a layer showing the places.
      

      // When a click event occurs on a feature in the places layer, open a popup at the
      // location of the feature, with description HTML from its properties.
      map.on('click', 'toeristische-locaties', function (e) {
          var id = e.features[0].properties.id;
          var name = e.features[0].properties.name;
          //console.log(e.features[0]);
          var html = id + '. ' + name
          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          //while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          //    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          //}

          new mapboxgl.Popup()
              .setLngLat(e.lngLat)
              .setHTML(html)
              .addTo(map);
      });

      // Change the cursor to a pointer when the mouse is over the places layer.
      map.on('mouseenter', 'toeristische-locaties', function () {
          map.getCanvas().style.cursor = 'pointer';
      });

      // Change it back to a pointer when it leaves.
      map.on('mouseleave', 'toeristische-locaties', function () {
          map.getCanvas().style.cursor = '';
      });
  });
