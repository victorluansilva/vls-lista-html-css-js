const themeToogle = document.getElementById("themeToogle");

themeToogle.addEventListener("click", () => {
    if (!document.body.classList.item('light')) {
        document.body.classList.add('light')
    } else {
        document.body.classList.remove('light')
    }
});