const loading = document.getElementById("loading");
const cover = document.getElementById("cover");
const story = document.getElementById("story");

const openBtn = document.getElementById("openBtn");

const typingText = document.getElementById("typingText");
const storyImage = document.getElementById("storyImage");

const music = document.getElementById("bgMusic");

const heartContainer = document.getElementById("heartContainer");

const storyData = [

{
type:"text",
value:"maaf ya sayang..."
},

{
type:"text",
value:"aku belum bisa ngerayain ulang tahun kamu secara langsung karna kita masih terhalang jarak..."
},

{
type:"text",
value:"semoga suatu saat nanti, ulang tahun kamu nggak lagi kita rayain lewat layar, tapi dengan pelukan yang beneran. 🤍"
},

{
type:"image",
value:"foto1.jpg"
},

{
type:"text",
value:"terima kasih ya karna udah hadir di hidup aku..."
},

{
type:"image",
value:"foto2.jpg"
},

{
type:"text",
value:"kamu bukan cuma orang yang aku sayang...\n\nkamu juga rumah tempat hati aku selalu pengen pulang..."
},

{
type:"image",
value:"foto3.jpg"
},

{
type:"text",
value:"aku percaya...\n\nsejauh apapun jarak kita sekarang...\n\ndoa aku selalu nyampe buat kamu setiap harinya..."
},

{
type:"image",
value:"foto4.jpg"
},

{
type:"text",
value:"selamat ulang tahun nama costum 🤍"
},

{
type:"image",
value:"foto5.jpg"
},

{
type:"text",
value:"i love you...\n\ntoday...\n\ntomorrow...\n\nand forever... 🤍"
}

];
window.addEventListener("load",()=>{

    setTimeout(()=>{

        loading.style.opacity="0";

        setTimeout(()=>{

            loading.style.display="none";

        },1000);

    },2500);

});

openBtn.addEventListener("click",()=>{

    cover.style.opacity="0";
    cover.style.transition="1s";

    setTimeout(()=>{

        cover.style.display="none";

        story.style.display="flex";

        music.currentTime=21;

        music.play().catch(()=>{});

        startHeartRain();

        playStory();

    },1000);

});

music.addEventListener("ended",()=>{

    music.currentTime=21;

    music.play();

});

function startHeartRain(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="🤍";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(16+Math.random()*26)+"px";

        heart.style.animationDuration=(4+Math.random()*4)+"s";

        heart.style.opacity=(0.4+Math.random()*0.6);

        heartContainer.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },8000);

    },180);

                         }
async function typeText(text){

    typingText.innerHTML="";
    typingText.classList.add("cursor");
    typingText.classList.add("fadeIn");

    for(let i=0;i<text.length;i++){

        typingText.innerHTML+=text.charAt(i);

        await new Promise(resolve=>setTimeout(resolve,45));

    }

    typingText.classList.remove("cursor");

}

function showImage(src){

    return new Promise(resolve=>{

        storyImage.style.display="block";

        storyImage.src=src;

        storyImage.style.opacity="0";
        storyImage.style.transform="scale(.92)";

        setTimeout(()=>{

            storyImage.style.opacity="1";
            storyImage.style.transform="scale(1.08)";

        },50);

        setTimeout(resolve,4200);

    });

}

function hideImage(){

    storyImage.style.opacity="0";

    storyImage.style.transform="scale(1.12)";

    setTimeout(()=>{

        storyImage.style.display="none";

    },800);

}

async function playStory(){

    for(const item of storyData){

        if(item.type==="text"){

            storyImage.style.display="none";

            typingText.classList.add("fadeIn");

            await typeText(item.value);

            await new Promise(resolve=>setTimeout(resolve,2200));

            typingText.classList.remove("fadeIn");
            typingText.classList.add("fadeOut");

            await new Promise(resolve=>setTimeout(resolve,800));

            typingText.innerHTML="";
            typingText.classList.remove("fadeOut");

        }

        else{

            typingText.innerHTML="";

            await showImage(item.value);

            hideImage();

            await new Promise(resolve=>setTimeout(resolve,900));

        }

    }

}
setTimeout(()=>{

    document.body.style.cursor="default";

},100);

window.addEventListener("contextmenu",(e)=>{

    e.preventDefault();

});

window.addEventListener("dragstart",(e)=>{

    e.preventDefault();

});

document.addEventListener("selectstart",(e)=>{

    e.preventDefault();

});

document.addEventListener("touchstart",()=>{

    if(music.paused){

        music.currentTime=21;

        music.play().catch(()=>{});

    }

},{once:true});

function fadeOutMusic(){

    let volume = music.volume;

    const fade = setInterval(()=>{

        if(volume > 0.02){

            volume -= 0.02;

            music.volume = volume;

        }else{

            music.pause();

            music.volume = 1;

            clearInterval(fade);

        }

    },150);

}

function fadeScreen(){

    document.getElementById("fade").style.opacity="1";

}
