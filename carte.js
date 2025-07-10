const systems = [
  { name: "Solaris Prime", owner: "Alliance de Théria", resources: "Hydrogène pur, Alliage rare", x: 300, y: 200 },
  { name: "Nébularia", owner: "Dynastie Varkon", resources: "Énergie noire, Cristaux Psi", x: 500, y: 400 },
];

const tooltip = document.getElementById("tooltip");

systems.forEach(sys => {
  const el = document.createElement("div");
  el.classList.add("system");
  el.style.left = sys.x + "px";
  el.style.top = sys.y + "px";

  el.addEventListener("mouseover", () => {
    tooltip.style.left = (sys.x + 30) + "px";
    tooltip.style.top = (sys.y - 10) + "px";
    tooltip.style.display = "block";
    tooltip.innerHTML = `<strong>${sys.name}</strong><br>
                         Contrôlé par : ${sys.owner}<br>
                         Ressources : ${sys.resources}`;
  });

  el.addEventListener("mouseout", () => {
    tooltip.style.display = "none";
  });

  document.body.appendChild(el);
});
