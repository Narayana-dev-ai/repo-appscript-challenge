const planets = [
    {
        id: "mercury",
        distance: 80,
        speed: 0.24
    },
    {
        id: "venus",
        distance: 110,
        speed: 0.615
    },
    {
        id: "earth",
        distance: 140,
        speed: 1
    },
    {
        id: "mars",
        distance: 170,
        speed: 0.53
    },
    {
        id: "jupiter",
        distance: 220,
        speed: 0.084
    },
    {
        id: "saturn",
        distance: 260,
        speed: 0.034
    },
    {
        id: "uranus",
        distance: 300,
        speed: 0.012
    },
    {
        id: "neptune",
        distance: 340,
        speed: 1.006
    }
];
const updatePositions = ()=>{
    const time = Date.now() * 0.0001;
    planets.forEach((planet)=>{
        const planetElement = document.getElementById(planet.id);
        const angle = time * planet.speed; // Calculate the angle based on time and speed
        const x = planet.distance * Math.cos(angle) + 300; // 300 is half the width of the solar system
        const y = planet.distance * Math.sin(angle) + 300; // 300 is half the height of the solar system
        planetElement.style.left = `${x}px`;
        planetElement.style.top = `${y}px`;
    });
    requestAnimationFrame(updatePositions);
};
updatePositions();

//# sourceMappingURL=index.b356bafb.js.map
