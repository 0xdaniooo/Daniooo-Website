import { sortAscending, sortDescending, sortDefault } from "./shared.js";
let collections = [
    {
        id: "coll-all",
        tag: "",
    },
    {
        id: "coll-poland",
        tag: "Poland",
    },
    {
        id: "coll-england",
        tag: "England",
    },
    {
        id: "coll-inowlodz",
        tag: "Inowlodz",
    },
    {
        id: "coll-huddersfield",
        tag: "Huddersfield",
    },
    {
        id: "coll-2019",
        tag: "2019",
    },
    {
        id: "coll-2020",
        tag: "2020",
    },
    {
        id: "coll-2021",
        tag: "2021",
    },
    {
        id: "coll-2022",
        tag: "2022",
    },
    {
        id: "coll-2023",
        tag: "2023",
    },
    {
        id: "coll-2024",
        tag: "2024",
    },
    {
        id: "coll-2025",
        tag: "2025",
    },
];
let itemObjects = [
    {
        id: "lake-reflection",
        image: "content/media/LakeReflection.webp",
        date: "July 2021",
        dateNumber: "15072021",
        location: "England, UK",
        tags: ["", "England", "2021"],
    },
    {
        id: "scenic-river",
        image: "content/media/ScenicRiver.webp",
        date: "February 2023",
        dateNumber: "25022023",
        location: "England, UK",
        tags: ["", "England", "2023"],
    },
    {
        id: "darkness",
        image: "content/media/Darkness.webp",
        date: "May 2025",
        dateNumber: "01052025",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2025"],
    },
    {
        id: "outsider",
        image: "content/media/Outsider.webp",
        date: "November 2025",
        dateNumber: "07112025",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2025"],
    },
    {
        id: "emley-road",
        image: "content/media/EmleyRoad.webp",
        date: "January 2023",
        dateNumber: "14012023",
        location: "Emley Moor, UK",
        tags: ["", "Emley", "2023"],
    },
    {
        id: "plant-closeup",
        image: "content/media/PlantCloseup.webp",
        date: "July 2021",
        dateNumber: "15072021",
        location: "England, UK",
        tags: ["", "England", "2021"],
    },
    {
        id: "aftermath",
        image: "content/media/Aftermath.webp",
        date: "July 2024",
        dateNumber: "28072024",
        location: "Inowlodz, PL",
        tags: ["", "Inowlodz", "2024"],
    },
    {
        id: "delusions",
        image: "content/media/Delusions.webp",
        date: "May 2025",
        dateNumber: "01052025",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2025"],
    },
    {
        id: "castle-hill-glow",
        image: "content/media/CastleHillGlow.webp",
        date: "October 2022",
        dateNumber: "16102022",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2022"],
    },
    {
        id: "hope",
        image: "content/media/Hope.webp",
        date: "August 2025",
        dateNumber: "22082025",
        location: "Poland, PL",
        tags: ["", "Poland", "2025"],
    },
    {
        id: "green-summer-day",
        image: "content/media/GreenSummerDay.webp",
        date: "August 2020",
        dateNumber: "27082020",
        location: "Inowlodz, PL",
        tags: ["", "Inowlodz", "2020"],
    },
    {
        id: "distant-views",
        image: "content/media/DistantViews.webp",
        date: "January 2023",
        dateNumber: "04012023",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2023"],
    },
    {
        id: "relaxation",
        image: "content/media/Relaxation.webp",
        date: "July 2024",
        dateNumber: "28072024",
        location: "Inowlodz, PL",
        tags: ["", "Inowlodz", "2024"],
    },
    {
        id: "forest-sunset",
        image: "content/media/ForestSunset.webp",
        date: "June 2023",
        dateNumber: "04062023",
        location: "England, UK",
        tags: ["", "England", "2023"],
    },
    {
        id: "colours",
        image: "content/media/Colours.webp",
        date: "July 2024",
        dateNumber: "16072024",
        location: "England, UK",
        tags: ["", "England", "2024"],
    },
    {
        id: "sunset",
        image: "content/media/Sunset.webp",
        date: "July 2021",
        dateNumber: "25072021",
        location: "England, UK",
        tags: ["", "England", "2021"],
    },
    {
        id: "kingdom",
        image: "content/media/Kingdom.webp",
        date: "August 2025",
        dateNumber: "25082025",
        location: "Krakow, PL",
        tags: ["", "Krakow", "2025"],
    },
    {
        id: "resolutions",
        image: "content/media/Resolutions.webp",
        date: "September 2025",
        dateNumber: "28092025",
        location: "England, UK",
        tags: ["", "England", "2025"],
    },
    {
        id: "stalker",
        image: "content/media/Stalker.webp",
        date: "August 2025",
        dateNumber: "19082025",
        location: "Poland, PL",
        tags: ["", "Poland", "2025"],
    },
    {
        id: "castle-hill-clouds",
        image: "content/media/CastleHillClouds.webp",
        date: "March 2023",
        dateNumber: "18032023",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2023"],
    },
    {
        id: "city-turn",
        image: "content/media/CityTurn.webp",
        date: "January 2022",
        dateNumber: "26012022",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2022"],
    },
    {
        id: "burning-sky",
        image: "content/media/BurningSky.webp",
        date: "Jaunary 2023",
        dateNumber: "08012023",
        location: "England, UK",
        tags: ["", "England", "2023"],
    },
    {
        id: "tree-silhouettes",
        image: "content/media/TreeSilhouettes.webp",
        date: "February 2023",
        dateNumber: "25022023",
        location: "England, UK",
        tags: ["", "England", "2023"],
    },
    {
        id: "serenity",
        image: "content/media/Serenity.webp",
        date: "June 2024",
        dateNumber: "21062024",
        location: "England, UK",
        tags: ["", "England", "2024"],
    },
    {
        id: "decay",
        image: "content/media/Decay.webp",
        date: "August 2025",
        dateNumber: "19082025",
        location: "Poland, PL",
        tags: ["", "Poland", "2025"],
    },
    {
        id: "snowy-gate",
        image: "content/media/SnowyGate.webp",
        date: "March 2023",
        dateNumber: "10032023",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2023"],
    },
    {
        id: "mirror",
        image: "content/media/Mirror.webp",
        date: "February 2025",
        dateNumber: "28022025",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2025"],
    },
    {
        id: "grey-day",
        image: "content/media/GreyDay.webp",
        date: "April 2023",
        dateNumber: "22042023",
        location: "England, UK",
        tags: ["", "England", "2023"],
    },
    {
        id: "rainbow",
        image: "content/media/Rainbow.webp",
        date: "December 2021",
        dateNumber: "07122021",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2021"],
    },
    {
        id: "conclusion",
        image: "content/media/Conclusion.webp",
        date: "April 2025",
        dateNumber: "28042025",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2025"],
    },
    {
        id: "summit",
        image: "content/media/Summit.webp",
        date: "August 2025",
        dateNumber: "09082025",
        location: "Lake District, UK",
        tags: ["", "Lake District", "2025"],
    },
    {
        id: "youth",
        image: "content/media/Youth.webp",
        date: "February 2019",
        dateNumber: "19022019",
        location: "Poland, PL",
        tags: ["", "Poland", "2019"],
    },
    {
        id: "unreal",
        image: "content/media/Unreal.webp",
        date: "August 2025",
        dateNumber: "09082025",
        location: "Lake District, UK",
        tags: ["", "Lake District", "2025"],
    },
    {
        id: "emley-tower",
        image: "content/media/EmleyTower.webp",
        date: "January 2023",
        dateNumber: "14012023",
        location: "Emley Moor, UK",
        tags: ["", "Emley", "2023"],
    },
    {
        id: "morning-halt",
        image: "content/media/MorningHalt.webp",
        date: "February 2025",
        dateNumber: "18022025",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2025"],
    },
    {
        id: "forest",
        image: "content/media/Forest.webp",
        date: "February 2023",
        dateNumber: "23022023",
        location: "England, UK",
        tags: ["", "England", "2023"],
    },
    {
        id: "departure",
        image: "content/media/Departure.webp",
        date: "August 2025",
        dateNumber: "27082025",
        location: "Poland, PL",
        tags: ["", "Poland", "2025"],
    },
    {
        id: "castle-hill-stairs",
        image: "content/media/CastleHillStairs.webp",
        date: "March 2022",
        dateNumber: "18032022",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2022"],
    },
    {
        id: "human-condition",
        image: "content/media/HumanCondition.webp",
        date: "February 2025",
        dateNumber: "28022025",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2025"],
    },
    {
        id: "sunset-river",
        image: "content/media/SunsetRiver.webp",
        date: "August 2020",
        dateNumber: "27082020",
        location: "Inowlodz, PL",
        tags: ["", "Inowlodz", "2020"],
    },
    {
        id: "trail",
        image: "content/media/Trail.webp",
        date: "March 2025",
        dateNumber: "19032025",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2025"],
    },
    {
        id: "snowy-bushes",
        image: "content/media/SnowyBushes.webp",
        date: "March 2023",
        dateNumber: "10032023",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2023"],
    },
    {
        id: "river",
        image: "content/media/River.webp",
        date: "August 2020",
        dateNumber: "27082020",
        location: "Inowlodz, PL",
        tags: ["", "Inowlodz", "2020"],
    },
    {
        id: "flyby",
        image: "content/media/Flyby.webp",
        date: "August 2025",
        dateNumber: "25082025",
        location: "Krakow, PL",
        tags: ["", "Krakow", "2025"],
    },
    {
        id: "night-city",
        image: "content/media/NightCity.webp",
        date: "February 2023",
        dateNumber: "11022023",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2023"],
    },
    {
        id: "orange-hue",
        image: "content/media/OrangeHue.webp",
        date: "March 2025",
        dateNumber: "19032025",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2025"],
    },
    {
        id: "baptism",
        image: "content/media/Baptism.webp",
        date: "October 2023",
        dateNumber: "26102023",
        location: "England, UK",
        tags: ["", "England", "2023"],
    },
    {
        id: "footpath",
        image: "content/media/Footpath.webp",
        date: "February 2023",
        dateNumber: "25022023",
        location: "England, UK",
        tags: ["", "England", "2023"],
    },
    {
        id: "ocean-front",
        image: "content/media/Oceanfront.webp",
        date: "August 2025",
        dateNumber: "31082025",
        location: "Blackpool, UK",
        tags: ["", "England", "2025"],
    },
    {
        id: "line",
        image: "content/media/Line.webp",
        date: "June 2024",
        dateNumber: "08062024",
        location: "England, UK",
        tags: ["", "England", "2024"],
    },
    {
        id: "snowy-mountains",
        image: "content/media/SnowyMountains.webp",
        date: "March 2023",
        dateNumber: "10032023",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2023"],
    },
    {
        id: "skyline",
        image: "content/media/Skyline.webp",
        date: "July 2021",
        dateNumber: "15072021",
        location: "England, UK",
        tags: ["", "England", "2021"],
    },
    {
        id: "baby-blue",
        image: "content/media/BabyBlue.webp",
        date: "June 2023",
        dateNumber: "15062023",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2023"],
    },
    {
        id: "castle",
        image: "content/media/Castle.webp",
        date: "August 2020",
        dateNumber: "27082020",
        location: "Inowlodz, PL",
        tags: ["", "Inowlodz", "2020"],
    },
    {
        id: "city-glow",
        image: "content/media/CityGlow.webp",
        date: "November 2022",
        dateNumber: "05112022",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2022"],
    },
    {
        id: "orange-horizon",
        image: "content/media/OrangeHorizon.webp",
        date: "February 2023",
        dateNumber: "05022023",
        location: "England, UK",
        tags: ["", "England", "2023"],
    },
    {
        id: "moon",
        image: "content/media/Moon.webp",
        date: "July 2021",
        dateNumber: "15072021",
        location: "England, UK",
        tags: ["", "England", "2021"],
    },
    {
        id: "fog-rolling-in",
        image: "content/media/FogRollingIn.webp",
        date: "March 2023",
        dateNumber: "18032023",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2023"],
    },
    {
        id: "grey-rainbow",
        image: "content/media/GreyRainbow.webp",
        date: "December 2022",
        dateNumber: "26122022",
        location: "England, UK",
        tags: ["", "England", "2022"],
    },
    {
        id: "rock-bottom",
        image: "content/media/RockBottom.webp",
        date: "June 2024",
        dateNumber: "08062024",
        location: "England, UK",
        tags: ["", "England", "2024"],
    },
    {
        id: "canal",
        image: "content/media/Canal.webp",
        date: "August 2023",
        dateNumber: "07082023",
        location: "England, UK",
        tags: ["", "England", "2023"],
    },
    {
        id: "field",
        image: "content/media/Field.webp",
        date: "March 2022",
        dateNumber: "18032022",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2022"],
    },
    {
        id: "cathedral",
        image: "content/media/Cathedral.webp",
        date: "August 2024",
        dateNumber: "02082024",
        location: "Poland, PL",
        tags: ["", "Huddersfield", "2024"],
    },
    {
        id: "tree",
        image: "content/media/Tree.webp",
        date: "January 2023",
        dateNumber: "08012023",
        location: "England, UK",
        tags: ["", "England", "2023"],
    },
    {
        id: "castle-hill",
        image: "content/media/CastleHill.webp",
        date: "February 2022",
        dateNumber: "11022022",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2022"],
    },
    {
        id: "desolation",
        image: "content/media/Desolation.webp",
        date: "July 2024",
        dateNumber: "29072024",
        location: "Inowlodz, PL",
        tags: ["", "Inowlodz", "2024"],
    },
    {
        id: "scenic-overlook",
        image: "content/media/ScenicOverlook.webp",
        date: "February 2022",
        dateNumber: "11022022",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2022"],
    },
    {
        id: "block-view",
        image: "content/media/BlockView.webp",
        date: "August 2022",
        dateNumber: "16082022",
        location: "Poland, PL",
        tags: ["", "Poland", "2022"],
    },
    {
        id: "venture",
        image: "content/media/Venture.webp",
        date: "August 2025",
        dateNumber: "01082025",
        location: "England, UK",
        tags: ["", "England", "2025"],
    },
    {
        id: "dead-forest",
        image: "content/media/DeadForest.webp",
        date: "January 2023",
        dateNumber: "08012023",
        location: "England, UK",
        tags: ["", "England", "2023"],
    },
    {
        id: "oasis",
        image: "content/media/Oasis.webp",
        date: "January 2023",
        dateNumber: "08012023",
        location: "England, UK",
        tags: ["", "England", "2023"],
    },
    {
        id: "connections",
        image: "content/media/Connections.webp",
        date: "September 2023",
        dateNumber: "23092023",
        location: "England, UK",
        tags: ["", "England", "2023"],
    },
    {
        id: "snowy-road",
        image: "content/media/SnowyRoad.webp",
        date: "March 2023",
        dateNumber: "10032023",
        location: "Huddersfield, UK",
        tags: ["", "Huddersfield", "2023"],
    },
    {
        id: "red-sky",
        image: "content/media/RedSky.webp",
        date: "February 2023",
        dateNumber: "05022023",
        location: "England, UK",
        tags: ["", "England", "2023"],
    },
    {
        id: "variation",
        image: "content/media/Variation.webp",
        date: "July 2023",
        dateNumber: "06072023",
        location: "England, UK",
        tags: ["", "England", "2023"],
    },
    {
        id: "canvas",
        image: "content/media/Canvas.webp",
        date: "October 2023",
        dateNumber: "16102023",
        location: "England, UK",
        tags: ["", "England", "2023"],
    },
    {
        id: "pink-sky",
        image: "content/media/PinkSky.webp",
        date: "July 2021",
        dateNumber: "29072021",
        location: "England, UK",
        tags: ["", "England", "2021"],
    },
];
let itemHTMLobjects;
function createHTMLitem(item) {
    let div = document.createElement('div');
    div.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'col-xl-2', 'media');
    div.setAttribute('item-id', item.id);
    let date = item.dateNumber;
    div.dataset.timestamp = `${date.slice(4)}${date.slice(2, 4)}${date.slice(0, 2)}`;
    let card = document.createElement('div');
    card.classList.add('card');
    let img = document.createElement('img');
    img.setAttribute('src', item.image);
    img.setAttribute('loading', 'lazy');
    img.setAttribute('data-bs-toggle', 'modal');
    img.setAttribute('data-bs-target', '#imageModal');
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    let text = document.createElement('p');
    text.classList.add('card-text', 'text-center');
    text.setAttribute('date', item.dateNumber);
    text.setAttribute('identifier', item.image);
    text.innerHTML = `${item.date} <span class="red-dash">|</span> ${item.location}`;
    cardBody.appendChild(text);
    card.appendChild(img);
    card.appendChild(cardBody);
    div.appendChild(card);
    return div;
}
;
function renderItems(tag) {
    let itemRoot = document.getElementById('media-root');
    itemRoot.innerHTML = "";
    let fragment = document.createDocumentFragment();
    if (tag === "") {
        itemObjects.forEach(item => {
            fragment.appendChild(createHTMLitem(item));
        });
    }
    else {
        itemObjects.forEach(item => {
            if (item.tags.includes(tag)) {
                fragment.appendChild(createHTMLitem(item));
            }
        });
    }
    itemRoot.appendChild(fragment);
    itemHTMLobjects = Array.from(itemRoot.querySelectorAll('.media'));
    let currentSort = document.getElementsByClassName('current-sort')[0];
    setCurrentDropdown(currentSort.id);
    let largeImage = document.getElementById('largeImage');
    itemHTMLobjects.forEach(function (imageItem) {
        imageItem.addEventListener("click", function () {
            let image = this.querySelector("img").src;
            largeImage.src = image;
        });
    });
}
function setCurrentDropdown(optionId) {
    let dropdownItems = document.querySelectorAll(".dropdown-item");
    dropdownItems.forEach(item => {
        item.classList.remove("current-sort");
    });
    let selectedOption = document.getElementById(optionId);
    selectedOption.classList.add("current-sort");
    if (optionId == 'sort-new-old')
        sortDescending(itemHTMLobjects);
    else if (optionId == 'sort-old-new')
        sortAscending(itemHTMLobjects);
    else if (optionId == 'sort-default')
        sortDefault(itemObjects, itemHTMLobjects);
}
let sortDescendingButton = document.getElementById('sort-new-old');
sortDescendingButton.addEventListener('click', () => {
    setCurrentDropdown('sort-new-old');
});
let sortAscendingButton = document.getElementById('sort-old-new');
sortAscendingButton.addEventListener('click', () => {
    setCurrentDropdown('sort-old-new');
});
let sortDefaultButton = document.getElementById('sort-default');
sortDefaultButton.addEventListener('click', () => {
    setCurrentDropdown('sort-default');
});
for (let i = 0; i < collections.length; i++) {
    let collDropItem = document.getElementById(collections[i].id);
    let count = itemObjects.filter(obj => obj.tags.includes(collections[i].tag)).length;
    collDropItem.textContent += ` (${count})`;
    collDropItem.addEventListener('click', () => {
        renderItems(collections[i].tag);
        let currentCollection = document.getElementsByClassName('current-collection');
        currentCollection[0].classList.remove("current-collection");
        document.getElementById(collections[i].id).classList.add("current-collection");
    });
}
renderItems("");
