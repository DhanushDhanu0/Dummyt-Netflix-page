console.log("working");
const qu1=document.getElementById('quDiv');
console.log(qu1);
const mainDiv=document.getElementById('qu1');

const plus=document.getElementById('plus');

//question-1 div-----
const qDiv=document.createElement('div');
qDiv.innerHTML=`<p id="p1">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
<p id=p2>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>`;
qu1.appendChild(qDiv);
qDiv.setAttribute('id','qu1Div1');
qDiv.style.color="white";
qDiv.style.display="none";
console.log();

let qu1El=true;
mainDiv.addEventListener('click',()=>{
    if(qu1El){
        qDiv.style.display="block";
        
        qu1El=false
    }else{
        qDiv.style.display="none";
        qu1El=true;
        
    }
})

//question-2---div--
const qu2=document.getElementById('quDiv1');
console.log(qu1);
const mainDiv2=document.getElementById('qu2');

const qDiv2=document.createElement('div');
qDiv2.innerHTML=`<p id="p1">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹649 to ₹149 a month. No extra costs, no contracts.</p>`;
qu2.appendChild(qDiv2);
qDiv2.setAttribute('id','qu1Div2');
qDiv2.style.color="white";
qDiv2.style.display="none";

let qu1E2=true;
mainDiv2.addEventListener('click',()=>{
    if(qu1E2){
        qDiv2.style.display="block";
        qu1E2=false;
    }else{
        qDiv2.style.display="none";
        qu1E2=true;
    }
})

//question--3--div---
const qu3=document.getElementById('quDiv2');
console.log(qu1);
const mainDiv3=document.getElementById('qu3');

const qDiv3=document.createElement('div');
qDiv3.innerHTML=`<p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
<p>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>`
qu3.appendChild(qDiv3);
qDiv3.setAttribute('id','qu1Div2');
qDiv3.style.color="white";
qDiv3.style.display="none";

let qu1E3=true;
mainDiv3.addEventListener('click',()=>{
    if(qu1E3){
        qDiv3.style.display="block";
        qu1E3=false;
    }else{
        qDiv3.style.display="none";
        qu1E3=true;
    }
})

//question--4--div---
const qu4=document.getElementById('quDiv3');
console.log(qu1);
const mainDiv4=document.getElementById('qu4');

const qDiv4=document.createElement('div');
qDiv4.innerHTML=`<p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>`
qu4.appendChild(qDiv4);
qDiv4.setAttribute('id','qu1Div2');
qDiv4.style.color="white";
qDiv4.style.display="none";

let qu1E4=true;
mainDiv4.addEventListener('click',()=>{
    if(qu1E4){
        qDiv4.style.display="block";
        qu1E4=false;
    }else{
        qDiv4.style.display="none";
        qu1E4=true;
    }
})

//question--5--div---
const qu5=document.getElementById('quDiv4');
console.log(qu1);
const mainDiv5=document.getElementById('qu5');

const qDiv5=document.createElement('div');
qDiv5.innerHTML=`<p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>`;
qu5.appendChild(qDiv5);
qDiv5.setAttribute('id','qu1Div2');
qDiv5.style.color="white";
qDiv5.style.display="none";

let qu1E5=true;
mainDiv5.addEventListener('click',()=>{
    if(qu1E5){
        qDiv5.style.display="block";
        qu1E5=false;
    }else{
        qDiv5.style.display="none";
        qu1E5=true;
    }
})

//question--6--div---
const qu6=document.getElementById('quDiv5');
console.log(qu1);
const mainDiv6=document.getElementById('qu6');

const qDiv6=document.createElement('div');
qDiv6.innerHTML=`<p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p>
<p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>`;
qu6.appendChild(qDiv6);
qDiv6.setAttribute('id','qu1Div2');
qDiv6.style.color="white";
qDiv6.style.display="none";

let qu1E6=true;
mainDiv6.addEventListener('click',()=>{
    if(qu1E6){
        qDiv6.style.display="block";
        qu1E6=false;
    }else{
        qDiv6.style.display="none";
        qu1E6=true;
    }
})

//SECTION-7 WARNINg MASSAGE------

