
let data={}
fetch('perguntas.json').then(r=>r.json()).then(j=>{
 data=j
 const sel=document.getElementById('chapter')
 Object.keys(data).forEach(k=>{
  const o=document.createElement('option')
  o.value=k;o.textContent=k
  sel.appendChild(o)
 })
})

function start(){
 const cap=document.getElementById('chapter').value
 const qs=data[cap].slice(0,15)
 const div=document.getElementById('game')
 div.innerHTML=''
 qs.forEach(q=>{
  const h=document.createElement('h3');h.textContent=q.q
  div.appendChild(h)
  q.a.forEach(a=>{
   const b=document.createElement('button')
   b.textContent=a
   div.appendChild(b)
  })
 })
}
