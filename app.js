fetch('data/characters_raw.json')
.then(r=>r.json())
.then(data=>{
 const box=document.getElementById('list');
 const input=document.getElementById('search');
 function show(){
  box.innerHTML='';
  data.filter(x=>JSON.stringify(x).includes(input.value))
  .forEach(x=>{
   let d=document.createElement('div');
   d.className='card';
   d.textContent=JSON.stringify(x,null,2);
   box.appendChild(d);
  });
 }
 input.oninput=show;
 show();
});
