import { home } from "../views/home.js";

const content = document.getElementById("root");

export const router = function router(route) {
  content.innerHTML = "";
  switch (route) {
    case "#/":
      content.appendChild(home());

      break;
  }
};
