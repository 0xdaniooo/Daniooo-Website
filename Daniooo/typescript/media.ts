export {}; 

// Collection options
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
        id: "coll-emley",
        tag: "Emley",
    },
    {
        id: "coll-huddersfield",
        tag: "Huddersfield",
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
        id: "coll-image",
        tag: "Image",
    },
    {
        id: "coll-video",
        tag: "Video",
    },
    {
        id: "coll-ytvideo",
        tag: "YouTube Video",
    },
];

interface Media {
    image: string,
    video: string,
    date: string,
    dateNumber: string,
    location: string,
    type: string,
    tags: string[],
}

// Contains all the items to used for dynamic rendering
let itemObjects: Media[] = [
    {
        image: "content/media/LakeReflection.webp",
        video: "",
        date: "July 2021",
        dateNumber: "15072021",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2021", "Image"],
    },
    {
        image: "content/media/ScenicRiver.webp",
        video: "",
        date: "February 2023",
        dateNumber: "25022023",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2023", "Image"],
    },
    {
        image: "content/media/EmleyRoad.webp",
        video: "",
        date: "January 2023",
        dateNumber: "14012023",
        location: "Emley Moor, UK",
        type: "image",
        tags: ["", "Emley", "2023", "Image"],
    },
    {
        image: "content/media/PlantCloseup.webp",
        video: "",
        date: "July 2021",
        dateNumber: "15072021",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2021", "Image"],
    },
    {
        image: "content/media/Aftermath.webp",
        video: "",
        date: "July 2024",
        dateNumber: "28072024",
        location: "Inowlodz, PL",
        type: "image",
        tags: ["", "Inowlodz", "2024", "Image"],
    },
    {
        image: "content/media/CastleHillGlow.webp",
        video: "",
        date: "October 2022",
        dateNumber: "16102022",
        location: "Huddersfield, UK",
        type: "image",
        tags: ["", "Huddersfield", "2022", "Image"],
    },
    {
        image: "content/media/GreenSummerDay.webp",
        video: "",
        date: "August 2020",
        dateNumber: "27082020",
        location: "Inowlodz, PL",
        type: "image",
        tags: ["", "Inowlodz", "2020", "Image"],
    },
    {
        image: "content/media/DistantViews.webp",
        video: "",
        date: "January 2023",
        dateNumber: "04012023",
        location: "Huddersfield, UK",
        type: "image",
        tags: ["", "Huddersfield", "2023", "Image"],
    },
    {
        image: "content/media/Relaxation.webp",
        video: "",
        date: "July 2024",
        dateNumber: "28072024",
        location: "Inowlodz, PL",
        type: "image",
        tags: ["", "Inowlodz", "2024", "Image"],
    },
    {
        image: "content/media/ForestSunset.webp",
        video: "",
        date: "June 2023",
        dateNumber: "04062023",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2023", "Image"],
    },
    {
        image: "content/media/Sunset.webp",
        video: "",
        date: "July 2021",
        dateNumber: "25072021",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2021", "Image"],
    },
    {
        image: "content/media/CastleHillClouds.webp",
        video: "",
        date: "March 2023",
        dateNumber: "18032023",
        location: "Huddersfield, UK",
        type: "image",
        tags: ["", "Huddersfield", "2023", "Image"],
    },
    {
        image: "content/media/CityTurn.webp",
        video: "",
        date: "January 2022",
        dateNumber: "26012022",
        location: "Huddersfield, UK",
        type: "image",
        tags: ["", "Huddersfield", "2022", "Image"],
    },
    {
        image: "content/media/BurningSky.webp",
        video: "",
        date: "Jaunary 2023",
        dateNumber: "08012023",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2023", "Image"],
    },
    {
        image: "content/media/TreeSilhouettes.webp",
        video: "",
        date: "February 2023",
        dateNumber: "25022023",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2023", "Image"],
    },
    {
        image: "content/media/Serenity.webp",
        video: "",
        date: "June 2024",
        dateNumber: "21062024",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2024", "Image"],
    },
    {
        image: "content/media/SnowyGate.webp",
        video: "",
        date: "March 2023",
        dateNumber: "10032023",
        location: "Huddersfield, UK",
        type: "image",
        tags: ["", "Huddersfield", "2023", "Image"],
    },
    {
        image: "content/media/Mirror.webp",
        video: "",
        date: "February 2025",
        dateNumber: "28022025",
        location: "Huddersfield, UK",
        type: "image",
        tags: ["", "Huddersfield", "2025", "Image"],
    },
    {
        image: "content/media/GreyDay.webp",
        video: "",
        date: "April 2023",
        dateNumber: "22042023",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2023", "Image"],
    },
    {
        image: "content/media/Rainbow.webp",
        video: "",
        date: "December 2021",
        dateNumber: "07122021",
        location: "Huddersfield, UK",
        type: "image",
        tags: ["", "Huddersfield", "2021", "Image"],
    },
    {
        image: "content/media/Conclusion.webp",
        video: "",
        date: "April 2025",
        dateNumber: "18042025",
        location: "Huddersfield, UK",
        type: "image",
        tags: ["", "Huddersfield", "2025", "Image"],
    },
    {
        image: "",
        video: "content/media/CastleHillWindyDarkness.mp4",
        date: "January 2023",
        dateNumber: "14012023",
        location: "Huddersfield, UK",
        type: "video",
        tags: ["", "Huddersfield", "2023", "Video"],
    },
    {
        image: "content/media/EmleyTower.webp",
        video: "",
        date: "January 2023",
        dateNumber: "14012023",
        location: "Emley Moor, UK",
        type: "image",
        tags: ["", "Emley", "2023", "Image"],
    },
    {
        image: "content/media/MorningHalt.webp",
        video: "",
        date: "February 2025",
        dateNumber: "18022025",
        location: "Huddersfield, UK",
        type: "image",
        tags: ["", "Huddersfield", "2025", "Image"],
    },
    {
        image: "content/media/Forest.webp",
        video: "",
        date: "February 2023",
        dateNumber: "23022023",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2023", "Image"],
    },
    {
        image: "content/media/CastleHillStairs.webp",
        video: "",
        date: "March 2022",
        dateNumber: "18032022",
        location: "Huddersfield, UK",
        type: "image",
        tags: ["", "Huddersfield", "2022", "Image"],
    },
    {
        image: "",
        video: "content/media/Sunset.mp4",
        date: "June 2023",
        dateNumber: "04062023",
        location: "England, UK",
        type: "video",
        tags: ["", "England", "2023", "Video"],
    },
    {
        image: "content/media/SunsetRiver.webp",
        video: "",
        date: "August 2020",
        dateNumber: "27082020",
        location: "Inowlodz, PL",
        type: "image",
        tags: ["", "Inowlodz", "2020", "Image"],
    },
    {
        image: "content/media/Trail.webp",
        video: "",
        date: "March 2025",
        dateNumber: "19032025",
        location: "Huddersfield, UK",
        type: "image",
        tags: ["", "Huddersfield", "2025", "Image"],
    },
    {
        image: "content/media/SnowyBushes.webp",
        video: "",
        date: "March 2023",
        dateNumber: "10032023",
        location: "Huddersfield, UK",
        type: "image",
        tags: ["", "Huddersfield", "2023", "Image"],
    },
    {
        image: "content/media/River.webp",
        video: "",
        date: "August 2020",
        dateNumber: "27082020",
        location: "Inowlodz, PL",
        type: "image",
        tags: ["", "Inowlodz", "2020", "Image"],
    },
    {
        image: "content/media/NightCity.webp",
        video: "",
        date: "February 2023",
        dateNumber: "11022023",
        location: "Huddersfield, UK",
        type: "image",
        tags: ["", "Huddersfield", "2023", "Image"],
    },
    {
        image: "content/media/OrangeHue.webp",
        video: "",
        date: "March 2025",
        dateNumber: "19032025",
        location: "Huddersfield, UK",
        type: "image",
        tags: ["", "Huddersfield", "2025", "Image"],
    },
    {
        image: "content/media/Footpath.webp",
        video: "",
        date: "February 2023",
        dateNumber: "25022023",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2023", "Image"],
    },
    {
        image: "content/media/Line.webp",
        video: "",
        date: "June 2024",
        dateNumber: "08062024",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2024", "Image"],
    },
    {
        image: "content/media/SnowyMountains.webp",
        video: "",
        date: "March 2023",
        dateNumber: "10032023",
        location: "Huddersfield, UK",
        type: "image",
        tags: ["", "Huddersfield", "2023", "Image"],
    },
    {
        image: "content/media/Skyline.webp",
        video: "",
        date: "July 2021",
        dateNumber: "15072021",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2021", "Image"],
    },
    {
        image: "content/media/BabyBlue.webp",
        video: "",
        date: "June 2023",
        dateNumber: "15062023",
        location: "Huddersfield, UK",
        type: "image",
        tags: ["", "Huddersfield", "2023", "Image"],
    },
    {
        image: "",
        video: "content/media/RedSkyline.mp4",
        date: "February 2023",
        dateNumber: "05022023",
        location: "England, UK",
        type: "video",
        tags: ["", "England", "2023", "Video"],
    },
    {
        image: "content/media/Castle.webp",
        video: "",
        date: "August 2020",
        dateNumber: "27082020",
        location: "Inowlodz, PL",
        type: "image",
        tags: ["", "Inowlodz", "2020", "Image"],
    },
    {
        image: "content/media/CityGlow.webp",
        video: "",
        date: "November 2022",
        dateNumber: "05112022",
        location: "Huddersfield, UK",
        type: "image",
        tags: ["", "Huddersfield", "2022", "Image"],
    },
    {
        image: "content/media/OrangeHorizon.webp",
        video: "",
        date: "February 2023",
        dateNumber: "05022023",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2023", "Image"],
    },
    {
        image: "content/media/Moon.webp",
        video: "",
        date: "July 2021",
        dateNumber: "15072021",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2021", "Image"],
    },
    {
        image: "content/media/FogRollingIn.webp",
        video: "",
        date: "March 2023",
        dateNumber: "18032023",
        location: "Huddersfield, UK",
        type: "image",
        tags: ["", "Huddersfield", "2023", "Image"],
    },
    {
        image: "content/media/GreyRainbow.webp",
        video: "",
        date: "December 2022",
        dateNumber: "26122022",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2022", "Image"],
    },
    {
        image: "content/media/RockBottom.webp",
        video: "",
        date: "June 2024",
        dateNumber: "08062024",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2024", "Image"],
    },
    {
        image: "content/media/Canal.webp",
        video: "",
        date: "August 2023",
        dateNumber: "07082023",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2023", "Image"],
    },
    {
        image: "content/media/Field.webp",
        video: "",
        date: "March 2022",
        dateNumber: "18032022",
        location: "Huddersfield, UK",
        type: "image",
        tags: ["", "Huddersfield", "2022", "Image"],
    },
    {
        image: "content/media/Cathedral.webp",
        video: "",
        date: "August 2024",
        dateNumber: "02082024",
        location: "Poland, PL",
        type: "image",
        tags: ["", "Huddersfield", "2025", "Image"],
    },
    {
        image: "content/media/Tree.webp",
        video: "",
        date: "January 2023",
        dateNumber: "08012023",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2023", "Image"],
    },
    {
        image: "content/media/CastleHill.webp",
        video: "",
        date: "February 2022",
        dateNumber: "11022022",
        location: "Huddersfield, UK",
        type: "image",
        tags: ["", "Huddersfield", "2022", "Image"],
    },
    {
        image: "content/media/Desolation.webp",
        video: "",
        date: "July 2024",
        dateNumber: "29072024",
        location: "Inowlodz, PL",
        type: "image",
        tags: ["", "Inowlodz", "2024", "Image"],
    },
    {
        image: "content/media/ScenicOverlook.webp",
        video: "",
        date: "February 2022",
        dateNumber: "11022022",
        location: "Huddersfield, UK",
        type: "image",
        tags: ["", "Huddersfield", "2022", "Image"],
    },
    {
        image: "content/media/BlockView.webp",
        video: "",
        date: "August 2022",
        dateNumber: "16082022",
        location: "Poland, PL",
        type: "image",
        tags: ["", "Poland", "2022", "Image"],
    },
    {
        image: "content/media/DeadForest.webp",
        video: "",
        date: "January 2023",
        dateNumber: "08012023",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2023", "Image"],
    },
    {
        image: "content/media/Oasis.webp",
        video: "",
        date: "January 2023",
        dateNumber: "08012023",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2023", "Image"],
    },
    {
        image: "content/media/Connections.webp",
        video: "",
        date: "September 2023",
        dateNumber: "23092023",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2023", "Image"],
    },
    {
        image: "content/media/SnowyRoad.webp",
        video: "",
        date: "March 2023",
        dateNumber: "10032023",
        location: "Huddersfield, UK",
        type: "image",
        tags: ["", "Huddersfield", "2023", "Image"],
    },
    {
        image: "content/media/RedSky.webp",
        video: "",
        date: "February 2023",
        dateNumber: "05022023",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2023", "Image"],
    },
    {
        image: "content/media/Variation.webp",
        video: "",
        date: "July 2023",
        dateNumber: "06072023",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2023", "Image"],
    },
    {
        image: "content/media/Canvas.webp",
        video: "",
        date: "October 2023",
        dateNumber: "16102023",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2023", "Image"],
    },
    {
        image: "content/media/PinkSky.webp",
        video: "",
        date: "July 2021",
        dateNumber: "29072021",
        location: "England, UK",
        type: "image",
        tags: ["", "England", "2021", "Image"],
    },
];

// Used to store the item HTML objects
let itemHTMLobjects: HTMLElement[];

// Creates a HTML object for item
function createHTMLitem(item: Media)
{
    let div = document.createElement('div');
    div.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'col-xl-2', 'media');

    let card = document.createElement('div');
    card.classList.add('card');

    if (item.type === 'image')
    {
        let img = document.createElement('img');
        img.setAttribute('src', item.image);
        img.setAttribute('data-bs-toggle', 'modal');
        img.setAttribute('data-bs-target', '#imageModal');

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        let text = document.createElement('p');
        text.classList.add('card-text', 'text-center');
        text.textContent = `${item.date} | ${item.location}`;
        text.setAttribute('date', item.dateNumber);
        text.setAttribute('identifier', item.image);

        cardBody.appendChild(text);
        card.appendChild(img);
        card.appendChild(cardBody);
    } 
    
    else if (item.type === 'video') 
    {
        let ratioDiv = document.createElement('div');
        ratioDiv.classList.add('ratio', 'ratio-4x3');

        let video = document.createElement('video');
        video.setAttribute('controls', '');
        video.setAttribute('preload', 'none');
        video.setAttribute('poster', `${item.video.replace(/\.mp4$/, '')}Thumbnail.webp`);

        let source = document.createElement('source');
        source.setAttribute('src', item.video);
        source.setAttribute('type', 'video/mp4');

        video.appendChild(source);
        ratioDiv.appendChild(video);

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        let text = document.createElement('p');
        text.classList.add('card-text', 'text-center');
        text.textContent = `${item.date} | ${item.location}`;
        text.setAttribute('date', item.dateNumber);
        text.setAttribute('identifier', item.video);

        cardBody.appendChild(text);
        card.appendChild(ratioDiv);
        card.appendChild(cardBody);
    }

    div.appendChild(card);

    return div;
};

// Create items and render onto page
function renderItems(tag: string)
{
    // Wipte item root clean
    let itemRoot = document.getElementById('media-root')!;
    while (itemRoot.firstChild) itemRoot.firstChild.remove();

    // Render all items
    if (tag == "")
    {
        itemObjects.forEach(item => {
            let htmlItem = createHTMLitem(item);
            itemRoot.appendChild(htmlItem);
        });
    }

    // Render based on tag
    else
    {
        itemObjects.forEach(item => {
            if (!item.tags.includes(tag)) return;

            let htmlItem = createHTMLitem(item);
            itemRoot.appendChild(htmlItem);
        });
    }

    // Store all the objects in array for sorting
    itemHTMLobjects = Array.from(document.querySelectorAll('.media'));

    // Sort items based on current selection
    let currentSort = document.getElementsByClassName('current-sort');
    setCurrentDropdown(currentSort[0].id);

    // Iterate each image and link it up with the large image modal upon click
    let largeImage = (document.getElementById('largeImage') as HTMLImageElement)!;
    itemHTMLobjects.forEach(function(imageItem)
    {
        imageItem.addEventListener("click", function() 
        {
            let image = this.querySelector("img")!.src;
            largeImage.src = image;
        });
    });
}

// Sort items by date (descending)
function sortDescending()
{
    itemHTMLobjects.sort((a, b) => {
        // Obtain date for a
        let dateString = a.querySelector('p[date]')!.getAttribute('date')!;
        let day = dateString.substring(0, 2);
        let month = dateString.substring(2, 4);
        let year = dateString.substring(4, 8);
        let formattedDate = `${year}-${month}-${day}`;
        let date1 = new Date(formattedDate);

        // Obtain date for b
        dateString = b.querySelector('p[date]')!.getAttribute('date')!;
        day = dateString.substring(0, 2);
        month = dateString.substring(2, 4);
        year = dateString.substring(4, 8);
        formattedDate = `${year}-${month}-${day}`;
        let date2 = new Date(formattedDate);

        return date2.getTime() - date1.getTime();
    });

    // Reorder the items 
    itemHTMLobjects.forEach(itemObj => {
        itemObj.parentElement!.appendChild(itemObj);
    });
};

// Sort items by date (ascending)
function sortAscending()
{
    itemHTMLobjects.sort((a, b) => {
        // Obtain date for a
        let dateString = a.querySelector('p[date]')!.getAttribute('date')!;
        let day = dateString.substring(0, 2);
        let month = dateString.substring(2, 4);
        let year = dateString.substring(4, 8);
        let formattedDate = `${year}-${month}-${day}`;
        let date1 = new Date(formattedDate);

        // Obtain date for b
        dateString = b.querySelector('p[date]')!.getAttribute('date')!;
        day = dateString.substring(0, 2);
        month = dateString.substring(2, 4);
        year = dateString.substring(4, 8);
        formattedDate = `${year}-${month}-${day}`;
        let date2 = new Date(formattedDate);

        return date1.getTime() - date2.getTime();
    });

    // Reorder the items 
    itemHTMLobjects.forEach(itemObj => {
        itemObj.parentElement!.appendChild(itemObj);
    });
};

// Default sort
function sortDefault()
{
    let tempArray = [];

    // Compile default item order by referencing against original array
    for (let i = 0; i < itemObjects.length; i++)
    {
        for (let j = 0; j < itemHTMLobjects.length; j++)
        {
            if (itemObjects[i].image == itemHTMLobjects[j].querySelector('p')!.getAttribute('identifier') ||
            itemObjects[i].video == itemHTMLobjects[j].querySelector('p')!.getAttribute('identifier'))
            {
                tempArray.push(itemHTMLobjects[j]);
                continue;
            }
        }
    }

    // Rewrite the items array based on new order
    for (let i = 0; i < itemHTMLobjects.length; i++)
    {
        itemHTMLobjects[i] = tempArray[i];
    }

    // Reorder the items 
    itemHTMLobjects.forEach(itemObj => {
        itemObj.parentElement!.appendChild(itemObj);
    });
};

// Function to set the current option and show it as selected
function setCurrentDropdown(optionId: string) 
{
    // Remove current sort class from old current sort
    let dropdownItems = document.querySelectorAll(".dropdown-item");
    dropdownItems.forEach(item => {
        item.classList.remove("current-sort");
    });

    // Apply current sort to new current sort
    let selectedOption = document.getElementById(optionId)!;
    selectedOption.classList.add("current-sort");

    if (optionId == 'sort-new-old') sortDescending();
    else if (optionId == 'sort-old-new') sortAscending();
    else if (optionId == 'sort-default') sortDefault();
}

// Add event listeners for sorting buttons
let sortDescendingButton = document.getElementById('sort-new-old')!;
sortDescendingButton.addEventListener('click', () => {
    setCurrentDropdown('sort-new-old');
});

let sortAscendingButton = document.getElementById('sort-old-new')!;
sortAscendingButton.addEventListener('click', () => {
    setCurrentDropdown('sort-old-new');
});

let sortDefaultButton = document.getElementById('sort-default')!;
sortDefaultButton.addEventListener('click', () => {
    setCurrentDropdown('sort-default');
});

// Initialise collection dropdowns
for (let i = 0; i < collections.length; i++)
{
    // Count up items
    let collDropItem = document.getElementById(collections[i].id)!;
    let count = itemObjects.filter(obj => obj.tags.includes(collections[i].tag)).length;
    collDropItem.textContent += ` (${count})`;

    // Add event listener to collection dropdown
    collDropItem.addEventListener('click', () => {
        renderItems(collections[i].tag);

        // Remove current collection dropdown
        let currentCollection = document.getElementsByClassName('current-collection');
        currentCollection[0].classList.remove("current-collection");

        // Set current collection dropdown
        document.getElementById(collections[i].id)!.classList.add("current-collection");
    });
}

// Initialise page
renderItems("");