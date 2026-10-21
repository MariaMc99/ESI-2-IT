const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

const lessons = [
  {
    title: "Netværk",
    lead: "Et netværk forbinder enheder, så de kan kommunikere og dele data, fx via Wi-Fi eller et kabel.",
    label: "EKSEMPEL FRA HVERDAGEN",
    example: "Du forbinder din mobil til hjemmets Wi-Fi for at gå på internettet. Din computer bruger samme netværk til at printe på en trådløs printer.",
    tip: "Brug netværk, du har tillid til, og vær forsigtig med åbne Wi-Fi-netværk."
  },
  {
    title: "Adgangskoder",
    lead: "En stærk adgangskode er lang, unik og svær at gætte. En adgangssætning med flere tilfældige ord kan være et godt valg.",
    label: "EKSEMPEL FRA HVERDAGEN",
    example: "Brug en lang, unik adgangskode til din e-mail i stedet for en simpel kode som Sommer123. Brug ikke den samme kode på flere konti.",
    tip: "Brug en password manager, og aktivér MFA, når det er muligt."
  },
  {
    title: "MFA / To-faktor-login",
    lead: "MFA betyder multifaktorgodkendelse. Du skal bekræfte din identitet med mindst to forskellige typer beviser, fx en adgangskode og en godkendelse i en app.",
    label: "EKSEMPEL FRA HVERDAGEN",
    example: "Du logger ind på din e-mail med din adgangskode og godkender derefter login i en app på din mobil.",
    tip: "Aktivér MFA på vigtige konti. Godkend aldrig et login, du ikke selv har startet."
  },
  {
    title: "Persondata",
    lead: "Persondata er oplysninger, der kan knyttes til en bestemt person, enten direkte eller indirekte.",
    label: "EKSEMPEL FRA HVERDAGEN",
    example: "Dit navn, din adresse, dit billede og din e-mailadresse kan være persondata.",
    tip: "Del kun personoplysninger, når det er nødvendigt, og brug godkendte systemer."
  },
  {
    title: "Phishing",
    lead: "Phishing er et forsøg på at snyde dig til at dele oplysninger eller klikke på et skadeligt link. Det sker ofte via e-mail, SMS eller falske hjemmesider.",
    label: "EKSEMPEL FRA HVERDAGEN",
    example: "Du får en SMS om, at du skal betale 15 kr. for at modtage en pakke. Linket fører til en falsk side, der forsøger at stjæle dine kortoplysninger.",
    tip: "Kontrollér afsenderen, og gå selv ind på virksomhedens officielle hjemmeside i stedet for at klikke på mistænkelige links."
  },
  {
    title: "Backup",
    lead: "En backup er en ekstra kopi af data, som kan genskabes, hvis de originale filer går tabt eller bliver ødelagt.",
    label: "EKSEMPEL FRA HVERDAGEN",
    example: "Hvis din computer går i stykker, kan en opdateret sikkerhedskopi hjælpe dig med at genskabe dine dokumenter.",
    tip: "Sørg for, at din backup er opdateret, beskyttet og kan gendannes."
  },
  {
    title: "Firewall",
    lead: "En firewall er et sikkerhedsfilter, der kontrollerer netværkstrafik og blokerer forbindelser, som ikke er tilladt efter dens regler.",
    label: "EKSEMPEL FRA HVERDAGEN",
    example: "Firewallen kan blokere en uønsket forbindelse, der forsøger at få adgang til din computer via internettet.",
    tip: "Lad firewallen være aktiveret, og slå den ikke fra for at løse et problem uden at kende konsekvenserne."
  },
  {
    title: "Browser",
    lead: "En browser er et program, du bruger til at åbne og besøge hjemmesider på internettet.",
    label: "EKSEMPEL FRA HVERDAGEN",
    example: "Du åbner Chrome, Edge, Firefox eller Safari for at søge efter information eller gå ind på din skoles hjemmeside.",
    tip: "Hold browseren opdateret, og kontrollér webadressen, før du indtaster følsomme oplysninger."
  },
  {
    title: "Server",
    lead: "En server er en computer eller tjeneste, der leverer data eller funktioner til andre enheder via et netværk.",
    label: "EKSEMPEL FRA HVERDAGEN",
    example: "Når du åbner skolens hjemmeside, sender en server sidens indhold til din browser.",
    tip: "Gem arbejdsfiler i de systemer, skolen har godkendt, og beskyt dine loginoplysninger."
  },
  {
    title: "Malware",
    lead: "Malware er skadelig software, der kan skade en enhed, stjæle oplysninger eller låse filer. Virus og ransomware er eksempler.",
    label: "EKSEMPEL FRA HVERDAGEN",
    example: "Du åbner en mistænkelig vedhæftet fil, som installerer skadelig software på din computer.",
    tip: "Opdatér dine programmer, brug sikkerhedssoftware, og åbn ikke uventede filer eller links."
  },
  {
    title: "Kryptering",
    lead: "Kryptering gør data ulæselige for uvedkommende. De kan normalt kun læses igen med den rette nøgle eller godkendelse.",
    label: "EKSEMPEL FRA HVERDAGEN",
    example: "Når du bruger en sikker forbindelse til netbank, hjælper kryptering med at beskytte oplysningerne under overførslen.",
    tip: "Brug sikre forbindelser, og beskyt enheder og konti med adgangskode og MFA."
  }
];
const terms = [
  ["Netværk","En forbindelse mellem enheder, som kan udveksle data."],
  ["Firewall","Et sikkerhedsfilter, der kontrollerer netværkstrafik efter regler."],
  ["Phishing","Digitalt bedrag, der forsøger at lokke oplysninger eller klik ud af dig."],
  ["Backup","En ekstra kopi af data, som kan genskabes."],
  ["Browser","Et program, du bruger til at åbne hjemmesider."],
  ["Server","En computer eller tjeneste, der leverer data eller funktioner til andre."],
  ["Malware","Skadelig software, fx virus eller ransomware."],
  ["To-faktor-login","Login med to forskellige typer bevis på, at du er dig."],
  ["Kryptering","Omformning af data, så de ikke kan læses uden den rette nøgle."],
  ["Persondata","Oplysninger, der kan knyttes til en bestemt person."]
];
const cases = [
 {title:"Den hastende mail",category:"PHISHING / E-MAIL",risk:"HØJ RISIKO",description:"Du modtager en mail, der ser ud til at komme fra skolens IT-afdeling. Den siger, at din konto bliver lukket om 15 minutter, hvis du ikke bekræfter din adgangskode.",from:"IT-support <it-support@skole-konto-help.example>",subject:"HASTER: Din konto lukkes om 15 minutter",body:"Hej bruger,\nVi har registreret et problem med din konto. Bekræft straks din adgangskode via linket herunder for at undgå spærring.\n[BEKRÆFT DIN KONTO]\n\nVenlig hilsen\nIT Support",question:"Hvad er det sikreste næste skridt?",options:["Klik på linket, fordi mailen haster","Svar med din adgangskode","Undlad at klikke, og kontakt IT via en kendt kanal","Videresend mailen til hele klassen"],correct:2,explanation:"Tidspres, en mistænkelig afsenderadresse og anmodningen om adgangskode er advarselstegn. Kontakt IT gennem skolens officielle kontaktvej — ikke via mailens link."},
 {title:"Det ukendte USB-stik",category:"ENHEDER / DATA",risk:"MIDDEL RISIKO",description:"Du finder et USB-stik på gangen. Der står 'Eksamensnoter' på det, og du er nysgerrig efter at se, hvad der ligger på det.",from:"Ukendt USB-enhed",subject:"Mærkat: Eksamensnoter — vigtigt!",body:"Du ved ikke, hvem der har lagt stikket, eller hvad det indeholder. En ukendt USB-enhed kan indeholde skadelig software.",question:"Hvad bør du gøre?",options:["Sætte det i skolens computer for at undersøge det","Give det til underviseren eller IT uden at tilslutte det","Sætte det i din egen computer først","Låne det til en klassekammerat"],correct:1,explanation:"Tilslut ikke ukendte USB-enheder. De kan bruges til at sprede malware eller forsøge at stjæle data. Aflever det til ansvarlig underviser eller IT."},
 {title:"Det mistænkelige login",category:"KONTI / ADGANG",risk:"HØJ RISIKO",description:"Du får en notifikation om et loginforsøg fra et land, du ikke befinder dig i. Du har ikke selv forsøgt at logge ind.",from:"Sikkerhedsnotifikation",subject:"Nyt login fra ukendt enhed",body:"Loginforsøg: Ukendt enhed\nPlacering: Ukendt\nTidspunkt: Netop nu\nHvis det ikke var dig, skal du sikre kontoen via den officielle app eller hjemmeside.",question:"Hvad er den bedste handling?",options:["Ignorere notifikationen","Godkende forsøget for at få den væk","Bruge den officielle tjeneste til at afvise forsøget og sikre kontoen","Sende din kode til en ven og spørge om hjælp"],correct:2,explanation:"Godkend aldrig et login, du ikke selv har startet. Brug tjenestens officielle app eller hjemmeside, skift adgangskode hvis nødvendigt, og kontrollér multifaktor-login."},
 {title:"Den gratis fil",category:"DOWNLOAD / MALWARE",risk:"MIDDEL RISIKO",description:"En ukendt bruger i et online forum tilbyder et gratis program. Downloadlinket fører til en fil med et mærkeligt navn, og antivirus viser en advarsel.",from:"Ukendt forumbruger",subject:"Gratis program — slå advarslen fra",body:"'Det er helt sikkert! Hvis computeren advarer, skal du bare slå beskyttelsen fra. Download her.'",question:"Hvad bør du gøre?",options:["Slå antivirus fra og installere programmet","Hente filen igen fra samme link","Undlade at installere og bruge en godkendt kilde","Køre programmet som administrator"],correct:2,explanation:"Slå ikke sikkerhedsbeskyttelse fra for at installere en ukendt fil. Afbryd, og brug kun software fra godkendte kilder eller skolens IT."}
];

let currentView = "briefing";
let teams = [{id:1,name:"Alfa",score:0},{id:2,name:"Bravo",score:0},{id:3,name:"Charlie",score:0}];
let activeTeam = 1, nextTeamId = 4, moves = 0, flipped = [], lockBoard = false, matchedPairs = 0, deck = [];
let caseIndex = 0, answeredCases = new Map(), casePoints = 0;

function navigate(view) {
  currentView = view;
  $$(".view").forEach(v => v.classList.toggle("active", v.id === `view-${view}`));
  $$(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.view === view));
  $("#sidebar").classList.remove("open");
  window.scrollTo({top:0,behavior:"smooth"});
}
$$("[data-view]").forEach(b => b.addEventListener("click", () => navigate(b.dataset.view)));
$$("[data-go]").forEach(b => b.addEventListener("click", () => navigate(b.dataset.go)));
$("#navToggle").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
function updateClock(){const d=new Date();$("#clock").textContent=`${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")} / SYSTEM KLAR`;}
updateClock();setInterval(updateClock,30000);

function renderLesson(index){
 const l=lessons[index]; $$(".lesson-tab").forEach((b,i)=>b.classList.toggle("selected",i===index));
 $("#lessonDetail").innerHTML=`<div class="detail-overline"><span class="detail-icon">◈</span><span>FAGLIG BRIEFING</span><span class="detail-number">${String(index+1).padStart(2,"0")} / 05</span></div><h2>${l.title}</h2><p class="detail-lead">${l.lead}</p><div class="example-box"><span class="example-label">${l.label}</span><p>${l.example}</p></div><div class="key-point"><span>✓</span><p><strong>Husk:</strong> ${l.tip}</p></div><button class="btn btn-primary" data-go="memory">Træn begreberne <span>→</span></button>`;
 $("#lessonDetail [data-go]").addEventListener("click",()=>navigate("memory"));
}
$$(".lesson-tab").forEach(b=>b.addEventListener("click",()=>renderLesson(Number(b.dataset.lesson))));

function renderTeams(){
 const select=$("#teamSelect");select.innerHTML="";
 teams.forEach(t=>{const o=document.createElement("option");o.value=t.id;o.textContent=t.name;select.append(o)});
 if(!teams.some(t=>t.id===activeTeam))activeTeam=teams[0]?.id;
 select.value=activeTeam;
 $("#scoreboard").innerHTML=teams.map(t=>`<div class="score-pill ${t.id===activeTeam?"current":""}">${escapeHtml(t.name)} <strong>${t.score} P</strong></div>`).join("");
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
$("#teamSelect").addEventListener("change",e=>{activeTeam=Number(e.target.value);renderTeams()});
$("#addTeam").addEventListener("click",()=>{
 const name=$("#newTeamName").value.trim();if(!name){$("#newTeamName").focus();return}
 if(teams.some(t=>t.name.toLowerCase()===name.toLowerCase())){alert("Et hold med det navn findes allerede.");return}
 const t={id:nextTeamId++,name,score:0};teams.push(t);activeTeam=t.id;$("#newTeamName").value="";renderTeams();
});
$("#newTeamName").addEventListener("keydown",e=>{if(e.key==="Enter")$("#addTeam").click()});
$("#renameTeam").addEventListener("click",()=>{
 const t=teams.find(x=>x.id===activeTeam);if(!t)return;const name=prompt("Nyt navn til holdet:",t.name);
 if(name&&name.trim()){const n=name.trim();if(teams.some(x=>x.id!==t.id&&x.name.toLowerCase()===n.toLowerCase())){alert("Navnet er allerede i brug.");return}t.name=n;renderTeams()}
});
$("#removeTeam").addEventListener("click",()=>{
 if(teams.length<=1){alert("Der skal være mindst ét hold.");return}
 const t=teams.find(x=>x.id===activeTeam);if(!t)return;
 if(confirm(`Fjern holdet "${t.name}"?`)){teams=teams.filter(x=>x.id!==activeTeam);activeTeam=teams[0].id;renderTeams()}
});
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function newGame(){
 moves=0;flipped=[];lockBoard=false;matchedPairs=0;
 deck=shuffle(terms.flatMap((pair,i)=>[{id:i,type:"term",text:pair[0]},{id:i,type:"definition",text:pair[1]}]));
 $("#movesLabel").innerHTML='TRÆK <strong>0</strong>';$("#gameFeedback").className="game-feedback";$("#gameFeedback").textContent="Vælg to kort for at begynde.";
 $("#memoryGrid").innerHTML=deck.map((c,i)=>`<button class="memory-card" data-card="${i}" aria-label="Skjult kort"><span class="card-back">✳</span></button>`).join("");
 $$(".memory-card").forEach(b=>b.addEventListener("click",()=>flipCard(Number(b.dataset.card))));
}
function flipCard(i){
 if(lockBoard)return;const card=deck[i],el=$(`.memory-card[data-card="${i}"]`);
 if(el.classList.contains("matched")||flipped.some(x=>x.i===i))return;
 el.classList.add("flipped");el.innerHTML=`<span><span class="card-kind">${card.type==="term"?"BEGREB":"FORKLARING"}</span>${escapeHtml(card.text)}</span>`;el.setAttribute("aria-label",card.text);flipped.push({i,card});
 if(flipped.length===2){
  moves++;$("#movesLabel").innerHTML=`TRÆK <strong>${moves}</strong>`;
  const [a,b]=flipped;
  if(a.card.id===b.card.id&&a.card.type!==b.card.type){
   [a.i,b.i].forEach(n=>$(`.memory-card[data-card="${n}"]`).classList.add("matched"));
   const team=teams.find(t=>t.id===activeTeam);if(team)team.score+=10;matchedPairs++;renderTeams();
   $("#gameFeedback").className="game-feedback good";$("#gameFeedback").textContent=`Rigtigt par! +10 point til ${team?.name||"holdet"}.`;
   flipped=[];if(matchedPairs===terms.length)$("#gameFeedback").textContent+=` Mission fuldført på ${moves} træk!`;
  }else{
   lockBoard=true;$("#gameFeedback").className="game-feedback bad";$("#gameFeedback").textContent="Ikke et match — prøv at huske placeringen.";
   setTimeout(()=>{[a.i,b.i].forEach(n=>{const e=$(`.memory-card[data-card="${n}"]`);e.classList.remove("flipped");e.innerHTML='<span class="card-back">✳</span>';e.setAttribute("aria-label","Skjult kort")});flipped=[];lockBoard=false;},950);
  }
 }
}
$("#restartGame").addEventListener("click",newGame);

function renderCaseNav(){
 $("#caseCount").textContent=`01—${String(cases.length).padStart(2,"0")}`;
 $("#caseNav").innerHTML=cases.map((c,i)=>`<button class="case-nav-item ${i===caseIndex?"selected":""}" data-case="${i}"><span>${String(i+1).padStart(2,"0")}</span><span><strong>${escapeHtml(c.title)}</strong><small>${c.category}</small></span></button>`).join("");
 $$(".case-nav-item").forEach(b=>b.addEventListener("click",()=>{caseIndex=Number(b.dataset.case);renderCaseNav();renderCase()}));
}
function renderCase(){
 const c=cases[caseIndex],done=answeredCases.has(caseIndex);
 $("#caseCard").innerHTML=`<div class="case-meta"><span>${c.category}</span><span class="risk-tag">${c.risk}</span></div><h2>${c.title}</h2><p class="case-description">${c.description}</p>
 <div class="email-mock"><div class="email-row"><span>FRA</span><b>${escapeHtml(c.from)}</b></div><div class="email-row"><span>EMNE</span><b>${escapeHtml(c.subject)}</b></div><div class="email-body">${escapeHtml(c.body)}</div></div>
 <div class="case-question">${c.question}</div><div class="answer-options">${c.options.map((o,i)=>`<button class="answer-option" data-answer="${i}" ${done?"disabled":""}>${String.fromCharCode(65+i)}. ${escapeHtml(o)}</button>`).join("")}</div>
 <div class="case-explanation ${done?"visible":""}" id="caseExplanation">${done?`<strong>${answeredCases.get(caseIndex)?"KORREKT VURDERING":"GODT FORSØG"}.</strong> ${c.explanation}`:""}</div>
 <div class="case-footer"><span class="case-score">MISSIONPOINT <strong>${casePoints}</strong> / ${cases.length*10}</span><button class="btn btn-primary" id="nextCase">${caseIndex===cases.length-1?"Til første case":"Næste case"} <span>→</span></button></div>`;
 $$(".answer-option").forEach(b=>b.addEventListener("click",()=>answerCase(Number(b.dataset.answer))));
 $("#nextCase").addEventListener("click",()=>{caseIndex=(caseIndex+1)%cases.length;renderCaseNav();renderCase()});
}
function answerCase(choice){
 if(answeredCases.has(caseIndex))return;const c=cases[caseIndex],correct=choice===c.correct;answeredCases.set(caseIndex,correct);
 if(correct){casePoints+=10;const t=teams.find(x=>x.id===activeTeam);if(t)t.score+=10;renderTeams()}
 $$(".answer-option").forEach((b,i)=>{b.disabled=true;if(i===c.correct)b.classList.add("correct");else if(i===choice)b.classList.add("incorrect")});
 $("#caseExplanation").classList.add("visible");$("#caseExplanation").innerHTML=`<strong>${correct?"KORREKT VURDERING — +10 POINT":"IKKE HELT — 0 POINT"}.</strong> ${c.explanation}`;
 $(".case-score").innerHTML=`MISSIONPOINT <strong>${casePoints}</strong> / ${cases.length*10}`;
}
renderTeams();newGame();renderCaseNav();renderCase();
