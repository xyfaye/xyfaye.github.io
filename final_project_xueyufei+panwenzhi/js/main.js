function main0(){
	console.log("0")
	$("#circle1").css("display","block")}

function main1(){
	console.log("1")
	$("#circle2").css("display","block")
}

function main2(){
	console.log("2")
	$("#circle3").css("display","block")
}

function main3(){
	console.log("3")
	
}

function main4(){
	console.log("4")

var width = 900;
		var height = 600;

		var svg = d3.select("#loadmap1")
					.append("svg") 
					.attr("width", width)
					.attr("height", height);

		var world_g = svg.append("g");

		var projection = d3.geoMercator()

		var geoGenerator = d3.geoPath()
			.projection(projection);

		// var colorScale = d3.scaleOrdinal(d3.schemeCategory20c);
		var thresholdScale = d3.scaleLinear().range(["#b0cdd8","#1a364a"]);
		// var thresholdScale = d3.scaleQuantile().range(["#73181a","#bd2e20","#e26a20","#e39a33","#ead5a3"]);
		// var thresholdScale = d3.scaleThreshold()
		//     .domain([10,20,60,200,500,1050])
		//     .range(["#b0cdd8","#85b9be","#6b94ae","#567d91","#275167","#1a364a"]);

		 //准备悬浮框
       var tooltip = d3.select("body")
                        .append("div")
                        .attr("class", "tooltip");

		// we use queue because we have 2 data files to load.
		queue()
		    .defer(d3.json, "data/countries.geo.json")
		    .defer(d3.csv, "data/map.csv", typeAndSet)
		    .await(loaded);

		var countryByName = d3.map();

		function typeAndSet(d){
			d.export = +d.export;
			countryByName.set(d.country, d)
			return d;
		}

		function getColor(d){
			var country = countryByName.get(d.properties.name);
			// console.log(country)

			if(country){
				if(d.properties.name!="China"){
				console.log(thresholdScale(country.export))
				return thresholdScale(country.export);
			}else{
				return"#a4605f";
			}
			}else if(d.properties.name!="Antarctica"){
				return "#edede5";
			}else{
				return "#FFFFFF";
			}
		}

		function loaded(error, world, obor_export){
			if(error) throw error;

			console.log(obor_export);

			thresholdScale.domain(d3.extent(obor_export, function(g){
				return g.export;
			}))

			projection.fitSize([900, 650], world);

			var world = world_g.selectAll("path")
				.data(world.features);

			world.enter()
				.append("path")
				.attr("d", geoGenerator)
				// .attr("fill", function(d,i){ return colorScale(i); })
				.attr("fill", function(d){ return getColor(d); })


			// The d3-legend component is called here:

			var linear = thresholdScale;

			svg.append("g")
				.attr("class", "legendLinear")
				.attr("transform", "translate(20,20)");

			var legendLinear = d3.legendColor()
				.shapeWidth(30)
				.orient("vertical")
				.labelFormat(d3.format(".0f"))
				.scale(linear);

			svg.select(".legendLinear")
				.call(legendLinear);

			svg.append("rect")
			   .attr("x",20)
			   .attr("y",4)
			   .attr("width",30)
			   .attr("height",14)
			   .attr("fill","#edede5");

			svg.append("text")
			   .attr("x",60)
			   .attr("y",18)
			   .text("非一带一路国家")
			   .attr("font-size",10);


			console.log(obor_export)

			world_g.selectAll("path")
                .on("mouseover", mouseoverFunc) // see below...
                .on("mousemove", mousemoveFunc) // see below...
                .on("mouseout", mouseoutFunc); // see below...

		}


		 function mouseoverFunc(d) {
            // console.log(d);
            if (countryByName.get(d.properties.name)){
            	if(d.properties.name!="China"){
            tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>" + countryByName.get(d.properties.name)["chname"] + "<br>出口值: " + d3.format(".1f")(countryByName.get(d.properties.name)["export"]) +"亿美元</p>");
            }else{
            	tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>中国</p>");
            }
            }else{
            tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>非一带一路国家</p>");
            }
        }

        function mousemoveFunc(d) {
            // console.log("events", window.event, d3.event);
            tooltip
                .style("top", (d3.event.pageY - 10) + "px" )
                .style("left", (d3.event.pageX + 10) + "px");
        }

        function mouseoutFunc(d) {
            tooltip.style("display", "none"); 

        }
}


function main5(){
	console.log("5")
		var width = 900;
		var height = 600;

		var svg = d3.select("#loadmap2")
					.append("svg") 
					.attr("width", width)
					.attr("height", height);

		var world_g = svg.append("g");

		var projection = d3.geoMercator()

		var geoGenerator = d3.geoPath()
			.projection(projection);

		// var colorScale = d3.scaleOrdinal(d3.schemeCategory20c);
		var thresholdScale = d3.scaleLinear().range(["#ead5a3","#bd2e20"]);
		// var thresholdScale = d3.scaleQuantile().range(["#ead5a3","#e39a33","#e26a20","#bd2e20","#73181a"]);
		// var thresholdScale = d3.scaleThreshold()
		//     .domain([5,20,65,250,500,2000])
		//     .range(["#fff4c0","#ffdc8d","#efad7d","#e39a33","#e26a20","#bd2e20"]);

		 //准备悬浮框
       var tooltip = d3.select("body")
                        .append("div")
                        .attr("class", "tooltip");

		// we use queue because we have 2 data files to load.
		queue()
		    .defer(d3.json, "data/countries.geo.json")
		    .defer(d3.csv, "data/map.csv", typeAndSet)
		    .await(loaded);

		var countryByName = d3.map();

		function typeAndSet(d){
			d.import = +d.import;
			countryByName.set(d.country, d)
			return d;
		}

		function getColor(d){
			var country = countryByName.get(d.properties.name);
			// console.log(country)

			if(country){
				if(d.properties.name!="China"){
				console.log(thresholdScale(country.import))
				return thresholdScale(country.import);
			}else{
				return"#a4605f";
			}
			}else if(d.properties.name!="Antarctica"){
				return "#edede5";
			}else{
				return "#FFFFFF";
			}
		}

		function loaded(error, world, obor_import){
			if(error) throw error;

			console.log(obor_import);

			thresholdScale.domain(d3.extent(obor_import, function(g){
				return g.import;
			}))

			projection.fitSize([900, 650], world);

			var world = world_g.selectAll("path")
				.data(world.features);

			world.enter()
				.append("path")
				.attr("d", geoGenerator)
				// .attr("fill", function(d,i){ return colorScale(i); })
				.attr("fill", function(d){ return getColor(d); })


			// The d3-legend component is called here:

			var linear = thresholdScale;

			svg.append("g")
				.attr("class", "legendLinear")
				.attr("transform", "translate(20,20)");

			var legendLinear = d3.legendColor()
				.shapeWidth(30)
				.orient("vertical")
				.labelFormat(d3.format(".0f"))
				.scale(linear);

			svg.select(".legendLinear")
				.call(legendLinear);

			svg.append("rect")
			   .attr("x",20)
			   .attr("y",4)
			   .attr("width",30)
			   .attr("height",14)
			   .attr("fill","#edede5");

			svg.append("text")
			   .attr("x",60)
			   .attr("y",18)
			   .text("非一带一路国家")
			   .attr("font-size",10);


			console.log(obor_import)

			world_g.selectAll("path")
                .on("mouseover", mouseoverFunc) // see below...
                .on("mousemove", mousemoveFunc) // see below...
                .on("mouseout", mouseoutFunc); // see below...

		}


		 function mouseoverFunc(d) {
            // console.log(d);
            if (countryByName.get(d.properties.name)){
            	if(d.properties.name=="China"){
            	tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>中国</p>");
            }else if((d.properties.name=="Palestine State of")||(d.properties.name=="Bhutan")){
            	 tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>" + countryByName.get(d.properties.name)["chname"] + "<br>进口值: " + d3.format(".3f")(countryByName.get(d.properties.name)["import"]) +"亿美元</p>");
            }
            else{
            	 tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>" + countryByName.get(d.properties.name)["chname"] + "<br>进口值: " + d3.format(".1f")(countryByName.get(d.properties.name)["import"]) +"亿美元</p>");
            }
            }else{
            tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>非一带一路国家</p>");
            }
        }

        function mousemoveFunc(d) {
            // console.log("events", window.event, d3.event);
            tooltip
                .style("top", (d3.event.pageY - 10) + "px" )
                .style("left", (d3.event.pageX + 10) + "px");
        }

        function mouseoutFunc(d) {
            tooltip.style("display", "none"); 

        }

}


function main6(){
	console.log("6")
	var width = 900;
		var height = 600;

		var svg = d3.select("#loadmap3")
					.append("svg") 
					.attr("width", width)
					.attr("height", height);

		var world_g = svg.append("g");

		var projection = d3.geoMercator()

		var geoGenerator = d3.geoPath()
			.projection(projection);


		 //准备悬浮框
       var tooltip = d3.select("body")
                        .append("div")
                        .attr("class", "tooltip");

		// we use queue because we have 2 data files to load.
		queue()
		    .defer(d3.json, "data/countries.geo.json")
		    .defer(d3.csv, "data/map.csv", typeAndSet)
		    .await(loaded);

		var countryByName = d3.map();

		function typeAndSet(d){
			countryByName.set(d.country, d)
			return d;
		}

		function getColor(d){
			var country = countryByName.get(d.properties.name);
			// console.log(country)

			if(d.properties.name=="South Korea"||d.properties.name=="Vietnam"||d.properties.name=="India"||d.properties.name=="Singapore"||d.properties.name=="Russia"||d.properties.name=="Malaysia"||d.properties.name=="Indonesia"||d.properties.name=="Thailand"){
				return "#e5aba6";
			}
			else if(d.properties.name=="Antarctica"){
				return "#FFFFFF";
			}else{
				return "#edede5";
			}
		}

		function loaded(error, world){
			if(error) throw error;

			projection.fitSize([900, 650], world);

			var world = world_g.selectAll("path")
				.data(world.features);

			world.enter()
				.append("path")
				.attr("d", geoGenerator)
				// .attr("fill", function(d,i){ return colorScale(i); })
				.attr("fill", function(d){ return getColor(d); })


			// The d3-legend component is called here:


			world_g.selectAll("path")
                .on("mouseover", mouseoverFunc) // see below...
                .on("mousemove", mousemoveFunc) // see below...
                .on("mouseout", mouseoutFunc); // see below...

		}


		 function mouseoverFunc(d) {
            // console.log(d);
            if (countryByName.get(d.properties.name)){
            	if(d.properties.name!="China"){
            tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>" + countryByName.get(d.properties.name)["chname"] + "</p>");
            }else{
            	tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>中国</p>");
            }
            }else{
            tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>非一带一路国家</p>");
            }
        }

        function mousemoveFunc(d) {
            // console.log("events", window.event, d3.event);
            tooltip
                .style("top", (d3.event.pageY - 10) + "px" )
                .style("left", (d3.event.pageX + 10) + "px");
        }

        function mouseoutFunc(d) {
            tooltip.style("display", "none"); 

        }
}



function main7(){
	console.log("7")
 var fullwidth = 200,
           fullheight = 100;

        var margin = {top: 30, right: 43, bottom: 20, left: 30},
            width = fullwidth - margin.left - margin.right,
            height = fullheight - margin.top - margin.bottom;

        var parseDate = d3.timeParse("%Y");
        var formatDate = d3.timeFormat("%Y");

        var xScale = d3.scaleTime()
            .range([0, width])

        var yScale = d3.scaleLinear()
            .range([height, 0])

        var yAxis = d3.axisLeft(yScale)
            .ticks(4)
            .tickFormat(d3.format(".0s"));

        var xValue = function(d) {
            return d.date;
        };
        var yValue = function(d) {
            return d.count;
        };

        var area = d3.area()
            .x(function(d) { return xScale(xValue(d)); })
            .y0(height)
            .y1(function(d) { return yScale(yValue(d)); });

        var line = d3.line()
            .x(function(d) { return xScale(xValue(d)); })
            .y(function(d) { return yScale(yValue(d)); });

        var ness = "Total";

        var data = [],
            circle = null,
            caption = null,
            curYear = null; 

        var bisect = d3.bisector(function(d) {
            return d.date;
        }).left;

        function setupScales(data){
            var extentX, maxY;

            extentX = d3.extent(data[0].values, function(d){
                return xValue(d);
            })
            xScale.domain(extentX);

            maxY = d3.max(data, function(d){ 
                return d3.max(d.values, function(v){
                    return yValue(v);
                })
            });
            yScale.domain([0, maxY*1.25]);
        }

         function transformData(rawData) {
            rawData.forEach(function(r){
                r.date = parseDate(r.Year);
                r.count = + r[ness];
            });

            var nest = d3.nest()
                .key(function(r){ return r.Name; })
                .sortValues(function(a,b){ return a.date - b.date; })
                .entries(rawData);

            nest = nest.filter(function(n){
                return n.values.length == 5;
            })   

            return nest; 
        }

         function setupIsotope() {
            $("#smallmultiples").isotope({
                itemSelector: '.chart',
                layoutMode: 'fitRows',
                getSortData: {
                    count: function(e) {
                        var d, sum;
                        d = d3.select(e).datum();
                        sum = d3.sum(d.values, function(d) {
                            return d.count;
                        });
                        return sum * -1;
                    },
                    max: function(e) {
                        var d, max;
                        d = d3.select(e).datum();
                        max = d3.max(d.values, function(d) {
                            return d.count;
                        });
                        return max * -1;
                    },
                    country: function(e) {
                        var d;
                        d = d3.select(e).datum();
                        return d.key;
                    }
                }
            });
            return $("#smallmultiples").isotope({
                sortBy: 'count'
            });
        }

    
          d3.csv("data/small_multiples.csv", function(error, data) { 

            if (error) { console.log(error); };

            var countries = transformData(data);

            d3.select("#smallmultiples").datum(countries).each(function(myData){

                setupScales(myData);

                var div = d3.select(this).selectAll(".chart").data(myData);

                var svg = div.enter()
                    .append("div")
                    .attr("class","chart")
                    .append("svg")
                    .attr("width", fullwidth)
                    .attr("height", fullheight)
                    .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

                svg.append("rect")
                    .attr("class", "background")
                    .attr("width", width + margin.right) 
                    .attr("height", height)
                    .style("pointer-events", "all")
                    .on("mouseover", mouseover)
                    .on("mousemove", mousemove)
                    .on("mouseout", mouseout);


              var lines = svg.append("g").attr("class", "lines");

                lines.append("path")
                    .attr("fill","#e5aba6")
                    .style("pointer-events", "none")
                    .attr("d", function(c) {
                        return area(c.values);
                    });

                lines.append("path")
                    .attr("class", "line")
                    .style("pointer-events", "none")
                    .attr("d", function(c) {
                        return line(c.values);
                    });

                lines.append("text")
                    .attr("class", "static_year")
                    .attr("x", 0)
                    .attr("y", height + margin.bottom)
                    .style("text-anchor", "start")
                    .text(function(c) {
                        return formatDate(c.values[0].date);
                    });

                lines.append("text")
                    .attr("class", "title")
                    .attr("x", width/2)
                    .attr("y", -8)
                    .style("text-anchor", "middle")
                    .text(function(d) {
                        return d.key;
                    });

                lines.append("text")
                    .attr("class", "static_year")
                    .attr("x", width)
                    .attr("y", height + margin.bottom)
                    .style("text-anchor", "end")
                    .text(function(d) {
                        return formatDate(d.values[d.values.length - 1].date);
                    });

                 var circle = lines.append("circle")
                    .attr("class", "circle")
                    .attr("opacity", 0)
                    .attr("r", 3)
                    .attr("fill","white")
                    .attr("stroke","grey")
                    .attr("stroke-width","grey")
                    .style("pointer-events", "none");

                var caption = lines.append("text")
                    .attr("class", "caption")
                    .attr("text-anchor", "middle")
                    .style("pointer-events", "none")
                    .attr("dy", -8);

                 var curYear = lines.append("text")
                    .attr("class", "curYear")
                    .attr("text-anchor", "middle")
                    .style("pointer-events", "none")
                    .attr("dy", 13)
                    .attr("y", height);

                lines.append("g").attr("class","y axis").call(yAxis);

                function mouseover(){
                    circle.attr("opacity", 1);
                    d3.selectAll(".static_year").classed("hidden", true);
                }

                function mousemove(){
                    var year = xScale.invert(d3.mouse(this)[0]).getFullYear();
                    var date = d3.timeParse("%Y")(year);

                    var index = 0;
                    circle
                        .attr("cx", xScale(date)) 
                        .attr("cy", function(c) {
                            index = bisect(c.values, date, 0, c.values.length - 1); 
                            return yScale(yValue(c.values[index])); 
                        })


                    caption.attr("x", xScale(date))
                        .attr("y", function(c) {
                            return yScale(yValue(c.values[index]));
                        })
                        .text(function(c) {
                            return yValue(c.values[index]);
                        });
                    return curYear.attr("x", xScale(date)).text(year).attr("class","showyear");
                }

                function mouseout(){
                    d3.selectAll(".static_year").classed("hidden", false);
                    circle.attr("opacity", 0);
                    caption.text("");
                    return curYear.text("");
                }

            })// each

           
setupIsotope();

             d3.select("#form").selectAll("label").on("click", function() {
                var id;
                id = d3.select(this).attr("id");
                d3.select("#form").selectAll("label").classed("active", false);
                d3.select("#" + id).classed("active", true);
                 return $("#smallmultiples").isotope({
                        sortBy: id
                    });
                });
            
        });
}

function main8(){
	console.log("8")
	
}

function main9(){
	console.log("9")
	$("#highlight1").css("display","block")}

function main10(){
	console.log("10")
	$("#highlight2").css("display","block")
}

function main11(){
	console.log("11")
	$("#highlight3").css("display","block")
}

function main12(){
	console.log("12")
	$("#highlight4").css("display","block")}

function main13(){
	console.log("13")
	$("#highlight5").css("display","block")
}

function main14(){
	console.log("14")
	$("#highlight6").css("display","block")
}

function main15(){
	console.log("15")
    var fullwidth = 300;
    var fullheight = 300;

    var margin = {top: 10, right: 60, bottom: 20, left: 10};

    var height = fullheight - margin.top - margin.bottom;
    var width = fullwidth - margin.left - margin.right;

    var vis = d3.select("#chart").append("svg");
    var svg = vis
        .attr("width", fullwidth)
        .attr("height", fullheight)
        .append("g")
        .attr("transform", "translate(70,30)");
      
       vis .append("text")
        .text("中国进口")
        .attr("class","bar-legend")
        .attr("transform","translate(" + 160 + " ," + 20 + ")");

    var vis2 = d3.select("#chart2").append("svg");
    var svg2 = vis2
        .attr("width", fullwidth)
        .attr("height", fullheight)
        .append("g")
        .attr("transform", "translate(10,30)");

        vis2.append("text")
        .text("中国出口")
        .attr("class","bar-legend")
        .attr("transform","translate(" + 80 + " ," + 20 + ")");

    queue()
            .defer(d3.csv, "data/jinkou5.csv")
            .defer(d3.csv, "data/chukou5.csv")
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
    }

   
    function main16(){
	console.log("16")
	    var fullwidth = 450;
		var fullheight = 450;

		var margin = { top: 80, right: 80, bottom: 30, left: 50 };

		var width = fullwidth - margin.right - margin.left;
		var height = fullheight - margin.top - margin.bottom;

		var svg = d3.select("#scatterchart")
				.append("svg")
				.attr("width", fullwidth)
				.attr("height", fullheight)
				.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.bottom + ")");

		var dotRadius = 4; 

		var xScale = d3.scaleLinear()
							.range([ 0, width]);

		var yScale = d3.scaleLinear()
							.range([ height, 0 ]);

		var xAxis = d3.axisBottom(xScale)
						.ticks(10)
						; 

		var yAxis = d3.axisLeft(yScale)
                        .ticks(10)
                        ;

         //准备悬浮框
        var tooltip = d3.select("body")
                        .append("div")
                        .attr("class", "tooltip");
                        


		d3.csv("data/scatter.csv", function(data) {

			var menu = d3.select("#menu-scatter select")
    			.on("change", filter);

			// 初始下拉菜单
  			menu.property("value", "all");

  			svg.append("g")
				.attr("class", "x axis1")
				.attr("transform", "translate(0," + height + ")")
				.call(xAxis);

			svg.append("g")
				.attr("class", "y axis1")
				.call(yAxis);

			svg.append("text")
				.attr("class", "xlabel")
				.attr("transform", "translate(" + (width+40) + " ," + (height-5) + ")")
				.style("text-anchor", "middle")
				.attr("dy",12)
				.text("进口");

			svg.append("text")
				.attr("class", "ylabel")
				.style("text-anchor", "middle")
				.attr("transform", "translate(" + 8 + " ," + 4 + ")")
				.attr("dy", -15)
				.text("出口");


			//tooltips
		    function drawTooltip(d){
		    	svg.selectAll("circle")
		        .on("mouseover", mouseoverFunc) // see below...
                .on("mousemove", mousemoveFunc) // see below...
                .on("mouseout", mouseoutFunc); // see below...；
		    };


			//初始化
			var curSelection = menu.property("value");
  			render(data);  // do the full dataset render first.
  			drawTooltip(data);


  			// Functions for handling updates and drawing with data
			function filter() {
				//get下拉菜单的当前value
				curSelection = menu.property("value");

				if (curSelection === "all") {
				  	var newData = data; 
				} else if (curSelection === "import") { 
				  	var newData = data.sort(function(a,b) {
					  	return b.import - a.import;
				  	}).slice(0,10);
				} else if (curSelection === "export") {  
					var newData = data.sort(function(a,b) { 
						return b.export - a.export;
					}).slice(0, 10);
				}

			    console.log(newData);
				render(newData);
				drawTooltip(newData);
			}


			function render(data) {

	  			xScale.domain(d3.extent(data,function(d){ return +d.import; }));
				yScale.domain(d3.extent(data,function(d){ return +d.export; }));

				// data join
				var circles = svg.selectAll("circle")
					.data(data, function(d) {return d.country;}); // key function!
					

				circles.enter()
					.append("circle")
					.merge(circles)
					.sort(function(a, b) {
					return d3.descending(+a.import, +b.import);
				})
				    .transition(1000)
				    .delay(function(d, i) { //delay: just...delay,延迟
					return i * 10;
				})
				    .duration(1000)
					.attr("cx", function(d) {
						return xScale(+d.import);
					})
					.attr("cy", function(d) {
						return yScale(+d.export);
					})
					.attr("r", function() {
						if (curSelection !== "all") {
							return dotRadius * 2;
						}
						else {
							return dotRadius;
						}
					})
					.attr("class", function() {

						if(curSelection === "all") {
							if (d.country == "Korea Republic of" || d.country == "India") {
								return "highlighted";
							} 
						else{
							return "dots";}
						}
						else if (curSelection === "export"){
							if (d.country == "Korea Republic of" || d.country == "India") {
								return "highlighted";
							} 
						else{
                            return "dotsexport";}
						}
						else if (curSelection === "import"){
							if (d.country == "Korea Republic of" || d.country == "India") {
								return "highlighted";
							} 
						else{
							return "dotsimport";}
							};
						});
							

				circles
					.exit()
					.transition()
					.duration(1000)
					.style("opacity", 0)
					.remove();
                

				// Update the axes
				svg.select(".x.axis1")
					.transition()
					.duration(1000)
					.call(xAxis);

	            svg.select(".y.axis1")
	                .transition()
	                .duration(1000)
	                .call(yAxis);

            	// label the dots if you're only showing 10.
      			if (curSelection !== "all") {

          			// data join with a key
					var labels = svg.selectAll("text.dotlabels")
						.data(data, function(d) {
							return d.chname;
						});

					// enter and create any new ones we need. Put minimal stuff here.
					labels
						.enter()
						.append("text")
						.attr("class", "dotlabels")
						.style("opacity", 0)
						.merge(labels)
						.attr("transform", function(d) {
						 	return "translate(" + xScale(+d.import) + "," + yScale(+d.export) + ")";
						})
						.attr("dx", 5)
						.attr("dy",-2)
						.text(function(d) {return d.chname})
						.transition()
						.duration(1000)
						.delay(2000)
						.style("opacity", 1);


					
					labels.exit()
						.remove(); 


				} else {
					// if we're showing "all countries" - fade out any labels.
					svg.selectAll("text.dotlabels")
						.transition()
						.duration(1000)
						.style("opacity", 0)
						.remove();
				}

		    

			} // end of render


		});//

        function mouseoverFunc(d) {
            // console.log(d);
            tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>" + d.chname + "<br>进口: " + d3.format(".1f")(d.import) + "亿美元<br>出口:" + d3.format(".1f")(d.export) +"亿美元</p>");
        }

        function mousemoveFunc(d) {
            // console.log("events", window.event, d3.event);
            tooltip
                .style("top", (d3.event.pageY - 10) + "px" )
                .style("left", (d3.event.pageX + 10) + "px");
        }

        function mouseoutFunc(d) {
            tooltip.style("display", "none"); 

        }
    }


function main17(){
	console.log("17")
	
}