// removing message
const alertForm = document.querySelector('.form-alert')
alertForm.classList.add('alert-show');
setTimeout(function(){
    alertForm.classList.remove('alert-show');
},4000);


//  for preload

// const word1 = document.querySelectorAll('.preload svg path');

// for(i=12;i<word1.length;i++){
//     let l =word1[i].getTotalLength();
//     word1[i].style.strokeDasharray = l;
//     word1[i].style.strokeDashoffset = l;
//     word1[i].style.animation = `write-word 3s ease forwards ${(i*0.3 )+0.3}`;
//     word1[i].style.animationIterationCount= '1';

// }

// word1[14].style.animation += ',word-fade 1.5s ease forwards 4s';
// word1[22].style.animation += ',word-fade 1.5s ease forwards 4s';
// word1[23].style.animation += ',word-fade 1.5s ease forwards 4s';


// const preload = document.querySelector('.preload');



const aniText = document.querySelector('.showcase-content p')
// setTimeout(function(){
    // preload.classList.add('fade-pre')
    document.body.classList.add('show-body')
    aniText.classList.add('text-anim')
    changeAni();
// },5000)



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
    setTimeout(function(){
        zTextCon.classList.remove('text-zoomed')
    },1000)
}


// project image effect

const projectSm = document.querySelectorAll('.bottom1-project_content img,.bottom2-project_content img,.bottom3-project_content img');
const zoomPCon = document.querySelector('.zoom-project');
const zoomPImg = document.querySelector('.zoom-project-img');


//  change text of project info

const proHead = document.querySelector('.zoom-project-info h3');
const proadv = document.querySelector('.zoom-project-info ul');
const proLinks = document.querySelectorAll('.action-link');

let advArr = ['<li>Amazing sound effects</li><li>Canvas-based game</li><li>Own AI algorithm</li>','<li>Cool pictures of animals</li><li>3 Difficulty levels</li><li>100% own code</li>', '<li>Stunning hover effects</li><li>Light and dark themes</li><li>100% responsive design</li>','<li>Awesome Navigation effect</li><li>100% CSS Grid</li><li>Responsive web design</li>','<li>Amazing animations</li><li>3D experience</li><li>PHP contact form</li>','<li>Cool text effects</li><li>Awesome spinner</li><li>Custom time counter</li>']

let HeadArr = ['Ping Pong','Test Your Memory', 'Gymatic fitness','Vision Luxury Villas','My Portfolio','Been Together']

let linkArr = [
['https://nandy.tech/pingpong/','https://github.com/Lynnze-24/pingpong'],
['https://nandy.tech/Memorygame/','https://github.com/Lynnze-24/Memorygame'], 
['https://nandy.tech/gymatic/','https://github.com/Lynnze-24/gymatic'],
['https://nandy.tech/vlv/','https://github.com/Lynnze-24/vlv'],
['https://nandy.tech/portfolio/','https://github.com/Lynnze-24/portfolio']
,
['https://nandy.tech/anni2nd/','https://github.com/Lynnze-24/beenTogether']
]

function proInfoDisplay(n){
  proHead.innerText = HeadArr[n];
 proadv.innerHTML = advArr[n];
 proLinks[0].setAttribute('href',linkArr[n][0]);
 proLinks[1].setAttribute('href',linkArr[n][1]);
}

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
    let pronum = this.getAttribute('data-img')
    setTimeout( function(){proInfoDisplay(pronum)},500);
   
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
    const checkReso = document.querySelector('.zoom-project');
    const rectW = checkReso.getBoundingClientRect().width;
   
    let xpUp =true;
    let xp = 0;
    let yp = 0;
    for(i=0;i<50;i++){
        
        zoomPImg.innerHTML += " <div class='block'></div>" ;
        const zoomblock = document.querySelectorAll('.block');
        zoomblock[i].style.backgroundImage= `url(${src})`;
        zoomblock[i].style.backgroundPosition = `${xp}% ${yp}%`;
        if (rectW>400){
            zoomblock[i].style.backgroundSize = '60rem 30rem';
        }else{
            zoomblock[i].style.backgroundSize = '36rem 18rem';
        }
        

        if(xpUp) xp+= 11.1;
        if(xp>100){xp=0;xpUp=false}
        if(!xpUp) {yp+=25; xpUp=true}
        
}
}


const closeProBtn = document.querySelector('.zoom-project-info p');

closeProBtn.addEventListener('click',closeProjectBg);

window.addEventListener('resize',closeProjectBg);

function closeProjectBg(){
    
        const vanish = document.querySelector('.projectsm-vanish');
        if((proZoom)&& vanish){
            proZoom = false;
            zoomPCon.classList.remove('active-project');
              
                zoomPCon.classList.remove('over-ani');
        
                setTimeout(function(){
                    zoomPImg.innerHTML = "" ;
                    vanish.classList.remove('projectsm-vanish')
                   },1000)
        }
       
        
    
}






// submit form to send message


const formInputs = document.querySelectorAll('.contact-form input');
const messageInput = document.querySelector('.contact-form textarea');
const emailInput = formInputs[0];
const subjectInput = formInputs[1];

const formSubBtn = document.querySelector('.contact-form button');

const messageAlert = document.querySelector('.form-alert');

formSubBtn.addEventListener('click',sendMessage)
const regxEmail = /\w@gmail.com$/;
function sendMessage(e){
    
    if(emailInput.value!=''){
        e.preventDefault();
     let isMailValid = regxEmail.test(emailInput.value);
        if(isMailValid==false){
            messageAlert.classList.add('alert-show')
        messageAlert.style.backgroundColor= 'red'
        messageAlert.innerText= 'Email Invalid!'
        setTimeout(function(){
            messageAlert.classList.remove('alert-show')
        },1000)
        return;
        }
        

    }


    if(emailInput.value==''){
        e.preventDefault();
        messageAlert.classList.add('alert-show')
        messageAlert.style.backgroundColor= 'red'
        messageAlert.innerText= 'Email required!'
        setTimeout(function(){
            messageAlert.classList.remove('alert-show')
        },1000)

    }else if(subjectInput.value==''){
        e.preventDefault();
        messageAlert.classList.add('alert-show')
        messageAlert.style.backgroundColor= 'red'
        messageAlert.innerText= 'Subject required!'
        setTimeout(function(){
            messageAlert.classList.remove('alert-show')
        },1000)

    }else if(messageInput.value==''){
        e.preventDefault();
        messageAlert.classList.add('alert-show')
        messageAlert.style.backgroundColor= 'red'
        messageAlert.innerText= 'Message required!'
        setTimeout(function(){
            messageAlert.classList.remove('alert-show')
        },1000)

    }else{
        messageForm.submit();
       
        
        //    messageAlert.classList.add('alert-show')
        // messageAlert.style.backgroundColor= 'green'
        // messageAlert.innerText= 'Message sent!I will contact you ASAP'
        setTimeout(function(){
            messageForm.submit();
            messageAlert.classList.remove('alert-show')
            emailInput.value='';
            subjectInput.value='';
            messageInput.value='';
        },1000)
        
    }
    
}