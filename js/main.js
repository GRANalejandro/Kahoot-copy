// const kahoots = document.querySelectorAll('.kahoot').length;
// const kahootSlider = document.querySelector('.slider__content')

// const kahootCorrect = [
//     {correctButton: 'button4'},
//     {correctButton: 'button2'},
//     {correctButton: 'button1'},
//     {correctButton: 'button2'},
//     {correctButton: 'button1'},
//     {correctButton: 'button3'},
//     {correctButton: 'button4'},
// ];
// var correctAnswers = 0;
// var incorrectAnswers = 0;
// var counterValidator = -1;
// var counterTransform = 0;

// let kahootOneElement = -100/kahoots;

// let kahootTransform;

// console.log({kahootOneElement}, {kahoots});

// let reductorClock = 20;
// let intervalClock;
// let intervalTransform = null;
// const clockNumbers = document.querySelectorAll('.kahoot__figure__clock__number');


// const kahootIncorrectMesages = document.querySelectorAll('.kahoot__incorrect');
// const kahootCorrectMesages = document.querySelectorAll('.kahoot__correct');

// const kahootIncorrectMesagesTextIncorrect = document.querySelectorAll('.kahoot__incorrect__text');
// const kahootIncorrectMesagesTextTimeOut = document.querySelectorAll('.kahoot__incorrect__text--times-up');

// function reductorCLockNumber() {
//     reductorClock--; 
//     clockNumbers.forEach(clockNumber => {
//         clockNumber.textContent = reductorClock;
//     });

//     if (reductorClock === 0 && counterTransform <= (kahoots - 2)) {
//         clearInterval(intervalClock);
//         counterValidator++
//         if (counterTransform <= (kahoots - 2)) {
//             incorrectAnswers++
//             document.querySelector('.kahoot__qualifications__information__correct-incorrect__incorrect').textContent = incorrectAnswers;
//             kahootCorrectMesages.forEach(kahootCorrectMesage =>{
//                 kahootCorrectMesage.style.display = 'none';
//             });
//             kahootIncorrectMesages.forEach(kahootIncorrectMesage => {
//                 kahootIncorrectMesage.style.display = 'flex';
//             });
//             kahootIncorrectMesagesTextIncorrect.forEach(kahootIncorrectMesageTextIncorrect =>{
//                 kahootIncorrectMesageTextIncorrect.style.display = 'none';
//             });
//             kahootIncorrectMesagesTextTimeOut.forEach(kahootIncorrectMesageTextTimeOut =>{
//                 kahootIncorrectMesageTextTimeOut.style.display = 'block';
//             });
//         }
        
//         setTimeout(() => {

//             if (counterTransform < (kahoots - 2)) {
//                 counterTransform++; 
//             }
//              // Aumentar counterTransform después de un segundo
//             kahootSlider.style.transform = `translateX(${kahootOneElement * counterTransform}%)`;
//             console.log('counterTransform increased after reductorClock reached 0:', {counterTransform});

//             // Después de otros 5 segundos
//             setTimeout(() => {
//                 if (counterTransform < (kahoots - 2)) {
//                     counterTransform++; 
//                 }
//                 console.log({counterTransform},{incorrectAnswers})
//                 kahootSlider.style.transform = `translateX(${kahootOneElement * counterTransform}%)`;
//                 console.log('counterTransform increased after 5 seconds:', counterTransform);

//                 reductorClock = 20;
//                 clearInterval(intervalClock)
//                 intervalClock = setInterval(reductorCLockNumber, 1100);
//                 clockNumbers.forEach(clockNumber => {
//                     clockNumber.textContent = reductorClock;
//                 });
//             }, 5000);
//         }, 1000);
//     }
// }

// const userPass = document.querySelector('.user-pass');
// const inputValidationUser = document.querySelector('.user-pass__principal__content__form__input');

// const buttonValidationUser = document.querySelector('.user-pass__principal__content__form__button').addEventListener('click', ()=>{
//     if (inputValidationUser.value == '') {
//         userPass.style.display = 'flex';
//         document.querySelector('.kahoot__qualifications__information__name').textContent = inputValidationUser.value;
//     } else{
//         userPass.style.display = 'none';
//     }
//     intervalClock = setInterval(reductorCLockNumber, 1000);
// });

// const kahootButtons = document.querySelectorAll('.kahoot__buttons__content__button').forEach(buttons => {
//     buttons.addEventListener('click', ()=>{
//         if (counterValidator < (kahootCorrect.length - 1)) {
//             counterValidator++
//         }

//         if (counterTransform < (kahoots - 2)) {
//             counterTransform+=1

//             if (intervalTransform !== null) {
//                 clearTimeout(intervalTransform)
//             }
//             intervalTransform = setTimeout(() => {
//                 counterTransform+=1;
//                 intervalTransform = null;
//                 kahootSlider.style.transform = `translateX(${kahootOneElement * (counterTransform)}%)`;

//                 reductorClock = 20;
//                 clearInterval(intervalClock)
//                 intervalClock = setInterval(reductorCLockNumber, 1000);
//                 clockNumbers.forEach(clockNumber => {
//                     clockNumber.textContent = reductorClock;
//                 });
//                 console.log(counterTransform)
//             }, 5000);

//             console.log(counterTransform)

//         } else if(counterTransform == (kahoots - 3)){
//             counterTransform+=1
//         }
//         kahootSlider.style.transform = `translateX(${kahootOneElement * (counterTransform)}%)`;
//         if (buttons.classList.contains(kahootCorrect[counterValidator].correctButton)) {
//             correctAnswers++
//             document.querySelector('.kahoot__qualifications__information__correct-incorrect__correct').textContent = correctAnswers;
//             kahootCorrectMesages.forEach(kahootCorrectMesage =>{
//                 kahootCorrectMesage.style.display = 'flex';
//             });
//             kahootIncorrectMesages.forEach(kahootIncorrectMesage =>{
//                 kahootIncorrectMesage.style.display = 'none'
//             });
//             kahootIncorrectMesagesTextIncorrect.forEach(kahootIncorrectMesageTextIncorrect =>{
//                 kahootIncorrectMesageTextIncorrect.style.display = 'none';
//             });
//             kahootIncorrectMesagesTextTimeOut.forEach(kahootIncorrectMesageTextTimeOut =>{
//                 kahootIncorrectMesageTextTimeOut.style.display = 'none';
//             });
//         } else {
//             kahootCorrectMesages.forEach(kahootCorrectMesage =>{
//                 kahootCorrectMesage.style.display = 'none';
//             });
//             incorrectAnswers++
//             document.querySelector('.kahoot__qualifications__information__correct-incorrect__incorrect').textContent = incorrectAnswers;
//             kahootIncorrectMesages.forEach(kahootIncorrectMesage =>{
//                 kahootIncorrectMesage.style.display = 'flex'
//             });
//             kahootIncorrectMesagesTextIncorrect.forEach(kahootIncorrectMesageTextIncorrect =>{
//                 kahootIncorrectMesageTextIncorrect.style.display = 'block';
//             });
//             kahootIncorrectMesagesTextTimeOut.forEach(kahootIncorrectMesageTextTimeOut =>{
//                 kahootIncorrectMesageTextTimeOut.style.display = 'none';
//             });
//         }

//         console.log({correctAnswers},{incorrectAnswers},{counterValidator}, {counterTransform})
//     });
// });

class KahootGame {
    constructor() {
        this.kahoots = document.querySelectorAll('.kahoot').length;
        this.kahootSlider = document.querySelector('.slider__content');
        this.kahootCorrect = [
            { correctButton: 'button4' },
            { correctButton: 'button2' },
            { correctButton: 'button1' },
            { correctButton: 'button2' },
            { correctButton: 'button1' },
            { correctButton: 'button3' },
            { correctButton: 'button4' },
        ];
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        this.counterValidator = -1;
        this.counterTransform = 0;
        this.kahootOneElement = -100 / this.kahoots;
        this.reductorClock = 20;
        this.intervalClock = null;
        this.intervalTransform = null;
        this.clockNumbers = document.querySelectorAll('.kahoot__figure__clock__number');
        this.kahootIncorrectMesages = document.querySelectorAll('.kahoot__incorrect');
        this.kahootCorrectMesages = document.querySelectorAll('.kahoot__correct');
        this.kahootIncorrectMesagesTextIncorrect = document.querySelectorAll('.kahoot__incorrect__text');
        this.kahootIncorrectMesagesTextTimeOut = document.querySelectorAll('.kahoot__incorrect__text--times-up');
        this.userPass = document.querySelector('.user-pass');
        this.inputValidationUser = document.querySelector('.user-pass__principal__content__form__input');
        this.inputValidationUser.addEventListener('input', () => {
            const maxLength = 16;
            if (this.inputValidationUser.value.length >= maxLength) {
                this.inputValidationUser.setAttribute('disabled', 'disabled');
            } else {
                this.inputValidationUser.removeAttribute('disabled');
            }
        });
        this.buttonValidationUser = document.querySelector('.user-pass__principal__content__form__button');
        this.kahootButtons = document.querySelectorAll('.kahoot__buttons__content__button');
        this.kahootButtonsFullScreen = document.querySelectorAll('.kahoot__footer__icons__screenfull');

        this.init();
    }

    init() {
        this.buttonValidationUser.addEventListener('click', () => {
            document.querySelector('.kahoot__qualifications__information__name').textContent = `${this.inputValidationUser.value.slice(0,16)}:`;
            document.querySelectorAll('.kahoot__footer__spaces-name__text').forEach(kahootTextFooter =>{
                kahootTextFooter.textContent = this.inputValidationUser.value.slice(0,16);
            });
            if (this.inputValidationUser.value == '') {
                this.userPass.style.display = 'flex';
            } else {
                this.userPass.style.display = 'none';
                this.intervalClock = setInterval(this.reductorClockNumber.bind(this), 1000);
            }
            
        });

        this.kahootButtons.forEach(buttons => {
            buttons.addEventListener('click', () => {
                if (this.counterValidator < (this.kahootCorrect.length - 1)) {
                    this.counterValidator++;
                }

                if (this.counterTransform < (this.kahoots - 2)) {
                    this.counterTransform += 1;

                    if (this.intervalTransform !== null) {
                        clearTimeout(this.intervalTransform);
                    }
                    this.intervalTransform = setTimeout(() => {
                        this.counterTransform += 1;
                        this.intervalTransform = null;
                        this.kahootSlider.style.transform = `translateX(${this.kahootOneElement * this.counterTransform}%)`;

                        this.reductorClock = 20;
                        clearInterval(this.intervalClock);
                        this.intervalClock = setInterval(this.reductorClockNumber.bind(this), 1000);
                        this.clockNumbers.forEach(clockNumber => {
                            clockNumber.textContent = this.reductorClock;
                        });
                    }, 5000);
                } else if (this.counterTransform == (this.kahoots - 2)) {
                    this.counterTransform += 1;
                }
                this.kahootSlider.style.transform = `translateX(${this.kahootOneElement * this.counterTransform}%)`;

                if (buttons.classList.contains(this.kahootCorrect[this.counterValidator].correctButton)) {
                    this.correctAnswers++;
                    document.querySelector('.kahoot__qualifications__information__correct-incorrect__correct').textContent = `${this.correctAnswers} Respuestas correctas`;
                    this.kahootCorrectMesages.forEach(kahootCorrectMesage => {
                        kahootCorrectMesage.style.display = 'flex';
                    });
                    this.kahootIncorrectMesages.forEach(kahootIncorrectMesage => {
                        kahootIncorrectMesage.style.display = 'none';
                    });
                    this.kahootIncorrectMesagesTextIncorrect.forEach(kahootIncorrectMesageTextIncorrect => {
                        kahootIncorrectMesageTextIncorrect.style.display = 'none';
                    });
                    this.kahootIncorrectMesagesTextTimeOut.forEach(kahootIncorrectMesageTextTimeOut => {
                        kahootIncorrectMesageTextTimeOut.style.display = 'none';
                    });
                } else {
                    this.kahootCorrectMesages.forEach(kahootCorrectMesage => {
                        kahootCorrectMesage.style.display = 'none';
                    });
                    this.incorrectAnswers++;
                    document.querySelector('.kahoot__qualifications__information__correct-incorrect__incorrect').textContent = `${this.incorrectAnswers} Respuestas incorrectas`;
                    this.kahootIncorrectMesages.forEach(kahootIncorrectMesage => {
                        kahootIncorrectMesage.style.display = 'flex';
                    });
                    this.kahootIncorrectMesagesTextIncorrect.forEach(kahootIncorrectMesageTextIncorrect => {
                        kahootIncorrectMesageTextIncorrect.style.display = 'block';
                    });
                    this.kahootIncorrectMesagesTextTimeOut.forEach(kahootIncorrectMesageTextTimeOut => {
                        kahootIncorrectMesageTextTimeOut.style.display = 'none';
                    });
                }

                console.log({ correctAnswers: this.correctAnswers }, { incorrectAnswers: this.incorrectAnswers }, { counterValidator: this.counterValidator }, { counterTransform: this.counterTransform });
            });
        });
        this.kahootButtonsFullScreen.forEach(buttonsFullScreen =>{
            buttonsFullScreen.addEventListener('click', ()=>{
                const element = document.documentElement;

                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.mozRequestFullScreen) { // Firefox
                    element.mozRequestFullScreen();
                } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
                    element.webkitRequestFullscreen();
                } else if (element.msRequestFullscreen) { // IE/Edge
                    element.msRequestFullscreen();
                }
            });
        });
    }

    reductorClockNumber() {
        this.reductorClock--;
        this.clockNumbers.forEach(clockNumber => {
            clockNumber.textContent = this.reductorClock;
        });

        if (this.reductorClock === 0 && this.counterTransform <= (this.kahoots - 2)) {
            clearInterval(this.intervalClock);
            this.counterValidator++;

            if (this.counterTransform <= (this.kahoots - 2)) {
                this.incorrectAnswers++;
                document.querySelector('.kahoot__qualifications__information__correct-incorrect__incorrect').textContent =  `${this.incorrectAnswers} Respuestas incorrectas`;
                this.kahootCorrectMesages.forEach(kahootCorrectMesage => {
                    kahootCorrectMesage.style.display = 'none';
                });
                this.kahootIncorrectMesages.forEach(kahootIncorrectMesage => {
                    kahootIncorrectMesage.style.display = 'flex';
                });
                this.kahootIncorrectMesagesTextIncorrect.forEach(kahootIncorrectMesageTextIncorrect => {
                    kahootIncorrectMesageTextIncorrect.style.display = 'none';
                });
                this.kahootIncorrectMesagesTextTimeOut.forEach(kahootIncorrectMesageTextTimeOut => {
                    kahootIncorrectMesageTextTimeOut.style.display = 'block';
                });
            }

            setTimeout(() => {
                if (this.counterTransform < (this.kahoots - 1)) {
                    this.counterTransform++;
                }

                this.kahootSlider.style.transform = `translateX(${this.kahootOneElement * this.counterTransform}%)`;
                console.log('counterTransform increased after reductorClock reached 0:', { counterTransform: this.counterTransform });

                setTimeout(() => {
                    if (this.counterTransform < (this.kahoots - 1)) {
                        this.counterTransform++;
                    }

                    this.kahootSlider.style.transform = `translateX(${this.kahootOneElement * this.counterTransform}%)`;
                    console.log('counterTransform increased after 5 seconds:', this.counterTransform);

                    this.reductorClock = 20;
                    clearInterval(this.intervalClock);
                    this.intervalClock = setInterval(this.reductorClockNumber.bind(this), 1100);
                    this.clockNumbers.forEach(clockNumber => {
                        clockNumber.textContent = this.reductorClock;
                    });
                }, 5000);
            }, 1000);
        }
    }
}

const game = new KahootGame();
