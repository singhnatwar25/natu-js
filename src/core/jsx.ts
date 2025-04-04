export function h(type: any, props: any, ...children: any[]): HTMLElement {
    const el = document.createElement(type);
    for (const key in props) {
        if (key.startsWith("on") && typeof props[key] === "function") {
            el.addEventListener(key.substring(2).toLowerCase(), props[key]);
        } else {
            el.setAttribute(key, props[key]);
        }
    }
    children.forEach(child => {
        if (typeof child === "string") {
            el.appendChild(document.createTextNode(child));
        } else if (child instanceof Node) {
            el.appendChild(child);
        }
    });
    return el;
}
