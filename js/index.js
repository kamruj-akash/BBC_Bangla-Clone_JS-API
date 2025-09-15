const getID = (id) => document.getElementById(id);

// load menu function
const loadNavMenu = async () => {
  const navContainer = getID("categoryContainer");
  const url = "https://news-api-fs.vercel.app/api/categories";
  const res = await fetch(url);
  const data = await res.json();
  const categoryMenu = data.categories;

  categoryMenu.forEach((category) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<p onClick="showViaCategory('${category.id}')" id="${category.id}_btn" class="border-b-4 border-transparent hover:border-b-4 hover:border-red-600 border-red-600 cursor-pointer">${category.title}</p>`;
    navContainer.appendChild(newDiv);
  });
};

// showViaCategory
const showViaCategory = (id) => {
  const url = `https://news-api-fs.vercel.app/api/categories/${id}`;
  console.log(url);
};

// loadAllCategoryNews
const loadAllCategoryNews = async () => {
  const categoryContainer = getID("newsContainer");
  const url = "https://news-api-fs.vercel.app/api/categories/main";
  const res = await fetch(url);
  const data = await res.json();
  const articles = data.articles;

  articles.forEach((article) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = ` 
      <div class="border  border-gray-300 p-5 rounded-lg ">
            <div>
             <img class="w-full rounded-lg" src="${article.image.srcset[5].url}"/>
            </div>
            <div id="${article.id}">
                <h1 class="font-extrabold"  >${article.title}</h1>
            <p class="text-sm">${article.time}</p>
                 <button class="btn">Bookmark</button>
                <button class="btn">View Details</button>
            </div>
        </div>`;
    categoryContainer.appendChild(newDiv);
  });
};

// default function call
loadNavMenu();
loadAllCategoryNews();
