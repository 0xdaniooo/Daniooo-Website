import { videogameIcons as icons, openProjectModal, handleHashRouting } from "./shared-projects.js";
import { sortAscending, sortDescending, sortDefault } from "./shared.js";
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
    }
];
let itemObjects = [
    {
        id: "scout",
        prevId: "first-person-experience",
        nextId: "rhubarbarian",
        image: "content/videogames/Scout.webp",
        title: "Scout - Final Major Project",
        description: "Scout the area, plan your attack, defeat enemies.",
        p1: "Fight off waves of incoming enemies but be careful as each weapon has only one magazine. Use your drone to plan out your attacks from a safe distance then go in for the kill. Loot whatever you can find and utilise the various abilities to aid you in battle.",
        p2: "Scout is heavily inspired by Watch Dogs 2 with its level design, drone mechanics and third person perspective. Rainbow Six Siege also played a large role with its realistic combat and the many abilities that are offered by the operators present there.",
        p3: "During development I mainly focused on the programming aspect which allowed me to implement any feature I wanted and push my programming skills to their limits as this was my specialism. Most of the assets I have re-used from my First Person Experience game coupled with some additional ones I have downloaded.",
        history: [
            { type: "heading", text: "Timeframe" },
            { type: "paragraph", text: "Development started in March 2021 - Completed in May 2021" },
            { type: "heading", text: "Specialisation" },
            { type: "paragraph", text: "The time came to create my last major project for my college course and by now I had felt quite confident in game development. Even playing games I'd frequently have insight moments for how things work and how I could implement similar functionality. The goal here was simple: we just had to create something that would align with the specialism we wished to continue into uni and the industry as a whole - for me this would be programming." },
            { type: "paragraph", text: "This made life easier as I could simply use my existing assets from my previous game. The idea was that enemies would keep respawning and you could only have one weapon at a time which had to be obtained from an enemy. You would be able to scout around with the drone and use various abilities to help you defeat enemies both in person and in the drone. Mainly this was all so that I could create a playground for various game mechanics but it proved to be quite a unique game idea." },
            { type: "heading", text: "Development" },
            { type: "paragraph", text: "Being a third person 3D game introduces a lot of unseen complexity, certainly something I had no experience with. I had to learn a third person camera package, get the animations to work with controls and allow for context switching between the player and the drone - all without any hiccups or dual control of both at the same time. I got a new laptop around this time so development was a lot more enjoyable since the old one was legitimately on its last breaths." },
            { type: "paragraph", text: "I dived deeper into abstraction for generalised environment interactions and expanded this to the abilities the player would use both on their character and the drone. Realism was also something I had been aiming for and so the projectiles needed to have a balance of deadliness and physics. Finally, the environment was something to be exploited as well through destructible trees and exploding barrels - this could either work for you or against you." },
            { type: "image", src: "content/historic/ScoutCinemachine.webp", caption: "Setting up Cinemachine for the player and drone [April 2021]" },
            { type: "heading", text: "What could have been" },
            { type: "paragraph", text: "Ultimately I'm happy with how it turned out but I feel like this could have been much more. Some of this is because I had been losing my passion for game development in favour of cybersecurity around this time. I even switched my uni degree and so I was determined that I wouldn't be continuing this as a career anymore (that decision had been troubling me all throughout development). I still put in a lot of work in terms of programming but the rest of the game suffered as a result. It was more of a technical demo than a completed product which was sort of the goal but left much to be desired." },
            { type: "image", src: "content/historic/ScoutWorld.webp", caption: "The world was quite bland as all design effort was funnelled towards programming [May 2021]" },
            { type: "heading", text: "Future of Scout" },
            { type: "paragraph", text: "I've considered developing this game properly from the ground up so many times in recent years - had a full plan developed for the mechanics, aesthetic and development. The game idea itself is solid but the problem is that game production is so involved and I don't have the time to pull this off in accordance with my vision." },
            { type: "image", src: "content/historic/ScoutScene.webp", caption: "Dynamic lighting during gameplay for a day and night cycle [May 2021]" },
        ],
        link: "https://0xdaniooo.itch.io/scout-final-major-project",
        date: "23rd May 2021",
        dateNumber: "23052021",
        tags: ["", "2021", "3D"],
        devlog: "content/PDFs/ScoutFMPDevlog.pdf",
        github: "https://github.com/0xdaniooo/Scout-Final-Major-Project",
        icons: ["unity", "cs", "blender"]
    },
    {
        id: "first-person-experience",
        prevId: "yeti-horror-game",
        nextId: "scout",
        image: "content/videogames/FirstPersonExperience.webp",
        title: "First Person Experience - Project 1",
        description: "Area 51 has been overrun by aliens - clear them out.",
        p1: "Make your way through the Area 51 facility whilst clearing out the alien infestation. Interact with the environment to open doors and continue with the mini questline present there. Save up points by killing enemies to allow you to purchase new weapons at the shop stations found there.",
        p2: "The two main games that influenced development were Fallout New Vegas for its setting and Cyberpunk 2077 for the weapons and combat. These however weren't the only inspirations as this was my most research heavy project meaning I have delved into various other games to collect many details that would shape this game and the vision I had for it.",
        p3: "This being the start of my second year of college, I decided to be very ambitious. I learnt modelling from scratch through Blender and created nearly all the assets present. I then learnt how to animate the characters and utilise NavMesh for AI. Finally, I pushed myself hard with programming and learnt various ways of doing things that would have been way above my skill level in the past.",
        history: [
            { type: "heading", text: "Timeframe" },
            { type: "paragraph", text: "Development started in January 2021 - Completed in March 2021" },
            { type: "heading", text: "A new beginning" },
            { type: "paragraph", text: "Second year of college had begun and it was a new start. The world had felt different with the pandemic still ongoing as we had to wear masks now and we got new teachers which seemed to be a lot more experienced and actually taught us stuff. This time around we were actually taught stuff like lighting, level design, enemy design even 3D modelling (I learnt blender and it was so intuitive)." },
            { type: "paragraph", text: "What I loved was how we actually dived deep into game development and this encouraged us to go further. Development had only begun after Christmas with the time prior to that spent learning all these fundamentals. Our only constraint here was to develop something that was to be played in first person hence the name. Having been playing a lot of Cyberpunk 2077 and being a massive fan of Fallout New Vegas I combined the two for a futuristic game set in Area 51." },
            { type: "image", src: "content/historic/FPEworld.webp", caption: "Original level design using cubes [January 2021]" },
            { type: "heading", text: "Ambitions" },
            { type: "paragraph", text: "All that passion made me very ambitious when it came to development, made even stronger by the fact we had been applying for university so I was trying my best to prove myself on top of having visions of potentially working for Ubisoft. I had let go of cybersecurity and put all my effort into making myself a much more capable game developer. I modelled nearly all the assets using Blender apart from a few weapons which I got from the asset store." },
            { type: "image", src: "content/historic/FPEsmg.webp", caption: "SMG - one of the many assets I created using Blender [January 2021]" },
            { type: "paragraph", text: "My creative skillset had improved so much so coupled with the extensive research I had done, I created a world that felt just right colour wise and honestly felt quite high quality. I even learnt how to create character models and rig them with AI for animations using Adobe Mixamo. Experimenting with navmesh meant I had realistic enemies which made the game feel that much more polished. There was a lot of work at each stage but I was more than happy to continue pushing myself further to get everything in place." },
            { type: "image", src: "content/historic/FPEaliens.webp", caption: "Self modelled aliens and weapons, rigged and animated using Adobe Mixamo [February 2021]" },
            { type: "heading", text: "How did we get here?" },
            { type: "paragraph", text: "After a year of programming I was so much more comfortable with development, enabling me to implement a quest line, interactions with the environment using abstraction, navmesh intelligent AI and even little mechanics like an FOV slider. How I pulled this off on a 4GB RAM Celeron notebook from 2015 I have no idea. That thing was barely usable yet I was capable of creating something that felt very comprehensive and it was a massive achievement for me. I even went into intense crunch from 9am-23pm on the last day just to finish it all off how I wanted it to be. The game itself may not be unique but the work that went into this still makes me proud to this day." },
        ],
        link: "https://0xdaniooo.itch.io/first-person-experience-project-1",
        date: "5th March 2021",
        dateNumber: "05032021",
        tags: ["", "2021", "3D"],
        devlog: "content/PDFs/FirstPersonExperienceDevlog.pdf",
        github: "https://github.com/0xdaniooo/First-Person-Experience",
        icons: ["unity", "cs", "blender", "photoshop"]
    },
    {
        id: "yeti-horror-game",
        prevId: "vehicle-game",
        nextId: "first-person-experience",
        image: "content/videogames/YetiHorror.webp",
        title: "Yeti Horror Game - Final Major Project",
        description: "Fix your helicopter and make it out of the snowy hills of Nepal alive.",
        p1: "Explore the snowy Himalayan mountains for any parts you can use to fix your helicopter. Stock up on weapons, supplies and traps to fight off the wildlife trying to hunt you down. You are not alone - a Yeti roams around looking for its prey. Make the best of the limited time you have here and get out in one piece.",
        p2: "The only restraint I was given was that the game had to center around the country of Nepal. I began by researching heavily into what Nepal was like which then gave me a wide range of ideas for the genre and possible experiences. A horror game based on the rumours of the Yeti is what I settled on as this seemed like something that would be very interesting to pursue.",
        p3: "Unfortunately, this is my only incomplete game as development was stopped halfway due to covid. With the time I had, I managed to make all the sprites for the game art and program most of the logic necessary to make this worth playing. The only missing pieces were the questline alongside all the horror elements which were essential to this project.",
        history: [
            { type: "heading", text: "Timeframe" },
            { type: "paragraph", text: "Development started in March 2020 - Ended in May 2020" },
            { type: "heading", text: "Nepal" },
            { type: "paragraph", text: "At the end of our first year of college we were tasked with creating a final project. For this we were given countries and I happened to get Nepal so I got to thinking of possible game ideas. Our two previous games were limited to what the teachers wanted us to do whilst still learning but here we were given free reign to create whatever we wanted in any perspective, so long as it matched our country. I had created a vast mind map of ideas but eventually settled on the Yeti Horror Game which I would build in first person." },
            { type: "image", src: "content/historic/YetiIdeas.webp", caption: "Mind map showing my concept ideas surrounding Nepal [March 2020]" },
            { type: "heading", text: "Covid lockdown" },
            { type: "paragraph", text: "Things would take a different turn as Covid was beginning to emerge. We had a progress week in March meaning we only came in for a quick checkup meeting then had the rest of the week off. That would be the last day we saw each other as our teachers were infected themselves shortly after and then the country went into lockdown. My laptop was very underpowered and so I had to switch to 2D using my first ever game as reference." },
            { type: "paragraph", text: "The Covid lockdown in general was actually amazing just doing work remotely listening to Spotify all day long not having to commute anywhere. I always had the belief that I wasn't creative but doing those Photoshop sprites and animation frames was so much fun. I got to chat with friends on a Discord server I had created whilst working on a game I felt passionate about - it truly didn't even feel like work and that was the happiest I had been in a while." },
            { type: "image", src: "content/historic/YetiSprites.webp", caption: "Item and player animations sprites on Adobe Photoshop [April 2020]" },
            { type: "paragraph", text: "My programming experience had also reached a point where I felt quite comfortable working on more complex mechanics such as dynamically instantiated enemies with healthbars and an inventory system. By now I had enough experience to grasp the basics and begin unravelling online scripts to fit my purpose exactly how I wanted them to. Then we got the unfortunate news to abandon this project, that instead we'd be graded for our past work." },
            { type: "image", src: "content/historic/YetiProgramming.webp", caption: "Feeling a lot more confident with programming having now had 7 months of experience [May 2020]" },
            { type: "heading", text: "Cybersecurity fascination" },
            { type: "paragraph", text: "What had also made 2020 so lively was that I found something I was unusually passionate about and that was cybersecurity. Since the start of the year I had been exploring bits here and there but it wasn't until lockdown that I decided to dive much deeper and get my hands dirty. I used Linux for the first time on a live USB, I had switched my browser to Firefox and got that hardened with privacy in mind, I would obsess about security concepts like hashes whilst playing Rainbow Six Siege and kept looking for answers to things trying to make sense of them (one example being what actually makes a website hackable - how does that even work?). I'd watch Seytonic and LiveOverflow, play Watch Dogs 2, anything just to develop myself technologically as I still had no idea how things actually worked. All of this would just be me dreaming as I thought I was stuck doing game development..." },
        ],
        link: "https://0xdaniooo.itch.io/yeti-horror-game-final-major-project",
        date: "25th May 2020",
        dateNumber: "25052020",
        tags: ["", "2020", "2D"],
        devlog: "content/PDFs/YetiFMPDevlog.pdf",
        github: "https://github.com/0xdaniooo/Yeti-Horror-Game",
        icons: ["unity", "cs", "photoshop"]
    },
    {
        id: "rhubarbarian",
        prevId: "scout",
        image: "content/videogames/Rhubarbarian.webp",
        title: "Rise of the Rhubarbarian - Game Jam",
        description: "Rise up and train the Rhubarbarian for a top secret mission.",
        p1: "Make your way through a test course designed to train the Rhubarbarian robot for an infiltration mission. Avoid deadly turrets and any other obstacles designed to stop you from reaching the finish point. Watch out for collapsing platforms awaiting your demise. Interact with fun puzzle games to progress further.",
        p2: "As this is a platformer puzzle game, it draws heavy inspiration from the classics like Portal for the general level design. As for the style and direction taken, Japanese culture played a large role right from the start of development which can be seen in concept art and mechanics present. That was the general idea as we only had two weeks to research and conceptualise everything.",
        p3: "Seeing as I was the programmer for our team, I was tasked with bringing all the features to life like the AI, creating puzzle games and menus. The puzzle games were all very niche which meant everything had to be done from scratch with no reference or starting code. Once all that was complete, I plugged all the mechanics into the level that had been put together by the game designer.",
        history: [
            { type: "heading", text: "Timeframe" },
            { type: "paragraph", text: "Development started in June 2021 - Completed in June 2021" },
            { type: "heading", text: "Game jam" },
            { type: "paragraph", text: "My final ever game would take the form of a 2 week game jam. This was something that came out of nowhere after completing our final games; we were assigned into groups, given a base template with assets and some movement code then left to develop something that would fit the theme of Rhubarbs. I was to be the programmer for our team, one guy was doing art design, another doing the 3D modelling and finally one game designer responsible for the level and coming up with ideas. The plan was to create a platformer with a Japanese theme as can be seen in the minigames which I was tasked with implementing." },
            { type: "image", src: "content/historic/RhubarbarianDesign.webp", caption: "Design document created by our team game designer [June 2021]" },
            { type: "heading", text: "First team project" },
            { type: "paragraph", text: "Everyone was kinda left to their own devices; I had my own build where I tested the features that I was tasked with creating and the others worked on their tasks. We'd chat about ideas on Discord and I really enjoyed myself taking on these requests then relaying them back, seeing how others were impressed with my skillset. I had improved so much enabling me to code without following videos (which I'd have to do anyways since these puzzle mini games didn't even exist as tutorials). Instead, I thought in terms of concepts and made things up as I went along. Our game designer was the one with the final game build and so I put together documentation so he could add these into the levels." },
            { type: "image", src: "content/historic/RhubarbarianDebug.webp", caption: "Managed to create the puzzle game after refining the implementation [June 2021]" },
            { type: "heading", text: "Programming journey" },
            { type: "paragraph", text: "All in all I was very impressed with the puzzle coding I did here alongside the respawning system and progressable levels. These were such high level mechanics which I could not believe I had pulled off nevermind doing so in two weeks mostly self coding everything. I had come a long way in terms of programming having only had around about 1.5 years worth of experience at this point. I was finally gaining some independance and didn't have to rely on tutorials to get things done but the end of the line though was that I was moving onto cybersecurity so these skills would be re-purposed, it was the start of a new chapter." },
        ],
        link: "https://0xdaniooo.itch.io/rise-of-the-rhubarbarian-game-jam",
        date: "28th June 2021",
        dateNumber: "28062021",
        tags: ["", "2021", "3D"],
        devlog: "",
        github: "https://github.com/0xdaniooo/Rise-of-the-Rhubarbarian",
        icons: ["unity", "cs"]
    },
    {
        id: "vehicle-game",
        prevId: "adventure-game",
        nextId: "yeti-horror-game",
        image: "content/videogames/VehicleGame.webp",
        title: "3D Vehicle Game - Project 2",
        description: "Back to the future! Discover what the DeLorean is capable of.",
        p1: "Drive your DeLorean equipped with highly deadly weapons to eliminiate other drivers stood in your way. Go for a ride and explore this sci-fi world and all it has to offer. Stack up cash and upgrade your vehicle at upgrade stops. Avoid the many traps set out on the roads.",
        p2: "This was mostly a generic vehicle game where I went with the sci-fi theme and took the DeLorean from Back to the Future. The main idea was to create a world with a specific style as I have explored various other themes for this project before eventually settling on an aesthetic.",
        p3: "Here I was given my very basic first introduction to 3D modelling which can be seen in the DeLorean and the buildings blocking the player from leaving the city. It is also where I pushed myself harder programming wise to try incorporating mechanics I could find on YouTube into my game, something I had not done before. All else was put together with Unity Store Assets which I experimented with.",
        history: [
            { type: "heading", text: "Timeframe" },
            { type: "paragraph", text: "Development started in January 2020 - Completed in February 2020" },
            { type: "heading", text: "3D modelling" },
            { type: "paragraph", text: "Our first game was played from a 2D perspective and so now we had shifted towards 3D development. For this we were “taught” 3D modelling using Autodesk 3D but this was so basic I had no idea what I was doing. All we got beforehand was a quick presentation showing us what's what and how you do things and that was it. Sure we got help when we needed it but if we wanted to learn more we had to rely on YouTube videos." },
            { type: "paragraph", text: "Theme wise I had chosen to go for something futuristic and since we had to stick to a vehicle game I went with the Delorean. I have no clue how I even created that car as I was barely grasping the basics and was constantly breaking the geometry which my teacher had to fix numerous times. The textures themselves weren't anything pretty either but in the end I had my Delorean and later went on to make a background facade wall object to surround my roads with - everything else was made with Unity assets." },
            { type: "image", src: "content/historic/VehicleModelling.webp", caption: "3D modelling using Autodesk 3D - I geniuenly had no idea what I was doing [January 2020]" },
            { type: "heading", text: "Programming baby steps" },
            { type: "paragraph", text: "This time around I tried adding features from YouTube videos which helped me learn how to structure my files and most importantly how to make scripts talk with each other. That was my biggest problem since without that it was impossible to allow for any interaction between components or to make anything slightly more complex. I had actually managed to make working vehicle AI based on waypoints which they would patrol and I added a point system which could be used to purchase health and weapons upgrades. By now I would say I was starting to enjoy game development and programming." },
        ],
        link: "https://0xdaniooo.itch.io/3d-vehicle-game-project-2",
        date: "14th February 2020",
        dateNumber: "14022020",
        tags: ["", "2020", "3D"],
        devlog: "",
        github: "",
        icons: ["unity", "cs", "photoshop", "autodesk"]
    },
    {
        id: "adventure-game",
        nextId: "vehicle-game",
        image: "content/videogames/AdventureGame.webp",
        title: "Top Down Adventure - Project 1",
        description: "Survive and thrive in this harsh apocalyptic world... or die trying.",
        p1: "A simple top down adventure game where you traverse a post-apocalyptic city of ruins with the goal of getting out. Be on the lookout for any mines laid around and razor sharp bushes blocking your path. Venture into buildings to locate loot and beware of the enemies spread around the world.",
        p2: "The one main inspiration for this project was Fallout 3 which pretty much influenced the entire game direction. This can be seen in the post-apocalyptic theme mixed with steampunk. I had explored a few different settings and directions for this game with this one taking the number one spot.",
        p3: "This was the first game I have ever made and my introduction to the world of programming having no prior experience before this. It's also where I learnt to use the Unity Game Engine and the process of creating games. All the sprites visible I had made on Photoshop and the coding was taught to us by our tutor who released tutorials we could follow.",
        history: [
            { type: "heading", text: "Timeframe" },
            { type: "paragraph", text: "Development started in October 2019 - Completed in December 2019" },
            { type: "heading", text: "First ever game" },
            { type: "paragraph", text: "Shortly after finishing high school and enrolling onto college (UK so I was only 16 at the time) I had my very first introduction to game development and programming. I had known I wanted to work with computers since probably around 8 years old so my two options were either game development as I loved gaming or IT which unfortunately I did not get accepted for. Despite my love for technology I wasn't exactly good at it and truthfully my only experience thus far was with image editing so that at least covered me partially." },
            { type: "heading", text: "Lost" },
            { type: "paragraph", text: "I was not used to the college lifestyle at all. Not being given explicit instructions and rather doing what you wanted to was alien to me. At the very least we were given programming video tutorials for each practical recorded by our teacher so that gave me some sort of structure. At the same time I felt like I wasn't as skilled as others were, that I was slow to pick things up and so that became a problem. I had been obsessed with Fallout 3 at the time so that became the clear theme that I wanted to replicate and art wise I didn't do too bad for my first attempt." },
            { type: "image", src: "content/historic/AdventureGameConcept.webp", caption: "Concept art I made using Adobe Photoshop for my game [October 2019]" },
            { type: "heading", text: "Programming troubles" },
            { type: "paragraph", text: "Having never programmed before in my life meant I struggled so hard when it came to implementing features. Luckily we had those video tutorials and so I decided to do these in advance to grasp things better and so I wouldn't fall behind. I genuinely thought I wasn't cut out for programming and that this could be the end. My only prior experience was that I had modified Minecraft PE Java mod variables to get more functionality but that was it. Because of that, I didn't even bother watching YouTube videos for features. I needed to focus entirely on making the best of what I had so that I understood what was happening and why. It was a very rough start but I persevered and got my first ever game completed." },
        ],
        link: "https://0xdaniooo.itch.io/top-down-adventure-project-1",
        date: "13th December 2019",
        dateNumber: "13122019",
        tags: ["", "2019", "2D"],
        devlog: "",
        github: "",
        icons: ["unity", "cs", "photoshop"]
    },
];
let itemHTMLobjects;
function createHTMLitem(item) {
    let rowGameDiv = document.createElement('div');
    rowGameDiv.className = 'row game';
    rowGameDiv.setAttribute('item-id', item.id);
    rowGameDiv.id = item.id;
    let date = item.dateNumber;
    rowGameDiv.dataset.timestamp = `${date.slice(4)}${date.slice(2, 4)}${date.slice(0, 2)}`;
    let colDiv1 = document.createElement('div');
    colDiv1.className = 'col-sm-12 col-md-12 col-lg-6 d-flex flex-column';
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
    let backgroundHistoryButton = document.createElement('p');
    backgroundHistoryButton.setAttribute('class', 'btn button-outline background-history d-flex justify-content-center align-items-center');
    backgroundHistoryButton.textContent = "Click to read more about this project's background";
    backgroundHistoryButton.innerHTML += '<i class="fa-solid fa-book" style="margin-left: 6px;"></i>';
    backgroundHistoryButton.addEventListener('click', () => {
        openProjectModal(item.id, itemObjects);
    });
    let technology = document.createElement('h5');
    technology.setAttribute('class', 'subheading-underline mb-2');
    technology.textContent = 'Technology:';
    col12Div.appendChild(gameTitleHeading);
    col12Div.appendChild(underlineDiv);
    col12Div.appendChild(descriptionParagraph);
    col12Div.appendChild(aboutGameHeading);
    col12Div.appendChild(aboutGameParagraph1);
    col12Div.appendChild(aboutGameParagraph2);
    col12Div.appendChild(projectDetailsParagraph);
    col12Div.appendChild(backgroundHistoryButton);
    col12Div.appendChild(technology);
    item.icons.forEach(i => {
        let icon = document.createElement('img');
        icon.src = icons.get(i);
        icon.setAttribute('alt', `${i} technology badge`);
        icon.setAttribute('loading', 'lazy');
        col12Div.appendChild(icon);
    });
    innerRowDiv.appendChild(col12Div);
    let gameFooterRowDiv = document.createElement('div');
    gameFooterRowDiv.className = 'row game-footer';
    let footerColDiv = document.createElement('div');
    footerColDiv.className = 'col-12 d-flex align-items-center mt-3';
    let itchIOLink = document.createElement('a');
    itchIOLink.href = item.link;
    itchIOLink.className = 'btn button-outline';
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
    let githubButton = document.createElement('a');
    if (item.github.length != 0) {
        githubButton.setAttribute('class', 'devlog-button');
        githubButton.setAttribute('style', 'margin-left: 20px');
        githubButton.setAttribute('href', item.github);
        githubButton.textContent = "See on GitHub";
        githubButton.innerHTML += '<i class="fa-brands fa-github" style="margin-left: 6px;"></i>';
        githubButton.target = "_blank";
    }
    footerColDiv.appendChild(itchIOLink);
    footerColDiv.appendChild(gameDateParagraph);
    if (item.devlog.length != 0)
        footerColDiv.appendChild(devlogButton);
    if (item.github.length != 0)
        footerColDiv.appendChild(githubButton);
    gameFooterRowDiv.appendChild(footerColDiv);
    colDiv1.appendChild(innerRowDiv);
    colDiv1.appendChild(gameFooterRowDiv);
    let rightColumnDiv = document.createElement('div');
    rightColumnDiv.className = 'col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center';
    let cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    let img = document.createElement('img');
    img.src = item.image;
    img.setAttribute('alt', `${item.id} game image`);
    img.setAttribute('loading', 'lazy');
    img.className = 'img-fluid game-image';
    cardDiv.appendChild(img);
    rightColumnDiv.appendChild(cardDiv);
    rowGameDiv.appendChild(colDiv1);
    rowGameDiv.appendChild(rightColumnDiv);
    return rowGameDiv;
}
;
function renderItems(tag) {
    let itemRoot = document.getElementById('games-root');
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
    itemHTMLobjects = Array.from(itemRoot.querySelectorAll('.game'));
    let currentSort = document.getElementsByClassName('current-sort')[0];
    setCurrentDropdown(currentSort.id);
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
handleHashRouting((targetId) => openProjectModal(targetId, itemObjects));
