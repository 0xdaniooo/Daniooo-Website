let collections = [
    {
        id: "coll-all",
        tag: "",
    },
    {
        id: "coll-2d",
        tag: "2D",
    },
    {
        id: "coll-3d",
        tag: "3D",
    },
    {
        id: "coll-2021",
        tag: "2021",
    },
    {
        id: "coll-2020",
        tag: "2020",
    },
    {
        id: "coll-2019",
        tag: "2019",
    },
    {
        id: "coll-wip",
        tag: "Work in Progress",
    },
];
let itemObjects = [
    {
        image: "content/itchIO/Scout.webp",
        video: "",
        title: "Scout - Final Major Project",
        description: "Scout the area, plan your attack, defeat enemies.",
        p1: "Fight off letant waves of incoming enemies but be careful as each weapon has only one magazine. Use your drone to plan out your attacks from a safe distance then go in for the kill. Loot whatever you can find and utilise the various abilities to aid you in battle.",
        p2: "Scout is heavily inspired by Watch Dogs 2 with its level design, drone mechanics and third person perspective. Rainbow Six Siege also played a large role with its realistic combat and the many abilities that are offered by the operators present there.",
        p3: "During development I mainly focused on the programming aspect which allowed me to implement any feature I wanted and push my programming skills to their limits as this was my specialism. Most of the assets I have re-used from my First Person Experience game coupled with some additional ones I have downloaded.",
        link: "https://0xdaniooo.itch.io/scout-final-major-project",
        date: "23rd May 2021",
        dateNumber: "23052021",
        tags: ["", "2021", "3D"],
        devlog: "PDFs/ScoutFMPDevlog.pdf",
    },
    {
        image: "content/itchIO/FirstPersonExperience.webp",
        video: "",
        title: "First Person Experience - Project 1",
        description: "Area 51 has been overrun by aliens - clear them out.",
        p1: "Make your way through the Area 51 facility whilst clearing out the alien infestation. Interact with the environment to open doors and continue with the mini questline present there. Save up points by killing enemies to allow you to purchase new weapons at the shop stations found there.",
        p2: "The two main games that influenced development were Fallout New Vegas for its setting and Cyberpunk 2077 for the weapons and combat. These however weren't the only inspirations as this was my most research heavy project meaning I have delved into various other games to collect many details that would shape this game and the vision I had for it.",
        p3: "This being the start of my second year of college, I decided to be very ambitious. I learnt modelling from scratch through Blender and created nearly all the assets present. I then learnt how to animate the characters and utilise NavMesh for AI. Finally, I pushed myself hard with programming and learnt various ways of doing things that would have been way above my skill level in the past.",
        link: "https://0xdaniooo.itch.io/first-person-experience-project-1",
        date: "5th March 2021",
        dateNumber: "05032021",
        tags: ["", "2021", "3D"],
        devlog: "PDFs/FirstPersonExperienceDevlog.pdf",
    },
    {
        image: "content/itchIO/Rhubarbarian.webp",
        video: "",
        title: "Rise of the Rhubarbarian - Game Jam",
        description: "Rise up and train the Rhubarbarian for a top secret mission.",
        p1: "Make your way through a test course designed to train the Rhubarbarian robot for an infiltration mission. Avoid deadly turrets and any other obstacles designed to stop you from reaching the finish point. Watch out for collapsing platforms awaiting your demise. Interact with fun puzzle games to progress further.",
        p2: "As this is a platformer puzzle game, it draws heavy inspiration from the classics like Portal for the general level design. As for the style and direction taken, Japanese culture played a large role right from the start of development which can be seen in concept art and mechanics present. That was the general idea as only had two weeks to research and conceptualise everything.",
        p3: "Seeing as I was the programmer for our team, I was tasked with bringing all the features to life like the AI, creating puzzle games and menus. The puzzle games were all very niche which meant everything had to be done from scratch with no reference or starting code. Once all that was complete, I plugged all the mechanics into the level that had been put together by the game designer.",
        link: "https://0xdaniooo.itch.io/rise-of-the-rhubarbarian-game-jam",
        date: "28th June 2021",
        dateNumber: "28062021",
        tags: ["", "2021", "3D"],
        devlog: "",
    },
    {
        image: "content/itchIO/YetiHorror.webp",
        video: "",
        title: "Yeti Horror Game - Final Major Project",
        description: "Fix your helicopter and make it out of the snowy hills of Nepal alive.",
        p1: "Explore the snowy Himalayan mountains for any parts you can use to fix your helicopter. Stock up on weapons, supplies and traps to fight off the wildlife trying to hunt you down. You are not alone - a Yeti roams around looking for its prey. Make the best of the limited time you have here and get out in one piece.",
        p2: "The only letraint I was given was that the game had to center around the country of Nepal. I began by researching heavily into what Nepal was like which then gave me a wide range of ideas for the genre and possible experiences. A horror game based on the rumours of the Yeti is what I settled on as this seemed like something that would be very interesting to pursue.",
        p3: "Unfortunately, this is my only incomplete game as development was stopped halfway due to covid. With the time I had, I managed to make all the sprites for the game art and program most of the logic necessary to make this worth playing. The only missing pieces were the questline alongside all the horror elements which were essential to this project.",
        link: "https://0xdaniooo.itch.io/yeti-horror-game-final-major-project",
        date: "25th May 2020",
        dateNumber: "25052020",
        tags: ["", "2020", "2D"],
        devlog: "PDFs/YetiFMPDevlog.pdf",
    },
    {
        image: "content/itchIO/VehicleGame.webp",
        video: "",
        title: "3D Vehicle Game - Project 2",
        description: "Back to the future! Discover what the DeLorean is capable of.",
        p1: "Drive your DeLorean equipped with highly deadly weapons to eliminiate other drivers stood in your way. Go for a ride and explore this sci-fi world and all it has to offer. Stack up cash and upgrade your vehicle at upgrade stops. Avoid the many traps set out on the roads.",
        p2: "This was mostly a generic vehicle game where I went with the sci-fi theme and took the DeLorean from Back to the Future. The main idea was to create a world with a specific style as I have explored various other themes for this project before eventually settling on an aesthetic.",
        p3: "Here I was given my first introduction to 3D modelling which can be seen in the DeLorean and the buildings blocking the player from leaving the city. It is also where I pushed myself harder programming wise to try incorporating mechanics I could find on YouTube into my game, something I had not done before. All else was put together with Unity Store Assets which I experimented with.",
        link: "https://0xdaniooo.itch.io/3d-vehicle-game-project-2",
        date: "14th February 2020",
        dateNumber: "14022020",
        tags: ["", "2020", "3D"],
        devlog: "",
    },
    {
        image: "content/itchIO/AdventureGame.webp",
        video: "",
        title: "Top Down Adventure - Project 1",
        description: "Survive and thrive in this harsh apocalyptic world... or die trying.",
        p1: "A simple top down adventure game where you traverse a post-apocalyptic city of ruins with the goal of getting out. Be on the lookout for any mines laid around and razor sharp bushes blocking your path. Venture into buildings to locate loot and beware of the enemies spread around the world.",
        p2: "The one main inspiration for this project was Fallout 3 which pretty much influenced the entire game direction. This can be seen in the post-apocalyptic theme mixed with steampunk. I had explored a few different settings and directions for this game with this one taking the number one spot.",
        p3: "This was the first game I have ever made and my introduction to the world of programming having no prior experience before this. It's also where I learnt to use the Unity Game Engine and the process of creating games. All the sprites visible I had made on Photoshop and the coding was taught to us by our tutor who released tutorials we could follow.",
        link: "https://0xdaniooo.itch.io/top-down-adventure-project-1",
        date: "13th December 2019",
        dateNumber: "13122019",
        tags: ["", "2019", "2D"],
        devlog: "",
    },
];
let itemHTMLobjects;
function createHTMLitem(item) {
    let rowGameDiv = document.createElement('div');
    rowGameDiv.className = 'row game';
    let colDiv1 = document.createElement('div');
    colDiv1.className = 'col-sm-12 col-md-6 col-lg-6 d-flex flex-column';
    let innerRowDiv = document.createElement('div');
    innerRowDiv.className = 'row';
    let col12Div = document.createElement('div');
    col12Div.className = 'col-12';
    let gameTitleHeading = document.createElement('h4');
    gameTitleHeading.className = 'game-title';
    gameTitleHeading.textContent = item.title;
    let underlineDiv = document.createElement('div');
    underlineDiv.className = 'underline';
    let descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = item.description;
    let aboutGameHeading = document.createElement('h5');
    aboutGameHeading.style.marginTop = '10px';
    aboutGameHeading.textContent = 'About this game:';
    aboutGameHeading.setAttribute('class', 'subheading-underline');
    let aboutGameParagraph1 = document.createElement('p');
    aboutGameParagraph1.innerHTML += item.p1;
    let aboutGameParagraph2 = document.createElement('p');
    aboutGameParagraph2.innerHTML += item.p2;
    let projectDetailsParagraph = document.createElement('p');
    projectDetailsParagraph.innerHTML += item.p3;
    col12Div.appendChild(gameTitleHeading);
    col12Div.appendChild(underlineDiv);
    col12Div.appendChild(descriptionParagraph);
    col12Div.appendChild(aboutGameHeading);
    col12Div.appendChild(aboutGameParagraph1);
    col12Div.appendChild(aboutGameParagraph2);
    col12Div.appendChild(projectDetailsParagraph);
    innerRowDiv.appendChild(col12Div);
    let gameFooterRowDiv = document.createElement('div');
    gameFooterRowDiv.className = 'row game-footer';
    let footerColDiv = document.createElement('div');
    footerColDiv.className = 'col-12 d-flex align-items-center';
    let itchIOLink = document.createElement('a');
    itchIOLink.href = item.link;
    itchIOLink.className = 'btn custom-button';
    itchIOLink.target = '_blank';
    if (item.link.length == 0) {
        itchIOLink.style.pointerEvents = 'none';
        itchIOLink.textContent = 'Unavailable';
    }
    else
        itchIOLink.textContent = 'Play now on Itch IO';
    let itchIOIcon = document.createElement('i');
    itchIOIcon.className = 'fa-brands fa-itch-io';
    itchIOIcon.style.color = 'white';
    itchIOIcon.style.marginLeft = '10px';
    itchIOLink.appendChild(itchIOIcon);
    let gameDateParagraph = document.createElement('p');
    gameDateParagraph.className = 'game-date';
    gameDateParagraph.setAttribute('style', 'margin-left: 20px;');
    gameDateParagraph.textContent = item.date;
    gameDateParagraph.setAttribute('date', item.dateNumber);
    let devlogButton = document.createElement('a');
    if (item.devlog.length != 0) {
        devlogButton.setAttribute('class', 'devlog-button');
        devlogButton.setAttribute('style', 'margin-left: 20px');
        devlogButton.setAttribute('href', item.devlog);
        devlogButton.textContent = "View devlog";
        devlogButton.innerHTML += '<i class="fa-regular fa-images" style="margin-left: 6px;"></i>';
    }
    footerColDiv.appendChild(itchIOLink);
    footerColDiv.appendChild(gameDateParagraph);
    if (item.devlog.length != 0)
        footerColDiv.appendChild(devlogButton);
    gameFooterRowDiv.appendChild(footerColDiv);
    colDiv1.appendChild(innerRowDiv);
    colDiv1.appendChild(gameFooterRowDiv);
    let rightColumnDiv = document.createElement('div');
    if (item.video.length != 0) {
        rightColumnDiv.setAttribute('class', 'col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center');
        let cardDiv = document.createElement('div');
        cardDiv.setAttribute('class', 'ratio ratio-16x9 game-video');
        let iframe = document.createElement('iframe');
        iframe.setAttribute('src', item.video);
        iframe.setAttribute('allowfullscreen', '');
        cardDiv.appendChild(iframe);
        rightColumnDiv.appendChild(cardDiv);
    }
    else {
        rightColumnDiv.className = 'col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center';
        let cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        let gameImage = document.createElement('img');
        gameImage.src = item.image;
        gameImage.className = 'img-fluid game-image';
        cardDiv.appendChild(gameImage);
        rightColumnDiv.appendChild(cardDiv);
    }
    rowGameDiv.appendChild(colDiv1);
    rowGameDiv.appendChild(rightColumnDiv);
    return rowGameDiv;
}
;
function renderItems(tag) {
    let itemRoot = document.getElementById('games-root');
    while (itemRoot.firstChild)
        itemRoot.firstChild.remove();
    if (tag == "") {
        itemObjects.forEach(item => {
            let htmlItem = createHTMLitem(item);
            itemRoot.appendChild(htmlItem);
        });
    }
    else {
        itemObjects.forEach(item => {
            if (!item.tags.includes(tag))
                return;
            let htmlItem = createHTMLitem(item);
            itemRoot.appendChild(htmlItem);
        });
    }
    itemHTMLobjects = Array.from(document.querySelectorAll('.game'));
    let currentSort = document.getElementsByClassName('current-sort');
    setCurrentDropdown(currentSort[0].id);
}
;
let sortDescending = () => {
    itemHTMLobjects.sort((a, b) => {
        let dateString = a.querySelector('p[date]').getAttribute('date');
        let day = dateString.substring(0, 2);
        let month = dateString.substring(2, 4);
        let year = dateString.substring(4, 8);
        let formattedDate = `${year}-${month}-${day}`;
        let date1 = new Date(formattedDate);
        dateString = b.querySelector('p[date]').getAttribute('date');
        day = dateString.substring(0, 2);
        month = dateString.substring(2, 4);
        year = dateString.substring(4, 8);
        formattedDate = `${year}-${month}-${day}`;
        let date2 = new Date(formattedDate);
        return date2.getTime() - date1.getTime();
    });
    itemHTMLobjects.forEach(itemObj => {
        itemObj.parentElement.appendChild(itemObj);
    });
};
let sortAscending = () => {
    itemHTMLobjects.sort((a, b) => {
        let dateString = a.querySelector('p[date]').getAttribute('date');
        let day = dateString.substring(0, 2);
        let month = dateString.substring(2, 4);
        let year = dateString.substring(4, 8);
        let formattedDate = `${year}-${month}-${day}`;
        let date1 = new Date(formattedDate);
        dateString = b.querySelector('p[date]').getAttribute('date');
        day = dateString.substring(0, 2);
        month = dateString.substring(2, 4);
        year = dateString.substring(4, 8);
        formattedDate = `${year}-${month}-${day}`;
        let date2 = new Date(formattedDate);
        return date1.getTime() - date2.getTime();
    });
    itemHTMLobjects.forEach(itemObj => {
        itemObj.parentElement.appendChild(itemObj);
    });
};
let sortDefault = () => {
    let tempArray = [];
    for (let i = 0; i < itemObjects.length; i++) {
        for (let j = 0; j < itemHTMLobjects.length; j++) {
            if (itemObjects[i].link == itemHTMLobjects[j].querySelector('a').getAttribute('href')) {
                tempArray.push(itemHTMLobjects[j]);
                continue;
            }
        }
    }
    for (let i = 0; i < itemHTMLobjects.length; i++) {
        itemHTMLobjects[i] = tempArray[i];
    }
    itemHTMLobjects.forEach(itemObj => {
        itemObj.parentElement.appendChild(itemObj);
    });
};
function setCurrentDropdown(optionId) {
    let dropdownItems = document.querySelectorAll(".dropdown-item");
    dropdownItems.forEach(item => {
        item.classList.remove("current-sort");
    });
    let selectedOption = document.getElementById(optionId);
    selectedOption.classList.add("current-sort");
    if (optionId == 'sort-new-old')
        sortDescending();
    else if (optionId == 'sort-old-new')
        sortAscending();
    else if (optionId == 'sort-default')
        sortDefault();
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
export {};
