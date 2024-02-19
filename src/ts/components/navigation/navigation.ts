import logoImg from "../../../assets/icons/logo.svg";
import { LOGO_TEXT, links } from "./helpers/data";
import { makeLinkList } from "./helpers/functions";

const logo = document.getElementById("logo");
const navigation = document.getElementById("navigation");

logo.innerText = LOGO_TEXT;
logo.style.backgroundImage = `url(${logoImg})`;

makeLinkList(links, navigation);
