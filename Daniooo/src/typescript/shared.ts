export interface TaggableItem 
{
    tags: string[];
}

// Re-order HTML elements
function reorder(items: HTMLElement[]) 
{
    let root!: HTMLElement;
    let frag = document.createDocumentFragment();
    items.forEach(el => {
        if (!root && el != undefined) root = el.parentElement!;
        if (el == undefined) return;
        frag.appendChild(el);
    });
    root.appendChild(frag);
}

// Sort items by date (descending)
function sortDescending(items: HTMLElement[]) 
{
    items.sort((a, b) =>
        Number(b.dataset.timestamp) - Number(a.dataset.timestamp)
    );
    reorder(items);
}

// Sort items by date (ascending)
function sortAscending(items: HTMLElement[]) 
{
    items.sort((a, b) =>
        Number(a.dataset.timestamp) - Number(b.dataset.timestamp)
    );
    reorder(items);
}

// Default sort
function sortDefault(itemObjects: any[], itemHTMLobjects: HTMLElement[]) 
{
    // Lookup table for items
    let map = new Map(
        itemHTMLobjects.map(el => [el.getAttribute('item-id'), el])
    );

    // Get default order
    let ordered = itemObjects.map(obj => map.get(obj.id)!);

    // Sort items by default order
    for (let i = 0; i < ordered.length; i++) itemHTMLobjects[i] = ordered[i];

    reorder(itemHTMLobjects);
}

// Setup collections based on tags
export function setupCollections<T extends TaggableItem>(itemObjects: T[], onFilterSelected: (tag: string) => void) 
{
    const listRoot = document.getElementById('collection-list-root');
    if (!listRoot) return;

    // Gather unique tags from items array
    const allTags = Array.from(new Set(itemObjects.flatMap(item => item.tags))).filter(t => t !== "");
    const years = allTags.filter(t => /^\d{4}$/.test(t)).sort((a, b) => b.localeCompare(a));
    const categories = allTags.filter(t => !/^\d{4}$/.test(t)).sort();

    // Create dropdown list
    const createItemHTML = (tag: string, displayName: string, isCurrent = false) => {
        const count = tag === "" ? itemObjects.length : itemObjects.filter(obj => obj.tags.includes(tag)).length;
        return `<li><a class="dropdown-item ${isCurrent ? 'current-collection' : ''}" data-tag="${tag}">${displayName} [${count}]</a></li>`;
    };

    let menuHTML = createItemHTML("", "All", true);
    
    if (categories.length > 0) 
    {
        menuHTML += `<li><hr class="dropdown-divider"></li>`;
        categories.forEach(cat => menuHTML += createItemHTML(cat, cat));
    }
    
    if (years.length > 0) 
    {
        menuHTML += `<li><hr class="dropdown-divider"></li>`;
        years.forEach(yr => menuHTML += createItemHTML(yr, yr));
    }

    listRoot.innerHTML = menuHTML;

    // Add event listeners per collection selection
    listRoot.querySelectorAll('.dropdown-item').forEach(btn => {
        btn.addEventListener('click', function(this: HTMLElement) {
            const selectedTag = this.getAttribute('data-tag') || "";
            
            onFilterSelected(selectedTag);

            listRoot.querySelector('.current-collection')?.classList.remove('current-collection');
            this.classList.add('current-collection');
        });
    });
}

// Setup sorting
export function setupSorting<T>(getItemHTMLobjects: () => HTMLElement[], itemObjects: T[]) 
{
    const setCurrentDropdown = (optionId: string) => {
        // Clear old current sort selection highlights
        const dropdownItems = document.querySelectorAll(".dropdown-item");
        dropdownItems.forEach(item => item.classList.remove("current-sort"));

        const selectedOption = document.getElementById(optionId);
        if (!selectedOption) return;
        selectedOption.classList.add("current-sort");

        // Get latest itemHTMLobjects state
        const currentItemHTMLobjects = getItemHTMLobjects();

        if (optionId === 'sort-new-old') sortDescending(currentItemHTMLobjects);
        else if (optionId === 'sort-old-new') sortAscending(currentItemHTMLobjects);
        else if (optionId === 'sort-default') sortDefault(itemObjects, currentItemHTMLobjects);
    };

    // Add event listeners per sorting selection
    const sortButtons = ['sort-new-old', 'sort-old-new', 'sort-default'];
    sortButtons.forEach(buttonId => {
        const btn = document.getElementById(buttonId);
        if (btn) btn.addEventListener('click', () => setCurrentDropdown(buttonId));
    });

    // Send sort signal
    return setCurrentDropdown;
}
