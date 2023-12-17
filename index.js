const arrows = document.querySelectorAll(".arrow");
const movielist = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{ 
    const itemNumber = movielist[i].querySelectorAll("img").length;
     let clickCounter = 0;
     arrow.addEventListener("click", () =>{
      const ratio = Math.floor(window.innerWidth / 270);
      clickCounter++;
      if(itemNumber - (4 + clickCounter) + (4 - ratio) >= 0){
        movielist[i].style.transform = `translateX(${
          movielist[i].computedStyleMap().get("transform")[0].x.value
     -300}px)`;
      }else{
        movielist[i].style.transform = "translateX(0)";
        clickCounter = 0;
      }
     });
       
   
  console.log(Math.floor(window.innerWidth / 270));
});

// toggle ball

const ball = document.querySelector(".toggle-ball")
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar,.sidebar,.lift-menu-icon,.toggle,.toggle-ball"
  );
  ball.addEventListener("click",()=>{
    items.forEach(item=>{
      item.classList.toggle("active")
    });
    ball.classList.toggle("active")
  });


