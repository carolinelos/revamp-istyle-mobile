document.addEventListener("DOMContentLoaded", function() {
    var trackableElement;
    var counter = document.getElementById('bottom');
    var menu = document.querySelector(".menu");
    var appMenu = document.querySelector(".app-menu-container");
    var overlay = document.querySelector(".menu-background");
    var burger = document.querySelector('#' + el);

    var touchingElement = false;
    var startTime;
    var startY = 0,
        startX = 0;
    var currentY = 0,
        currentX = 0;

    var isOpen = false;
    var isMoving = false;
    var menuHeight = 0;
    var lastY = 0;
    var lastX = 0;
    var moveY = 0; // where in the screen is the menu currently
    var dragDirection = "";
    var maxOpacity = 0.5; // in case if you want to change this, don"t forget to change the value of the opacity in the css class .menu--visible .menu-background

    var init = function(element, start, move, end) {
        trackableElement = element;

        startTime = new Date().getTime(); // start time of the touch

        addEventListeners();
    }

    var addEventListeners = function() {
        trackableElement.addEventListener("touchstart", onTouchStart, false);
        trackableElement.addEventListener("touchmove", onTouchMove, false);
        trackableElement.addEventListener("touchend", onTouchEnd, false);
		

        overlay.addEventListener("click", closeMenuOverlay, false); // I want to be able to click the overlay and immediately close the menu (in the space between the actual menu and the page behind it)
        burger.addEventListener("click", clickOpenMenu, false); // I want to be able to click the burger and immediately open the menu
    }
    

    function onTouchStart(evt) {
        startTime = new Date().getTime();
        startY = evt.touches[0].pageY;
        startX = evt.touches[0].pageX;
        if(document.querySelector(".bottom").scrollTop <= 0){
        touchingElement = true;
        touchStart(startY, startX)
		}

    }

    function onTouchMove(evt) {
        if (!touchingElement)
            return;

        currentY = evt.touches[0].pageY;
        currentX = evt.touches[0].pageX;
        const translateY = currentY - startY; // distance moved in the x axis
        const translateX = currentX - startX; // distance moved in the y axis
        
        touchMove(evt, currentY, currentX, translateY, translateX)

}

    function onTouchEnd(evt) {


        if (!touchingElement)
            return;

        touchingElement = false;
        const translateY = currentY - startY; // distance moved in the x axis
        const translateX = currentX - startX; // distance moved in the y axis

        const timeTaken = (new Date().getTime() - startTime);

        touchEnd(currentY, currentX, translateY, translateX, timeTaken)
    }


    function touchStart(startY, startX) {
        var menuOpen = document.querySelector(".menu.menu--visible");

        if (menuOpen !== null) {
            isOpen = true;
        } else {
            isOpen = false;
        }

        menu.classList.add("no-transition");
        appMenu.classList.add("no-transition");

        isMoving = true;
        menuHeight = document.querySelector(".app-menu").offsetWidth;
        lastY = startY;
        lastX = startX;

        if (isOpen) {
            moveY = 0;
        } else {
            moveY = -menuHeight;
        }

        dragDirection = "";
        menu.classList.add("menu--background-visible");
    }


    function touchMove(evt, currentY, currentX, translateY, translateX) {
        if (!dragDirection) {
            if (Math.abs(translateY) >= Math.abs(translateX)) {
                dragDirection = "vertical";
            } else {
                dragDirection = "horizontal";
            }
            
            requestAnimationFrame(updateUi); // this is what effectively does the animation (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧
        }
        if (dragDirection === "horizontal") {
            lastY = currentY;
            lastX = currentX;
        } else{  
            if (moveY + (currentY - lastY) > 0 && moveY + (currentY - lastY) > -menuHeight && evt.cancelable) {
                moveY = moveY + (currentY - lastY);
        	evt.preventDefault();
            }else if (moveY + (currentY - lastY) < 0 && moveY + (currentY - lastY) > -menuHeight){
            	evt.stopPropagation();
            }

            lastY = currentY;
            lastX = currentX;

            overlay.classList.add("no-transition");

            var percentageBeforeDif = (Math.abs(moveY) * 100) / menuHeight;
            var percentage = 100 - percentageBeforeDif;

            var newOpacity = (((maxOpacity) * percentage) / 100);

            if (overlay.style.opacity !== newOpacity.toFixed(2) && newOpacity.toFixed(1) % 1 !== 0) {
                overlay.style.opacity = newOpacity.toFixed(2);
            }

        }

    }

    function touchEnd(currentY, currentX, translateY, translateX, timeTaken) {
        isMoving = false;
        var velocity = 0.3;
      
        if (currentY === 0 && currentX === 0) {
            if (isOpen) {
                appMenu.classList.remove("no-transition");
                menu.classList.remove("no-transition");
            } else {
                menu.classList.remove("menu--background-visible");
                menu.classList.remove("no-transition");

            }
        } else {
            if (isOpen) {
                if ((translateY < (-menuHeight) / 2) || (Math.abs(translateY) / timeTaken > velocity)) {
                    closeMenu(translateY);
                    isOpen = false;
                } else {
                    openMenu();
                    isOpen = true;
                }
            } else {
                if (translateY > menuHeight / 2 || (Math.abs(translateY) / timeTaken > velocity)) {
                    openMenu();
                    isOpen = true;
                } else {
                    closeMenu(translateY);
                    isOpen = false;
                }

            }
        }

        menu.classList.remove("no-transition");
        appMenu.classList.remove("no-transition");

        overlay.classList.remove("no-transition");

        menu.classList.add("menu--animatable");
    }

    function updateUi() {

        if (isMoving) {
            var element = document.querySelector(".app-menu-container");

            element.style.transform = "translateY(" + moveY + "px)";
            element.style.webkitTransform = "translateY(" + moveY + "px)";

            requestAnimationFrame(updateUi);
        }
    }

    function closeMenu(translateY) {

        function OnTransitionEnd() {
            overlay.style.opacity = "";
            overlay.style.display = "";

            menu.classList.remove("menu--background-visible");
            menu.classList.remove("menu--animatable");
            menu.removeEventListener("transitionend", OnTransitionEnd, false);
        }

        if (translateY > 0 || !isOpen) {
            appMenu.style.transform = "";
            appMenu.style.webkitTransform = "";

            menu.classList.remove("menu--background-visible");
            menu.classList.remove("menu--visible");

            menu.addEventListener("transitionend", OnTransitionEnd, false);
        }
    }

    function openMenu() {

        appMenu.style.transform = "";
        appMenu.style.webkitTransform = "";

        menu.classList.add("menu--visible");
        menu.classList.add("menu--background-visible");

        overlay.style.opacity = "";
    }

    function closeMenuOverlay() {
        function OnTransitionEnd() {
            menu.classList.remove("menu--background-visible");
            menu.classList.remove("menu--animatable");
            overlay.style.display = "";

            menu.removeEventListener("transitionend", OnTransitionEnd);
        }

        menu.addEventListener("transitionend", OnTransitionEnd, false);

        menu.classList.remove("menu--visible");
    }

    function clickOpenMenu() {

        menu.classList.add("menu--background-visible");

        requestAnimationFrame(function() {
            setTimeout(function() {
                menu.classList.add("menu--visible");
                menu.classList.add("menu--animatable");
            }, 1)
        });
    }

    init(document.querySelector(".app-menu-container"));

});