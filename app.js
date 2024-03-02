const btnContners = document.getElementById('btnContners');
const allDataLoding = async () => {
  const data = await fetch(
    `https://openapi.programming-hero.com/api/videos/categories`
  );
  const mainData = await data.json();
  const finlaData = mainData.data;
  console.log(finlaData);

  //------arry function foreach start now -------
  finlaData.forEach(music => {
    const newBtn = document.createElement('button');
    newBtn.classList = `cutagery btn bg-[#25252533] font-semibold`;
    newBtn.innerText = music.category;
    newBtn.addEventListener('click', () => {
      const cutagery = document.querySelectorAll('.cutagery');

      for (const num of cutagery) {
        num.classList.remove('bg-[#FF1F3D]');
      }
      newBtn.classList.add('bg-[#FF1F3D]');
      ClickDataShow(music.category_id);
    });

    btnContners.appendChild(newBtn);
  });
};

//show the button id ----------
const ClickDataShow = async id => {
  const cardData = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const cardJson = await cardData.json();
  const finlaDatas = cardJson.data;

  //alll card section daynamic setyle
  const cardDataLoding = document.getElementById('cardDataLoding');
  cardDataLoding.textContent = '';
  finlaDatas.forEach(Cards => {
    console.log(Cards);
    const div = document.createElement('div');
    div.classList = `card w-full bg-base-100 shadow-xl`;
    div.innerHTML = `
    <figure><img src="${Cards.thumbnail}" alt="Shoes" /></figure>
        <div class="p-3">
          <div class="flex gap-3 ">
            <img class="w-[50px] h-[50px] rounded-full " src="${Cards.authors[0].profile_picture}" alt="image">
           <div>
            <h2>${Cards.title} </h2>
            <div class="flex">
            <h2>${Cards.authors[0].profile_name} </h2>
             <h2>${Cards.authors[0].verified}</h2>
            </div>
            <h2>${Cards.others.views} views</h2>
          </div>
           
          </div>
         

        </div>
    
    `;
    cardDataLoding.appendChild(div);
  });
};

ClickDataShow();
allDataLoding();
