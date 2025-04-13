function changetext(){
    const texts=["a Tech Enthusiast", "CSE Student", "Web Developer"];
    const typingspeed=40;
    const deletingspeed=30;
    const pause=1000;
    const selector= document.querySelector('.about');

    var textindex=0;
    var charindex=0;
    var isdeleting=false;

    function type(){
        const currenttext=texts[textindex];

        if(!isdeleting && charindex<currenttext.length){
            selector.textContent +=currenttext[charindex];
            charindex++;
            setTimeout(type,typingspeed);
        }

        else if(isdeleting && charindex > 0){
            selector.textContent=currenttext.substring(0,charindex-1);
            charindex--;
            setTimeout(type,deletingspeed);

        }

        else{
            isdeleting=!isdeleting;
            if(!isdeleting){
                textindex=(textindex+1)%texts.length;
                
            }
            setTimeout(type,pause);
        }
    }

    type();
}

changetext();

function slideNav(){
    document.getElementById("small-nav").style.left="0";

}

function cancelslideNav(){
    document.getElementById("small-nav").style.left="-60%";
}


document.addEventListener("DOMContentLoaded", function() {
    ScrollReveal().reveal(".skill", {
        origin: 'left',
        distance: '100px',
        delay: 100,
        duration: 1000,
        beforeReveal: function(el) {
            const progressBar = el.querySelector(".progress");
            const skillLevel = progressBar.getAttribute("data-progress");
         
            setTimeout(function() {
                progressBar.style.width = skillLevel + '%';
                
            }, 500);
        }
    });
});

document.addEventListener("DOMContentLoaded",function(){
    ScrollReveal().reveal('#services-code', {origin:'right',delay:500,duration:1000,distance:'100px'})
})

document.addEventListener("DOMContentLoaded",function(){
    ScrollReveal().reveal('#services-hack', {origin:'right',delay:500,duration:1500,distance:'100px'})
})


document.getElementById("home").onclick=function(){
    const element=document.getElementById("My-profile-img");
    element.scrollIntoView({behavior:'smooth'});
}

document.getElementById("home-side").onclick=function(){
    const element=document.getElementById("My-profile-img");
    element.scrollIntoView({behavior:'smooth'});
}

document.getElementById("about-nav").onclick=function(){
    const element=document.getElementById("About-me-skills");
    element.scrollIntoView({behavior:'smooth'});
}


document.getElementById("about-nav-side").onclick=function(){
    const element=document.getElementById("About-me-skills");
    element.scrollIntoView({behavior:'smooth'});
}

document.addEventListener("DOMContentLoaded",function(){
    ScrollReveal().reveal("#web-portfolio-1",{origin:'bottom', delay:500,duration:1000,distance:'300px'});
})

document.addEventListener("DOMContentLoaded",function(){
    ScrollReveal().reveal("#web-portfolio-2",{origin:'bottom', delay:500,duration:1500,distance:'300px'});
})

document.addEventListener("DOMContentLoaded",function(){
    ScrollReveal().reveal("#web-portfolio-3",{origin:'bottom', delay:500,duration:1800,distance:'400px'});
})

document.addEventListener("DOMContentLoaded",function(){
    ScrollReveal().reveal("#web-portfolio-4",{origin:'bottom', delay:500,duration:1900,distance:'400px'});
})

document.addEventListener("DOMContentLoaded", function(){
    ScrollReveal().reveal("#school",{origin:'right',delay:500,duration:1000,distance:'100px'});
})

document.addEventListener("DOMContentLoaded",function(){
    ScrollReveal().reveal("#college", {origin:'right',delay:600,duration:1500,distance:'100px'});
})

document.getElementById("contact").onclick=function(){
    const contact=document.getElementById("Contact-me");
    contact.scrollIntoView({behavior:'smooth'});
}

document.getElementById("contact-side").onclick=function(){
    const contact=document.getElementById("Contact-me");
    contact.scrollIntoView({behavior:'smooth'});
}

document.getElementById("Portfolio-nav").onclick=function(){

    const portfolio=document.getElementById("Portfolio");
    portfolio.scrollIntoView({behavior:'smooth'})
}

document.getElementById("Portfolio-nav-side").onclick=function(){

    const portfolio=document.getElementById("Portfolio");
    portfolio.scrollIntoView({behavior:'smooth'})
}