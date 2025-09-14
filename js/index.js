const getID = (id) => document.getElementById(id);

// load menu function
const loadNavMenu = async () => {
  const navContainer = getID("categoryContainer");
  const url = "https://news-api-fs.vercel.app/api/categories";
  const res = await fetch(url);
  const data = await res.json();
  const categoryMenu = data.categories;

  categoryMenu.forEach((category) => {
    console.log(category);
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<p class="border-b-4 border-transparent hover:border-b-4 hover:border-red-600 border-red-600 cursor-pointer">${category.title}</p>`;
    navContainer.appendChild(newDiv);
  });
};

// default function call
loadNavMenu();
