export {}; 

// Collection options
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
        id: "coll-2024",
        tag: "2024",
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

interface Project {
    image: string,
    video: string,
    title: string,
    description: string,
    about: string,
    link: string,
    date: string,
    dateNumber: string,
    tags: string[],
    devlog: string,
}

// Contains all the items to used for dynamic rendering
let itemObjects: Project[] = [
    {
        image: "",
        video: "https://www.youtube.com/embed/khLnwABBBGM",
        title: "Planify Study Tracker | Python Django REST Framework Website",
        description: "A website built with Django REST Framework + Bootstrap 5 aimed at students wanting to track their studies effectively in an intuitive manner.",
        about: "This idea has originally been cultivated and developed by me and my teammates for our team project module in our first year of university (more info on the inspiration and backstory can be found on the website\'s landing page). Unfortunately, with our limited programming experience and lack of time, we never managed to bring it to the level we had aspired to. Wanting to push my skills further, I decided to develop this idea from the ground up using what I had learnt and made our vision become a reality at last.",
        link: "https://github.com/0xdaniooo/Planify-Study-Tracker",
        date: "13th June 2023",
        dateNumber: "13062023",
        tags: ["", "2023", "Website"],
        devlog: "PDFs/PlanifyDevlog.pdf",
    },
    {
        image: "",
        video: "https://www.youtube.com/embed/OFz46cKP9Pk",
        title: "Buffer Overflow Visualizer | Python Tkinter Project",
        description: "A Python Tkinter GUI app designed to visualize the buffer overflow security vulnerability in an easy to understand interactive format.",
        about: "For a long time I had been fascinated by the buffer overflow vulnerability and the lower level workings of computer code. I really wanted to do something with this concept which led me to create this educational tool which visualises how it all happens both code wise and memory wise. There were no such programs on the web which I decided to change as learning from diagrams can be quite hard for some (as was the case for me). With plenty of interactivity and customization, I have managed to create this easy to use cybersecurity resource.",
        link: "https://github.com/0xdaniooo/Buffer-Overflow-Visualizer",
        date: "24th June 2022",
        dateNumber: "24062022",
        tags: ["", "2022", "GUI"],
        devlog: "PDFs/BufferOverflowVisualizerDevlog.pdf",
    },
    {
        image: "",
        video: "https://www.youtube.com/embed/fvG2z0ZIqt0 ",
        title: "Strong App - Data Visualizer | Python Tkinter + Plotly Project",
        description: "Data visualization tool for plotting workout data from Strong App's CSV files - Built with Tkinter and Plotly.",
        about: "Ever since I started working out at the gym, I've been keeping a detailed record of nearly every workout I have done (which includes exercises, weights and reps). It's been really useful helping me see what I've done and then going higher. Such a large dataset has also been great for viewing my progression. Reading all this data was great but I wanted a way to visualise it which is exactly what this project solves. With plenty of flexibility, it allows you to plot exercises, weights, reps, decide how it is presented and view it on easy to understand charts.",
        link: "https://github.com/0xdaniooo/Strong-App-Data-Visualizer",
        date: "17th July 2023",
        dateNumber: "17072023",
        tags: ["", "2023", "GUI"],
        devlog: "",
    },
    {
        image: "",
        video: "https://www.youtube.com/embed/NPRg8yjdCU4",
        title: "Daniooo Website | HTML, SCSS, TypeScript and Bootstrap Website",
        description: "My personal website built with HTML, SCSS, TypeScript and Bootstrap 5 where I host all my content in one convenient place.",
        about: "Back in September 2022, I had created a website under this same URL where I displayed nearly the same content as seen here. This was made in anticipation of my placement search, allowing potential employers to see my work in a visual format. My skillset was very lacking at that time as this had only been the second website I had developed and thus aesthetically the layout looked very cheap and outdated; functionality wise, everything was very restrictive as all content was housed on a singular page which meant I could not include all my pieces of content. Wanting to test my new and improved skillset, I decided to rework the website and incorporate all the details and elements I had not been able to implement previously.",
        link: "https://github.com/0xdaniooo/Daniooo-Website",
        date: "6th July 2023",
        dateNumber: "06072023",
        tags: ["", "2023", "Website"],
        devlog: "PDFs/DanioooWebsiteDevlog.pdf",
    },
    {
        image: "",
        video: "https://www.youtube.com/embed/IYvIZfPaNqw",
        title: "Cybersecurity Toolkit | Python Django Website Project",
        description: "A Django website which provides many useful tools when working in the realm of cybersecurity.",
        about: "Shortly before the development of this website, I had been doing a lot of reverse engineering challenges on crackmes.one in my spare time. I had been making use of online ASCII convertors for decoding bytes however this could take time as sometimes the values needed some cleaning before they would be accepted. This gave me the idea of making my own convertor with some custom functionality such as my hex to ASCII convertor which would perform the cleaning itself. After that, I expanded the project with various other tools that would be helpful to have at my disposal.",
        link: "https://github.com/0xdaniooo/cybersecurity-toolkit",
        date: "17th September 2022",
        dateNumber: "17092022",
        tags: ["", "2022", "Website"],
        devlog: "",
    },
    {
        image: "",
        video: "https://www.youtube.com/embed/0wXHDmBUiRU",
        title: "Bank System | C++ CLI Project",
        description: "A simple bank system written in C++ which I used to learn the basics of the C++ language. Written for Windows exclusively.",
        about: "C++ was a language I was really interested in for a long time but just needed a project to use it on. I decided to make a bank system as it's something that was simple to understand but would allow me to test as much features of the language as I wished. Throughout development of this program, I got to learn not only how to use C++ but also troubleshooting compilation issues and any other quirks the language has which was a very enjoyable journey.",
        link: "https://github.com/0xdaniooo/Bank-System",
        date: "22nd April 2022",
        dateNumber: "22042022",
        tags: ["", "2022", "CLI"],
        devlog: "",
    },
    {
        image: "",
        video: "https://www.youtube.com/embed/0w7nqefX_fw",
        title: "Basic Terminal Poker | C# CLI Project",
        description: "A basic Poker game you can play in your terminal. Featuring a barebones design as it was intended for the purposes of teaching myself how Poker worked for a future GUI implementation.",
        about: "Poker had been something that was heavily on my mind after playing it with friends and family. The rules and way of playing was quite complex for me at first so I decided to speed up my learning by building this program and learning all the intricacies by hand. The base of the game is built off of a YouTube series (https://www.youtube.com/watch?v=Au31WqDtXYI) which I took and expanded to allow for a dynamic experience.",
        link: "https://github.com/0xdaniooo/Basic-Terminal-Poker",
        date: "22nd May 2022",
        dateNumber: "22052022",
        tags: ["", "2022", "CLI"],
        devlog: "",
    },
    {
        image: "",
        video: "https://www.youtube.com/embed/XZJE8lh4DNQ",
        title: "Secure Passphrase Generator | Python CLI Project",
        description: "Passphrases generated by https://untroubled.org/pwgen/ppgen.cgi with an added level of security including special characters and letter/number substitutions.",
        about: "Being in cybersecurity, I've come to value my account safety a lot. I've worked hard to keep all my accounts secure which can sometimes be difficult when you can't copy and paste them over (as can be the case on consoles for example). For this reason, I started using passphrases as they are friendlier to type whilst maintaining a high level of protection. Previously, I generated them on untroubled.org then sprinkled in another level of protection by manually changing some letters to numbers and adding in special characters - a process that can get quite boring which is why I created this simple automation script to help speed that up.",
        link: "https://github.com/0xdaniooo/Secure-Passphrase-Generator",
        date: "19th July 2023",
        dateNumber: "19072023",
        tags: ["", "2023", "CLI"],
        devlog: "",
    },
    {
        image: "",
        video: "https://www.youtube.com/embed/hA7XPH1jf6I",
        title: "Simple Grade Calculator | Python CLI Project",
        description: "A simple command line tool written in Python to make calculating your grades easier (based on percentages)",
        about: "Having just finished my C++ Bank System project, I wanted to continue programming to keep myself entertained. I decided to make a grade calculator as that was something that could be of use for me to calculate my grades ahead of them being released for our results day. Aside from that, this also served as a good project to experiment more with Python as it's a language I had less experience with at the time.",
        link: "https://github.com/0xdaniooo/Simple-Grade-Calculator",
        date: "24th April 2022",
        dateNumber: "24042022",
        tags: ["", "2022", "CLI"],
        devlog: "",
    },
    {
        image: "content/projects/netOS.webp",
        video: "",
        title: "netOS | Python Django Website Project",
        description: "Work in progress",
        about: "During my student work placement at Leeds City Council, I was heavily exposed to the inner workings of its vast digital infrastructure. Combining this with my interest in systems sparked an idea: what if I emulated a network that allowed the user to manipulate it in any way they wanted? Thus netOS was born - a tool that combines packet tracing with computer hacking to form a simulator where an entire system of computers can be crippled with various exploits.",
        link: "",
        date: "??????",
        dateNumber: "00000000",
        tags: ["", "Work in Progress", "Website"],
        devlog: "",
    },
];

// Used to store the item HTML objects
let itemHTMLobjects: HTMLElement[];

// Creates a HTML object for item
function createHTMLitem(item: Project)
{
    let projectDiv = document.createElement('div');
    projectDiv.setAttribute('class', 'row project');

    let leftColumnDiv = document.createElement('div')
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

    colDiv1.appendChild(projectTitle);
    colDiv1.appendChild(underlineDiv);
    colDiv1.appendChild(projectDescription);
    colDiv1.appendChild(projectSubTitle);
    colDiv1.appendChild(projectSubDescription);

    rowDiv1.appendChild(colDiv1);

    let rowDiv2 = document.createElement('div');
    rowDiv2.setAttribute('class', 'row project-footer');

    let colDiv2 = document.createElement('div');
    colDiv2.setAttribute('class', 'col-12 d-flex align-items-center');

    let githubLink = document.createElement('a');
    githubLink.setAttribute('href', item.link);
    githubLink.setAttribute('class', 'btn custom-button');
    githubLink.setAttribute('target', '_blank');

    // No source code access
    if (item.link.length == 0) 
    {
        githubLink.style.pointerEvents = 'none';
        githubLink.innerHTML = 'Unavailable<i class="fa-brands fa-github" style="color: white; margin-left: 10px;"></i>';
    }
    
    else githubLink.innerHTML = 'See on GitHub<i class="fa-brands fa-github" style="color: white; margin-left: 10px;"></i>';

    let projectDate = document.createElement('p');
    projectDate.setAttribute('class', 'project-date');
    projectDate.setAttribute('style', 'margin-left: 20px;');
    projectDate.textContent = item.date;
    projectDate.setAttribute('date', item.dateNumber);

    let devlogButton = document.createElement('a');

    if (item.devlog.length != 0)
    {
        devlogButton.setAttribute('class', 'devlog-button');
        devlogButton.setAttribute('style', 'margin-left: 20px');
        devlogButton.setAttribute('href', item.devlog);
        devlogButton.textContent = "View devlog";
        devlogButton.innerHTML += '<i class="fa-regular fa-images" style="margin-left: 6px;"></i>';
    }

    colDiv2.appendChild(githubLink);
    colDiv2.appendChild(projectDate);

    if (item.devlog.length != 0) colDiv2.appendChild(devlogButton);

    rowDiv2.appendChild(colDiv2);

    leftColumnDiv.appendChild(rowDiv1);
    leftColumnDiv.appendChild(rowDiv2);

    let rightColumnDiv = document.createElement('div');

    // Add video to project card
    if (item.video.length != 0)
    {
        rightColumnDiv.setAttribute('class', 'col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center');

        let cardDiv = document.createElement('div');
        cardDiv.setAttribute('class', 'ratio ratio-16x9 project-video');

        let iframe = document.createElement('iframe');
        iframe.setAttribute('src', item.video);
        iframe.setAttribute('allowfullscreen', '');

        cardDiv.appendChild(iframe);

        rightColumnDiv.appendChild(cardDiv);
    }

    // Add image to project card
    else
    {
        rightColumnDiv.className = 'col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center';

        let cardDiv = document.createElement('div');
        cardDiv.className = 'card';

        let projectImage = document.createElement('img');
        projectImage.src = item.image;
        projectImage.className = 'img-fluid project-image';

        cardDiv.appendChild(projectImage);
        rightColumnDiv.appendChild(cardDiv);
    }

    projectDiv.appendChild(leftColumnDiv);
    projectDiv.appendChild(rightColumnDiv);

    return projectDiv;
};

// Create items and render onto page
function renderItems(tag: string)
{
    // Wipte item root clean
    let itemRoot = document.getElementById('projects-root')!;
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
    itemHTMLobjects = Array.from(document.querySelectorAll('.project'));

    // Sort items based on current selection
    let currentSort = document.getElementsByClassName('current-sort');
    setCurrentDropdown(currentSort[0].id);
};

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
            if (itemObjects[i].link == itemHTMLobjects[j].querySelector('a')!.getAttribute('href'))
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