# leaflet-radar
Radar sector scan animation
## Installing
Via NPM:
```
 npm install --save leaflet-radar
```
## Requirements
  - Leaflet >= 1
    
## Using the plugin
 
### Importing
Using with ES6 imports
```javascript
    import  Radar  from 'leaflet-radar';
    
    // Usethe constructor...
    let radar = new Radar({
        radius:100, //Radius of radar sector,The unit is meter
        angle:60, //Fan opening and closing angle 0-360
        direction:65, // Fan orientation angle 0-360
        location:"28.210073 112.882625" // Longitude dimension of sector start position
    }, {
        online:{
            color: '#dd2',
            dashArray: [5, 15],
            weight: 1,
            opacity: 1,
            fillColor: "#d21",
            fillOpacity: 0.01,
        },
        animat:{
            color: '#238',
            weight: 0,
            opacity: 0,
            fillColor: "#ff0",
            fillOpacity: 0.05,
            pmIgnore: true
        },
        step:12  //The refresh distance of each frame of radar scanning animation. The unit is meter.
    });
    
    radar.addTo(map);
```



## License
This project is under the [ISC LICENSE](http://opensource.org/licenses/ISC)

