let db=[];
fetch('data/characters.json').then(x=>x.json()).then(x=>{db=x;render()});
q.oninput=render;
function render(){
 app.innerHTML='';
 let s=q.value||'';
 db.filter(c=>c.name.includes(s)).forEach(c=>{
 let d=document.createElement('div');d.className='card';
 d.innerHTML=`<h2>${c.name}</h2>
武器:${c.weapons.join(' / ')}<br>
属性:${c.elements.join(' / ')}<br>
役割:${c.role_text}<hr>
アタッカー:${c.scores.attacker}<br>
バッファー:${c.scores.buffer}<br>
デバッファー:${c.scores.debuffer}<br>
ヒーラー:${c.scores.healer}`;
 app.appendChild(d);
 });
}
