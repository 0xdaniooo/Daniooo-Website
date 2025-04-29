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
        id: "coll-2023",
        tag: "2023",
    },
    {
        id: "coll-2022",
        tag: "2022",
    },
    {
        id: "coll-2021",
        tag: "2021",
    },
];

interface Article {
    image: string,
    title: string,
    description: string,
    link: string,
    date: string,
    dateNumber: string,
    category: string,
    tags: string[],
}

// Contains all the items to used for dynamic rendering
let itemObjects: Article[] = [
    {
        image: "content/articles/SafeBrowsing.webp",
        title: "Safer and More Secure Browsing",
        description: "The web more often than not feels like a nice place where we can discover tons of information and have a fun time. However, it doesn’t take long to look in the wrong direction and see how evil certain parts can be. Today I’ll teach you some things that you...",
        link: "https://daniooo.medium.com/safer-and-more-secure-browsing-aa61e2a43391",
        date: "23rd April 2021",
        dateNumber: "23042021",
        category: "Technology",
        tags: ["", "2021", "Technology"],
    },
    {
        image: "content/articles/ReversingELF.webp",
        title: "Reversing ELF | TryHackMe Writeup",
        description: "This room allows you to test your skills at reverse engineering ELF binaries giving you 8 fun challenges to solve in total. The setup is fairly simple as you just need a Linux machine, some reverse engineering tools of your choice and basic RE knowledge...",
        link: "https://medium.com/geekculture/reversing-elf-tryhackme-writeup-3d528bcf7fce",
        date: "4th August 2021",
        dateNumber: "04082021",
        category: "Technology",
        tags: ["", "2021", "Technology"],
    },
    {
        image: "content/articles/IntroTox86.webp",
        title: "Intro to x86–64 | TryHackMe Writeup",
        description: "An introduction to reversing simple programs using the radare framework along with some assembly basics like the syntax (AT&T in this case), registers, if statements and loops. The room can be found here: https://tryhackme.com/room/introtox8664...", 
        link: "https://daniooo.medium.com/intro-to-x86-64-tryhackme-writeup-1af49688e537",
        date: "27th April 2021",
        dateNumber: "27042021",
        category: "Technology",
        tags: ["", "2021", "Technology"],
    },
    {
        image: "content/articles/ReverseEngineering.webp",
        title: "Reverse Engineering | TryHackMe Writeup",
        description: "A very simple room with three task that have us reverse engineering some simple programs to finds passwords. To prepare, all we have to do is download the files and run the “chmod -x” command on each of them to give them execute permissions...",
        link: "https://daniooo.medium.com/reverse-engineering-tryhackme-writeup-ddc8e6f36d2d",
        date: "5th June 2021",
        dateNumber: "05062021",
        category: "Technology",
        tags: ["", "2021", "Technology"],
    },
    {
        image: "content/articles/OwaspTop10.webp",
        title: "Owasp Top 10 | TryHackMe Writeup",
        description: "In this blog, we’ll be exploring the solutions to the questions in this room as well as learning how we can utilize the Owasp top 10 web vulnerabilities to perform our “malicious” actions. This one’s gonna be quite long so lets get on with it my fellow hackers...",
        link: "https://daniooo.medium.com/owasp-top-10-tryhackme-writeup-81bcafe29af1",
        date: "16th May 2021",
        dateNumber: "16052021",
        category: "Technology",
        tags: ["", "2021", "Technology"],
    },
    {
        image: "content/articles/PCOptimization.webp",
        title: "PC Optimization (Windows 10)",
        description: "We’ve all experienced our devices become painfully slow to the point we no longer want to use them. This can make for a very annoying experience however I am here to save you (or at least try to). I’ll run you through the list of things I do whenever I need to...",
        link: "https://daniooo.medium.com/pc-optimization-windows-10-df6f2f112dcb",
        date: "20th April 2021",
        dateNumber: "20042021",
        category: "Technology",
        tags: ["", "2021", "Technology"],
    },
    {
        image: "content/articles/CreatingSecurePasswords.webp",
        title: "Creating Secure Passwords",
        description: "People will always prefer convenience over security. This has a very negative impact as it very often leads to account takeovers since people just make it too easy for hackers to get in. Today I’ll show you how your passwords can be broken, what can be done to get...",
        link: "https://daniooo.medium.com/creating-secure-passwords-fabc9a9b3074",
        date: "30th April 2021",
        dateNumber: "30042021",
        category: "Technology",
        tags: ["", "2021", "Technology"],
    },
    {
        image: "content/articles/MalwareTypes.webp",
        title: "Malware Types",
        description: "One thing that’s very popular is for people to call any sort of malicious program a “virus” when there’s much more to them than that. The name malware comes from the words malicious and software being mixed together thus creating malicious software. It comes...",
        link: "https://daniooo.medium.com/malware-types-d053ba8926a1",
        date: "5th July 2021",
        dateNumber: "05072021",
        category: "Technology",
        tags: ["", "2021", "Technology"],
    },
    {
        image: "content/articles/DownloadingFilesSecurely.webp",
        title: "Secure Downloads + Data Integrity",
        description: "The internets full of a ton of files which makes it quite hard to determine what you’re downloading is actually the thing that you were looking for. Fortunately, there are a few things you can do to ensure the intergrity of the file in question which we’ll...",
        link: "https://daniooo.medium.com/downloading-files-from-the-internet-securely-data-integrity-d34109a5d930",
        date: "9th July 2021",
        dateNumber: "09072021",
        category: "Technology",
        tags: ["", "2021", "Technology"],
    },
    {
        image: "content/articles/PreventingAccountTakeovers.webp",
        title: "Preventing Account Takeovers",
        description: "Each day thousands of accounts are compromised by hackers and bots crawling all over the internet. This has many obvious repercussions for the owners of these accounts as they could: lose access to their data, be victim to identity fraud, could lose their...",
        link: "https://daniooo.medium.com/preventing-account-takeovers-efa5c96337a3",
        date: "25th July 2021",
        dateNumber: "25072021",
        category: "Technology",
        tags: ["", "2021", "Technology"],
    },
    {
        image: "content/articles/ImagesCompromiseSecurity.webp",
        title: "Your Images Compromise Your Security",
        description: "Everytime you take a photo, your device will store that in an image format for you to enjoy however this isn’t the only information that will be saved. Embedded into that file will also be a range of metadata which in the wrong hands can be used by others...",
        link: "https://daniooo.medium.com/your-images-compromise-your-security-5ad9beb72a13",
        date: "7th August 2021",
        dateNumber: "07082021",
        category: "Technology",
        tags: ["", "2021", "Technology"],
    },
    {
        image: "content/articles/DivideAndConquer.webp",
        title: "Tackling Large Goals — Divide and Conquer Method",
        description: "When faced with tasks in life whether these be small or large, we can often push them off for later due to the effort needed to get going with them. In this article I want to share what really helped me break past this and cut down my procrastination...",
        link: "https://daniooo.medium.com/tackling-large-goals-divide-and-conquer-method-74db8ab67212",
        date: "6th November 2022",
        dateNumber: "06112022",
        category: "Productivity",
        tags: ["", "2022", "Productivity"],
    },
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

    // Create the row container
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'align-items-center');

    // Create the first column in the row
    let col1Div = document.createElement('div');
    col1Div.classList.add('col-6');

    // Create the "Continue reading" link
    let link = document.createElement('a');
    link.href = item.link;
    link.classList.add('btn', 'custom-button');
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
    // Wipte item root clean
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