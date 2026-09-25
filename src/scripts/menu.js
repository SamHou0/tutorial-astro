const menu = document.querySelector(".menu");
console.log(menu)

menu?.addEventListener("click", () => {
    const isExpanded =
        menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", `${!isExpanded}`);
});