import { articleIcons as icons } from "./shared-projects.js";
import { sortAscending, sortDescending, sortDefault } from "./shared.js";
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
;
let itemObjects = [
    {
        id: "safe-browsing",
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
        id: "git-basics",
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
        id: "tips-for-reversing-elf",
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
        id: "reversing-elf",
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
        id: "owasp-top-10",
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
        id: "intro-to-x86",
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
        id: "reverse-engineering",
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
        id: "pc-optimization",
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
        id: "partition-issues-windows",
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
        id: "creating-secure-passwords",
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
        id: "malware-types",
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
        id: "downloading-files-securely",
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
        id: "preventing-account-takeovers",
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
        id: "importance-of-patching",
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
        id: "images-compromise-security",
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
        id: "first-blog",
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
let itemHTMLobjects;
function createHTMLitem(item) {
    let articleObject = document.createElement('div');
    articleObject.classList.add('col-sm-12', 'col-md-6', 'col-lg-6', 'col-xl-4', 'article');
    articleObject.setAttribute('item-id', item.id);
    let date = item.dateNumber;
    articleObject.dataset.timestamp = `${date.slice(4)}${date.slice(2, 4)}${date.slice(0, 2)}`;
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    let image = document.createElement('img');
    image.src = item.image;
    image.setAttribute('loading', 'lazy');
    let cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body', 'd-flex', 'flex-column');
    let cardTitle = document.createElement('h4');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = item.title;
    let underlineDiv = document.createElement('div');
    underlineDiv.classList.add('underline');
    let cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = item.description;
    let iconsDiv = document.createElement('div');
    iconsDiv.classList.add('mt-3');
    item.icons.forEach(i => {
        let icon = document.createElement('img');
        icon.src = icons.get(i);
        iconsDiv.appendChild(icon);
    });
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'align-items-center', 'mt-auto');
    let col1Div = document.createElement('div');
    col1Div.classList.add('col-6');
    let link = document.createElement('a');
    link.href = item.link;
    link.classList.add('btn', 'button-outline');
    link.target = '_blank';
    link.textContent = 'Continue reading on Medium';
    let icon = document.createElement('i');
    icon.classList.add('fa-brands', 'fa-medium');
    icon.style.color = 'white';
    icon.style.marginLeft = '10px';
    let col2Div = document.createElement('div');
    col2Div.classList.add('col-6', 'd-flex', 'justify-content-center');
    let articleDate = document.createElement('p');
    articleDate.classList.add('article-date');
    articleDate.textContent = `${item.category} | ${item.date}`;
    articleDate.setAttribute('date', item.dateNumber);
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
}
;
function renderItems(tag) {
    let itemRoot = document.getElementById('articles-root');
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
    itemHTMLobjects = Array.from(itemRoot.querySelectorAll('.article'));
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
