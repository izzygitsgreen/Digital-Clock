
    function showTime() {
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        var session = "AM";

        if (h >=12) {
        	h = h -12;
            session = "PM";
        }
		
        if(h == 0){
        	h = 12;
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
   
