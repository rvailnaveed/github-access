var lineDiv = Document.getElementById('plot');
 
    var traceA = {
        x: [1, 2, 3, 4, 16, 17, 26],
        y: [1, 40, 9, 60, 4, 20, 10],
        type: 'scatter'
    };
    
    var data = [traceA];
    
    var layout = {
        title:'A Line Chart in Plotly'
    };
    
    Plotly.plot(lineDiv, data, layout );