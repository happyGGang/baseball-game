;(function () {
  'use strict'

  const get = (target) => document.querySelector(target)

  const init = () => {
    get('form').addEventListener('submit', (e) => {
      playGame(e)
    })

    setPassword()
  }

  const baseball = {
    limit: 10,
    digit: 4,
    trial: 0,
    end: false,
    $question: get('.ball_question'),
    $answer: get('.ball_answer'),
    $input: get('.ball_input'),
  }

  // 구조분해 할당
  const {limit, digit, $question, $answer, $input} = baseball
  let {trial, end} = baseball

  /*  4자리 수를 모두 맞추었을 때 */
  const setPassword = () => {

  }

  /* 시도를 했을때 / nunber : 내가 입력한 숫자 / hint: 현재 어떤 상황인지? */
  const onPlayed = (number, hint) => {
    return `<em>${trial}차 시도 : ${number}, ${hint}</em>`
  }

   /* 번호가 같은지 */
  const isCorrect = () => {

  }

   /* 중복번호가 있는지 */
  const isDuplicate = () => {

  }

 /* 스트라이크 갯수 */
  const getStrikes = () => {

  }

 /* 볼 카운트 갯수 */
  const getBalls = () => {

  }

 /* 시도에 따른 결과 */
  const getResult = () => {

  }

  /* 게임 플레이  */
  const playGame = (e) => {
    e.preventDefault();
    
    if(!!end) {
      return
    }

    const inputNumber = $input.value
    const { password } = baseball

    if(inputNumber.length !== digit) {
      alert(`${digit}자리 숫자를 입력해주세요.`)
    } else if(isDuplicate(inputNumber)) {
      alert('중복되는 숫자가 있습니다.')
    } else {
      trial++

      const result = onPlayed(inputNumber, getResult(inputNumber, password)) 
      $question.innerHTML += `<span>${result}</span>`

      if(limit <= trial && !isCorrect(inputNumber, password)) {
        alert('쓰리아웃!')
        end = true
      }
      $answer.innerHTML = password
    }
    $input.value = ''
    $input.focus()
  }

  init();
})()
