const nav = document.getElementById('nav');
/*display: none;*/

nav.style.display = "none";

function dropdown() {
    if (nav.style.display == "none") {
        nav.style.display = "block";
        setTimeout(
            () => {
                nav.style.display = "none";
            }, 5000)

    } else {
        nav.style.display = "none";
        setTimeout(
            () => {
                nav.style.display = "block";
            }, 5000)
    }
    
}

