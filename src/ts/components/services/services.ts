import { services } from "./helpers/data";
import { filterOptions, getBtns, getServicesList } from "./helpers/functions";

const servicesList = document.getElementById("services-list");
const optionBtns = document.getElementById("options-btns");

getServicesList(services, servicesList);
getBtns(services, optionBtns);

optionBtns.addEventListener("click", (e) =>
  filterOptions(e, optionBtns, servicesList)
);
