window.onload = () => {
    // console.log('JS file loaded');


    //show and hide menu on scroll
    var isSafari = window.safari !== undefined;
    var isPhone = $(window).width() < 700;
    if (isSafari || isPhone) {
        console.log('safari is buggy with scroll hide feature, and phones are buggy too');
    } else {
        console.log('not safari, so you can use scroll feature');
        var before = window.pageYOffset;
        window.onscroll = () => {
            let after = window.pageYOffset;
            if (before < after) {
                $('nav').hide(300);
            } else {
                $('nav').show(300);
            }
            before = after;
        }
    }

   

    //build footer  now has skip to top
    $('.foot').append('<div class="footer-area"><div class="people"><div class="person-1"><p>Chris Herold</p><a href="mailto:Christopher.Herold@go.winona.edu">Christopher.Herold@go.winona.edu</a></div><div class="person-2"><p>Brian Klein</p><a href="mailto:Brian.Klein@go.winona.edu">Brian.Klein@go.winona.edu</a></div><div class="person-1"><p>Melissa Danielson</p><a href="mailto:Melissa.Danielson@go.winona.edu">Melissa.Danielson@go.winona.edu</a></div><div class="person-2"><p>Hunter Mahoney</p><a href="mailto:Hunter.Mahoney@go.winona.edu">Hunter.Mahoney@go.winona.edu</a></div></div><div class="course"><p>WSU Rochester</p><p>|</p><p>Web Development CS344</p><p>|</p><p>Spring 2020</p></div></div>');
    $('.foot').append('<p id="updatetime">&copy2020 "Have you tried turning it off and back on again" LLC<a id="backtotop" href="#top">Return to top</a></p>');
    
    // navbar hamburger menu influenced by w3c responsive navbar
    //build navbar
    $('nav').append('<div class="sticky-navbar"><div class="nav-links" id="myTopnav"><a href="/" class="active">Home</a><a href="about">About Us</a><a href="pros-cons">Pros & Cons</a><a href="deployment">Deployment Models</a><a href="types-service">Types of Service</a><a href="history">History</a><a href="javascript:void(0);" class="icon" id="burgerIcon" onclick="burgerTime()" alt="for drop down menu"><i class="fa fa-bars" alt="burger menu icon"></i><noscript>Icon uses javascript</noscript></a></div></div>');
   
    // function to squish links into hamburger when screen small
    const burgerTime = () => {
        var x = document.getElementById("myTopnav");
            if (x.className === "nav-links") {
            x.className += " responsive";
        } else {
            x.className = "nav-links";
        }
    }
    // add squish function (aka burgerTime) to the onclick of the burger icon 
    $('#burgerIcon').click(() => burgerTime());
};