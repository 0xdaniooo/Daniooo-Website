function reorder(items) {
    let root;
    let frag = document.createDocumentFragment();
    items.forEach(el => {
        if (!root && el != undefined)
            root = el.parentElement;
        if (el == undefined)
            return;
        frag.appendChild(el);
    });
    root.appendChild(frag);
}
function sortDescending(items) {
    items.sort((a, b) => Number(b.dataset.timestamp) - Number(a.dataset.timestamp));
    reorder(items);
}
function sortAscending(items) {
    items.sort((a, b) => Number(a.dataset.timestamp) - Number(b.dataset.timestamp));
    reorder(items);
}
function sortDefault(itemObjects, itemHTMLobjects) {
    let map = new Map(itemHTMLobjects.map(el => [el.getAttribute('item-id'), el]));
    let ordered = itemObjects.map(obj => map.get(obj.id));
    for (let i = 0; i < ordered.length; i++)
        itemHTMLobjects[i] = ordered[i];
    reorder(itemHTMLobjects);
}
export function setupCollections(itemObjects, onFilterSelected) {
    const listRoot = document.getElementById('collection-list-root');
    if (!listRoot)
        return;
    const allTags = Array.from(new Set(itemObjects.flatMap(item => item.tags))).filter(t => t !== "");
    const years = allTags.filter(t => /^\d{4}$/.test(t)).sort((a, b) => b.localeCompare(a));
    const categories = allTags.filter(t => !/^\d{4}$/.test(t)).sort();
    const createItemHTML = (tag, displayName, isCurrent = false) => {
        const count = tag === "" ? itemObjects.length : itemObjects.filter(obj => obj.tags.includes(tag)).length;
        return `<li><a class="dropdown-item ${isCurrent ? 'current-collection' : ''}" data-tag="${tag}">${displayName} [${count}]</a></li>`;
    };
    let menuHTML = createItemHTML("", "All", true);
    if (categories.length > 0) {
        menuHTML += `<li><hr class="dropdown-divider"></li>`;
        categories.forEach(cat => menuHTML += createItemHTML(cat, cat));
    }
    if (years.length > 0) {
        menuHTML += `<li><hr class="dropdown-divider"></li>`;
        years.forEach(yr => menuHTML += createItemHTML(yr, yr));
    }
    listRoot.innerHTML = menuHTML;
    listRoot.querySelectorAll('.dropdown-item').forEach(btn => {
        btn.addEventListener('click', function () {
            const selectedTag = this.getAttribute('data-tag') || "";
            onFilterSelected(selectedTag);
            listRoot.querySelector('.current-collection')?.classList.remove('current-collection');
            this.classList.add('current-collection');
        });
    });
}
export function setupSorting(getItemHTMLobjects, itemObjects) {
    const setCurrentDropdown = (optionId) => {
        const dropdownItems = document.querySelectorAll(".dropdown-item");
        dropdownItems.forEach(item => item.classList.remove("current-sort"));
        const selectedOption = document.getElementById(optionId);
        if (!selectedOption)
            return;
        selectedOption.classList.add("current-sort");
        const currentItemHTMLobjects = getItemHTMLobjects();
        if (optionId === 'sort-new-old')
            sortDescending(currentItemHTMLobjects);
        else if (optionId === 'sort-old-new')
            sortAscending(currentItemHTMLobjects);
        else if (optionId === 'sort-default')
            sortDefault(itemObjects, currentItemHTMLobjects);
    };
    const sortButtons = ['sort-new-old', 'sort-old-new', 'sort-default'];
    sortButtons.forEach(buttonId => {
        const btn = document.getElementById(buttonId);
        if (btn)
            btn.addEventListener('click', () => setCurrentDropdown(buttonId));
    });
    return setCurrentDropdown;
}
