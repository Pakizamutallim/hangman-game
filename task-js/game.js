
const imageDiv = document.querySelector('.left');
const wronglettersLine = document.querySelector('span');
const timer = document.querySelector('.timer');
const timeCounter = timer.querySelector('p');
const trueName = document.querySelector('.true-name');
const letterdiv = document.getElementsByClassName('letter');

const arrayOfFilms = [
    {
        name: "parfumer",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRS5bfW_6-6WMDPsBl5J2pKB72Wvq8kNFhnHC8h6wiuw&s"
    },
    {
        name: "intersteller",
        img: "https://images.bauerhosting.com/legacy/media/619d/adf6/5165/4363/823b/7bf0/31%20Interstellar.jpg?auto=format&w=768&q=80"
    },
    {
        name: "pianist",
        img: "https://www.austinchronicle.com/binary/2e41/pianist.jpg"
    },
    {
        name: "amelie",
        img: "https://images.bauerhosting.com/legacy/media/619d/5a19/5165/432a/703b/7912/IMG_0299.jpeg?auto=format&w=768&q=80"
    },
    {
        name: "UP",
        img: "https://images.bauerhosting.com/legacy/media/619d/84db/3ebe/47eb/e69c/e2c2/IMG_0271.jpeg?auto=format&w=768&q=80"
    },
    {
        name: "gotfather",
        img: "https://images.bauerhosting.com/legacy/media/619d/b89c/dbee/afac/6469/00c1/14%20Godfather%202.jpg?auto=format&w=768&q=80"
    }
]

let trueLetter = [];
let wrongLetter = [];
let counter = 10;

n = arrayOfFilms.length;
const randomFilmId = Math.floor(Math.random() * n);
nameLen = arrayOfFilms[randomFilmId].name.split("").length;
nameLowerLetter = arrayOfFilms[randomFilmId].name;
nameLower = nameLowerLetter.toLowerCase()
nameLetters = nameLower.split("");



const winner = () => {
    swal({
        title: "You Are Winner",
        text: "If you want to continue click the button!",
        icon: "success",
        button: false,
    });
    setTimeout(() => {
        window.location.reload()
    }, 2000);
}


function addRandomFilm() {
    for (let index = 0; index < nameLen; index++) {
        nameLetters.join(" ");
        trueName.innerHTML = 
        nameLetters.map((i) =>
        `<div class="letter">${trueLetter.includes(i) ? i: " "}</div>
        `).join("");
        let a=trueName.childElementCount;
        // for(let i in nameLetters){
        //     if(!trueLetter.includes(i))
        // }
        // console.log({
        //     nameLetters, nameLen, trueLetter, a
        // });
        // nameLetters.map((j) => {
        //     console.log(letterdiv[j]);

        // })
        // winner()
    }
    for(let i =0;i<letterdiv.length;i++)
    {
        if(letterdiv[i].innerHTML==" "){
            break;
        }
        else if(i==letterdiv.length -1){
            // console.log("win");
            winner()
        }
    }
    imageDiv.innerHTML = `<h1>Which film is it?</h1>
    <img src="${arrayOfFilms[randomFilmId].img}" alt="">`
};
addRandomFilm();



const addLetterToArray = (e) => {
    const upperLowerletter = e.key
    const currentLetter = upperLowerletter.toLowerCase();
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        if (nameLetters.includes(currentLetter)){
            if (!trueLetter.includes(currentLetter)) {
                trueLetter.push(currentLetter);
                if (counter > 0) {
                    addRandomFilm();
                }
            }
        }
        else{
            wrongLetter.push(currentLetter);
            if (wrongLetter.length <= 10) {
                wronglettersLine.textContent = `${wrongLetter.join(', ')}`;
            }

            if (counter >= 0) {
                timeCounter.textContent = (counter -= 1)
            }
            if (counter === 0) {
                swal({
                    title: "You are lose",
                    text: "you can play again",
                    icon: "warning",
                    buttons: false,
                    dangerMode: true,
                  })
                  .then((willDelete) => {
                    if (willDelete) {
                      swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                      });
                    }
                  });
                if (e.keyCode >= 0 && e.keyCode <= 127) {
                    setTimeout(() => {
                      window.location.reload()
                    }, 2000);
                }
            }
        }
    }
}


window.addEventListener('keydown', addLetterToArray);







