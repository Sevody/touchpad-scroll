    var startY = 0;
    var checked = false;
    var direction = "down";
    var scoll = false;
    var altdown = false;
    var cancel = false;
    
   
    
    function scrollWindow(speed) {
        window.scrollBy(0, 10*speed);
    }
    

 
    
    function checkPosition(mouseY)
    {
        if(!checked)
        {
            if(startY - mouseY <= 0)
            {
                direction = "down";           
                checked = true;
            }
            
            if(startY - mouseY >= 0)
            {
                direction = "up";
                checked = true;
            }
            
        }
        
        if(direction == "down")
        {
            var speed = mouseY - startY;
            if(speed > 1)
            {
                scrollWindow(speed);
                startY = mouseY;
            }
            
            if(speed < 0)
            {
                startY = mouseY;
            }
        }
        
        if(direction == "up")
        {
            var speed = mouseY - startY;
            if(speed < -1)
            {
                scrollWindow(speed);
                startY = mouseY;
            }
            
            if(speed > 0)
            {
                startY = mouseY;
            }
        }
    }

    var mouseDown = function(e) {
        if(!e){
        e = window.event;
        }
        if(cancel) return;
        startY = e.clientY;
        checked = false;
        scoll = true;
    };
    
    var mouseMove = function(e) {
        if(!e){
        e = window.event;
        }
        
        if (!scoll) return;
        e.preventDefault();
        checkPosition(e.clientY);
    };
    
    var mouseUp = function(e) {
        if(!e){
        e = window.event;
        }
        
        if (!scoll) return; 
        scoll = false;
        startY = 0;
        checked = false;
    };
    
    var keyDown = function(e) {
        if(!e){
        e = window.event;
        }
        if(e.keyCode == "18")
        {
            altdown = true;
        }
        if(e.keyCode == "67" && altdown == true)
        {
            cancel = !cancel;
        }
    };
    
    var keyUp = function(e) {
        if(!e){
        e = window.event;
        }
        if(e.keyCode == "18")
        {
            altdown = false;
        }
        
    };
    


    var doc = window;


    doc.addEventListener('mousedown', mouseDown);
    doc.addEventListener('mousemove', mouseMove);
    doc.addEventListener('mouseup', mouseUp);    
    doc.addEventListener('keydown', keyDown);    
    doc.addEventListener('keyup', keyUp);