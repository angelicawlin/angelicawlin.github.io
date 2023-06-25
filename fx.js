function toDarkMode() 
{
    var element = document.body;
    element.classList.toggle("dark-mode");
}


let observerOptions = {

    threshold: 0.25,
};

let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add("item-appear");
            return;
        }
        square.classList.remove('item-appear'); //make item disappear when out of view
    })
}, observerOptions)

observer.observe(document.querySelector('.item-wrapper'));

// function toLightMode()
// {
//     element.classList.toggle("dark-mode");
// }

// function switchBulb()
// {
//     document.getElementById("lightbulb").src="img/lightoff.png";
//     document.getElementById("lightswitch").onclick(toLightMode());
// }