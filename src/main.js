/*
//
*/

//
const audrey = document.getElementById("audrey");

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
document.addEventListener("scroll", function (event) {
    console.log("scrollY: ",window.scrollY)

    /*
    Adjust the width of audrey to be 1/3 the value of
    `window.scrollY`. No lower than 50px, though.
    */
    if( (value = (1/3) * window.scrollY) > 50 ) {
        audrey.style.width = `${value}px`;
    }

    /*
    Adjust the height of audrey to be 1/4 the value of
    `window.scrollY`. No lower than 100px, though.
    */
    if( (value = .25 * window.scrollY) > 100 ) {
        audrey.style.height = `${value}px`;
    }
})
