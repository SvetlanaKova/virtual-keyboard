export default function creatElementFunc (name, className = name, place = document.body) {
    const el = document.createElement(name);
    el.classList = className;
    place.appendChild(el);
}