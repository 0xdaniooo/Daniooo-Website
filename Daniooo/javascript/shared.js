function reorder(items) {
    let root = items[0].parentElement;
    let frag = document.createDocumentFragment();
    items.forEach(el => frag.appendChild(el));
    root.appendChild(frag);
}
export function sortDescending(items) {
    items.sort((a, b) => Number(b.dataset.timestamp) - Number(a.dataset.timestamp));
    reorder(items);
}
export function sortAscending(items) {
    items.sort((a, b) => Number(a.dataset.timestamp) - Number(b.dataset.timestamp));
    reorder(items);
}
export function sortDefault(itemObjects, itemHTMLobjects) {
    let map = new Map(itemHTMLobjects.map(el => [el.getAttribute('item-id'), el]));
    let ordered = itemObjects.map(obj => map.get(obj.id));
    for (let i = 0; i < ordered.length; i++)
        itemHTMLobjects[i] = ordered[i];
    reorder(itemHTMLobjects);
}
