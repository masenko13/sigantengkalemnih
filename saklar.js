function saklar(params) {
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    let lampu4 = document.getElementById("lampu4");
    
    
    if (params == "on")  {
            lampu1.src = "asest/image/lampuhidup.png";
            lampu2.src = "asest/image/lampuhidup.png"; 
            lampu3.src = "asest/image/lampuhidup.png"; 
            lampu4.src = "asest/image/lampuhidup.png"; 
        
            
    
        }
    
    if (params == "off") {
            lampu1.src = "asest/image/lampumati.png";
            lampu2.src = "asest/image/lampumati.png";
            lampu3.src = "asest/image/lampumati.png";
            lampu4.src = "asest/image/lampumati.png";
          
        }
    }
        
    function saklar2(button) {
        if (button == "on") {
            lampu5.src = "asest/image/lampuhidup.png"
              lampu6.src = "asest/image/lampuhidup.png"
        } else {
            lampu5.src = "asest/image/lampumati.png";
            lampu6.src = "asest/image/lampumati.png";
        }
    }
        