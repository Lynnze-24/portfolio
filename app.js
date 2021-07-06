//  for preload

const word1 = document.querySelectorAll('.preload svg path');

for(i=12;i<word1.length;i++){
    let l =word1[i].getTotalLength();
    word1[i].style.strokeDasharray = l;
    word1[i].style.strokeDashoffset = l;
    word1[i].style.animation = `write-word 3s ease forwards ${(i*0.3 )+0.3}`;
    word1[i].style.animationIterationCount= '1';

}

word1[14].style.animation += ',word-fade 1.5s ease forwards 4s';
word1[22].style.animation += ',word-fade 1.5s ease forwards 4s';
word1[23].style.animation += ',word-fade 1.5s ease forwards 4s';


const preload = document.querySelector('.preload');



const aniText = document.querySelector('.showcase-content p')
setTimeout(function(){
    preload.classList.add('fade-pre')
    document.body.classList.add('show-body')
    aniText.classList.add('text-anim')
    changeAni();
},5000)



// type text animation
function changeAni(){
    setTimeout(function(){
        const c =aniText.getAttribute('class');
        if (c == 'text-anim'){
            aniText.classList.remove('text-anim');
        aniText.classList.add('text-animB')
        }else if (c == 'text-anim1'){
            aniText.classList.remove('text-anim1');
        aniText.classList.add('text-animB1')
        }
        
        changeT()
    },6000)
}

function changeT(){
    setTimeout(function(){
        aniText.classList.remove('text-animB');
        aniText.classList.remove('text-animB1');
        checkT()
        
        changeAni()
    },5000)
}

function checkT(){
    if (aniText.innerText=='Aung Htet Linn.'){
        aniText.innerText ='a Frontend Developer.'
        aniText.classList.add('text-anim')
    }else if( aniText.innerText =='a Frontend Developer.'){
        aniText.innerText='Aung Htet Linn.'
        aniText.classList.add('text-anim1')
    }
}



// image effect
const con = document.querySelector('.project-con')
const box = document.querySelector('.project-cab');

con.addEventListener('mousemove',function(e){
    box.style.transform = `translate(-50%,-70%) translateZ(-15rem) rotateY(-${e.clientX/70}deg)`
})




//  form  open close

const formOpenBtn = document.querySelector('.contact-con');

const messageForm = document.querySelector('.contact-form');

const closeFormBtn = document.querySelector('.close-form')

formOpenBtn.addEventListener('click',function(){
    formOpenBtn.classList.add('close-con-form');
    setTimeout(function(){
        messageForm.classList.add('open-form')
    },300)
})

closeFormBtn.addEventListener('click',function(){
    messageForm.classList.remove('open-form')
   
    setTimeout(function(){
        formOpenBtn.classList.remove('close-con-form');
    },300)
})


// projects
const customP = document.querySelector('.custom');
const cloneP = document.querySelector('.clone');
const jgameP = document.querySelector('.jgame');

customP.addEventListener('click',openCloset);
cloneP.addEventListener('click',openCloset);
jgameP.addEventListener('click',openCloset);

function openCloset(){
    this.classList.toggle('project-open');
}


// zoom text 
const zTextCon = document.querySelector('.zoom-text');
const zText = document.querySelector('.zoom-text p');
const nText1 = document.querySelector('.bottom1 p');
const nText2 = document.querySelector('.bottom2 p');
const nText3 = document.querySelector('.bottom3 p');

nText1.addEventListener('click',zoomText)
nText2.addEventListener('click',zoomText)
nText3.addEventListener('click',zoomText)

function zoomText(){
    
    zText.innerText = this.innerText;
    zTextCon.classList.add('text-zoomed')
    // setTimeout(function(){
    //     zTextCon.classList.remove('text-zoomed')
    // },1000)
}


// project image effect

const projectSm = document.querySelectorAll('.bottom1-project_content img,.bottom2-project_content img,.bottom3-project_content img');
const zoomPCon = document.querySelector('.zoom-project');
const zoomPImg = document.querySelector('.zoom-project-img');



projectSm.forEach(function(sm){
    sm.addEventListener('click',zoomProject);
})

let proZoom = false;

function zoomProject(){
    if(proZoom) {
        const vanish = document.querySelector('.projectsm-vanish'); vanish.classList.remove('projectsm-vanish')
        zoomPImg.innerHTML = "" ;
        zoomPCon.classList.remove('active-project');
         zoomPCon.classList.remove('over-ani');
    }
    this.classList.add('projectsm-vanish')
    const src= this.getAttribute('src')
    addBlocks(src);
    proZoom = true;
    zoomPCon.classList.add('active-project');
    setTimeout(function(){
        zoomPCon.classList.add('over-ani');
    },1000)
}

function addBlocks(src){
    
   
    let xpUp =true;
    let xp = 0;
    let yp = 0;
    for(i=0;i<50;i++){
        
        zoomPImg.innerHTML += " <div class='block'></div>" ;
        const zoomblock = document.querySelectorAll('.block');
        zoomblock[i].style.backgroundImage= `url(${src})`;
        zoomblock[i].style.backgroundPosition = `${xp}% ${yp}%`;
        zoomblock[i].style.backgroundSize = '60rem 30rem';

        if(xpUp) xp+= 11.1;
        if(xp>100){xp=0;xpUp=false}
        if(!xpUp) {yp+=25; xpUp=true}
        
}
}


const closeProBtn = document.querySelector('.zoom-project-info p');

closeProBtn.addEventListener('click',function(){
    const vanish = document.querySelector('.projectsm-vanish');
    proZoom = false;
    zoomPCon.classList.remove('active-project');
    
        zoomPCon.classList.remove('over-ani');

        setTimeout(function(){
            zoomPImg.innerHTML = "" ;
            vanish.classList.remove('projectsm-vanish')
           },1000)
    
})