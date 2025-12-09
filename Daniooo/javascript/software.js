import { softwareIcons as icons, openProjectModal } from "./shared-projects.js";
import { sortAscending, sortDescending, sortDefault } from "./shared.js";
let collections = [
    {
        id: "coll-all",
        tag: "",
    },
    {
        id: "coll-cli",
        tag: "CLI",
    },
    {
        id: "coll-gui",
        tag: "GUI",
    },
    {
        id: "coll-website",
        tag: "Website",
    },
    {
        id: "coll-browser-extension",
        tag: "Browser Extension",
    },
    {
        id: "coll-2025",
        tag: "2025",
    },
    {
        id: "coll-2023",
        tag: "2023",
    },
    {
        id: "coll-2022",
        tag: "2022",
    },
    {
        id: "coll-wip",
        tag: "Work in Progress",
    },
];
let itemObjects = [
    {
        id: "planify-study-tracker",
        prevId: "cybersecurity-toolkit",
        nextId: "daniooo-website",
        image: "",
        video: "https://www.youtube.com/embed/khLnwABBBGM",
        title: "Planify Study Tracker | Python Django REST Framework Website",
        description: "A website built with Django REST Framework + Bootstrap 5 aimed at students wanting to track their studies effectively in an intuitive manner.",
        about: "This idea has originally been cultivated and developed by me and my teammates for our team project module in our first year of university (more info on the inspiration and backstory can be found on the website\'s landing page). Unfortunately, with our limited programming experience and lack of time, we never managed to bring it to the level we had aspired to. Wanting to push my skills further, I decided to develop this idea from the ground up using what I had learnt and made our vision become a reality at last.",
        history: [
            { type: "heading", text: "Timeframe" },
            { type: "paragraph", text: "Development started in September 2022 - cut short in October 2022" },
            { type: "paragraph", text: "Picked back up in May 2023 - Completed in June 2023" },
            { type: "heading", text: "Planify team project" },
            { type: "paragraph", text: "This idea was originally executed by me, Joel (https://www.linkedin.com/in/joel-boci-952096237/) and Adam (https://www.linkedin.com/in/adamali2/) for our first year of university team project module at the start of 2022. We had high hopes for this project and tried our best to bring Planify to life. Ultimately our lack of experience meant we could not execute our vision as the architecture just wasn't suitable. Every single operation had to be performed on a seperate webpage which went entirely against the concept of our interactable board." },
            { type: "image", src: "content/historic/PlanifyOriginal.webp", caption: "Original team project Planify featured on the new version [June 2023]" },
            { type: "paragraph", text: "After completing my portfolio website and beginning to feel more comfortable with web development, I began raising the stakes. I needed a project that would challenge me and this was it. We had originally found the missing puzzle piece to completing this project once we were done with development and that was to use AJAX but it was too late at that point. This would be my starting point." },
            { type: "heading", text: "Async pains" },
            { type: "paragraph", text: "Second year of uni had just begun when I started designing the database schema from scratch. It needed to be flexible enough to link tables, weeks, tasks and nodes dynamically - something the original implementation could never support. Once the schema was in place I began experimenting with AJAX via a RESTful API, technology I had never used before. Operations linking each week and task up to their table were done on the backend upon an API call with nodes being generated automatically to match. Seeing content update dynamically without a page reload was a revelation but it introduced a host of new headaches." },
            { type: "image", src: "content/historic/PlanifyAsync.webp", caption: "Trying to eliminate race conditions arising from my async code [October 2022]" },
            { type: "paragraph", text: "Asynchronous code was something I've never touched before which made that concept entirely alien to me. Planify works by supporting multiple tables which are individually compiled using API calls to each of the components. Even rendering a single table proved troublesome as certain requests received late responses meaning data was not present when it was time to stitch it all up. I tried all sorts of ridiculous solutions here like using time delays as I just could not figure out how this black magic was supposed to conform to expected patterns. I had just started to grasp the solution when assignments took over and so I had to step away from development." },
            { type: "heading", text: "The other side" },
            { type: "paragraph", text: "End of second year of uni was when I returned to the project with more experience and a clearer perspective. I picked up where I had left off having learnt my API calls would need await statements, allowing for linear execution. From there, the project shifted from a technical struggle to a process of refinement: improving styling and implementing the features we had initially missed. I implemented an account system and had plans to expand this with email verification but I ended up dropping those. Overall, I had managed to make the impossible possible and with it my confidence had grown significantly. Up to this point this had been the most complex piece of software I've written and it gave me a sense of pride knowing I was capable of writing such code." },
            { type: "image", src: "content/historic/PlanifySolved.webp", caption: "Async API calls running one after the other for multiple tables [May 2023]" },
        ],
        link: "https://github.com/0xdaniooo/Planify-Study-Tracker",
        date: "13th June 2023",
        dateNumber: "13062023",
        tags: ["", "2023", "Website"],
        devlog: "content/PDFs/PlanifyDevlog.pdf",
        icons: ["python", "js", "django", "bootstrap", "html", "css"]
    },
    {
        id: "daniooo-website",
        prevId: "planify-study-tracker",
        nextId: "strong-app-data-visualiser",
        image: "",
        video: "https://www.youtube.com/embed/NPRg8yjdCU4",
        title: "Daniooo Website | HTML, SCSS, TypeScript and Bootstrap Website",
        description: "My personal website (the one you're looking at now) built with HTML, SCSS, TypeScript and Bootstrap 5 where I host all my content in one convenient place.",
        about: "Back in September 2022, I had created a website under this same URL where I displayed nearly the same content as seen here. This was made in anticipation of my placement search, allowing potential employers to see my work in a visual format. My skillset was very lacking at that time as this had only been the second website I had developed and thus aesthetically the layout looked very cheap and outdated; functionality wise, everything was very restrictive as all content was housed on a singular page which meant I could not include all my pieces of content. Wanting to test my new and improved skillset, I decided to rework the website and incorporate all the details and elements I had not been able to implement previously.",
        history: [
            { type: "heading", text: "Timeframe" },
            { type: "paragraph", text: "- First version's development started in September 2022 - ended in September 2022" },
            { type: "paragraph", text: "- Current version's development started in June 2023 - ended in July 2023" },
            { type: "paragraph", text: "- Updated every few months whenever I get new ideas" },
            { type: "heading", text: "Version 1.0" },
            { type: "paragraph", text: "I had wanted to create a portfolio page for myself for quite some time. I had just started my second year of uni and would need to find a way to show off my skills to potential employers to help me land a student placement role. This being my second ever website I still didn't exactly know what I was doing but with some planning I was able to put together a site that featured things I had created in the past - namely my projects, articles, games and media. Once it was complete, I had to look into server hosting and purchase a domain which felt like quite the accomplishment. I was pretty proud of having my own plot of land on the internet." },
            { type: "paragraph", text: "There were numerous issues with this design; all the content was housed on a singular page meaning the entire page was a mess which you had to scroll through to get to each section. To make matters worse, media images were full quality and thus took ages to load and were coupled into carousels not to mention how the styling itself looked like something out of the early 2000's. Still, I ended up successfully getting a placement at Leeds City Council and this very website was one of the main reasons for having stood out from the crowd." },
            { type: "image", src: "content/historic/OldDaniooo1.webp", caption: "" },
            { type: "image", src: "content/historic/OldDaniooo2.webp", caption: "Notice how the sections flowed one after another - very limited space wise [September 2022]" },
            { type: "heading", text: "Daniooo.com Remastered" },
            { type: "paragraph", text: "Once I had finished Planify at the end of my second year I went straight to work updating my portfolio site. The colour scheme itself had stayed virtually the same however the architecture would be completely overhauled - each section would be housed on its own site. The second major point was that I would put as much effort as possible into making navigation enjoyable. This meant engineering various little UX features like a progression slider and highlighting anything that was clickable with a red tint." },
            { type: "paragraph", text: "In this process I got to polish my Bootstrap experience and styling knowledge. Perfection is unattainable however I wanted to get this as close to my vision as possible no compromises no matter how long it would take. Fortunately, I had improved my skillset dramatically since the first iteration so it wasn't too difficult to get an idea then get it implemented immediately. I wanted to create something that felt uniquely mine and so allowed myself to experiment with little features eg the breadcrumbs. The core idea was that I would build something that would not need any major redesigns, something that would keep me satisfied and that's exactly what's happened." },
            { type: "image", src: "content/historic/NewDaniooo.webp", caption: "Finally had the space to give each project more attention [June 2023]" },
            { type: "heading", text: "Continous development" },
            { type: "paragraph", text: "Since the update I have been constantly optimising and innovating the site every few months. This happens either when I get new ideas or I finally find a way to execute ideas I couldn't implement previously. Quite a large effort has been put in place to optimise the performance through changing all the media to .webp files, significantly saving on bandwidth. Other changes include icons displayed on software and videogame projects + articles, article word counts, multiple Spotify playlists on the about me page and the new backstory functionality. Features come and go but in the process I become a much better developer and allow myself the space to try out new ideas since this is the only project I've maintained after initial creation." },
        ],
        link: "https://github.com/0xdaniooo/Daniooo-Website",
        date: "6th July 2023",
        dateNumber: "06072023",
        tags: ["", "2023", "Website"],
        devlog: "content/PDFs/DanioooWebsiteDevlog.pdf",
        icons: ["bootstrap", "html", "ts", "scss"]
    },
    {
        id: "strong-app-data-visualiser",
        prevId: "daniooo-website",
        nextId: "secure-passphrase-generator",
        image: "",
        video: "https://www.youtube.com/embed/fvG2z0ZIqt0 ",
        title: "Strong App - Data Visualizer | Python Tkinter + Plotly Project",
        description: "Data visualization tool for plotting workout data from Strong App's CSV files - Built with Tkinter and Plotly.",
        about: "Ever since I started working out at the gym, I've been keeping a detailed record of nearly every workout I have done (which includes exercises, weights and reps). It's been really useful helping me see what I've done and then going higher. Such a large dataset has also been great for viewing my progression. Reading all this data was great but I wanted a way to visualise it which is exactly what this project solves. With plenty of flexibility, it allows you to plot exercises, weights, reps, decide how it is presented and view it on easy to understand charts.",
        history: [
            { type: "heading", text: "Timeframe" },
            { type: "paragraph", text: "Development started in July 2023 - Completed in July 2023" },
            { type: "heading", text: "Visualisation" },
            { type: "paragraph", text: "I have always been obsessive about collecting data so it was nothing out of the ordinary for me to keep detailed logs of all my workouts since starting gym the year before. Initially I stored these on my notes app before eventually transitioning to a more dedicated tracker using Strong. While the app was excellent at data collection, I quickly felt limited by how little control I had over how that data was visualised. I cared a lot about wanting to see my progress over time and to check where I had improved the most but the built in graphs were quite basic and focused on metrics I didn't care that much about. Unfortunately that design choice was intentional as the developers wanted a tracker anyone could use without getting overwhelmed." },
            { type: "heading", text: "Data analysis" },
            { type: "paragraph", text: "Needing something new to work on at the time, I decided to take matters into my own hands. I exported my workout history as a CSV file and began dissecting the format to see what could be extracted and reshaped. I built a clean GUI around the data and focused heavily on making the graphs feel readable and intuitive. This time around I managed to make everything look exactly how I wanted following on from my Buffer Overflow Visualiser experience and I tried my best to match the style of the app, making this feel like an extension. At last I could see my data visually and the final product was exactly what I wanted." },
            { type: "image", src: "content/historic/StrongGraph.webp", caption: "Exactly the sort of data I wished to see on the app [July 2023]" },
        ],
        link: "https://github.com/0xdaniooo/Strong-App-Data-Visualizer",
        date: "17th July 2023",
        dateNumber: "17072023",
        tags: ["", "2023", "GUI"],
        devlog: "",
        icons: ["python", "tkinter"]
    },
    {
        id: "buffer-overflow-visualiser",
        prevId: "basic-terminal-poker",
        nextId: "cybersecurity-toolkit",
        image: "",
        video: "https://www.youtube.com/embed/OFz46cKP9Pk",
        title: "Buffer Overflow Visualizer | Python Tkinter Project",
        description: "A Python Tkinter GUI app designed to visualize the buffer overflow security vulnerability in an easy to understand interactive format.",
        about: "For a long time I had been fascinated by the buffer overflow vulnerability and the lower level workings of computer code. I really wanted to do something with this concept which led me to create this educational tool which visualises how it all happens both code wise and memory wise. There were no such programs on the web which I decided to change as learning from diagrams can be quite hard for some (as was the case for me). With plenty of interactivity and customization, I have managed to create this easy to use cybersecurity resource.",
        history: [
            { type: "heading", text: "Timeframe" },
            { type: "paragraph", text: "Development started in May 2022 - Completed in June 2022" },
            { type: "heading", text: "Buffer overflows" },
            { type: "paragraph", text: "I had been playing around with CTFs around the time as my stream of ideas had come to a halt. Whilst exploring the possibility of visualising sorting algorithms I made the mistake of looking on GitHub - there were plenty of those around and so that idea lost its spark immediately. Trying my best to think of something I somehow mashed cybersecurity with visualisation and hit upon creating a buffer overflow visualiser." },
            { type: "paragraph", text: "I hadn't felt such strong passion up to this point - I finally had a unique idea that to my knowledge had not been executed by anyone. All my projects before this were simple concepts anyone could make. Some of my initial plans were to dive deep into the low level workings of code featuring code decompilation and assembly but obviously that was way outside of my level of expertise. I drew some UI mockups and set out to work." },
            { type: "image", src: "content/historic/BufferOverflowCS.webp", caption: "Core idea developed using C# WinForms [June 2022]" },
            { type: "heading", text: "Tkinter" },
            { type: "paragraph", text: "Originally I did all my development using C# WinForms. I had never developed a GUI before and so defaulted to C# as I had prior experience using that for my college videogames. I managed to get the functionality working but doing so through Visual Studio was such a horrible experience with things breaking and not being able to delete things reliably. I needed an alternative. Tkinter had come up in my conversations with friends in the past so I finally decided to look into it. After some quick research it proved to be a lot easier than WinForms and so without a second thought I got to work porting the codebase." },
            { type: "image", src: "content/historic/BufferOverflowPort.webp", caption: "Had to get used to placing each component through code [June 2022]" },
            { type: "paragraph", text: "Sure enough development became much easier once I switched to Tkinter and I had the added benefit of learning more about Python. Visually it was a bit limited and I spent a ton of time digging through documentation to learn how to make it look the way I wanted but I had a lot of fun having also been rewatching Mr Robot at the time which made this work feel more meaningful. In the end I was happy to create a tool that actually worked nicely and illustrated the idea so well - I couldn't have expected that my venture into algorithms would have taught me about the low level workings of computers that translated itself into an interactable training tool." },
        ],
        link: "https://github.com/0xdaniooo/Buffer-Overflow-Visualizer",
        date: "24th June 2022",
        dateNumber: "24062022",
        tags: ["", "2022", "GUI"],
        devlog: "content/PDFs/BufferOverflowVisualizerDevlog.pdf",
        icons: ["python", "tkinter"]
    },
    {
        id: "ryanair-wizzair-scraper",
        prevId: "secpass",
        image: "",
        video: "https://www.youtube.com/embed/3JDruGENFe8",
        title: "Ryanair-WizzAir Scraper | Browser Extension",
        description: "A helper extension designed to streamline and simplify flight information retrieval from Ryanair and WizzAir.",
        about: "As someone who has family in Poland, it is common for me to look up flights and their prices to determine the cheapest flights available. This process cost me lots of time to perform manually as I transcribed all the details one by one onto notepad - something which gradually eroded my patience. Wanting to automate this, I created an extension which through the click of a button or key combination grabs all the necessary information (and more) for you and stores it in a table which can be sorted based on preference with options to export the saved information to human readable text or as a CSV.",
        history: [
            { type: "heading", text: "Timeframe" },
            { type: "paragraph", text: "Development started in October 2024 - cut short in November 2024" },
            { type: "paragraph", text: "Picked back up in May 2025 - Completed in May 2025" },
            { type: "heading", text: "Problem solving perspectives" },
            { type: "paragraph", text: "Flight searching became one of those background tasks that quietly consumed far more time than it ever should have. Whenever I needed to travel, I found myself repeatedly jumping between dates, routes and airlines, manually recording prices just to make sense of the options. That tedious repetition ate away at me and I hated it. I had explored the idea of automation in the past through a bot however captchas and the absence of official APIs quickly made that route impractical so I scrapped it. Rather than abandon the idea altogether, I shifted focus toward building something that could at least remove the most painful parts of the process." },
            { type: "heading", text: "SecPass proof of concept" },
            { type: "paragraph", text: "Throughout development I got to see how these sites behaved internally, learning how to extract structured data from what was never designed to be human friendly. It also doubled as a proof of concept to test whether SecPass was even viable to develop in the first place (which I was glad to learn was the case). I had never created browser extensions so this gave me the chance to see how these are put together and how much functionality they offer. Eventually I had to cast the idea aside temporarily to focus on my final year of uni and all the assignments I had on my plate." },
            { type: "image", src: "content/historic/RyanairWizzair.webp", caption: "Early development stages [October 2024]" },
            { type: "heading", text: "Delivering a working solution" },
            { type: "paragraph", text: "After returning to this project once uni was complete, I finally had a way of extracting my desired information (and more) rapidly through a single keybind. There's always different ways to look at travel decisions; a cheaper ticket isn't really cheaper if you pay more to get to the airports themselves which is precisely why I wanted all data to be sortable. Having been developing closed source projects with aims of monetisation, I decided to publish this extension and therefore needed it to be usable on major browsers with those being Firefox, Chrome and Edge. This meant conforming properly to manifest standards and browser dependant APIs then going through their particular publishing processes. I had plans to monetise this but I dropped those as there wasn't much incentive to do so." },
        ],
        link: "https://github.com/0xdaniooo/Ryanair-WizzAir-Scraper",
        date: "7th May 2025",
        dateNumber: "07052025",
        tags: ["", "2025", "Browser Extension"],
        devlog: "",
        icons: ["html", "bootstrap", "ts", "scss"]
    },
    {
        id: "cybersecurity-toolkit",
        prevId: "buffer-overflow-visualiser",
        nextId: "planify-study-tracker",
        image: "",
        video: "https://www.youtube.com/embed/IYvIZfPaNqw",
        title: "Cybersecurity Toolkit | Python Django Website Project",
        description: "A Django website which provides many useful tools when working in the realm of cybersecurity.",
        about: "Shortly before the development of this website, I had been doing a lot of reverse engineering challenges on crackmes.one in my spare time. I had been making use of online ASCII convertors for decoding bytes however this could take time as sometimes the values needed some cleaning before they would be accepted. This gave me the idea of making my own convertor with some custom functionality such as my hex to ASCII convertor which would perform the cleaning itself. After that, I expanded the project with various other tools that would be helpful to have at my disposal.",
        history: [
            { type: "heading", text: "Timeframe" },
            { type: "paragraph", text: "Development started in September 2022 - ended in September 2022" },
            { type: "heading", text: "Reverse engineering" },
            { type: "paragraph", text: "I had taken a break from programming to upskill myself in the realm of cybersecurity and found that reverse engineering was my favourite topic, catering to my appreciation for details. This website thus came as a random idea, having wanted to get back into coding after my long period of reverse engineering. I had spent a lot of time debugging ELF binaries with GDB, inspecting memory and translating hexcode bytes to human-readable information. This required me to keep note of various sites, each one for a specific purpose." },
            { type: "heading", text: "Hexcode translation" },
            { type: "paragraph", text: "The idea then was to create a Swiss knife application that would handle all of these tasks for me and so I did just that. I identified all the things I would need and created specific pages for them. My favourite was the hex-to-ASCII converter. Depending on where you got your bytes from, you would have to sanitise them to make them suitable for conversion. This was something that bugged me so I created an algorithm to detect the notation and output the correct information. Not only that but you could convert multiple types all at the same time!" },
            { type: "image", src: "content/historic/CybersecHexToAscii.webp", caption: "Forget about sanitisation and convert multiple types at the same type [September 2022]" },
            { type: "heading", text: "Challenging limiting beliefs" },
            { type: "paragraph", text: "This was my first introduction to web development. While I had technically worked on Planify for a team project at the start of the year, I had not touched much of the frontend which was the part that intimidated me. I had always weirdly thought it above me and that I'd never be capable of making sense of all the HTML syntax and the mess that is CSS. It ended up being a very quick project, having barely taken any time to complete but the effect was that I now had web development under my belt and realised it wasn't anything difficult at all." },
        ],
        link: "https://github.com/0xdaniooo/cybersecurity-toolkit",
        date: "17th September 2022",
        dateNumber: "17092022",
        tags: ["", "2022", "Website"],
        devlog: "",
        icons: ["python", "django", "bootstrap", "html", "css", "js"]
    },
    {
        id: "bank-system",
        nextId: "simple-grade-calculator",
        image: "",
        video: "https://www.youtube.com/embed/0wXHDmBUiRU",
        title: "Bank System | C++ CLI Project",
        description: "A simple bank system written in C++ which I used to learn the basics of the C++ language. Written for Windows exclusively.",
        about: "C++ was a language I was really interested in for a long time but just needed a project to use it on. I decided to make a bank system as it's something that was simple to understand but would allow me to test as much features of the language as I wished. Throughout development of this program, I got to learn not only how to use C++ but also troubleshooting compilation issues and any other quirks the language has which was a very enjoyable journey.",
        history: [
            { type: "heading", text: "Timeframe" },
            { type: "paragraph", text: "Development started in April 2022 - ended in April 2022" },
            { type: "heading", text: "A very quirky language" },
            { type: "paragraph", text: "My main interest in C++ had been sparked by my game development days back in college. Being a Unity developer I was accustomed to C# while it seemed that all game companies used C++ for their games. This and the involved nature of the language made me very eager to try it out. I started out by following tutorials but the knowledge came in one ear and went out the other so I decided to model a real-world system that I already understood: a bank. It gave me a clear blueprint to work from — accounts, balances and transactions." },
            { type: "heading", text: "Errors and more errors" },
            { type: "paragraph", text: "I originally wanted to push the project much further through dynamic window prompts using abstraction and a more sophisticated interface but my skillset was still very limited back then. I was on the verge of scrapping the idea entirely but instead I simply scaled back and focused on getting the core logic working reliably. The explicit nature of this language made work very weirdly satisfying especially when it came to header files. I had my first real exposure to compiler errors and error messages that were absolutely nonsensical but I had a lot of fun and I attribute a lot of my low-level code understanding to my experience with this compilation pipeline having needed to learn the linker and translation units." },
            { type: "image", src: "content/historic/BankInterface.webp", caption: "Bank system navigation options [April 2022]" },
        ],
        link: "https://github.com/0xdaniooo/Bank-System",
        date: "22nd April 2022",
        dateNumber: "22042022",
        tags: ["", "2022", "CLI"],
        devlog: "",
        icons: ["cpp"]
    },
    {
        id: "basic-terminal-poker",
        prevId: "simple-grade-calculator",
        nextId: "buffer-overflow-visualiser",
        image: "",
        video: "https://www.youtube.com/embed/0w7nqefX_fw",
        title: "Basic Terminal Poker | C# CLI Project",
        description: "A basic Poker game you can play in your terminal. Featuring a barebones design as it was intended for the purposes of teaching myself how Poker worked for a future GUI implementation.",
        about: "Poker had been something that was heavily on my mind after playing it with friends and family. The rules and way of playing was quite complex for me at first so I decided to speed up my learning by building this program and learning all the intricacies by hand. The base of the game is built off of a YouTube series (https://www.youtube.com/watch?v=Au31WqDtXYI) which I took and expanded to allow for a dynamic experience.",
        history: [
            { type: "heading", text: "Timeframe" },
            { type: "paragraph", text: "Development started in May 2022 - ended in May 2022" },
            { type: "heading", text: "Card games" },
            { type: "paragraph", text: "May was quite a social month with me playing poker regularly with friends and family. Like many, I can be quite slow to pick up card game rules and it bugged me that I wasn't making sense of poker - something that ate away at me until I began studying the rules in depth. What began as casual curiosity quickly turned into a desire to actually understand what was happening at every stage of a round: from dealing and betting to turn order and win conditions. Naturally, I wanted to see if I could recreate that logic in code - after all games are just a series of instructions." },
            { type: "heading", text: "The GUI that never came" },
            { type: "paragraph", text: "I began by following a basic tutorial which happened to be in C# just to get myself a minimal playable version working. From there onwards, I started reverse engineering the code and altering the flow of the game using real cards and chips from a poker set I had at my desk for reference and eventually expanded it to support multiple players and more variations. I had plans to use this as a base for a future GUI implementation but my interests faded and that never happened (probably because I tried JavaFX and hated it)." },
            { type: "image", src: "content/historic/PokerGame.webp", caption: "Fully playable poker game [May 2022]" },
        ],
        link: "https://github.com/0xdaniooo/Basic-Terminal-Poker",
        date: "22nd May 2022",
        dateNumber: "22052022",
        tags: ["", "2022", "CLI"],
        devlog: "",
        icons: ["cs"]
    },
    {
        id: "secure-passphrase-generator",
        prevId: "strong-app-data-visualiser",
        nextId: "netos",
        image: "",
        video: "https://www.youtube.com/embed/XZJE8lh4DNQ",
        title: "Secure Passphrase Generator | Python CLI Project",
        description: "Passphrases generated by https://untroubled.org/pwgen/ppgen.cgi with an added level of security including special characters and letter/number substitutions.",
        about: "Being in cybersecurity, I've come to value my account safety a lot. I've worked hard to keep all my accounts secure which can sometimes be difficult when you can't copy and paste them over (as can be the case on consoles for example). For this reason, I started using passphrases as they are friendlier to type whilst maintaining a high level of protection. Previously, I generated them on untroubled.org then sprinkled in another level of protection by manually changing some letters to numbers and adding in special characters - a process that can get quite boring which is why I created this simple automation script to help speed that up.",
        history: [
            { type: "heading", text: "Timeframe" },
            { type: "paragraph", text: "Development started in July 2023 - ended in July 2023" },
            { type: "heading", text: "Automation" },
            { type: "paragraph", text: "Yet again I had finished another project and found myself with nothing to do so I finally decided to automate a process I had been meaning to tackle for a while. I could have created the word lists and generation logic from scratch but that felt unnecessary since a reliable tool already existed. Instead, I focused on automating the modifications that I myself performed on these passphrases like adding numbers, special characters and substitutions for additional strength and compliance. I also got to play around with HTML retrieval as this would be the best method of interfacing with the webpage." },
            { type: "image", src: "content/historic/PassphraseGenerator.webp", caption: "The site I had been using for my passphrases [July 2023]" },
            { type: "heading", text: "Boring but useful" },
            { type: "paragraph", text: "The end result was a tiny but satisfying script that completely removed a repetitive task from my workflow. I still use it to this day — all I need to do is open my terminal, run the script and my credentials are instantly ready + I get to choose the parameters myself to find the best combination depending on the site's needs. Nothing too fancy but it gets the job done." }
        ],
        link: "https://github.com/0xdaniooo/Secure-Passphrase-Generator",
        date: "19th July 2023",
        dateNumber: "19072023",
        tags: ["", "2023", "CLI"],
        devlog: "",
        icons: ["python"]
    },
    {
        id: "simple-grade-calculator",
        prevId: "bank-system",
        nextId: "basic-terminal-poker",
        image: "",
        video: "https://www.youtube.com/embed/hA7XPH1jf6I",
        title: "Simple Grade Calculator | Python CLI Project",
        description: "A simple command line tool written in Python to make calculating your grades easier (based on percentages)",
        about: "Having just finished my C++ Bank System project, I wanted to continue programming to keep myself entertained. I decided to make a grade calculator as that was something that could be of use for me to calculate my grades ahead of them being released for our results day. Aside from that, this also served as a good project to experiment more with Python as it's a language I had less experience with at the time.",
        history: [
            { type: "heading", text: "Timeframe" },
            { type: "paragraph", text: "Development started in April 2022 - ended in April 2022" },
            { type: "heading", text: "For my portfolio" },
            { type: "paragraph", text: "The first year of university had come to a close and I had nothing to work on. I had just finished my bank system project meaning I wanted to continue the momentum and build myself up, having seen just how easier it was to learn programming and languages through these projects. In retrospect, this little program had kickstarted my passion for developing personal projects and led to the lenghty portfolio that I have now." },
            { type: "heading", text: "Introduction to Python" },
            { type: "paragraph", text: "Sure I had used Python in my uni course but I never had a chance to play around with it myself, adapt it to my use cases. I created a few little games following tutorials right before this which primed me with the general structure of .py files. I then got to work creating this little calculator so I could get my grades before they were released to us. I got it done that same day but nevertheless I was left with a positive impression and had another bit of work to call my own - setting a pattern for the months to come." },
            { type: "image", src: "content/historic/SimpleGrade.webp", caption: "Clean little program for calculating grades [April 2022]" },
        ],
        link: "https://github.com/0xdaniooo/Simple-Grade-Calculator",
        date: "24th April 2022",
        dateNumber: "24042022",
        tags: ["", "2022", "CLI"],
        devlog: "",
        icons: ["python"]
    },
    {
        id: "netos",
        prevId: "secure-passphrase-generator",
        nextId: "secpass",
        image: "content/software/netOS.webp",
        video: "",
        title: "netOS Cybersecurity Network Simulator | Python Django Website Project",
        description: "Work in progress",
        about: "During my student work placement at Leeds City Council, I was heavily exposed to the inner workings of its vast digital infrastructure. Combining this with my interest in systems sparked an idea: what if I emulated a network that allowed the user to manipulate it in any way they wanted? Thus netOS was born - a tool that combines packet tracing with computer hacking to form a simulator where an entire system of computers can be crippled with various exploits.",
        history: [
            { type: "heading", text: "Timeframe" },
            { type: "paragraph", text: "Development started in February 2024 - progressing in short bursts every few months" },
            { type: "heading", text: "ctOS Simulator" },
            { type: "paragraph", text: "netOS was originally supposed to be a ctOS simulator inspired by Watch Dogs, the game that got me into cybersecurity. I was lost as to what my next project should be, trying to catch some sleep when I had the insight that I could try developing a tool which allows you to control city infrastructure just like in the game but on a more technical scale. Django was the obvious best candidate as I had already built up a great amount of experience and had decided trying other GUI packages could prove to be too complex." },
            { type: "image", src: "content/historic/netOSConcept.webp", caption: "Original ctOS concept art [February 2024]" },
            { type: "heading", text: "Closed source" },
            { type: "paragraph", text: "Development was moving along nicely and so were my ideas. Had I continued to develop under ctOS I would have made the repository public but the decision came that this was shaping up to be more than a mere side project. Slowly but surely I carved out its own identity until I realised we could do so much more with this. We rebranded to netOS and ever since then the art direction has taken a completely different turn. The core idea had remained the same but the means of getting there were altered." },
            { type: "paragraph", text: "None of this would have been possible without the help of my friend Joel (https://www.linkedin.com/in/joel-boci-952096237/). Having not gone to work for a software company I was lacking the organisational skills to make a project of this scale possible. We setup a development workflow where features are defined on Trello under unique tasks then developed on seperate Git branches. Completed tickets are code and QA reviewed by the other person before being merged into main. Not only had this clarified the development process dramatically, it also taught me how software is developed in the real world. My approach would instead have been developing features sporadically on main, hoping to reach the end result bit by bit. My main focus is the backend and overall project design work while Joel focuses on the frontend - an arrangement that has gotten us far." },
            { type: "heading", text: "Magnum opus" },
            { type: "paragraph", text: "There's two major hurdles with this project constantly at play: the architecture and the networking knowledge. Trying to emulate technology is already quite laborious made even worse by the fact there's no platform to build it on until we design it. The entire system needs to be built from the ground up and that takes so much design work, development and testing - making sure components work together and will scale well in the future. Bad decisions lead to significant overhead such as when we continued developing our own drag and drop frontend object manipulation logic; the codebase for that was so convulted and features were a pain to develop. Simply switching to a framework made things much more manageable and meant we solved 5+ features with just a few lines of code." },
            { type: "image", src: "content/historic/netOSGateways.webp", caption: "One of the many drawings used to figure out networking [May 2024]" },
            { type: "paragraph", text: "Things have however improved over time. With experience came clarity and this helped me see the project from new perspectives. Major milestones have already been reached in recent times after the design and implementation of a new visual look (can't unveil this sadly) and finally completing the core routing algorithm which was ported to the backend. The before mentioned frontend overhaul has also simplified development making work more enjoyable. All the tickets have been redefined to clearly outline how and when features should be implemented. This is my most ambitious project by far and I've learnt so much along the way. I can't wait for the day when I can finally share this with the world." },
            { type: "heading", text: "We'll get there eventually" },
            { type: "paragraph", text: "Unfortunately seeing as I'm hoping to monetise this I can't reveal more information such as the visuals, features and the code itself as I'd be leaking too much of the idea. This project has been in the works for a quite a while and it'll likely stay this way for the foreseeable future - there's just so much to do. Work is pretty sporadic; we pick it up for a few weeks, make some great progress then life takes over again." },
            { type: "image", src: "content/historic/netOSRouting.webp", caption: "Successful routing operation launched via websockets, executed on the backend server [May 2025]" },
            { type: "paragraph", text: "Ultimately the plan is to launch this website under a subscription plan. Users will be able to sign up and decide how many resources they will need (this will need throttling and hosting itself will cost money, subscriptions will require a payment gateway - just a few examples of the sheer amount of variables to consider when trying to get close to making this a reality)." },
        ],
        link: "",
        date: "??????",
        dateNumber: "99999991",
        tags: ["", "Work in Progress", "Website"],
        devlog: "",
        icons: ["python", "django", "ts", "scss", "html"]
    },
    {
        id: "secpass",
        prevId: "netos",
        nextId: "ryanair-wizzair-scraper",
        image: "content/software/SecPass.webp",
        video: "",
        title: "SecPass Password Manager | Python Django Website + Extension Project",
        description: "Work in progress",
        about: "Security, convenience and speed are the three core tenets of SecPass, a browser extension based password manager which aims to streamline the storage and maintenance of all your security information to keep your data out of the next credential dump. Rest easy knowing your data is safe on your local device away from the cloud where it may be susceptible to attacks. Access your information wherever you may be whether that be your desktop, mobile device or even public devices - you are in total control over your data.",
        history: [
            { type: "heading", text: "Timeframe" },
            { type: "paragraph", text: "Development started in December 2024 - Completed for University demo end of April 2025" },
            { type: "paragraph", text: "Immediately picked back up early May 2025 - Ongoing ever since" },
            { type: "heading", text: "What do I do?" },
            { type: "paragraph", text: "Going into final year, I had absolutely no idea what I wanted to build. Everyone around me seemed to arrive with a crystal clear idea while I was completely directionless, stuck knowing I had to commit to something substantial without having any real conviction behind any one idea." },
            { type: "paragraph", text: "That changed during the induction lecture. Out of nowhere, the concept hit me with visceral clarity. As soon as I got home I drafted up the first design document while the idea was still fresh in my head. I even found an emoji (flower card, Notion variant 🎴) to represent the colour scheme I had pictured and I stuck to this up until I had developed my logo and UI designs." },
            { type: "paragraph", text: "Inspiration had been taken from Myki. This was a password manager I had used daily for my credentials and note taking before it was suddenly discontinued early 2022, and when it vanished it left behind a noticeable gap that nothing else really seemed to fill properly. Finally I had something that I felt strongly for and could dedicate time to making it happen." },
            { type: "image", src: "content/historic/SecPassPoster.webp", caption: "My vision for this project in the form of a poster [January 2025]" },
            { type: "heading", text: "Hectic final year lifestyle" },
            { type: "paragraph", text: "Conceptually, my ambition was far greater than what I could realistically deliver at the time. To pass the module, we had to produce a lengthy report of around 8000 words on top of creating a related software solution. I'm not much of an academic so having to do extensive literature reviews and research eroded my sanity. I prefer to develop products however even that proved to be difficult as I couldn't find the motivation to get anything moving. To add to the fun, I had various other highly involved modules ongoing alongside part-time work and learning to drive - I bit off more than I could chew. " },
            { type: "heading", text: "Proof of concept" },
            { type: "paragraph", text: "In the final stretch I more or less forced myself to get the browser extension into a usable state. Originally, the plan was for the extension to communicate with a backend relay server that would handle synchronisation and vault operations but there simply wasn’t time to design and implement that entire layer properly. All I managed to complete on the backend side was a basic authentication system for login and signup. Even then, the extension alone consumed an enormous amount of time just to make it stable, usable and presentable enough for the demo." },
            { type: "paragraph", text: "Despite how bare bones the final submission was compared to the original vision, finishing it brought a quiet sense of relief. It proved that the idea was technically viable, even if it was heavily stripped back. Since then, I’ve picked the project back up with a different mindset — I’m now working towards getting the extension to properly communicate with the server exactly as I originally intended. The goal now is simply to produce a complete proof of concept of the original vision and demo the completed work." },
            { type: "paragraph", text: "Given that this project was originally developed as part of my dissertation, I have chosen to keep the codebase private. Moreover, I'm leaving the possibility open that one day I may return to it and try to execute it however given how much security proofing that would require and my netOS project taking precendance that's unlikely to happen. Myki followed a model where the vault was stored on a mobile or desktop app and communicated to the extension or relay; the storage mechanisms used for browser extensions are just way too volatile making this merely a prototype." },
            { type: "image", src: "content/historic/SecPassEncryption.webp", caption: "Proof of concept for the encryption performed on the vault [March 2025]" },
        ],
        link: "",
        date: "??????",
        dateNumber: "99999992",
        tags: ["", "Work in Progress", "Website"],
        devlog: "",
        icons: ["python", "html", "django", "ts", "scss"]
    },
];
let itemHTMLobjects;
function createHTMLitem(item) {
    let projectDiv = document.createElement('div');
    projectDiv.setAttribute('class', 'row project');
    projectDiv.setAttribute('item-id', item.id);
    let date = item.dateNumber;
    projectDiv.dataset.timestamp = `${date.slice(4)}${date.slice(2, 4)}${date.slice(0, 2)}`;
    let leftColumnDiv = document.createElement('div');
    leftColumnDiv.setAttribute('class', 'col-sm-12 col-md-6 col-lg-6 d-flex flex-column');
    let rowDiv1 = document.createElement('div');
    rowDiv1.setAttribute('class', 'row');
    let colDiv1 = document.createElement('div');
    colDiv1.setAttribute('class', 'col-12');
    let projectTitle = document.createElement('h4');
    projectTitle.setAttribute('class', 'project-title');
    projectTitle.textContent = item.title;
    let underlineDiv = document.createElement('div');
    underlineDiv.setAttribute('class', 'underline');
    let projectDescription = document.createElement('p');
    projectDescription.textContent = item.description;
    let projectSubTitle = document.createElement('h5');
    projectSubTitle.setAttribute('class', 'subheading-underline');
    projectSubTitle.textContent = 'About this project:';
    let projectSubDescription = document.createElement('p');
    projectSubDescription.textContent = item.about;
    let backgroundHistoryButton = document.createElement('p');
    backgroundHistoryButton.setAttribute('class', 'btn button-outline background-history d-flex justify-content-center align-items-center');
    backgroundHistoryButton.textContent = "Click to read more about this project's background";
    backgroundHistoryButton.innerHTML += '<i class="fa-solid fa-book" style="margin-left: 6px;"></i>';
    backgroundHistoryButton.addEventListener('click', () => {
        openProjectModal(item.id, itemObjects);
    });
    let languages = document.createElement('h5');
    languages.setAttribute('class', 'subheading-underline mb-2');
    languages.textContent = 'Languages:';
    colDiv1.appendChild(projectTitle);
    colDiv1.appendChild(underlineDiv);
    colDiv1.appendChild(projectDescription);
    colDiv1.appendChild(projectSubTitle);
    colDiv1.appendChild(projectSubDescription);
    colDiv1.appendChild(backgroundHistoryButton);
    colDiv1.appendChild(languages);
    item.icons.forEach(i => {
        let icon = document.createElement('img');
        icon.src = icons.get(i);
        colDiv1.appendChild(icon);
    });
    rowDiv1.appendChild(colDiv1);
    let rowDiv2 = document.createElement('div');
    rowDiv2.setAttribute('class', 'row project-footer');
    let colDiv2 = document.createElement('div');
    colDiv2.setAttribute('class', 'col-12 d-flex align-items-center mt-3');
    let githubLink = document.createElement('a');
    githubLink.setAttribute('href', item.link);
    githubLink.setAttribute('class', 'btn button-outline');
    githubLink.setAttribute('target', '_blank');
    if (item.link.length == 0) {
        githubLink.style.pointerEvents = 'none';
        githubLink.innerHTML = 'Unavailable<i class="fa-brands fa-github" style="color: white; margin-left: 10px;"></i>';
    }
    else
        githubLink.innerHTML = 'See on GitHub<i class="fa-brands fa-github" style="color: white; margin-left: 10px;"></i>';
    let projectDate = document.createElement('p');
    projectDate.setAttribute('class', 'project-date');
    projectDate.setAttribute('style', 'margin-left: 20px;');
    projectDate.textContent = item.date;
    projectDate.setAttribute('date', item.dateNumber);
    let devlogButton = document.createElement('a');
    if (item.devlog.length != 0) {
        devlogButton.setAttribute('class', 'devlog-button');
        devlogButton.setAttribute('style', 'margin-left: 20px');
        devlogButton.setAttribute('href', item.devlog);
        devlogButton.textContent = "View devlog";
        devlogButton.innerHTML += '<i class="fa-regular fa-images" style="margin-left: 6px;"></i>';
    }
    colDiv2.appendChild(githubLink);
    colDiv2.appendChild(projectDate);
    if (item.devlog.length != 0)
        colDiv2.appendChild(devlogButton);
    rowDiv2.appendChild(colDiv2);
    leftColumnDiv.appendChild(rowDiv1);
    leftColumnDiv.appendChild(rowDiv2);
    let rightColumnDiv = document.createElement('div');
    if (item.video.length != 0) {
        rightColumnDiv.setAttribute('class', 'col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center');
        let cardDiv = document.createElement('div');
        cardDiv.setAttribute('class', 'ratio ratio-16x9 project-video');
        let iframe = document.createElement('iframe');
        iframe.setAttribute('src', item.video);
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('loading', 'lazy');
        cardDiv.appendChild(iframe);
        rightColumnDiv.appendChild(cardDiv);
    }
    else {
        rightColumnDiv.className = 'col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center';
        let cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        let projectImage = document.createElement('img');
        projectImage.src = item.image;
        projectImage.setAttribute('loading', 'lazy');
        projectImage.className = 'img-fluid project-image';
        cardDiv.appendChild(projectImage);
        rightColumnDiv.appendChild(cardDiv);
    }
    projectDiv.appendChild(leftColumnDiv);
    projectDiv.appendChild(rightColumnDiv);
    return projectDiv;
}
;
function renderItems(tag) {
    let itemRoot = document.getElementById('projects-root');
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
    itemHTMLobjects = Array.from(itemRoot.querySelectorAll('.project'));
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
