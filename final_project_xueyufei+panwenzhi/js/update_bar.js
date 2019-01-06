var fullwidth = 250;
    var fullheight = 250;

    var margin = {top: 10, right: 60, bottom: 20, left: 10};

    var height = fullheight - margin.top - margin.bottom;
    var width = fullwidth - margin.left - margin.right;

    var vis = d3.select("#chart").append("svg");
    var svg = vis
        .attr("width", fullwidth)
        .attr("height", fullheight)
        .append("g")
        .attr("transform", "translate(70,10)");

    var vis2 = d3.select("#chart2").append("svg");
    var svg2 = vis2
        .attr("width", fullwidth)
        .attr("height", fullheight)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    queue()
            .defer(d3.csv, "jinkou5.csv")
            .defer(d3.csv, "chukou5.csv")
            .await(loaded);

    function loaded(error,data,data2){

   
        var column = d3.select("#menu select").property("value");
        var dataset = top5_by_column(data, column); 
        var dataset2 = top5_by_column2(data2, column); 


        d3.select("#menu select")
            .on("change", function() {
                column = d3.select("#menu select").property("value"); 
                dataset = top5_by_column(data, column);
                dataset2 = top5_by_column2(data2, column); 
                redraw(dataset, column);
                redraw2(dataset2, column);
        });

        redraw(dataset, column);
        redraw2(dataset2, column); }


    // d3.csv("chukou5.csv", function(error2, data2) {

       

    //    console.log(column2, dataset2);

    //     d3.select("#menu select")
    //         .on("change", function() {
    //             column2 = d3.select("#menu select").property("value"); 
    //             dataset2 = top5_by_column2(data2, column2);
    //             redraw2(dataset2, column2);
    //     });

    //     redraw2(dataset2, column2);

    // }); 

    function top5_by_column(data, column) {

      
        var newData = data.sort(function(a,b){return b[column] - a[column];})
                          .slice(0,5);

        return newData;
        }

     function top5_by_column2(data2, column) {

      
        var newData = data2.sort(function(a,b){return b[column] - a[column];})
                          .slice(0,5);

        return newData;
        }

    // update function

    function redraw(data, column) {

        var max = d3.max(data, function(d) {return +d[column];});

        xScale = d3.scaleLinear()
                   .domain([max*1.05 , 0]) 
                   .range([0, width]);
        
        
        yScale = d3.scaleBand()
            .domain(d3.range(data.length))
            .range([0,height])
            .padding(.2);


        var bars = svg.selectAll("rect.bar")
            .data(data, function (d) { return d.Type;}); 
        
        bars
            .attr("fill", "#e77639");

        bars.enter()
            .append("rect")
            .attr("class", "bar")
            .attr("fill", "#f2ad8e")
            .merge(bars)
            .transition()
            .duration(300)
            .attr("width", function(d) {
                return width - xScale(+d[column]); 
            })
            .attr("height", yScale.bandwidth())
            .attr("transform", function(d,i) {
                return "translate(" + xScale(+d[column]) +","+ yScale(i) + ")";
            });


        bars.exit()
            .transition()
            .duration(300)
            .attr("width", 0)
            .remove();

        var labels = svg.selectAll("text.labels")
            .data(data, function (d) { return d.Type;}); 

       
        labels.enter()
            .append("text")
            .attr("class", "labels")
            .merge(labels)
            .transition()
            .duration(400)
            .text(function(d) {
                return d.Type +" " + d[column]})
            .attr("transform", function(d,i) {
                return "translate(" + xScale(+d[column]) + "," + yScale(i) + ")"
            })
            .attr("dy", 20)
            .attr("dx", -11)
            .attr("text-anchor", "end"); 

        labels.exit()
            .remove();


        }// end of draw function

         function redraw2(data2, column) {

        var max = d3.max(data2, function(d) {return +d[column];});

        xScale = d3.scaleLinear()
                   .domain([0, max*1.05]) 
                   .range([0, width]);
        
        
        yScale = d3.scaleBand()
            .domain(d3.range(data2.length))
            .range([0,height])
            .padding(.2);


        var bars = svg2.selectAll("rect.bar")
            .data(data2, function (d) { return d.Type_export;}); 
        
        bars
            .attr("fill", "#4380a2");

        bars.enter()
            .append("rect")
            .attr("class", "bar")
            .attr("fill", "#99c1d5")
            .merge(bars)
            .transition()
            .duration(300)
            .attr("width", function(d) {
                return xScale(+d[column]); 
            })
            .attr("height", yScale.bandwidth())
            .attr("transform", function(d,i) {
                return "translate(0," + yScale(i) + ")";
            });


        bars.exit()
            .transition()
            .duration(300)
            .attr("width", 0)
            .remove();



        var labels = svg2.selectAll("text.labels")
            .data(data2, function (d) { return d.Type_export;}); 

       
        labels.enter()
            .append("text")
            .attr("class", "labels")
            .merge(labels)
            .transition()
            .duration(400)
            .text(function(d) {
                return d.Type_export +" " + d[column]})
            .attr("transform", function(d,i) {
                return "translate(" + xScale(+d[column]) + "," + yScale(i) + ")"
            })
            .attr("dy", 20)
            .attr("dx", 11)
            .attr("text-anchor", "start"); 

        labels.exit()
            .remove();


        }// end of draw function