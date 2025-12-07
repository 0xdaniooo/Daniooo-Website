export {}; 

// Collection options
let collections = [
    {
        id: "coll-all",
        tag: "",
    },
    {
        id: "coll-psychology",
        tag: "Psychology",
    },
    {
        id: "coll-technology",
        tag: "Technology",
    },
    {
        id: "coll-productivity",
        tag: "Productivity",
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
        id: "coll-2025",
        tag: "2025",
    }
];

// Map icons to img urls
export const icons = new Map<string, string>();
icons.set("windows", "https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNjQwIj48cGF0aCBkPSJNOTYgMTU3LjdMMjc5LjYgMTMyLjRMMjc5LjYgMzA5LjhMOTYgMzA5LjhMOTYgMTU3Ljd6TTk2IDQ4Mi4zTDI3OS42IDUwNy42TDI3OS42IDMzMi40TDk2IDMzMi40TDk2IDQ4Mi4zek0yOTkuOCA1MTAuM0w1NDQgNTQ0LDU0NCAzMzIuNEwyOTkuOCAzMzIuNEwyOTkuOCA1MTAuM3pNMjk5LjggMTI5LjdMMjk5LjggMzA5LjhMNTQ0IDMwOS44TDU0NCA5NiwyOTkuOCAxMjkuN3oiIGZpbGw9IndoaXRlIi8+PC9zdmc+");
icons.set("linux", "https://img.shields.io/badge/Linux-ECC404?style=for-the-badge&logo=linux&logoColor=black");
icons.set("parrotos", "https://img.shields.io/badge/Parrot_Security-15AABF?style=for-the-badge&logo=parrotsecurity&logoColor=white");
icons.set("gdb", "https://img.shields.io/badge/GDB-237929?style=for-the-badge&logo=gnu&logoColor=white");
icons.set("git", "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white");
icons.set("vscode", "https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white");
icons.set("hashes", "https://img.shields.io/badge/Hashes-378242?style=for-the-badge");
icons.set("exif", "https://img.shields.io/badge/EXIF-555555?style=for-the-badge");
icons.set("storage", "https://img.shields.io/badge/Storage-3691BF?style=for-the-badge");
icons.set("assembly", "https://img.shields.io/badge/Assembly-2B2B2B?style=for-the-badge");
icons.set("ghidra", "https://img.shields.io/badge/Ghidra-E22625?style=for-the-badge&logo=ghidra&logoColor=black");
icons.set("radare2", "https://img.shields.io/badge/Radare2-000000?style=for-the-badge");
icons.set("tryhackme", "https://img.shields.io/badge/TryHackMe-212C42?style=for-the-badge&logo=tryhackme&logoColor=red");
icons.set("performance", "https://img.shields.io/badge/Performance-8A2BE2?style=for-the-badge&logo=speedtest&logoColor=white");
icons.set("security", "https://img.shields.io/badge/Security-FF0000?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAyTDMgNnY2YzAgNS41IDMuOCAxMC4zIDkgMTJjNS4yLTEuNyA5LTYuNSAxMC0xMlY2bC05LTR6Ii8+PC9zdmc+");

interface Article {
    image: string,
    title: string,
    description: string,
    link: string,
    date: string,
    dateNumber: string,
    category: string,
    tags: string[],
    icons: string[]
};

// Contains all the items to used for dynamic rendering
let itemObjects: Article[] = [
    {
        image: "content/articles/SafeBrowsing.webp",
        title: "Safer and More Secure Browsing",
        description: "The web more often than not feels like a nice place where we can discover tons of information and have a fun time. However, it doesn’t take long to look in the wrong direction and see how evil certain parts can be. Today I’ll teach you some things that you... [1741 words]",
        link: "https://daniooo.medium.com/safer-and-more-secure-browsing-aa61e2a43391",
        date: "23rd April 2021",
        dateNumber: "23042021",
        category: "Technology",
        tags: ["", "2021", "Technology"],
        icons: ["security"]
    },
    {
        image: "content/articles/GitBasics.webp",
        title: "Get Started with Git - Basics, Tips and Tricks",
        description: "Git is hands down one of the best tools you can add to your toolbelt as a programmer. Whether you are writing small scripts or developing large scale projects, Git will make it extremely easy to perform version control and backup your code... [2715 words]",
        link: "https://daniooo.medium.com/get-started-with-git-basics-tips-and-tricks-fc52f569289b",
        date: "6th December 2025",
        dateNumber: "06122025",
        category: "Technology",
        tags: ["", "2025", "Technology"],
        icons: ["vscode", "git", "windows"]
    },
    {
        image: "content/articles/TipsForReversingELF.webp",
        title: "Tips for Reverse Engineering ELF Binaries on Linux",
        description: "After reversing a good amount of ELF binaries for Linux I've seen my fair share of patterns and formed some approaches when it comes to dealing with them effectively. I'll show you how I deal with ELF binary reversing in the context of CTF crackme challenges, progressively diving into... [???? words]",
        link: "",
        date: "??????",
        dateNumber: "01092022",
        category: "Technology",
        tags: ["", "2022", "Technology"],
        icons: ["linux", "gdb", "assembly", "ghidra", "parrotos"]
    },
    {
        image: "content/articles/ReversingELF.webp",
        title: "Reversing ELF | TryHackMe Writeup",
        description: "This room allows you to test your skills at reverse engineering ELF binaries giving you 8 fun challenges to solve in total. The setup is fairly simple as you just need a Linux machine, some reverse engineering tools of your choice and basic RE knowledge... [1024 words]",
        link: "https://medium.com/geekculture/reversing-elf-tryhackme-writeup-3d528bcf7fce",
        date: "4th August 2021",
        dateNumber: "04082021",
        category: "Technology",
        tags: ["", "2021", "Technology"],
        icons: ["tryhackme", "parrotos", "ghidra", "radare2", "gdb"]
    },
    {
        image: "content/articles/OwaspTop10.webp",
        title: "Owasp Top 10 | TryHackMe Writeup",
        description: "In this blog, we’ll be exploring the solutions to the questions in this room as well as learning how we can utilize the Owasp top 10 web vulnerabilities to perform our “malicious” actions. This one’s gonna be quite long so lets get on with... [2965 words]",
        link: "https://daniooo.medium.com/owasp-top-10-tryhackme-writeup-81bcafe29af1",
        date: "16th May 2021",
        dateNumber: "16052021",
        category: "Technology",
        tags: ["", "2021", "Technology"],
        icons: ["tryhackme", "parrotos", "linux"]
    },
    {
        image: "content/articles/IntroTox86.webp",
        title: "Intro to x86–64 | TryHackMe Writeup",
        description: "An introduction to reversing simple programs using the radare framework along with some assembly basics like the syntax (AT&T in this case), registers, if statements and loops. The room can be found here: https://tryhackme.com/room/introtox8664... [1038 words]", 
        link: "https://daniooo.medium.com/intro-to-x86-64-tryhackme-writeup-1af49688e537",
        date: "27th April 2021",
        dateNumber: "27042021",
        category: "Technology",
        tags: ["", "2021", "Technology"],
        icons: ["tryhackme", "parrotos", "radare2"]
    },
    {
        image: "content/articles/ReverseEngineering.webp",
        title: "Reverse Engineering | TryHackMe Writeup",
        description: "A very simple room with three task that have us reverse engineering some simple programs to finds passwords. To prepare, all we have to do is download the files and run the “chmod -x” command on each of them to give them execute permissions... [430 words]",
        link: "https://daniooo.medium.com/reverse-engineering-tryhackme-writeup-ddc8e6f36d2d",
        date: "5th June 2021",
        dateNumber: "05062021",
        category: "Technology",
        tags: ["", "2021", "Technology"],
        icons: ["tryhackme", "parrotos", "radare2"]
    },
    {
        image: "content/articles/PCOptimization.webp",
        title: "Quick and Easy PC Performance Boosts (Windows 10)",
        description: "We’ve all experienced our devices become painfully slow to the point we no longer want to use them. This can make for a very annoying experience however I am here to save you (or at least try to). I’ll run you through the list of things I do whenever I need to... [1170 words]",
        link: "https://daniooo.medium.com/pc-optimization-windows-10-df6f2f112dcb",
        date: "20th April 2021",
        dateNumber: "20042021",
        category: "Technology",
        tags: ["", "2021", "Technology"],
        icons: ["windows", "performance"]
    },
    {
        image: "content/articles/PartitionIssuesWindows.webp",
        title: "Fixing Partition Errors on USB Drives (Windows)",
        description: "Partitioning drives can introduce issues once it comes to reformatting. You try and format the drive through explorer only to find out you've lost space as you are left with a tiny usable partition, the remainder of your space gone. Fortunately this is easily... [576 words]",
        link: "https://daniooo.medium.com/fixing-partition-errors-on-usb-drives-windows-4e99066dacdc",
        date: "29th November 2025",
        dateNumber: "29112025",
        category: "Technology",
        tags: ["", "2025", "Technology"],
        icons: ["windows", "storage"]
    },
    {
        image: "content/articles/CreatingSecurePasswords.webp",
        title: "Creating Cryptographically Secure Passwords",
        description: "People will always prefer convenience over security. This has a very negative impact as it very often leads to account takeovers since people just make it too easy for hackers to get in. Today I’ll show you how your passwords can be broken, what can be done to get... [801 words]",
        link: "https://daniooo.medium.com/creating-secure-passwords-fabc9a9b3074",
        date: "30th April 2021",
        dateNumber: "30042021",
        category: "Technology",
        tags: ["", "2021", "Technology"],
        icons: ["security", "hashes"]
    },
    {
        image: "content/articles/MalwareTypes.webp",
        title: "Malware Types and What Makes Them Unique",
        description: "One thing that’s very popular is for people to call any sort of malicious program a “virus” when there’s much more to them than that. The name malware comes from the words malicious and software being mixed together thus creating malicious software. It comes... [1387 words]",
        link: "https://daniooo.medium.com/malware-types-d053ba8926a1",
        date: "5th July 2021",
        dateNumber: "05072021",
        category: "Technology",
        tags: ["", "2021", "Technology"],
        icons: ["security"]
    },
    {
        image: "content/articles/DownloadingFilesSecurely.webp",
        title: "Verifying File Security and Integrity (Checksums)",
        description: "The internets full of a ton of files which makes it quite hard to determine what you’re downloading is actually the thing that you were looking for. Fortunately, there are a few things you can do to ensure the intergrity of the file in question which we’ll... [726 words]",
        link: "https://daniooo.medium.com/downloading-files-from-the-internet-securely-data-integrity-d34109a5d930",
        date: "9th July 2021",
        dateNumber: "09072021",
        category: "Technology",
        tags: ["", "2021", "Technology"],
        icons: ["security", "hashes"]
    },
    {
        image: "content/articles/PreventingAccountTakeovers.webp",
        title: "Become Unhackable — How to Prevent Account Takeovers",
        description: "Each day thousands of accounts are compromised by hackers and bots crawling all over the internet. This has many obvious repercussions for the owners of these accounts as they could: lose access to their data, be victim to identity fraud, could lose their... [830 words]",
        link: "https://daniooo.medium.com/preventing-account-takeovers-efa5c96337a3",
        date: "25th July 2021",
        dateNumber: "25072021",
        category: "Technology",
        tags: ["", "2021", "Technology"],
        icons: ["security", "hashes"]
    },
    {
        image: "content/articles/ImportanceOfPatching.webp",
        title: "Patching and its Underrated Role in Security",
        description: "The way to get around this is to either check if there are any new updates daily or allow your device to perform automatic updates. Developers release patches either on Patch Tuesday (first Tuesday of each month) or every once in a while whenever it’s ready... [404 words]",
        link: "https://daniooo.medium.com/why-you-need-to-patch-your-devices-as-soon-as-possible-2653bd9ea689",
        date: "4th May 2021",
        dateNumber: "04052021",
        category: "Technology",
        tags: ["", "2021", "Technology"],
        icons: ["security"]
    },
    {
        image: "content/articles/ImagesCompromiseSecurity.webp",
        title: "Your Images Compromise Your Privacy (EXIF Data)",
        description: "Everytime you take a photo, your device will store that in an image format for you to enjoy however this isn’t the only information that will be saved. Embedded into that file will also be a range of metadata which in the wrong hands can be used by others... [433 words]",
        link: "https://daniooo.medium.com/your-images-compromise-your-security-5ad9beb72a13",
        date: "7th August 2021",
        dateNumber: "07082021",
        category: "Technology",
        tags: ["", "2021", "Technology"],
        icons: ["security", "exif"]
    },
    {
        image: "content/articles/FirstBlog.webp",
        title: "Welcome to my first blog",
        description: "Hi, as you’ve seen from the title this is my first blog. Here you’ll get to listen to me ramble and share knowledge about the things that I’m passionate about and hopefully you'll learn something new (fun times)... [364 words]",
        link: "https://daniooo.medium.com/welcome-to-my-first-blog-d-d379be2eff38",
        date: "16th April 2021",
        dateNumber: "16042021",
        category: "Technology",
        tags: ["", "2021", "Technology"],
        icons: ["security"]
    }
];

// Used to store the article HTML objects
let itemHTMLobjects: HTMLElement[];

// Creates a HTML object for an article
function createHTMLitem(item: Article)
{
    // Create the main column container
    let articleObject = document.createElement('div');
    articleObject.classList.add('col-sm-12', 'col-md-6', 'col-lg-6', 'col-xl-4', 'article');

    // Create the card container
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    // Create the image element
    let image = document.createElement('img');
    image.src = item.image;

    // Create the card body container
    let cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');

    // Create the card title
    let cardTitle = document.createElement('h4');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item.title;

    // Create the underline element
    let underlineDiv = document.createElement('div');
    underlineDiv.classList.add('underline');

    // Create the card text
    let cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = item.description;

    // Icon container
    let iconsDiv = document.createElement('div');
    iconsDiv.classList.add('mt-3');

    // Add icons
    item.icons.forEach(i => {
            let icon = document.createElement('img');
            icon.src = icons.get(i)!;
            iconsDiv.appendChild(icon);
        });

    // Create the row container
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'align-items-center');

    // Create the first column in the row
    let col1Div = document.createElement('div');
    col1Div.classList.add('col-6');

    // Create the "Continue reading" link
    let link = document.createElement('a');
    link.href = item.link;
    link.classList.add('btn', 'button-outline');
    link.target = '_blank';
    link.textContent = 'Continue reading on Medium';

    // Create the Medium icon
    let icon = document.createElement('i');
    icon.classList.add('fa-brands', 'fa-medium');
    icon.style.color = 'white';
    icon.style.marginLeft = '10px';

    // Create the second column in the row
    let col2Div = document.createElement('div');
    col2Div.classList.add('col-6', 'd-flex', 'justify-content-center');

    // Create the article date
    let articleDate = document.createElement('p');
    articleDate.classList.add('article-date');
    articleDate.textContent = `${item.category} | ${item.date}`;
    articleDate.setAttribute('date', item.dateNumber);

    // Append the elements to their respective parents
    articleObject.appendChild(cardDiv);
    cardDiv.appendChild(image);
    cardDiv.appendChild(cardBodyDiv);
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(underlineDiv);
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(rowDiv);
    cardText.appendChild(iconsDiv);
    rowDiv.appendChild(col1Div);
    col1Div.appendChild(link);
    link.appendChild(icon);
    rowDiv.appendChild(col2Div);
    col2Div.appendChild(articleDate);

    return articleObject;
};

// Create items and render onto page
function renderItems(tag: string)
{
    // Wipe item root clean
    let itemRoot = document.getElementById('articles-root')!;
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
    itemHTMLobjects = Array.from(document.querySelectorAll('.article'));

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