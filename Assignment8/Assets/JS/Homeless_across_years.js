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

//**second attempt*//
// function makeplot() {
  
//   Plotly.d3.csv("https://raw.githubusercontent.com/ChiHuang01/ChiHuang01.github.io/master/PUI%20Final%20Website/data/pui_website_data.csv", function(data){
//     processData(data) } );
// };

// function processData(allRows) {
    
//     console.log(allRows); 

//   var column_numberofpeople = allRows.map(function(row) { return row["numberofpeople"]; })
//   console.log(column_numberofpeople);

//   var column_year = allRows.map(function(row) { return row["year"]; })
//   console.log(column_year);
  
//   var data = [
//     {
//       x: column_numberofpeople,
//       y: column_year,
//       type: 'bar',
//       marker: {color: 'rgb(237, 159, 189)', opacity: 0.5},
//       name: 'homeless population'
//       }
//   ];
  
//   var layout = {
//       showlegend: true,
//       xaxis: {
//       //tickangle: -45
//       },
//       yaxis: {
//       zeroline: false,
//       gridwidth: 2
//       },
//       bargap :0.1
//   };

  
//   Plotly.newPlot('myDiv', data, layout);
  
// }

// makeplot();




//******line graphs******//


// Plotly.d3.csv("https://raw.githubusercontent.com/ChiHuang01/ChiHuang01.github.io/master/PUI%20Final%20Website/data/pui_website_data.csv", function(err, rows){})


// title = 'Main Source for News'
// labels = ['All', 'sheltered', 'unsheltered', 'Radio']
// colors = ['rgb(67,67,67)', 'rgb(115,115,115)', 'rgb(49,130,189)', 'rgb(189,189,189)']

// mode_size = [8, 8, 12, 8]
// line_size = [2, 2, 4, 2]

// x_data = np.vstack((np.arange(2001, 2014),)*4)

// y_data = np.array([
//     [74, 82, 80, 74, 73, 72, 74, 70, 70, 66, 66, 69],
//     [45, 42, 50, 46, 36, 36, 34, 35, 32, 31, 31, 28],
//     [13, 14, 20, 24, 20, 24, 24, 40, 35, 41, 43, 50],
//     [18, 21, 18, 21, 16, 14, 13, 18, 17, 16, 19, 23],
// ])

// fig = go.Figure()

// for i in range(0, 4):
//     fig.add_trace(go.Scatter(x=x_data[i], y=y_data[i], mode='lines',
//         name=labels[i],
//         line=dict(color=colors[i], width=line_size[i]),
//         connectgaps=True,
//     ))

//     # endpoints
//     fig.add_trace(go.Scatter(
//         x=[x_data[i][0], x_data[i][-1]],
//         y=[y_data[i][0], y_data[i][-1]],
//         mode='markers',
//         marker=dict(color=colors[i], size=mode_size[i])
//     ))

// fig.update_layout(
//     xaxis=dict(
//         showline=True,
//         showgrid=False,
//         showticklabels=True,
//         linecolor='rgb(204, 204, 204)',
//         linewidth=2,
//         ticks='outside',
//         tickfont=dict(
//             family='Arial',
//             size=12,
//             color='rgb(82, 82, 82)',
//         ),
//     ),
//     yaxis=dict(
//         showgrid=False,
//         zeroline=False,
//         showline=False,
//         showticklabels=False,
//     ),
//     autosize=False,
//     margin=dict(
//         autoexpand=False,
//         l=100,
//         r=20,
//         t=110,
//     ),
//     showlegend=False,
//     plot_bgcolor='white'
// )

// annotations = []

// # Adding labels
// for y_trace, label, color in zip(y_data, labels, colors):
//     # labeling the left_side of the plot
//     annotations.append(dict(xref='paper', x=0.05, y=y_trace[0],
//                                   xanchor='right', yanchor='middle',
//                                   text=label + ' {}%'.format(y_trace[0]),
//                                   font=dict(family='Arial',
//                                             size=16),
//                                   showarrow=False))
//     # labeling the right_side of the plot
//     annotations.append(dict(xref='paper', x=0.95, y=y_trace[11],
//                                   xanchor='left', yanchor='middle',
//                                   text='{}%'.format(y_trace[11]),
//                                   font=dict(family='Arial',
//                                             size=16),
//                                   showarrow=False))
// # Title
// annotations.append(dict(xref='paper', yref='paper', x=0.0, y=1.05,
//                               xanchor='left', yanchor='bottom',
//                               text='Main Source for News',
//                               font=dict(family='Arial',
//                                         size=30,
//                                         color='rgb(37,37,37)'),
//                               showarrow=False))
// # Source
// annotations.append(dict(xref='paper', yref='paper', x=0.5, y=-0.1,
//                               xanchor='center', yanchor='top',
//                               text='Source: PewResearch Center & ' +
//                                    'Storytelling with data',
//                               font=dict(family='Arial',
//                                         size=12,
//                                         color='rgb(150,150,150)'),
//                               showarrow=False))

// fig.update_layout(annotations=annotations)

// fig.show()




///****ahhhhhhh*****///

Plotly.d3.csv("https://raw.githubusercontent.com/ChiHuang01/ChiHuang01.github.io/master/PUI%20Final%20Website/data/pui_website_data.csv", function(err, rows){})

var trace1 = {
  x: [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
  y: [647258, 639784, 630227, 637077, 623788, 621553, 590364, 576250, 564708, 549928, 550996, 552830],
  type: 'scatter', 
  name: 'All',
};


var trace2 = {
  x: [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
  y: [391401, 386361, 403308, 403543, 392316, 390155, 394698, 401051, 391440, 373571, 360867, 358363],
  type: 'scatter',
  name: 'Sheltered',
};

var trace3 = {
  x: [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
  y: [255857, 253423, 226919, 233534, 231472, 231398, 195666, 175399, 173268, 176357, 190129, 194467],
  type: 'scatter',
  name: 'Unsheltered',
};


// var trace1 = all;
// var trace2 = sheltered; 

// console.log(sheltered)

// var trace3 = unsheltered; 

var data = [trace1, trace2, trace3];


var layout = {
  title: {
    text:'Estimates of People Experiencing Homelessness in the U.S.',
    font: {
      family: 'Courier New, monospace',
      size: 24
    },
    xref: 'paper',
    x: 0.20,
  },
  xaxis: {
    title: {
      text: 'Year',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: 'Number of People',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};

Plotly.newPlot('myDiv', data, layout); {showSendToCloud: true};






// Plotly.newPlot('myDiv', data, {}, {showSendToCloud: true});

// console.log(myDiv)



