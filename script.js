// controles de slide
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

const readMore = document.getElementById("read-more-btn");
const readeMenos = document.getElementById("read-menos-btn");
const moreContent = document.getElementById("more-content");

readMore.addEventListener("click", function () {
  moreContent.style.display = "inline";
  this.style.display = "none";
});

readeMenos.addEventListener("click", function () {
  moreContent.style.display = "none";
  readMore.style.display = "inline";
});

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems - 1) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });

    items[currentItem].classList.add("current-item");
  });
});

// listagem de projeto
const gallery = document.querySelector('#gallery');

projectsJSON.forEach((project) => {
  const projectItem = document.createElement('div');
  projectItem.classList.add('galery-Elements');

  const image = document.createElement('img');
  image.classList.add('item', 'current-item');
  image.src = project.img;
  projectItem.appendChild(image);

  const name = document.createElement('h3');
  name.classList.add('item--name');
  name.textContent = project.name;
  projectItem.appendChild(name);

  const linkURL = document.createElement('a');
  linkURL.href = project.links.linkURL;
  linkURL.target = '_blank';
  const linkIconURL = document.createElement('i');
  linkIconURL.classList.add('fa-solid', 'fa-link', 'item-link-url');
  linkURL.appendChild(linkIconURL);
  projectItem.appendChild(linkURL);

  const linkGitHub = document.createElement('a');
  linkGitHub.href = project.links.linkGitHub;
  linkGitHub.target = '_blank';
  const linkIconGitHub = document.createElement('i');
  linkIconGitHub.classList.add('fa-brands', 'fa-github', 'item-link-github');
  linkGitHub.appendChild(linkIconGitHub);
  projectItem.appendChild(linkGitHub);

  const desc = document.createElement('p');
  desc.classList.add('item--desc');
  desc.textContent = project.description;
  projectItem.appendChild(desc);

  gallery.appendChild(projectItem);
});