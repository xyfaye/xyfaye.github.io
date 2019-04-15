var width = 800;
		var height = 400;


		var svg = d3.select("#china")
					.append("svg") 
					.attr("width", width)
					.attr("height", height);

		var china_g = svg.append("g");

		var projection = d3.geoMercator()

		var geoGenerator = d3.geoPath()
			.projection(projection);

		var thresholdScale = d3.scaleThreshold().domain([0,10,20,30,40,50]).range(["#96d2df","#fad6de","#f4b2bd","#eb959c","#dd757c"]);


		 //准备悬浮框
       var tooltip = d3.select("body")
                        .append("div")
                        .attr("class", "tooltip");

		// we use queue because we have 2 data files to load.
		queue()
		    .defer(d3.json, "china_diaoyudao.json")
		    .defer(d3.csv, "map1.csv", typeAndSet)
		    .await(loaded);

		var countryByName = d3.map();

		function typeAndSet(d){
			d.rate = +d.rate;
			countryByName.set(d.country, d)
			return d;
		}

		function getColor(d){
			var country = countryByName.get(d.properties.name);
			if(country){
				return thresholdScale(country.rate);
			}
			else{
				return "#ccc";
			}
			// console.log(country)

		}	

		function loaded(error, china, marriage){
			if(error) throw error;

			console.log(marriage);

			// thresholdScale.domain([0,10,20,30,40,50]);

			projection.fitSize([800, 400], china);

			var china = china_g.selectAll("path")
				.data(china.features);

			china.enter()
				.append("path")
				.attr("d", geoGenerator)
				.attr("fill", function(d){ return getColor(d); })


			// The d3-legend component is called here:

			var linear = thresholdScale;

			svg.append("g")
				.attr("class", "legendLinear")
				.attr("transform", "translate(20,20)");


			china_g.selectAll("path")
                .on("mouseover", mouseoverFunc) // see below...
                .on("mousemove", mousemoveFunc) // see below...
                .on("mouseout", mouseoutFunc); // see below...

		}


		 function mouseoverFunc(d) {
            // console.log(d);
            if (countryByName.get(d.properties.name)){

            tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>" + d.properties.name + "结婚率为 " + countryByName.get(d.properties.name)["rate"] +"%</p>");
            }else{
            tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>" + d.properties.name+ "数据缺失" + "</p>");
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

