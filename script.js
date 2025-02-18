const dissertations = {
    generalCulture: [
        { title: "Culture Générale Dissertation 1", link: "#1" },
        { title: "Culture Générale Dissertation 2", link: "#2" }
    ],
    esh: [
        { title: "ESH Dissertation 1", link: "#3" },
        { title: "ESH Dissertation 2", link: "#4" }
    ],
    englishEssays: [
        { title: "English Essay 1", link: "#5" },
        { title: "English Essay 2", link: "#6" }
    ],
    germanEssays: [
        { title: "German Essay 1", link: "#7" },
        { title: "German Essay 2", link: "#8" }
    ],
    mission: [
        { title: "Mission de Dissertations HEC et égalité des chances", link: "#9" }
    ]
};

function showCategory(category) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `<h2>${categoryTitles[category]}</h2>`;
    dissertations[category].forEach(dissertation => {
        const div = document.createElement('div');
        div.className = 'dissertation';
        div.innerHTML = `<a href="${dissertation.link}">${dissertation.title}</a>`;
        contentDiv.appendChild(div);
    });
}

const categoryTitles = {
    generalCulture: "Culture Générale",
    esh: "Économie, Sociologie, Histoire",
    englishEssays: "Essais en Anglais",
    germanEssays: "Essais en Allemand",
    mission: "Mission de Dissertations HEC et égalité des chances"
};