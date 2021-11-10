

let observer = new IntersectionObserver((entries,observer) => {
    for (const kostraad1observe of entries){
        if (kostraad1observe.isIntersecting){
           const kostraad1 = document.getElementById("kostraad1")
           kostraad1.style.display = "inline-flex";
        } 
            
    };
    
    }, {threshold: 1}); // 1 = kostraad1observe skal vÃ¦re 100% i viewport for at tÃ¦lle med
    
    //Hovedprogram
    const kostraad1observe = document.getElementById("kostraad1observe");
    observer.observe(kostraad1observe);

    //Observer 2
    let observer2 = new IntersectionObserver((entries,observer) => {
        for (const kostraad2observe of entries){
            if (kostraad2observe.isIntersecting){
               const kostraad2 = document.getElementById("kostraad2")
               kostraad2.style.display = "inline-flex";
            } 
                
        };
        
        }, {threshold: 1}); 
        
        const kostraad2observe = document.getElementById("kostraad1");
        observer2.observe(kostraad2observe);

            //Observer 3
    let observer3 = new IntersectionObserver((entries,observer) => {
        for (const kostraad3observe of entries){
            if (kostraad3observe.isIntersecting){
                setTimeout
               const kostraad3 = document.getElementById("kostraad3")
               kostraad3.style.display = "inline-flex";
            } 
                
        };
        
        }, {threshold: 1}); 
        
        const kostraad3observe = document.getElementById("kostraad2");
        observer3.observe(kostraad3observe);

                  //Observer 4
    let observer4 = new IntersectionObserver((entries,observer) => {
        for (const kostraad4observe of entries){
            if (kostraad4observe.isIntersecting){
               const kostraad4 = document.getElementById("kostraad4")
               kostraad4.style.display = "inline-flex";
            } 
                
        };
        
        }, {threshold: 1}); 
        
        const kostraad4observe = document.getElementById("kostraad3");
        observer4.observe(kostraad4observe);

        
    //Observer 5
    let observer5 = new IntersectionObserver((entries,observer) => {
        for (const kostraad5observe of entries){
            if (kostraad5observe.isIntersecting){
               const kostraad5 = document.getElementById("kostraad5")
               kostraad5.style.display = "inline-flex";
            } 
                
        };
        
        }, {threshold: 1}); 
        
        const kostraad5observe = document.getElementById("kostraad4");
        observer5.observe(kostraad5observe);

    //Observer 6
    let observer6 = new IntersectionObserver((entries,observer) => {
        for (const kostraad6observe of entries){
            if (kostraad6observe.isIntersecting){
               const kostraad6 = document.getElementById("kostraad6")
               kostraad6.style.display = "inline-flex";
            } 
                
        };
        
        }, {threshold: 1}); 
        
        const kostraad6observe = document.getElementById("kostraad5");
        observer6.observe(kostraad6observe);

            //Observer 7
    let observer7 = new IntersectionObserver((entries,observer) => {
        for (const kostraad7observe of entries){
            if (kostraad7observe.isIntersecting){
               const kostraad7 = document.getElementById("kostraad7")
               kostraad7.style.display = "inline-flex";
            } 
                
        };
        
        }, {threshold: 1}); 
        
        const kostraad7observe = document.getElementById("kostraad6");
        observer7.observe(kostraad7observe);

                   //Observer 8
    let observer8 = new IntersectionObserver((entries,observer) => {
        for (const kostraad8observe of entries){
            if (kostraad8observe.isIntersecting){
               const kostraad8 = document.getElementById("kostraad8")
               kostraad8.style.display = "inline-flex";
            } 
                
        };
        
        }, {threshold: 1}); 
        
        const kostraad8observe = document.getElementById("kostraad7");
        observer8.observe(kostraad8observe);

    //Observer 9
    let observer9 = new IntersectionObserver((entries,observer) => {
        for (const kostraad9observe of entries){
            if (kostraad9observe.isIntersecting){
               const kostraad9 = document.getElementById("kostraad9")
               kostraad9.style.display = "inline-flex";
            } 
                
        };
        
        }, {threshold: 1}); 
        
        const kostraad9observe = document.getElementById("kostraad8");
        observer9.observe(kostraad9observe);

    //Observer 10
    let observer10 = new IntersectionObserver((entries,observer) => {
        for (const kostraad10observe of entries){
            if (kostraad10observe.isIntersecting){
               const kostraad10 = document.getElementById("kostraad10")
               kostraad10.style.display = "inline-flex";
            } 
                
        };
        
        }, {threshold: 1}); 
        
        const kostraad10observe = document.getElementById("kostraad9");
        observer10.observe(kostraad10observe);