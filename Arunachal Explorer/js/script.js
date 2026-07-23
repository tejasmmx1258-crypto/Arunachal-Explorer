// ================= Screens =================

const startBtn = document.getElementById("startBtn");

const welcomeScreen = document.querySelector(".welcome-screen");
const loadingScreen = document.querySelector(".loading-screen");
const mapScreen = document.querySelector(".map-screen");


// ================= Loading Elements =================

const progressBar = document.getElementById("progressBar");
const percentage = document.getElementById("percentage");
const loadingFact = document.getElementById("loadingFact");


// ================= Sidebar Elements =================

const sidebar = document.getElementById("sidebar");
const closeSidebarBtn = document.getElementById("closeSidebar");
const knowMoreBtn = document.getElementById("knowMoreBtn");

const placeTitle = document.getElementById("placeTitle");
const placeDescription = document.getElementById("placeDescription");


// ================= Arunachal Facts (loading screen) =================

const facts = [

    "🌄 Arunachal Pradesh is called the Land of the Dawn-Lit Mountains.",

    "🏯 Tawang Monastery is the largest monastery in India.",

    "🌺 Arunachal has over 500 species of orchids.",

    "🐅 Namdapha National Park is home to all four big cats.",

    "☀️ The first sunrise in India is seen in Arunachal Pradesh."

];


// ================= Place Data (sidebar content) =================

const places = {

    tawang:{
        title:"🏯 Tawang",
        description:"Tawang is famous for the magnificent Tawang Monastery, breathtaking mountains, and peaceful landscapes.",
        query:"Tawang, Arunachal Pradesh"
    },

    ziro:{
        title:"🌿 Ziro Valley",
        description:"Ziro Valley is known for its lush green fields, Apatani Tribe, and beautiful scenery.",
        query:"Ziro Valley, Arunachal Pradesh"
    },

    itanagar:{
        title:"🏙️ Itanagar",
        description:"Itanagar is the capital of Arunachal Pradesh and is home to the famous Ita Fort.",
        query:"Itanagar, Arunachal Pradesh"
    },

    bomdila:{
        title:"🏔️ Bomdila",
        description:"Bomdila offers stunning Himalayan views, monasteries, and apple orchards.",
        query:"Bomdila, Arunachal Pradesh"
    },

    namdapha:{
        title:"🐅 Namdapha National Park",
        description:"Namdapha National Park is one of India's richest biodiversity hotspots and is home to all four big cats.",
        query:"Namdapha National Park, Arunachal Pradesh"
    }

};


// ================= Start Button =================

startBtn.addEventListener("click", function () {

    welcomeScreen.classList.add("hidden");
    loadingScreen.classList.remove("hidden");   // show loading screen now

    let progress = 0;
    let factIndex = 0;

    loadingFact.textContent = facts[0];

    const loading = setInterval(function () {

        progress++;

        progressBar.style.width = progress + "%";
        percentage.textContent = progress + "%";

        if (progress % 20 === 0) {

            factIndex++;

            if (factIndex < facts.length) {

                loadingFact.textContent = facts[factIndex];

            }

        }

        if (progress >= 100) {

            clearInterval(loading);

            percentage.textContent = "Ready!";

            setTimeout(function () {

                loadingScreen.classList.add("hidden");
                mapScreen.classList.remove("hidden");

                // small delay so the "hidden" removal registers before
                // the transition classes trigger the fade/scale-in
                setTimeout(() => {

                    mapScreen.classList.add("active");

                }, 50);

            }, 800);

        }

    }, 40);

});


// ================= Pin Clicks (opens sidebar) =================

document.querySelectorAll(".pin").forEach(function (pin) {

    pin.addEventListener("click", function () {

        const place = places[this.dataset.place];

        placeTitle.textContent = place.title;
        placeDescription.textContent = place.description;

        knowMoreBtn.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(place.query);

        sidebar.classList.add("active");

    });

});


// ================= Close Sidebar =================

closeSidebarBtn.addEventListener("click", function () {

    sidebar.classList.remove("active");

});
