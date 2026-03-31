// Hapa ndipo utakuwa unaongeza magame yako yote
const games = [
    { name: "Downhill Domination", type: "PSP", img: "https://files.catbox.moe/jlijcg.jpg", link: "#" },
    { name: "GTA San Andreas", type: "APK", img: "https://files.catbox.moe/12ca6e.jpg", link: "#" },
    { name: "eFootball™ 2024", type: "APK", img: "https://files.catbox.moe/m07l3s.jpg", link: "#" },
    { name: "Mortal Kombat 11", type: "APK", img: "https://files.catbox.moe/rwrr3c.jpg", link: "#" },
    { name: "FIFA 2026™", type: "PSP", img: "https://files.catbox.moe/vgsx20.jpg", link: "#" },
    { name: "Spider-Man", type: "APK", img: "https://via.placeholder.com/400x250?text=Spider-Man", link: "#" }
    // Ongeza mengine hapa chini...
];

function showGames(data) {
    const grid = document.getElementById('gameGrid');
    if(data.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; opacity:0.5; padding:20px;">Game halijapatikana...</div>';
        return;
    }
    grid.innerHTML = data.map(g => `
        <div class="card">
            <div>
                <img src="${g.img}" alt="${g.name}" onerror="this.src='https://via.placeholder.com/400x300?text=No+Image'">
                <div class="card-type">${g.type}</div>
                <h3>${g.name}</h3>
            </div>
            <a href="${g.link}" target="_blank" class="download-btn">Download</a>
        </div>
    `).join('');
}

function search() {
    const val = document.getElementById('searchInput').value.toLowerCase();
    const filtered = games.filter(g => g.name.toLowerCase().includes(val) || g.type.toLowerCase().includes(val));
    showGames(filtered);
}

// Hii inahakikisha games zinaonekana page ikifunguka
window.onload = () => showGames(games);
// Akili ya kufanya kadi zitokee unapo-scroll (Scroll Reveal)
function reveal() {
    var cards = document.querySelectorAll(".card");
    for (var i = 0; i < cards.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = cards[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            cards[i].classList.add("show");
        }
    }
}

// Inasikiliza kila unaposcroll
window.addEventListener("scroll", reveal);

// Inahakikisha hata games za juu zinaonekana ukifungua tu page
window.onload = () => {
    showGames(games);
    setTimeout(reveal, 200); // Inachelewa kidogo ili grid iwe imejengeka
};

