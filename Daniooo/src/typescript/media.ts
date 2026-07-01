import { setupCollections, setupSorting } from "./shared.js";

// Represents media item
export interface Media {
    id: string,
    image: string,
    date: string,
    dateNumber: string,
    location: string,
    tags: string[],
}

// Contains all the items to used for dynamic rendering
let itemObjects: Media[] = [
    {
        id: "darkness",
        image: "/content/media/Darkness.webp",
        date: "May 2025",
        dateNumber: "01052025",
        location: "Huddersfield, UK",
        tags: ["Huddersfield", "2025"],
    },
    {
        id: "urban",
        image: "/content/media/Urban.webp",
        date: "Apr 2026",
        dateNumber: "24042026",
        location: "England, UK",
        tags: ["England", "2026"],
    },
    {
        id: "aftermath",
        image: "/content/media/Aftermath.webp",
        date: "Jul 2024",
        dateNumber: "28072024",
        location: "Inowłódz, PL",
        tags: ["Inowłódz", "2024"],
    },
    {
        id: "delusions",
        image: "/content/media/Delusions.webp",
        date: "May 2025",
        dateNumber: "01052025",
        location: "Huddersfield, UK",
        tags: ["Huddersfield", "2025"],
    },
    {
        id: "hope",
        image: "/content/media/Hope.webp",
        date: "Aug 2025",
        dateNumber: "22082025",
        location: "Poland, PL",
        tags: ["Poland", "2025"],
    },
    {
        id: "sharp",
        image: "/content/media/Sharp.webp",
        date: "Jun 2026",
        dateNumber: "09062026",
        location: "England, UK",
        tags: ["England", "2026"],
    },
    {
        id: "relaxation",
        image: "/content/media/Relaxation.webp",
        date: "Jul 2024",
        dateNumber: "28072024",
        location: "Inowłódz, PL",
        tags: ["Inowłódz", "2024"],
    },
    {
        id: "colours",
        image: "/content/media/Colours.webp",
        date: "Jul 2024",
        dateNumber: "16072024",
        location: "England, UK",
        tags: ["England", "2024"],
    },
    {
        id: "kingdom",
        image: "/content/media/Kingdom.webp",
        date: "Aug 2025",
        dateNumber: "25082025",
        location: "Kraków, PL",
        tags: ["Kraków", "2025"],
    },
    {
        id: "stalker",
        image: "/content/media/Stalker.webp",
        date: "Aug 2025",
        dateNumber: "19082025",
        location: "Poland, PL",
        tags: ["Poland", "2025"],
    },
    {
        id: "lake-reflection",
        image: "/content/media/LakeReflection.webp",
        date: "Jul 2021",
        dateNumber: "15072021",
        location: "England, UK",
        tags: ["England", "2021"],
    },
    {
        id: "serenity",
        image: "/content/media/Serenity.webp",
        date: "Jun 2024",
        dateNumber: "21062024",
        location: "England, UK",
        tags: ["England", "2024"],
    },
    {
        id: "decay",
        image: "/content/media/Decay.webp",
        date: "Aug 2025",
        dateNumber: "19082025",
        location: "Poland, PL",
        tags: ["Poland", "2025"],
    },
    {
        id: "sunset",
        image: "/content/media/Sunset.webp",
        date: "Jul 2021",
        dateNumber: "25072021",
        location: "England, UK",
        tags: ["England", "2021"],
    },
    {
        id: "scenic-river",
        image: "/content/media/ScenicRiver.webp",
        date: "Feb 2023",
        dateNumber: "25022023",
        location: "England, UK",
        tags: ["England", "2023"],
    },
    {
        id: "civilisation",
        image: "/content/media/Civilisation.webp",
        date: "Feb 2026",
        dateNumber: "24022026",
        location: "Leeds, UK",
        tags: ["Leeds", "2026"],
    },
    {
        id: "cathedral",
        image: "/content/media/Cathedral.webp",
        date: "Aug 2024",
        dateNumber: "02082024",
        location: "Poland, PL",
        tags: ["Poland", "2024"],
    },
    {
        id: "desolation",
        image: "/content/media/Desolation.webp",
        date: "Jul 2024",
        dateNumber: "29072024",
        location: "Inowłódz, PL",
        tags: ["Inowłódz", "2024"],
    },
    {
        id: "freedom",
        image: "/content/media/Freedom.webp",
        date: "Jun 2025",
        dateNumber: "28062025",
        location: "England, UK",
        tags: ["England", "2025"],
    },
    {
        id: "link",
        image: "/content/media/Link.webp",
        date: "Apr 2026",
        dateNumber: "25042026",
        location: "Huddersfield, UK",
        tags: ["Huddersfield", "2026"],
    },
    {
        id: "mirror",
        image: "/content/media/Mirror.webp",
        date: "Feb 2025",
        dateNumber: "28022025",
        location: "Huddersfield, UK",
        tags: ["Huddersfield", "2025"],
    },
    {
        id: "conclusion",
        image: "/content/media/Conclusion.webp",
        date: "Apr 2025",
        dateNumber: "28042025",
        location: "Huddersfield, UK",
        tags: ["Huddersfield", "2025"],
    },
    {
        id: "summit",
        image: "/content/media/Summit.webp",
        date: "Aug 2025",
        dateNumber: "09082025",
        location: "Lake District, UK",
        tags: ["Lake District", "2025"],
    },
    {
        id: "youth",
        image: "/content/media/Youth.webp",
        date: "Feb 2019",
        dateNumber: "19022019",
        location: "Poland, PL",
        tags: ["Poland", "2019"],
    },
    {
        id: "unreal",
        image: "/content/media/Unreal.webp",
        date: "Aug 2025",
        dateNumber: "09082025",
        location: "Lake District, UK",
        tags: ["Lake District", "2025"],
    },
    {
        id: "morning-halt",
        image: "/content/media/MorningHalt.webp",
        date: "Feb 2025",
        dateNumber: "18022025",
        location: "Huddersfield, UK",
        tags: ["Huddersfield", "2025"],
    },
    {
        id: "departure",
        image: "/content/media/Departure.webp",
        date: "Aug 2025",
        dateNumber: "27082025",
        location: "Poland, PL",
        tags: ["Poland", "2025"],
    },
    {
        id: "castle-hill-stairs",
        image: "/content/media/CastleHillStairs.webp",
        date: "Mar 2022",
        dateNumber: "18032022",
        location: "Huddersfield, UK",
        tags: ["Huddersfield", "2022"],
    },
    {
        id: "human-condition",
        image: "/content/media/HumanCondition.webp",
        date: "Feb 2025",
        dateNumber: "28022025",
        location: "Huddersfield, UK",
        tags: ["Huddersfield", "2025"],
    },
    {
        id: "trail",
        image: "/content/media/Trail.webp",
        date: "Mar 2025",
        dateNumber: "19032025",
        location: "Huddersfield, UK",
        tags: ["Huddersfield", "2025"],
    },
    {
        id: "flyby",
        image: "/content/media/Flyby.webp",
        date: "Aug 2025",
        dateNumber: "25082025",
        location: "Kraków, PL",
        tags: ["Kraków", "2025"],
    },
    {
        id: "orange-hue",
        image: "/content/media/OrangeHue.webp",
        date: "Mar 2025",
        dateNumber: "19032025",
        location: "Huddersfield, UK",
        tags: ["Huddersfield", "2025"],
    },
    {
        id: "ocean-front",
        image: "/content/media/Oceanfront.webp",
        date: "Aug 2025",
        dateNumber: "31082025",
        location: "Blackpool, UK",
        tags: ["England", "2025"],
    },
    {
        id: "outsider",
        image: "/content/media/Outsider.webp",
        date: "Nov 2025",
        dateNumber: "07112025",
        location: "Huddersfield, UK",
        tags: ["Huddersfield", "2025"],
    },
    {
        id: "castle-hill-glow",
        image: "/content/media/CastleHillGlow.webp",
        date: "Oct 2022",
        dateNumber: "16102022",
        location: "Huddersfield, UK",
        tags: ["Huddersfield", "2022"],
    },
    {
        id: "signals",
        image: "/content/media/Signals.webp",
        date: "Dec 2025",
        dateNumber: "18122025",
        location: "England, UK",
        tags: ["England", "2025"],
    },
    {
        id: "forest-sunset",
        image: "/content/media/ForestSunset.webp",
        date: "Jun 2023",
        dateNumber: "04062023",
        location: "England, UK",
        tags: ["England", "2023"],
    },
    {
        id: "resolutions",
        image: "/content/media/Resolutions.webp",
        date: "Sept 2025",
        dateNumber: "28092025",
        location: "England, UK",
        tags: ["England", "2025"],
    },
    {
        id: "green-summer-day",
        image: "/content/media/GreenSummerDay.webp",
        date: "Aug 2020",
        dateNumber: "27082020",
        location: "Inowłódz, PL",
        tags: ["Inowłódz", "2020"],
    },
    {
        id: "distant-views",
        image: "/content/media/DistantViews.webp",
        date: "Jan 2023",
        dateNumber: "04012023",
        location: "Huddersfield, UK",
        tags: ["Huddersfield", "2023"],
    },
    {
        id: "castle-hill-clouds",
        image: "/content/media/CastleHillClouds.webp",
        date: "Mar 2023",
        dateNumber: "18032023",
        location: "Huddersfield, UK",
        tags: ["Huddersfield", "2023"],
    },
    {
        id: "city-turn",
        image: "/content/media/CityTurn.webp",
        date: "Jan 2022",
        dateNumber: "26012022",
        location: "Huddersfield, UK",
        tags: ["Huddersfield", "2022"],
    },
    {
        id: "burning-sky",
        image: "/content/media/BurningSky.webp",
        date: "Jaunary 2023",
        dateNumber: "08012023",
        location: "England, UK",
        tags: ["England", "2023"],
    },
    {
        id: "tree-silhouettes",
        image: "/content/media/TreeSilhouettes.webp",
        date: "Feb 2023",
        dateNumber: "25022023",
        location: "England, UK",
        tags: ["England", "2023"],
    },
    {
        id: "snowy-gate",
        image: "/content/media/SnowyGate.webp",
        date: "Mar 2023",
        dateNumber: "10032023",
        location: "Huddersfield, UK",
        tags: ["Huddersfield", "2023"],
    },
    {
        id: "grey-day",
        image: "/content/media/GreyDay.webp",
        date: "Apr 2023",
        dateNumber: "22042023",
        location: "England, UK",
        tags: ["England", "2023"],
    },
    {
        id: "rainbow",
        image: "/content/media/Rainbow.webp",
        date: "Dec 2021",
        dateNumber: "07122021",
        location: "Huddersfield, UK",
        tags: ["Huddersfield", "2021"],
    },
    {
        id: "emley-road",
        image: "/content/media/EmleyRoad.webp",
        date: "Jan 2023",
        dateNumber: "14012023",
        location: "Emley Moor, UK",
        tags: ["Emley", "2023"],
    },
    {
        id: "plant-closeup",
        image: "/content/media/PlantCloseup.webp",
        date: "Jul 2021",
        dateNumber: "15072021",
        location: "England, UK",
        tags: ["England", "2021"],
    },
    {
        id: "emley-tower",
        image: "/content/media/EmleyTower.webp",
        date: "Jan 2023",
        dateNumber: "14012023",
        location: "Emley Moor, UK",
        tags: ["Emley", "2023"],
    },
    {
        id: "forest",
        image: "/content/media/Forest.webp",
        date: "Feb 2023",
        dateNumber: "23022023",
        location: "England, UK",
        tags: ["England", "2023"],
    },
    {
        id: "sunset-river",
        image: "/content/media/SunsetRiver.webp",
        date: "Aug 2020",
        dateNumber: "27082020",
        location: "Inowłódz, PL",
        tags: ["Inowłódz", "2020"],
    },
    {
        id: "snowy-bushes",
        image: "/content/media/SnowyBushes.webp",
        date: "Mar 2023",
        dateNumber: "10032023",
        location: "Huddersfield, UK",
        tags: ["Huddersfield", "2023"],
    },
    {
        id: "river",
        image: "/content/media/River.webp",
        date: "Aug 2020",
        dateNumber: "27082020",
        location: "Inowłódz, PL",
        tags: ["Inowłódz", "2020"],
    },
    {
        id: "baptism",
        image: "/content/media/Baptism.webp",
        date: "Oct 2023",
        dateNumber: "26102023",
        location: "England, UK",
        tags: ["England", "2023"],
    },
    {
        id: "footpath",
        image: "/content/media/Footpath.webp",
        date: "Feb 2023",
        dateNumber: "25022023",
        location: "England, UK",
        tags: ["England", "2023"],
    },
    {
        id: "line",
        image: "/content/media/Line.webp",
        date: "Jun 2024",
        dateNumber: "08062024",
        location: "England, UK",
        tags: ["England", "2024"],
    },
    {
        id: "snowy-mountains",
        image: "/content/media/SnowyMountains.webp",
        date: "Mar 2023",
        dateNumber: "10032023",
        location: "Huddersfield, UK",
        tags: ["Huddersfield", "2023"],
    },
    {
        id: "skyline",
        image: "/content/media/Skyline.webp",
        date: "Jul 2021",
        dateNumber: "15072021",
        location: "England, UK",
        tags: ["England", "2021"],
    },
    {
        id: "baby-blue",
        image: "/content/media/BabyBlue.webp",
        date: "Jun 2023",
        dateNumber: "15062023",
        location: "Huddersfield, UK",
        tags: ["Huddersfield", "2023"],
    },
    {
        id: "castle",
        image: "/content/media/Castle.webp",
        date: "Aug 2020",
        dateNumber: "27082020",
        location: "Inowłódz, PL",
        tags: ["Inowłódz", "2020"],
    },
    {
        id: "city-glow",
        image: "/content/media/CityGlow.webp",
        date: "Nov 2022",
        dateNumber: "05112022",
        location: "Huddersfield, UK",
        tags: ["Huddersfield", "2022"],
    },
    {
        id: "moon",
        image: "/content/media/Moon.webp",
        date: "Jul 2021",
        dateNumber: "15072021",
        location: "England, UK",
        tags: ["England", "2021"],
    },
    {
        id: "fog-rolling-in",
        image: "/content/media/FogRollingIn.webp",
        date: "Mar 2023",
        dateNumber: "18032023",
        location: "Huddersfield, UK",
        tags: ["Huddersfield", "2023"],
    },
    {
        id: "grey-rainbow",
        image: "/content/media/GreyRainbow.webp",
        date: "Dec 2022",
        dateNumber: "26122022",
        location: "England, UK",
        tags: ["England", "2022"],
    },
    {
        id: "rock-bottom",
        image: "/content/media/RockBottom.webp",
        date: "Jun 2024",
        dateNumber: "08062024",
        location: "England, UK",
        tags: ["England", "2024"],
    },
    {
        id: "canal",
        image: "/content/media/Canal.webp",
        date: "Aug 2023",
        dateNumber: "07082023",
        location: "England, UK",
        tags: ["England", "2023"],
    },
    {
        id: "field",
        image: "/content/media/Field.webp",
        date: "Mar 2022",
        dateNumber: "18032022",
        location: "Huddersfield, UK",
        tags: ["Huddersfield", "2022"],
    },
    {
        id: "castle-hill",
        image: "/content/media/CastleHill.webp",
        date: "Feb 2022",
        dateNumber: "11022022",
        location: "Huddersfield, UK",
        tags: ["Huddersfield", "2022"],
    },
    {
        id: "scenic-overlook",
        image: "/content/media/ScenicOverlook.webp",
        date: "Feb 2022",
        dateNumber: "11022022",
        location: "Huddersfield, UK",
        tags: ["Huddersfield", "2022"],
    },
    {
        id: "block-view",
        image: "/content/media/BlockView.webp",
        date: "Aug 2022",
        dateNumber: "16082022",
        location: "Poland, PL",
        tags: ["Poland", "2022"],
    },
    {
        id: "venture",
        image: "/content/media/Venture.webp",
        date: "Aug 2025",
        dateNumber: "01082025",
        location: "England, UK",
        tags: ["England", "2025"],
    },
    {
        id: "connections",
        image: "/content/media/Connections.webp",
        date: "Sept 2023",
        dateNumber: "23092023",
        location: "England, UK",
        tags: ["England", "2023"],
    },
    {
        id: "red-sky",
        image: "/content/media/RedSky.webp",
        date: "Feb 2023",
        dateNumber: "05022023",
        location: "England, UK",
        tags: ["England", "2023"],
    },
    {
        id: "variation",
        image: "/content/media/Variation.webp",
        date: "Jul 2023",
        dateNumber: "06072023",
        location: "England, UK",
        tags: ["England", "2023"],
    },
    {
        id: "canvas",
        image: "/content/media/Canvas.webp",
        date: "Oct 2023",
        dateNumber: "16102023",
        location: "England, UK",
        tags: ["England", "2023"],
    },
    {
        id: "pink-sky",
        image: "/content/media/PinkSky.webp",
        date: "Jul 2021",
        dateNumber: "29072021",
        location: "England, UK",
        tags: ["England", "2021"],
    },
];

// Used to store the item HTML objects
let itemHTMLobjects: HTMLElement[];

// Creates a HTML object for item
function createHTMLitem(item: Media)
{
    let div = document.createElement('div');
    div.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'col-xl-2', 'media');
    div.setAttribute('item-id', item.id);

    // Store date as YYYYMMDD for sorting
    let date = item.dateNumber;
    div.dataset.timestamp = `${date.slice(4)}${date.slice(2,4)}${date.slice(0,2)}`;

    let card = document.createElement('div');
    card.classList.add('card');

    let loader = document.createElement('div');
    loader.setAttribute('class', 'video-loader');
    loader.innerHTML = '<div class="spinner-ring"></div>';
    card.appendChild(loader);

    let img = document.createElement('img');
    img.setAttribute('src', item.image);
    img.setAttribute('alt', `${item.id} image`);
    img.setAttribute('loading', 'lazy');
    img.setAttribute('data-bs-toggle', 'modal');
    img.setAttribute('data-bs-target', '#imageModal');

    img.addEventListener('load', () => {
        loader.remove();
        img.style.opacity = '1';
    });

    if (img.complete) 
    {
        loader.remove();
        img.style.opacity = '1';
    }

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'd-flex', 'justify-content-center', 'align-items-center');

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

// Create items and render onto page
function renderItems(tag: string)
{
    // Wipe item root clean
    let itemRoot = document.getElementById('media-root')!;
    itemRoot.innerHTML = "";

    let fragment = document.createDocumentFragment();

    // Render all items
    if (tag === "") 
    {
        itemObjects.forEach(item => {
            fragment.appendChild(createHTMLitem(item));
        });
    } 
    
    // Render based on tag
    else 
    {
        itemObjects.forEach(item => {
            if (item.tags.includes(tag)) {
                fragment.appendChild(createHTMLitem(item));
            }
        });
    }

    // Add items to DOM
    itemRoot.appendChild(fragment);

    // Store all the items in array for sorting
    itemHTMLobjects = Array.from(itemRoot.querySelectorAll('.media'));

    // Iterate each image and link it up with the large image modal upon click
    let largeImage = (document.getElementById('largeImage') as HTMLImageElement)!;
    itemHTMLobjects.forEach(function(imageItem)
    {
        if (!imageItem) return;

        imageItem.addEventListener("click", function() 
        {
            let image = this.querySelector("img")!.src;
            largeImage.src = image;
        });
    });
}

// Initialise page
document.addEventListener('DOMContentLoaded', () => {
    const applySort = setupSorting(() => itemHTMLobjects, itemObjects);

    setupCollections(itemObjects, (selectedTag) => {
        renderItems(selectedTag);
        const currentSort = document.getElementsByClassName('current-sort')[0];
        if (currentSort && applySort) applySort(currentSort.id);
    });

    renderItems(""); 
});