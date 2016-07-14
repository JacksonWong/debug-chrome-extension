 window.debug = function (){     
        if(arguments.length === 0){
            console.log("missing debug object");
            return;
        } else if(arguments.length === 1){
            console.group();
            console.dir(arguments[0]);
            console.trace("call stack");
            console.groupEnd();
        } else if(arguments.length === 2){
            console.group(arguments[1]);
            console.dir(arguments[0]);
            console.trace("call stack");
            console.groupEnd();
        } else if(arguments.length > 2){
            console.group(arguments[arguments.length-1]);
            for(var i = 0; i < arguments.length-1; i++){
                console.dir(arguments[i]);
            }
            console.trace("call stack");
            console.groupEnd();
        }         
    };