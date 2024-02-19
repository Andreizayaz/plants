import { serviceType } from "./types";

export const getServicesList = (data: serviceType[], el: HTMLElement) => {
  const fragment = document.createDocumentFragment();

  data.forEach(({ title, desc, image }) => {
    const li = document.createElement("li");
    li.classList.add("service-item");
    li.innerHTML = `<img class="image" src=${image} alt=${title}>
    <div class="bottom-card"><h3 class="heading">${title}</h3>
            <p class="description">${desc}</p></div>
            `;
    fragment.appendChild(li);
  });
  el.appendChild(fragment);
};

export const getBtns = (data: serviceType[], el: HTMLElement) => {
  const fragment = document.createDocumentFragment();

  const btnS = [...new Set(data.map(({ label }) => label))].sort();

  btnS.forEach((label) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = label;
    btn.name = label;
    fragment.appendChild(btn);
  });
  el.appendChild(fragment);
};

export const filterOptions = (
  e: any,
  btnsEl: HTMLElement,
  servecesEl: HTMLElement
) => {
  [...btnsEl.children].forEach((item:any) =>
    item?.name === e.target?.name
      ? item.classList.add("btn_active")
      : item.classList.remove("btn_active")
  );
};
