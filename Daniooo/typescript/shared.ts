// Re-order HTML elements
function reorder(items: HTMLElement[]) 
{
    let root = items[0].parentElement!;
    let frag = document.createDocumentFragment();
    items.forEach(el => frag.appendChild(el));
    root.appendChild(frag);
}

// Sort items by date (descending)
export function sortDescending(items: HTMLElement[]) 
{
    items.sort((a, b) =>
        Number(b.dataset.timestamp) - Number(a.dataset.timestamp)
    );
    reorder(items);
}

// Sort items by date (ascending)
export function sortAscending(items: HTMLElement[]) 
{
    items.sort((a, b) =>
        Number(a.dataset.timestamp) - Number(b.dataset.timestamp)
    );
    reorder(items);
}

// Default sort
export function sortDefault(itemObjects: any[], itemHTMLobjects: HTMLElement[]) 
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