document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll(".lista li a");

    listItems.forEach(item => {
        item.addEventListener("click", (event) => {

            const lista = item.parentElement;
            if (lista.classList.contains("selected")) {
                lista.classList.remove("selected");
            } else {
                listItems.forEach(el => el.parentElement.classList.remove("selected"));
                lista.classList.add("selected");
            }
        });
    });
});
