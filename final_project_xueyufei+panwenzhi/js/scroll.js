var vis1 = d3.select("#circle1");
function show1(){
  vis1.style("display", "inline-block");
}
function disappear1(){
  vis1.style("display", "none");
}

var vis2 = d3.select("#circle2");
function show2(){
  vis2.style("display", "inline-block");
}
function disappear2(){
  vis2.style("display", "none");
}

var vis3 = d3.select("#circle3");
function show3(){
  vis3.style("display", "inline-block");
}
function disappear3(){
  vis3.style("display", "none");
}

var vis4 = d3.select("#map1");
function show4(){
  vis4.style("display", "inline-block");
}
function disappear4(){
  vis4.style("display", "none");
}

var vis5 = d3.select("#map2");
function show5(){
  vis5.style("display", "inline-block");
}
function disappear5(){
  vis5.style("display", "none");
}

var vis6 = d3.select("#map3");
function show6(){
  vis6.style("display", "inline-block");
}
function disappear6(){
  vis6.style("display", "none");
}

var vis7 = d3.select("#small");
function show7(){
  vis7.style("display", "inline-block");
}
function disappear7(){
  vis7.style("display", "none");
}

var vis8 = d3.select("#highlight1");
function show8(){
  vis8.style("display", "inline-block");
}
function disappear8(){
  vis8.style("display", "none");
}

var vis9 = d3.select("#highlight2");
function show9(){
  vis9.style("display", "inline-block");
}
function disappear9(){
  vis9.style("display", "none");
}

var vis10 = d3.select("#highlight3");
function show10(){
  vis10.style("display", "inline-block");
}
function disappear10(){
  vis10.style("display", "none");
}

var vis11 = d3.select("#highlight4");
function show11(){
  vis11.style("display", "inline-block");
}
function disappear11(){
  vis11.style("display", "none");
}

var vis12 = d3.select("#highlight5");
function show12(){
  vis12.style("display", "inline-block");
}
function disappear12(){
  vis12.style("display", "none");
}

var vis13 = d3.select("#highlight6");
function show13(){
  vis13.style("display", "inline-block");
}
function disappear13(){
  vis13.style("display", "none");
}

var vis14 = d3.select("#bar");
function show14(){
  vis14.style("display", "inline-block");
}
function disappear14(){
  vis14.style("display", "none");
}

var vis15 = d3.select("#scatter");
function show15(){
  vis15.style("display", "inline-block");
}
function disappear15(){
  vis15.style("display", "none");
}




 var a=0,b=0,c=0,d=0,e=0,f=0;

$(window).scroll(function(){
	// All functions triggered by scroll written here:

	var windowTop = $(window).scrollTop();
	console.log(section);


    if(windowTop < (front1+200)){
		 disappear1()
		 disappear2()
		  disappear3()
		  disappear4()
		  disappear5()
		  disappear6()
		  disappear7()
		  disappear8()
		  disappear9()
		  disappear10()
		  disappear11()
		  disappear12()
		  disappear13()
		  disappear14()
		  disappear15()

	}

	if(windowTop >= (front1+200) && windowTop < front2 && section[0]==0){
		main0();
		changeSection(0)
		show1()
		 disappear2()
		  disappear3()
		  disappear4()
		  disappear5()
		  disappear6()
		  disappear7()
		  disappear8()
		  disappear9()
		  disappear10()
		  disappear11()
		  disappear12()
		  disappear13()
		  disappear14()
		   disappear15()
	}



	

	if(windowTop >= front2 && windowTop < front3 && section[1]==0){
		main1();
		changeSection(1)
		show2()
		 disappear1()
		  disappear3()
		  disappear4()
		  disappear5()
		  disappear6()
		  disappear7()
		  disappear8()
		  disappear9()
		  disappear10()
		  disappear11()
		  disappear12()
		  disappear13()
		  disappear14()
		  disappear15()

	}
	if(windowTop >= front3 && windowTop < front4 && section[2]==0){
		main2();
		changeSection(2)
		show3()
		 disappear1()
		  disappear2()
		  disappear4()
		  disappear5()
		  disappear6()
		  disappear7()
		  disappear8()
		  disappear9()
		  disappear10()
		  disappear11()
		  disappear12()
		  disappear13()
		  disappear14()
		   disappear15()

	}

	if(windowTop >= front4 && windowTop < front5 && section[3]==0){
		changeSection(3)
		  main3();
		  disappear1()
		  disappear2()
		  disappear3()
		  disappear4()
		  disappear5()
		  disappear6()
		  disappear7()
		  disappear8()
		  disappear9()
		  disappear10()
		  disappear11()
		  disappear12()
		  disappear13()
		  disappear14()
		  disappear15()

	}

	if(windowTop >= front5+100 && windowTop < front6 && section[4]==0){
		if(a==0){
		main4();
		changeSection(4)
		show4()
		 disappear1()
		  disappear3()
		  disappear2()
		  disappear5()
		  disappear6()
		  disappear7()
		  disappear8()
		  disappear9()
		  disappear10()
		  disappear11()
		  disappear12()
		  disappear13()
		  disappear14()
		   disappear15()
		   a=1}
		   else{
		   	changeSection(4)
		show4()
		 disappear1()
		  disappear3()
		  disappear2()
		  disappear5()
		  disappear6()
		  disappear7()
		  disappear8()
		  disappear9()
		  disappear10()
		  disappear11()
		  disappear12()
		  disappear13()
		  disappear14()
		   disappear15()
		   }

	}

	if(windowTop >= front6 && windowTop < front7 && section[5]==0){
		if(b==0){
		main5();
		changeSection(5)
		show5()
		 disappear1()
		 disappear2()
		  disappear3()
		  disappear4()
		  disappear6()
		  disappear7()
		  disappear8()
		  disappear9()
		  disappear10()
		  disappear11()
		  disappear12()
		  disappear13()
		  disappear14()
		  disappear15()
		   b=1}
		   else{
		   	changeSection(5)
		show5()
		 disappear1()
		 disappear2()
		  disappear3()
		  disappear4()
		  disappear6()
		  disappear7()
		  disappear8()
		  disappear9()
		  disappear10()
		  disappear11()
		  disappear12()
		  disappear13()
		  disappear14()
		  disappear15()
		}
	}

	if(windowTop >= front7 && windowTop < front8 && section[6]==0){
		if(c==0){
		main6();
		changeSection(6)
		show6()
		 disappear1()
		 disappear2()
		  disappear3()
		  disappear4()
		  disappear5()
		  disappear7()
		  disappear8()
		  disappear9()
		  disappear10()
		  disappear11()
		  disappear12()
		  disappear13()
		  disappear14()
		  disappear15()
		  c=1}
		   else{
		   	changeSection(6)
		show6()
		 disappear1()
		 disappear2()
		  disappear3()
		  disappear4()
		  disappear5()
		  disappear7()
		  disappear8()
		  disappear9()
		  disappear10()
		  disappear11()
		  disappear12()
		  disappear13()
		  disappear14()
		  disappear15()
		}
	}

    if(windowTop >= front8 && windowTop < front9 && section[7]==0){
    	if(d==0){
		main7();
		changeSection(7)
		show7()
		 disappear1()
		 disappear2()
		  disappear3()
		  disappear4()
		  disappear5()
		  disappear6()
		  disappear8()
		  disappear9()
		  disappear10()
		  disappear11()
		  disappear12()
		  disappear13()
		  disappear14()
		  disappear15()
		   d=1}
		   else{
		   	changeSection(7)
		show7()
		 disappear1()
		 disappear2()
		  disappear3()
		  disappear4()
		  disappear5()
		  disappear6()
		  disappear8()
		  disappear9()
		  disappear10()
		  disappear11()
		  disappear12()
		  disappear13()
		  disappear14()
		  disappear15()
		}


	}


if(windowTop >= front9 && windowTop < front10 && section[8]==0){
		changeSection(8)
		  main8();
		  disappear1()
		  disappear2()
		  disappear3()
		  disappear4()
		  disappear5()
		  disappear6()
		  disappear7()
		  disappear8()
		  disappear9()
		  disappear10()
		  disappear11()
		  disappear12()
		  disappear13()
		  disappear14()
		  disappear15()

	}



	if(windowTop >= front10 && windowTop < front11 && section[9]==0){
		main9();
		changeSection(9)
		show8()
		 disappear1()
		 disappear2()
		  disappear3()
		  disappear4()
		  disappear5()
		  disappear6()
		  disappear7()
		  disappear9()
		  disappear10()
		  disappear11()
		  disappear12()
		  disappear13()
		  disappear14()
		  disappear15()


	}

	if(windowTop >= front11 && windowTop < front12 && section[10]==0){
		main10();
		changeSection(10)
		show9()
		 disappear1()
		 disappear2()
		  disappear3()
		  disappear4()
		  disappear5()
		  disappear6()
		  disappear7()
		  disappear8()
		  disappear10()
		  disappear11()
		  disappear12()
		  disappear13()
		  disappear14()
		   disappear15()


	}

	if(windowTop >= front12 && windowTop < front13 && section[11]==0){
		main11();
		changeSection(11)
		show10()
		 disappear1()
		 disappear2()
		  disappear3()
		  disappear4()
		  disappear5()
		  disappear6()
		  disappear7()
		  disappear8()
		  disappear9()
		  disappear11()
		  disappear12()
		  disappear13()
		  disappear14()
		   disappear15()


	}

	if(windowTop >= front13 && windowTop < front14 && section[12]==0){
		main12();
		changeSection(12)
		show11()
		 disappear1()
		 disappear2()
		  disappear3()
		  disappear4()
		  disappear5()
		  disappear6()
		  disappear7()
		  disappear8()
		  disappear9()
		  disappear10()
		  disappear12()
		  disappear13()
		  disappear14()
		  disappear15()


	}

	if(windowTop >= front14 && windowTop < front15 && section[13]==0){
		main13();
		changeSection(13)
		show12()
		 disappear1()
		 disappear2()
		  disappear3()
		  disappear4()
		  disappear5()
		  disappear6()
		  disappear7()
		  disappear8()
		  disappear9()
		  disappear10()
		  disappear11()
		  disappear13()
		  disappear14()
		   disappear15()


	}

    if(windowTop >= front15 && windowTop < front16 && section[14]==0){
		main14();
		changeSection(14)
		show13()
		 disappear1()
		 disappear2()
		  disappear3()
		  disappear4()
		  disappear5()
		  disappear6()
		  disappear7()
		  disappear8()
		  disappear9()
		  disappear10()
		  disappear11()
		  disappear12()
		  disappear14()
		  disappear15()

	}

	if(windowTop >= front16 && windowTop < front17 && section[15]==0){
		if(e==0){
		main15();
		changeSection(15)
		show14()
		 disappear1()
		 disappear2()
		  disappear3()
		  disappear4()
		  disappear5()
		  disappear6()
		  disappear7()
		  disappear8()
		  disappear9()
		  disappear10()
		  disappear11()
		  disappear12()
		  disappear13()
		   disappear15()
		   	e=1;
		}else{
			changeSection(15)
		show14()
		 disappear1()
		 disappear2()
		  disappear3()
		  disappear4()
		  disappear5()
		  disappear6()
		  disappear7()
		  disappear8()
		  disappear9()
		  disappear10()
		  disappear11()
		  disappear12()
		  disappear13()
		   disappear15()
		}
	}

	if(windowTop >= front17 && windowTop < front18 &&section[16]==0){
		if(f==0){
		main16();
		changeSection(16)
		show15()
		 disappear1()
		 disappear2()
		  disappear3()
		  disappear4()
		  disappear5()
		  disappear6()
		  disappear7()
		  disappear8()
		  disappear9()
		  disappear10()
		  disappear11()
		  disappear12()
		  disappear13()
		  disappear14()
		  		f=1;
		}else{
			changeSection(16)
		show15()
		 disappear1()
		 disappear2()
		  disappear3()
		  disappear4()
		  disappear5()
		  disappear6()
		  disappear7()
		  disappear8()
		  disappear9()
		  disappear10()
		  disappear11()
		  disappear12()
		  disappear13()
		  disappear14()
		}
	}

	if(windowTop >= front18 &&  section[17]==0){
		main17();
		changeSection(17)
		 disappear1()
		 disappear2()
		  disappear3()
		  disappear4()
		  disappear5()
		  disappear6()
		  disappear7()
		  disappear8()
		  disappear9()
		  disappear10()
		  disappear11()
		  disappear12()
		  disappear13()
		  disappear14()
		  disappear15()
		  		
	}
})


