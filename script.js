const PRODUTOS=[
  {nome:'Mussarela',categorias:['queijos'],tags:['artesanal']},
  {nome:'Nozinho',categorias:['queijos'],tags:['fresco']},
  {nome:'Burrata de búfala',categorias:['queijos'],tags:['búfala','cremosa']},
  {nome:'Requeijão de corte',categorias:['queijos'],tags:['cremoso']},
  {nome:'Doce de leite',categorias:['queijos'],tags:['sobremesa']},
  {nome:'Geleias',categorias:['emporio'],tags:['doces']},
];
const RECEITAS=[
  {titulo:'Bruschetta de Mussarela',tempo:'15 min',ingredientes:['Pão','Mussarela Leite Jóia','Tomate','Azeite','Manjericão'],preparo:['Tostar pão','Cobrir com tomate','Derreter a mussarela','Finalizar com manjericão']},
  {titulo:'Tábua leve com Nozinho',tempo:'10 min',ingredientes:['Nozinho','Uvas','Castanhas','Mel'],preparo:['Montar tábua','Regar com mel']},
];
function renderProdutos(lista){const el=document.getElementById('lista-produtos');el.innerHTML='';lista.forEach(p=>{const card=document.createElement('article');card.className='card';card.innerHTML=`<h3>${p.nome}</h3><p>${p.categorias.includes('emporio')?'Empório':'Queijo artesanal'}</p>`;el.appendChild(card)})}
function filtraProdutos(){const termo=(document.getElementById('busca').value||'').toLowerCase();const cat=document.getElementById('categoria').value;renderProdutos(PRODUTOS.filter(p=>(!termo||p.nome.toLowerCase().includes(termo))&&(cat==='todas'||p.categorias.includes(cat))))}
function renderReceitas(){const el=document.getElementById('lista-receitas');el.innerHTML='';RECEITAS.forEach(r=>{const a=document.createElement('article');a.className='recipe';a.innerHTML=`<h3>${r.titulo}</h3><p><strong>Tempo:</strong> ${r.tempo}</p><ul>${r.ingredientes.map(i=>`<li>${i}</li>`).join('')}</ul>`;el.appendChild(a)})}
document.addEventListener('DOMContentLoaded',()=>{renderProdutos(PRODUTOS);renderReceitas();document.getElementById('busca').addEventListener('input',filtraProdutos);document.getElementById('categoria').addEventListener('change',filtraProdutos);const y=document.getElementById('ano');if(y)y.textContent=new Date().getFullYear()});