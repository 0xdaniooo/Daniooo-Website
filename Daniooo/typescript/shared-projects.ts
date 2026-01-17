// Map software icons to img urls
export const softwareIcons = new Map<string, string>();
softwareIcons.set("python", "https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54");
softwareIcons.set("js", "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black");
softwareIcons.set("django", "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white");
softwareIcons.set("cs", "https://img.shields.io/badge/C%23-9a4f96?style=for-the-badge&logo=c-sharp&logoColor=white");
softwareIcons.set("html", "https://img.shields.io/badge/HTML-cc1000?style=for-the-badge&logo=html5&logoColor=white");
softwareIcons.set("css", "https://img.shields.io/badge/CSS-254ce4?style=for-the-badge&logo=css&logoColor=white");
softwareIcons.set("bootstrap", "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white");
softwareIcons.set("tkinter", "https://img.shields.io/badge/Tkinter-919191?style=for-the-badge&logo=python&logoColor=white");
softwareIcons.set("cpp", "https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white");
softwareIcons.set("ts", "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white");
softwareIcons.set("scss", "https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white");

// Map article to img urls
export const articleIcons = new Map<string, string>();
articleIcons.set("windows", "https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNjQwIj48cGF0aCBkPSJNOTYgMTU3LjdMMjc5LjYgMTMyLjRMMjc5LjYgMzA5LjhMOTYgMzA5LjhMOTYgMTU3Ljd6TTk2IDQ4Mi4zTDI3OS42IDUwNy42TDI3OS42IDMzMi40TDk2IDMzMi40TDk2IDQ4Mi4zek0yOTkuOCA1MTAuM0w1NDQgNTQ0LDU0NCAzMzIuNEwyOTkuOCAzMzIuNEwyOTkuOCA1MTAuM3pNMjk5LjggMTI5LjdMMjk5LjggMzA5LjhMNTQ0IDMwOS44TDU0NCA5NiwyOTkuOCAxMjkuN3oiIGZpbGw9IndoaXRlIi8+PC9zdmc+");
articleIcons.set("linux", "https://img.shields.io/badge/Linux-ECC404?style=for-the-badge&logo=linux&logoColor=black");
articleIcons.set("parrotos", "https://img.shields.io/badge/Parrot_Security-15AABF?style=for-the-badge&logo=parrotsecurity&logoColor=white");
articleIcons.set("gdb", "https://img.shields.io/badge/GDB-237929?style=for-the-badge&logo=gnu&logoColor=white");
articleIcons.set("git", "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white");
articleIcons.set("vscode", "https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white");
articleIcons.set("hashes", "https://img.shields.io/badge/Hashes-378242?style=for-the-badge");
articleIcons.set("exif", "https://img.shields.io/badge/EXIF-555555?style=for-the-badge");
articleIcons.set("storage", "https://img.shields.io/badge/Storage-3691BF?style=for-the-badge");
articleIcons.set("assembly", "https://img.shields.io/badge/Assembly-2B2B2B?style=for-the-badge");
articleIcons.set("ghidra", "https://img.shields.io/badge/Ghidra-E22625?style=for-the-badge&logo=ghidra&logoColor=black");
articleIcons.set("radare2", "https://img.shields.io/badge/Radare2-000000?style=for-the-badge");
articleIcons.set("tryhackme", "https://img.shields.io/badge/TryHackMe-212C42?style=for-the-badge&logo=tryhackme&logoColor=red");
articleIcons.set("performance", "https://img.shields.io/badge/Performance-8A2BE2?style=for-the-badge&logo=speedtest&logoColor=white");
articleIcons.set("security", "https://img.shields.io/badge/Security-FF0000?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAyTDMgNnY2YzAgNS41IDMuOCAxMC4zIDkgMTJjNS4yLTEuNyA5LTYuNSAxMC0xMlY2bC05LTR6Ii8+PC9zdmc+");

// Map videogame icons to img urls
export const videogameIcons = new Map<string, string>();
videogameIcons.set("cs", softwareIcons.get("cs")!);
videogameIcons.set("unity", "https://img.shields.io/badge/Unity-000000?style=for-the-badge&logo=unity&logoColor=white");
videogameIcons.set("photoshop", "https://img.shields.io/badge/Photoshop-001E36?style=for-the-badge&logo=adobephotoshop&logoColor=white");
videogameIcons.set("blender", "https://img.shields.io/badge/Blender-F5792A?style=for-the-badge&logo=blender&logoColor=white");
videogameIcons.set("autodesk", "https://img.shields.io/badge/Autodesk-0696D7?style=for-the-badge&logo=autodesk&logoColor=white");

// Used as backstory block
export type HistoryBlock =
    | { type: "heading"; text: string }
    | { type: "paragraph"; text: string }
    | { type: "image"; src: string; caption: string }

// Represent software project
export interface Software {
    id: string,
    prevId?: string,
    nextId?: string,
    image: string,
    video: string,
    title: string,
    description: string,
    about: string,
    history: HistoryBlock[],
    link: string,
    date: string,
    dateNumber: string,
    tags: string[],
    devlog: string,
    icons: string[]
};

// Represents videogame project
export interface Game {
    id: string,
    prevId?: string;
    nextId?: string;
    image: string,
    title: string,
    description: string,
    p1: string,
    p2: string,
    p3: string,
    history: HistoryBlock[],
    link: string,
    date: string,
    dateNumber: string,
    tags: string[],
    devlog: string,
    github: string,
    icons: string[],
};

// Opens up a modal and dynamically populates it
export function openProjectModal(id: string, itemObjects: (Software | Game)[])
{
    let item = itemObjects.find(p => p.id === id);
    if (!item) return;

    let modalTitle = document.getElementById('modalTitle') as HTMLElement;
    let modalBody = document.getElementById('modalBody') as HTMLElement;
    modalTitle.textContent = item.title;
    modalBody.innerHTML = "";
    modalBody.scrollTop = 0;

    // Fill out modal using project data
    item.history.forEach(block => {
        switch (block.type) 
        {
            case "heading":
                let h = document.createElement('h5');
                h.textContent = block.text;
                h.className = "subheading-underline red";
                modalBody.appendChild(h);
                break;

            case "paragraph":
                let p = document.createElement('p');
                let bracketUrlRegex = /\[(https?:\/\/[^\s\]]+)\]/g;
                
                let processedText = block.text.replace(bracketUrlRegex, (match, url) => {
                    return `<a href="${url}" target="_blank" class="link">${match}</a>`;
                });

                p.innerHTML = processedText;
                modalBody.appendChild(p);
                break;

            case "image":
                let img = document.createElement('img');
                img.src = block.src;
                img.className = "img-fluid shadow-red my-3";
                modalBody.appendChild(img);

                if (block.caption) 
                {
                    let cap = document.createElement('p')
                    cap.className = "caption text-center"
                    cap.textContent = block.caption
                    modalBody.appendChild(cap)
                }

                break;
        }
    });

    let navWrapper = document.createElement('div');
    navWrapper.className = "d-flex justify-content-between mt-4";

    // Previous chronological project button
    if (item.prevId)
    {
        let prevBtn = document.createElement('button');
        prevBtn.className = "btn button-outline";
        prevBtn.textContent = "<- Previous Project";

        prevBtn.addEventListener('click', () => {
            let modalEl = document.getElementById('historyModal')!;
            let instance = bootstrap.Modal.getInstance(modalEl);
            instance?.hide();

            openProjectModal(item.prevId!, itemObjects);
        });

        navWrapper.appendChild(prevBtn);
    }

    // Empty button placeholder for previous
    else navWrapper.appendChild(document.createElement('div'));

    // Next chronological project button
    if (item.nextId)
    {
        let nextBtn = document.createElement('button');
        nextBtn.className = "btn button-outline";
        nextBtn.textContent = "Next Project ->";

        nextBtn.addEventListener('click', () => {
            let modalEl = document.getElementById('historyModal')!;
            let instance = bootstrap.Modal.getInstance(modalEl);
            instance?.hide();

            openProjectModal(item.nextId!, itemObjects);
        });

        navWrapper.appendChild(nextBtn);
    }

    modalBody.appendChild(navWrapper);

    // Display the modal
    let modal = new bootstrap.Modal(document.getElementById('historyModal')!);
    modal.show();
}
