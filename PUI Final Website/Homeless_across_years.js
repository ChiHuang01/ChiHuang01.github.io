//Plotly.d3.csv("https://raw.githubusercontent.com/ChiHuang01/ChiHuang01.github.io/master/PUI%20Final%20Website/data/pui_website_data.csv", function(err, rows){

//   function unpack(rows, key) {
//   return rows.map(function(row) { return row[key]; });
// }

//   var frames = []
//   var x = unpack(rows, 'Status')
//   var y = unpack(rows, 'Numbers of People')
//   //var z = unpack(rows, 'Year')

//   var n = 100;
//   for (var i = 0; i < n; i++) {
//     frames[i] = {data: [{x: [], y: []}]}
//     frames[i].data[0].x = x.slice(0, i+1);
//     frames[i].data[0].y = y.slice(0, i+1);
//   }

//   Plotly.plot('myDiv', [{
//     x: frames[1].data[0].x,
//     y: frames[1].data[0].y,
//     fill: 'tozeroy',
//     type: 'scatter',
//     mode: 'lines',
//     line: {color: 'green'}
//   }], {
//     title: "Filled-Area Animation",
//     xaxis: {
//       type: 'date',
//       range: [
//         frames[99].data[0].x[0],
//         frames[99].data[0].x[99]
//       ]
//     },
//     yaxis: {
//       range: [
//         0,
//         90
//       ]
//     },
//     updatemenus: [{
//       x: 0.1,
//       y: 0,
//       yanchor: "top",
//       xanchor: "right",
//       showactive: false,
//       direction: "left",
//       type: "buttons",
//       pad: {"t": 87, "r": 10},
//       buttons: [{
//         method: "animate",
//         args: [null, {
//           fromcurrent: true,
//           transition: {
//             duration: 0,
//           },
//           frame: {
//             duration: 40,
//             redraw: false
//           }
//         }],
//         label: "Play"
//       }, {
//         method: "animate",
//         args: [
//           [null],
//           {
//             mode: "immediate",
//             transition: {
//               duration: 0
//             },
//             frame: {
//               duration: 0,
//               redraw: false
//             }
//           }
//         ],
//         label: "Pause"
//       }]
//     }]
//   }).then(function() {
//     Plotly.addFrames('myDiv', frames);
//   });

// })


//Plotly.d3.csv("https://raw.githubusercontent.com/ChiHuang01/ChiHuang01.github.io/master/PUI%20Final%20Website/data/pui_website_data.csv", function(err, rows){}

function makeplot() {
  
  Plotly.d3.csv("https://raw.githubusercontent.com/ChiHuang01/ChiHuang01.github.io/master/PUI%20Final%20Website/data/pui_website_data.csv", function(data){
    processData(data) } );
};

function processData(allRows) {
    
    console.log(allRows); 

  var column_numberofpeople = allRows.map(function(row) { return row["numberofpeople"]; })
  console.log(column_numberofpeople);

  var column_year = allRows.map(function(row) { return row["year"]; })
  console.log(column_year);
  
  var data = [
    {
      x: column_year,
      y: column_numberofpeople,
      type: 'bar',
      marker: {color: 'rgb(237, 159, 189)', opacity: 0.5},
      name: 'Number of homeless people'
      }
  ];
  
  var layout = {
      showlegend: true,
      xaxis: {
      //tickangle: -45
      },
      yaxis: {
      zeroline: false,
      gridwidth: 2
      },
      bargap :0.1
  };

  
  Plotly.newPlot('myDiv', data, layout);
  
}

makeplot();