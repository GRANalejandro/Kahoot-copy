"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var KahootGame =
/*#__PURE__*/
function () {
  function KahootGame() {
    var _this = this;

    _classCallCheck(this, KahootGame);

    this.kahoots = document.querySelectorAll('.kahoot').length;
    this.kahootSlider = document.querySelector('.slider__content');
    this.kahootCorrect = [{
      correctButton: 'button4'
    }, {
      correctButton: 'button2'
    }, {
      correctButton: 'button1'
    }, {
      correctButton: 'button2'
    }, {
      correctButton: 'button1'
    }, {
      correctButton: 'button3'
    }, {
      correctButton: 'button4'
    }];
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
    this.inputValidationUser.addEventListener('input', function () {
      var maxLength = 16;

      if (_this.inputValidationUser.value.length >= maxLength) {
        _this.inputValidationUser.setAttribute('disabled', 'disabled');
      } else {
        _this.inputValidationUser.removeAttribute('disabled');
      }
    });
    this.buttonValidationUser = document.querySelector('.user-pass__principal__content__form__button');
    this.kahootButtons = document.querySelectorAll('.kahoot__buttons__content__button');
    this.kahootButtonsFullScreen = document.querySelectorAll('.kahoot__footer__icons__screenfull');
    this.init();
  }

  _createClass(KahootGame, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      this.buttonValidationUser.addEventListener('click', function () {
        document.querySelector('.kahoot__qualifications__information__name').textContent = "".concat(_this2.inputValidationUser.value.slice(0, 16), ":");
        document.querySelectorAll('.kahoot__footer__spaces-name__text').forEach(function (kahootTextFooter) {
          kahootTextFooter.textContent = _this2.inputValidationUser.value.slice(0, 16);
        });

        if (_this2.inputValidationUser.value == '') {
          _this2.userPass.style.display = 'flex';
        } else {
          _this2.userPass.style.display = 'none';
          _this2.intervalClock = setInterval(_this2.reductorClockNumber.bind(_this2), 1000);
        }
      });
      this.kahootButtons.forEach(function (buttons) {
        buttons.addEventListener('click', function () {
          if (_this2.counterValidator < _this2.kahootCorrect.length - 1) {
            _this2.counterValidator++;
          }

          if (_this2.counterTransform < _this2.kahoots - 2) {
            _this2.counterTransform += 1;

            if (_this2.intervalTransform !== null) {
              clearTimeout(_this2.intervalTransform);
            }

            _this2.intervalTransform = setTimeout(function () {
              _this2.counterTransform += 1;
              _this2.intervalTransform = null;
              _this2.kahootSlider.style.transform = "translateX(".concat(_this2.kahootOneElement * _this2.counterTransform, "%)");
              _this2.reductorClock = 20;
              clearInterval(_this2.intervalClock);
              _this2.intervalClock = setInterval(_this2.reductorClockNumber.bind(_this2), 1000);

              _this2.clockNumbers.forEach(function (clockNumber) {
                clockNumber.textContent = _this2.reductorClock;
              });
            }, 5000);
          } else if (_this2.counterTransform == _this2.kahoots - 2) {
            _this2.counterTransform += 1;
          }

          _this2.kahootSlider.style.transform = "translateX(".concat(_this2.kahootOneElement * _this2.counterTransform, "%)");

          if (buttons.classList.contains(_this2.kahootCorrect[_this2.counterValidator].correctButton)) {
            _this2.correctAnswers++;
            document.querySelector('.kahoot__qualifications__information__correct-incorrect__correct').textContent = "".concat(_this2.correctAnswers, " Respuestas correctas");

            _this2.kahootCorrectMesages.forEach(function (kahootCorrectMesage) {
              kahootCorrectMesage.style.display = 'flex';
            });

            _this2.kahootIncorrectMesages.forEach(function (kahootIncorrectMesage) {
              kahootIncorrectMesage.style.display = 'none';
            });

            _this2.kahootIncorrectMesagesTextIncorrect.forEach(function (kahootIncorrectMesageTextIncorrect) {
              kahootIncorrectMesageTextIncorrect.style.display = 'none';
            });

            _this2.kahootIncorrectMesagesTextTimeOut.forEach(function (kahootIncorrectMesageTextTimeOut) {
              kahootIncorrectMesageTextTimeOut.style.display = 'none';
            });
          } else {
            _this2.kahootCorrectMesages.forEach(function (kahootCorrectMesage) {
              kahootCorrectMesage.style.display = 'none';
            });

            _this2.incorrectAnswers++;
            document.querySelector('.kahoot__qualifications__information__correct-incorrect__incorrect').textContent = "".concat(_this2.incorrectAnswers, " Respuestas incorrectas");

            _this2.kahootIncorrectMesages.forEach(function (kahootIncorrectMesage) {
              kahootIncorrectMesage.style.display = 'flex';
            });

            _this2.kahootIncorrectMesagesTextIncorrect.forEach(function (kahootIncorrectMesageTextIncorrect) {
              kahootIncorrectMesageTextIncorrect.style.display = 'block';
            });

            _this2.kahootIncorrectMesagesTextTimeOut.forEach(function (kahootIncorrectMesageTextTimeOut) {
              kahootIncorrectMesageTextTimeOut.style.display = 'none';
            });
          }

          console.log({
            correctAnswers: _this2.correctAnswers
          }, {
            incorrectAnswers: _this2.incorrectAnswers
          }, {
            counterValidator: _this2.counterValidator
          }, {
            counterTransform: _this2.counterTransform
          });
        });
      });
      this.kahootButtonsFullScreen.forEach(function (buttonsFullScreen) {
        buttonsFullScreen.addEventListener('click', function () {
          var element = document.documentElement;

          if (element.requestFullscreen) {
            element.requestFullscreen();
          } else if (element.mozRequestFullScreen) {
            // Firefox
            element.mozRequestFullScreen();
          } else if (element.webkitRequestFullscreen) {
            // Chrome, Safari and Opera
            element.webkitRequestFullscreen();
          } else if (element.msRequestFullscreen) {
            // IE/Edge
            element.msRequestFullscreen();
          }
        });
      });
    }
  }, {
    key: "reductorClockNumber",
    value: function reductorClockNumber() {
      var _this3 = this;

      this.reductorClock--;
      this.clockNumbers.forEach(function (clockNumber) {
        clockNumber.textContent = _this3.reductorClock;
      });

      if (this.reductorClock === 0 && this.counterTransform <= this.kahoots - 2) {
        clearInterval(this.intervalClock);
        this.counterValidator++;

        if (this.counterTransform <= this.kahoots - 2) {
          this.incorrectAnswers++;
          document.querySelector('.kahoot__qualifications__information__correct-incorrect__incorrect').textContent = "".concat(this.incorrectAnswers, " Respuestas incorrectas");
          this.kahootCorrectMesages.forEach(function (kahootCorrectMesage) {
            kahootCorrectMesage.style.display = 'none';
          });
          this.kahootIncorrectMesages.forEach(function (kahootIncorrectMesage) {
            kahootIncorrectMesage.style.display = 'flex';
          });
          this.kahootIncorrectMesagesTextIncorrect.forEach(function (kahootIncorrectMesageTextIncorrect) {
            kahootIncorrectMesageTextIncorrect.style.display = 'none';
          });
          this.kahootIncorrectMesagesTextTimeOut.forEach(function (kahootIncorrectMesageTextTimeOut) {
            kahootIncorrectMesageTextTimeOut.style.display = 'block';
          });
        }

        setTimeout(function () {
          if (_this3.counterTransform < _this3.kahoots - 1) {
            _this3.counterTransform++;
          }

          _this3.kahootSlider.style.transform = "translateX(".concat(_this3.kahootOneElement * _this3.counterTransform, "%)");
          console.log('counterTransform increased after reductorClock reached 0:', {
            counterTransform: _this3.counterTransform
          });
          setTimeout(function () {
            if (_this3.counterTransform < _this3.kahoots - 1) {
              _this3.counterTransform++;
            }

            _this3.kahootSlider.style.transform = "translateX(".concat(_this3.kahootOneElement * _this3.counterTransform, "%)");
            console.log('counterTransform increased after 5 seconds:', _this3.counterTransform);
            _this3.reductorClock = 20;
            clearInterval(_this3.intervalClock);
            _this3.intervalClock = setInterval(_this3.reductorClockNumber.bind(_this3), 1100);

            _this3.clockNumbers.forEach(function (clockNumber) {
              clockNumber.textContent = _this3.reductorClock;
            });
          }, 5000);
        }, 1000);
      }
    }
  }]);

  return KahootGame;
}();

var game = new KahootGame();