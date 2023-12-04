document.addEventListener("DOMContentLoaded", function () {
  var geners = [
    generation-1,
    generation-2,
    generation-3,
    generation-4,
    generation-5,
    generation-6,
    generation-7,
  ];
  
  var filters = document.getElementById("filters")
  var gen=""
  for(let i=0;i<geners.length;i++){
    gen += `<input type="radio" class="radio-gens" id=${geners[i]} value=${i+1} name="generation" checked>
    <label for=${geners[i]} class="label-gens">${geners[i]}</label>`
  }
  filters.innerHTML=gen
});
