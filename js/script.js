;(function () {
  'use strict'

  const get = (target) => document.querySelector(target)

  const init = () => {
    get('form').addEventListener('submit', (e) => {
      playGame(e)
    })

    setHomeRun()
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
  /*  4자리 수를 모두 맞추었을 때 */
  const setHomeRun = () => {

  }

  /* 시도를 했을때 */
  const onPlayed = () => {

  }

   /* 번호가 같은지 */
  const isCorrect = () => {

  }

   /* 중복번호가 있는지 */
  const inDuplicate = () => {

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
  const playGame = () => {

  }

  init();
})()
