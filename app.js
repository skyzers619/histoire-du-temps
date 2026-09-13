const BRANDS={
rolex:"Rolex",
patek:"Patek Philippe",
omega:"OMEGA",
cartier:"Cartier",
tudor:"TUDOR"
};

const SOURCES={
rolex:[
"Rolex",
"https://www.rolex.com/about-rolex/history/1905-1919",
"https://newsroom.rolex.com/fr/about-rolex/history-of-rolex"
],
patek:[
"Patek Philippe",
"https://www.patek.com/fr/manufacture/une-histoire-d-independance/les-fondateurs",
"https://www.patek.com/fr/manufacture/une-histoire-d-independance/ancree-a-geneve-et-en-suisse"
],
omega:[
"OMEGA",
"https://press.omegawatches.com/our-past-present-and-future/",
"https://www.omegawatches.com/planet-omega/space"
],
cartier:[
"Cartier",
"https://www.cartier.com/",
"https://www.quality.cartier.com/fr-fr"
],
tudor:[
"TUDOR",
"https://www.tudorwatch.com/en/inside-tudor/history",
"https://www.tudorwatch.com/en/century-tudor"
]
};

const DATA=[
[1839,"patek","Création de Patek, Czapek & Cie","Antoine Norbert de Patek fonde Patek, Czapek & Cie avec Franciszek Czapek à Genève."],
[1844,"patek","Rencontre avec Jean Adrien Philippe","Patek rencontre Jean Adrien Philippe à Paris lors de l’Exposition des produits de l’industrie française et découvre son système de remontage sans clé."],
[1845,"patek","Patek & Cie","La société devient Patek & Cie."],
[1847,"cartier","La Maison Cartier","Cartier situe la fondation de la Maison en 1847."],
[1848,"omega","Louis Brandt","Les origines d’OMEGA remontent à Louis Brandt en 1848."],
[1905,"rolex","Hans Wilsdorf à Londres","Rolex indique que Hans Wilsdorf fonde en 1905 une société à Londres spécialisée dans la distribution de montres."],
[1908,"rolex","Le nom Rolex","Rolex documente l’apparition du nom « Rolex » en 1908."],
[1910,"rolex","Précision chronométrique","Une montre Rolex devient en 1910 la première montre-bracelet au monde à recevoir le Swiss Certificate of Chronometric Precision."],
[1914,"rolex","Certificat de classe A","Le Kew Observatory attribue à une montre-bracelet Rolex un certificat de précision de classe A."],
[1917,"cartier","Tank","La Tank est créée par Louis Cartier en 1917."],
[1919,"rolex","Genève","Rolex indique son déménagement à Genève en 1919."],
[1926,"rolex","Oyster","Rolex lance l’Oyster, boîtier hermétique conçu pour protéger le mouvement contre l’eau et la poussière."],
[1926,"tudor","« The Tudor »","TUDOR indique que le nom « The Tudor » est enregistré en 1926 pour le compte de Hans Wilsdorf."],
[1931,"rolex","Perpetual","Rolex documente le développement de son système de remontage automatique Perpetual à rotor."],
[1945,"rolex","Datejust","Rolex lance la Datejust en 1945."],
[1946,"tudor","Montres TUDOR S.A.","Hans Wilsdorf établit Montres TUDOR S.A. en 1946."],
[1952,"tudor","Oyster Prince","TUDOR indique le lancement de l’Oyster Prince en 1952."],
[1954,"tudor","Premier modèle de plongée","TUDOR indique qu’en 1954 apparaît la première montre de plongée de la marque."],
[1957,"omega","Speedmaster","La Speedmaster entre dans l’histoire d’OMEGA en 1957."],
[1969,"omega","Apollo 11","La Speedmaster est portée lors de la mission Apollo 11."],
[2015,"tudor","Mouvements Manufacture","TUDOR indique proposer des mouvements Manufacture depuis 2015."],
[2017,"tudor","Born To Dare","La campagne « Born To Dare » fait partie de l’identité contemporaine de TUDOR."]
];

const MODELS=[
["rolex","Oyster","1926","Famille historique documentée par Rolex."],
["rolex","Oyster Perpetual","1931","Première Oyster Perpetual documentée par Rolex."],
["rolex","Datejust","1945","Modèle lancé en 1945."],
["rolex","Explorer","1953","Premier Explorer documenté par Rolex."],
["rolex","Submariner","1953","Première Submariner documentée par Rolex."],
["rolex","GMT-Master","1955","Premier GMT-Master documenté par Rolex."],
["rolex","Day-Date","1956","Premier Day-Date documenté par Rolex."],
["rolex","Cosmograph Daytona","1963","Premier Cosmograph Daytona documenté par Rolex."],

["patek","Montres de poche historiques","1839","Les archives officielles Patek Philippe documentent les premières productions."],

["omega","Speedmaster","1957","Famille historique d’OMEGA."],
["omega","Seamaster","—","Famille historique d’OMEGA."],
["omega","Constellation","—","Famille historique d’OMEGA."],

["cartier","Santos","1904","Cartier relie la Santos à Alberto Santos-Dumont."],
["cartier","Tank","1917","Créée par Louis Cartier en 1917."],
["cartier","Santos-Dumont","—","Famille de montres Cartier liée à l’histoire de Santos."],
["cartier","Panthère","—","Famille horlogère Cartier."],
["cartier","Ballon Bleu","—","Famille horlogère Cartier."],

["tudor","Oyster Prince","1952","Lancée en 1952 selon TUDOR."],
["tudor","Submariner","1954","Première montre de plongée TUDOR documentée en 1954."],
["tudor","Black Bay","—","Famille emblématique TUDOR."],
["tudor","Black Bay 58","—","Famille Black Bay."],
["tudor","Pelagos","—","Famille TUDOR."],
["tudor","Pelagos FXD","—","Famille TUDOR."],
["tudor","1926","—","Famille TUDOR."],
["tudor","Royal","—","Famille TUDOR."]
];

function source(b){
return `<a class="brand-source" href="${SOURCES[b][1]}" target="_blank" rel="noopener">Source officielle ↗</a>`;
}

function renderTimeline(filter="all"){
document.querySelector("#events").innerHTML=
DATA
.filter(x=>filter==="all"||x[1]===filter)
.map(x=>`
<article class="event reveal">
<div class="year">${x[0]}</div>
<div>
<span class="kicker">${BRANDS[x[1]]}</span>
<h3>${x[2]}</h3>
<p>${x[3]}</p>
${source(x[1])}
</div>
</article>
`)
.join("");

observe();
}

function renderBrands(){

document.querySelector("#brands").innerHTML=

Object.keys(BRANDS).map((b,i)=>`

<section id="${b}" class="brand">

<div class="brand-hero">

<div>

<span class="kicker">0${i+1} / ${BRANDS[b]}</span>

<h2>${BRANDS[b]}</h2>

<p>
${({
rolex:"Innovation, précision et exploration.",
patek:"Tradition, innovation et indépendance.",
omega:"Précision, exploration et conquête spatiale.",
cartier:"Lorsque le design devient une icône.",
tudor:"Born To Dare."
})[b]}
</p>

</div>

<div class="emblem">

<img
src="${({
rolex:"assets/rolex.jpg",
patek:"assets/patek.jpg",
omega:"assets/omega.jpg",
cartier:"assets/cartier.jpg",
tudor:"assets/tudor.jpg"
})[b]}"
alt="${BRANDS[b]}"
>

</div>

</div>

<div class="brand-body">

<div class="founder">

<div>

<span class="kicker">

${b==="rolex"
?"FONDATEUR"
:b==="patek"
?"FONDATEURS"
:b==="omega"
?"ORIGINES"
:"HISTOIRE"}

</span>

<h3>

${({
rolex:"Hans Wilsdorf",
patek:"Antoine Norbert de Patek & Jean Adrien Philippe",
omega:"Louis Brandt",
cartier:"La Maison Cartier",
tudor:"Une identité à part entière"
})[b]}

</h3>

</div>

<p>

${({
rolex:"Hans Wilsdorf est présenté par Rolex comme le fondateur dont l’histoire est intimement liée à celle de la Maison.",
patek:"Patek Philippe présente Antoine Norbert de Patek et Jean Adrien Philippe comme les fondateurs dont la rencontre a changé le cours de l’horlogerie.",
omega:"Les origines d’OMEGA remontent à Louis Brandt en 1848.",
cartier:"La Maison Cartier est fondée en 1847. Son histoire horlogère comprend notamment la Santos et la Tank.",
tudor:"TUDOR fait remonter ses origines à l’enregistrement de « The Tudor » en 1926 et documente la création de Montres TUDOR S.A. en 1946."
})[b]}

${source(b)}

</p>

</div>

<div class="history-grid">

${DATA
.filter(x=>x[1]===b)
.slice(0,9)
.map(x=>`

<article class="history reveal">

<span class="year">${x[0]}</span>

<h4>${x[2]}</h4>

<p>${x[3]}</p>

</article>

`)
.join("")}

</div>

<div class="gallery">

<span class="kicker">ARCHIVES</span>

<h3>
Images &amp; documents <em>officiels</em>
</h3>

<div class="gallery-grid">

${
b==="rolex"

?`

<div class="gallery-card">

<div class="art">

<img
src="assets/rolex-archives.jpg"
alt="Rolex — Archives officielles"
>

</div>

<b>Archives officielles</b>

<small>Archives historiques Rolex</small>

${source(b)}

</div>


<div class="gallery-card">

<div class="art">

<img
src="assets/rolex-document.jpg"
alt="Rolex — Documents historiques"
>

</div>

<b>Documents historiques</b>

<small>Document historique Rolex</small>

${source(b)}

</div>


<div class="gallery-card">

<div class="art">

<img
src="assets/rolex-collection.jpg"
alt="Rolex — Collections"
>

</div>

<b>Collections</b>

<small>Référence historique Rolex</small>

${source(b)}

</div>

`


:b==="patek"

?`

<div class="gallery-card">

<div class="art">

<img
src="assets/patek-archives.jpg"
alt="Patek Philippe — Archives officielles"
>

</div>

<b>Archives officielles</b>

<small>Archives historiques Patek Philippe</small>

${source(b)}

</div>


<div class="gallery-card">

<div class="art">

<img
src="assets/patek-document.jpg"
alt="Patek Philippe — Document historique"
>

</div>

<b>Documents historiques</b>

<small>Document historique Patek Philippe</small>

${source(b)}

</div>


<div class="gallery-card">

<div class="art">

<img
src="assets/patek-collection.jpg"
alt="Patek Philippe — Collection historique"
>

</div>

<b>Collections</b>

<small>Collection historique Patek Philippe</small>

${source(b)}

</div>

`


:b==="omega"

?`

<div class="gallery-card">

<div class="art">

<img
src="assets/omega-archives.jpg"
alt="OMEGA — Archives officielles"
>

</div>

<b>Archives officielles</b>

<small>Archives historiques OMEGA</small>

${source(b)}

</div>


<div class="gallery-card">

<div class="art">

<img
src="assets/omega-document.jpg"
alt="OMEGA — Documents historiques"
>

</div>

<b>Documents historiques</b>

<small>Document historique OMEGA</small>

${source(b)}

</div>


<div class="gallery-card">

<div class="art">

<img
src="assets/omega-collection.jpg"
alt="OMEGA — Collection historique"
>

</div>

<b>Collections</b>

<small>Collection historique OMEGA</small>

${source(b)}

</div>

`


:b==="cartier"
?`
<div class="gallery-card">
<div class="art">
<img src="assets/cartier-archives.jpg" alt="Cartier — Archives officielles">
</div>
<b>Archives officielles</b>
<small>Archives historiques Cartier</small>
${source(b)}
</div>

<div class="gallery-card">
<div class="art">
<img src="assets/cartier-document.jpg" alt="Cartier — Documents historiques">
</div>
<b>Documents historiques</b>
<small>Documents historiques Cartier</small>
${source(b)}
</div>

<div class="gallery-card">
<div class="art">
<img src="assets/cartier-collection.jpg" alt="Cartier — Collection historique">
</div>
<b>Collections</b>
<small>Collection historique Cartier</small>
${source(b)}
</div>
`

:b==="tudor"
?`

<div class="gallery-card">
<div class="art">
<img src="assets/tudor-archives.jpg" alt="TUDOR — Archives officielles">
</div>
<b>Archives officielles</b>
<small>Archives historiques TUDOR</small>
${source(b)}
</div>

<div class="gallery-card">
<div class="art">
<img src="assets/tudor-document.jpg" alt="TUDOR — Documents historiques">
</div>
<b>Documents historiques</b>
<small>Documents historiques TUDOR</small>
${source(b)}
</div>

<div class="gallery-card">
<div class="art">
<img src="assets/tudor-collection.jpg" alt="TUDOR — Collection historique">
</div>
<b>Collections</b>
<small>Collection historique TUDOR</small>
${source(b)}
</div>
`

:""

}

</div>

</div>

</div>

</section>

`).join("");

}


function renderModels(){

let q=document
.querySelector("#q")
.value
.toLowerCase();

let b=document
.querySelector("#brand")
.value;

document.querySelector("#cards").innerHTML=

MODELS
.filter(x=>
(b==="all"||x[0]===b)
&&
(!q||x.join(" ").toLowerCase().includes(q))
)
.map(x=>`

<article class="card reveal">

<div>

<span class="mark">
${BRANDS[x[0]]}
</span>

<h3>${x[1]}</h3>

<p>${x[3]}</p>

</div>

<div class="meta">

<span>${x[2]}</span>

<span>DOCUMENTÉ</span>

</div>

</article>

`)
.join("");

}


function renderSources(){

document.querySelector("#sourceList").className="sources-list";

document.querySelector("#sourceList").innerHTML=

Object.values(SOURCES)
.map((s,i)=>`

<a
class="source"
href="${s[1]}"
target="_blank"
rel="noopener"
>

<span>0${i+1}</span>

<strong>${s[0]}</strong>

<small>${new URL(s[1]).hostname}</small>

↗

</a>

`)
.join("");

}


function observe(){

if(window.obs)
window.obs.disconnect();

window.obs=
new IntersectionObserver(
es=>es.forEach(
e=>e.isIntersecting
&&
e.target.classList.add("visible")
),
{
threshold:.12
}
);

document
.querySelectorAll(".reveal")
.forEach(e=>window.obs.observe(e));

}


Object.entries(BRANDS).forEach(
([k,v])=>

document
.querySelector("#brand")
.insertAdjacentHTML(
"beforeend",
`<option value="${k}">${v}</option>`
)

);


document.querySelector("#filters").innerHTML=

`<button class="active" data-b="all">
Toutes
</button>`

+

Object.entries(BRANDS)
.map(([k,v])=>
`<button data-b="${k}">${v}</button>`
)
.join("");


document
.querySelectorAll("#filters button")
.forEach(
b=>

b.onclick=()=>{

document
.querySelectorAll("#filters button")
.forEach(
x=>x.classList.remove("active")
);

b.classList.add("active");

renderTimeline(b.dataset.b);

}

);


document.querySelector("#q").oninput=renderModels;

document.querySelector("#brand").onchange=renderModels;


document.querySelector("#hamb").onclick=()=>{

document
.querySelector("#nav")
.classList.toggle("open");

};


document
.querySelectorAll("nav a")
.forEach(
a=>

a.onclick=()=>
document
.querySelector("#nav")
.classList.remove("open")

);


addEventListener(
"scroll",
()=>{

let h=
document.documentElement.scrollHeight
-
innerHeight;

document.querySelector("#progress").style.width=
(scrollY/h*100)+"%";

document
.querySelector("#header")
.classList.toggle(
"scrolled",
scrollY>25
);

}
);


renderTimeline();

renderBrands();

renderModels();

renderSources();

observe();
