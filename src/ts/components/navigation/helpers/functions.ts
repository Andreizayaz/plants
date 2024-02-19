import { linkType } from "../type";

export const makeLinkList = (data: linkType[], el: HTMLElement) => {
  const fragment = document.createDocumentFragment();
  data.forEach(({ text, href }, index) => {
    const li = document.createElement("li");
    li.classList.add("navigation__link");
    li.innerHTML = `<a href=${href}>${text}</a>`;
    if (!index) {
      li.classList.add("navigation__link_active");
    }
    fragment.appendChild(li);
  });
  el.appendChild(fragment);
};
