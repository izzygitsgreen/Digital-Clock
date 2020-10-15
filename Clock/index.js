
    function showTime() {
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        var session = "AM";

        //To get rid of the 0 in front of the time
        if (h ==0) {
        	h = 12;
        }
		
		//To get the clock to show in 12 hour intervals and not 24
        if(h > 12){
        	h = h - 12;
        	sesion = "PM";
        }

      h = (h < 10) ? "0" + h : h;
      m = (m < 10) ? "0" + m : m;
      s = (s < 10) ? "0" + s : s;

        var time = h + ":" + m + ":" + s + " " + session;
        document.getElementById("MyClockDisplay").innerText = time; //does not work in Firefox
        document.getElementById("MyClockDisplay").textContent = time; //does not work in IE
     
     	setTimeout(showTime, 1000);
    }

    //Now call the function - this method calls the function in 1 second intervals - (call the function first to get it to show up in the browser immediately and not delay one second)
    
    showTime();
   
