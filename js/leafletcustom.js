			// create the map object and set the cooridnates of the initial view:
			var layer = new L.StamenTileLayer("toner");
			var map = new L.Map("map", {
				//center: new L.LatLng(51.532689, 9.935121),
				center: new L.LatLng(0, 0),
				zoom: 14
			});
			map.addLayer(layer);
