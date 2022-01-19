const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Yenidən başla'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}



const questions = [
  
    {
      question: 'Hansı üsul elektrik metodlara daxil olunur?',
      answers: [
        { text: ' Stasionar metodları', correct: false },
        { text: 'Pyezoelektrik metodları', correct: true },
        { text: 'Fırlanma metodları', correct: false },
        { text: ' Gərginlik metodları', correct: false },
        { text: 'Dönmə metodları', correct: false }
  
      ]
    },
  
    {
      question: 'Azərbaycan Respublikasının qərb bölgəsində yerləşən Şəmkir rayonunda layihələndirilən binalar və qurğular minimum neçə ballıq zəlzələ intensivliyin hesablanmalıdır?',
      answers: [
        { text: '9', correct: false },
        { text: '10', correct: false },
        { text: '7', correct: false },
        { text: '8', correct: true },
        { text: '6', correct: false }
  
      ]
    },
  
    {
      question: 'Rixter şkalası ilə maqnituda M=5,0 zəlzələ ocağında dərinlik 10 km olduqda MSK-64 şkalası ilə yer səthindəki intensivlik neçə balla qiymətləndirilir?',
      answers: [
        { text: 'J=8', correct: false },
        { text: 'J=9', correct: false },
        { text: 'J=10 ', correct: false },
        { text: 'J=11', correct: false },
        { text: 'J=7', correct: true }
  
      ]
    },
  
    {
      question: 'I növ qruntlar üçün TA və TB periodları sinfindən asılı olaraq AZ DTN 2.3.1 normalar uyğun olaraq hansı aslılıqla olmalıdır? ',
      answers: [
        { text: '0,10-0,40', correct: true },
        { text: '0,10-0,60', correct: false },
        { text: '0,10-0,80', correct: false },
        { text: '0,10-0,90', correct: false },
        { text: '0,10-0,30 ', correct: false }
  
      ]
    },
  
    {
      question: 'Planda binanın formasına görə hansı binalar zəlzələyədavamlılıdır?',
      answers: [
        { text: 'Düzbucaqlı ', correct: false },
        { text: 'Kvadrat ', correct: false },
        { text: 'Dairəvi', correct: true },
        { text: 'II-şəkilli formalı ', correct: false },
        { text: 'Kürəşəkilli', correct: false }
  
      ]
    },
  
    {
      question: 'Azərbaycan Respublikasının aran bölgəsində yerləşən İmişli rayonunda layihələndirilən binalar və qurğular minimum neçə ballıq zəlzələ intensivliyinə hesablanmalıdır?',
      answers: [
        { text: '6', correct: false },
        { text: '7', correct: false },
        { text: '9', correct: false },
        { text: '10', correct: false },
        { text: '8', correct: true }
  
      ]
    },
  
    {
      question: 'Qurğuların sınağı zamanı mühəndis geodeziyasının metodları ilə təyin olmayan?',
      answers: [
        { text: 'Binaların və qurğuların horizontal yerdəyişməsi ', correct: false },
        { text: 'Betonun mühafizə qatının qalınlığı', correct: true },
        { text: 'Çatların və bitişik, qaynaq yerlərin deformasiyaları', correct: false },
        { text: 'Konstruksiya elementlərinin əyintiləri ', correct: false },
        { text: 'Binaların və qurğuların çökməsi', correct: false }
  
      ]
    },
  
    {
      question: 'Dövri yükləməni yaratmaq üçün əsasən hansı metodlardan istifadə edirlər?',
      answers: [
        { text: 'Hidravlik metodlarından', correct: false },
        { text: 'Yerdəyişmə metodlarından', correct: false },
        { text: 'Periodik metodlarından ', correct: false },
        { text: 'Harmonik metodlarından', correct: false },
        { text: ' Elektrik metodlarından ', correct: true }
  
      ]
    },
  
    {
      question: 'Azərbaycan Respublikasının qərb bölgəsində yerləşən Şuşa şəhərində  layihələndirilən binalar və qurğular minimum neçə ballıq zəlzələ intensivliyinə  hesablanmalıdır?',
      answers: [
        { text: '9', correct: true },
        { text: '6', correct: false },
        { text: '7', correct: false },
        { text: '8', correct: false },
        { text: '10', correct: false }
  
      ]
    },
  
    {
      question: ' 7 bal intensivliyi olan zəlzələnin gücü əlamətinə görə necə qiymətləndirilir?',
      answers: [
        { text: 'Zəif', correct:false },
        { text: 'Çox güclü', correct: true },
        { text: 'Çox zəif ', correct: false },
        { text: 'Güclü', correct: false },
        { text: 'Az güclü', correct: false }
  
      ]
    },


    {
        question: 'Seysmoloji stansiyalarda seysmometrin rəqqasının 16,1-32 mm yerdəyişməsi neçə ballıq zəlzələyə uyğun gəlir?',
        answers: [
          { text: ' J=9', correct: false },
          { text: 'J=10', correct: true },
          { text: 'J=8', correct: false },
          { text: 'J=7', correct: false },
          { text: 'J=6', correct: false }
    
        ]
      },
    
      {
        question: ' Seysmik nöqteyi-nəzərdən əlverişsiz ərazilərə aid olmayan?',
        answers: [
          { text: 'Tektonik çatlar olan ərazilər', correct: false },
          { text: 'Batan qruntlar, lilli sahələri olan ərazilər', correct: false },
          { text: 'Sürüşən və uçqun sahələri olan', correct: false },
          { text: 'Mailliyi 15 % dən az olan yamaclar', correct: true },
          { text: 'Seysmikliyi 10 bal olan', correct: false }
    
        ]
      },
    
      {
        question: 'Zəlzələnin intensivliyinin qiymətləndirilməsi üçün seysmometrin rəqqasının 0,5 mm yerdəyişməsi neçə ballıq zəlzələyə uyğundur?',
        answers: [
          { text: 'J=5', correct: false },
          { text: 'J=5-6', correct: false },
          { text: 'J=7', correct: false },
          { text: 'J=7-8', correct: false },
          { text: 'J=1-4', correct: true }
    
        ]
      },
    
      {
        question: 'Lokal miqyasda olan qüvvətli zəlzələnin maqnitudası nə qədərdir?',
        answers: [
          { text: 'M = 6 − 7', correct: true },
          { text: 'M = 7 − 8', correct: false },
          { text: 'M = 5 − 6', correct: false },
          { text: 'M = 3 − 4', correct: false },
          { text: 'M = 8', correct: false }
    
        ]
      },
    
      {
        question: 'Sərtliyinə görə zəlzələyə davamlı binalar neçə qrupa bölünürlər?',
        answers: [
          { text: '3', correct: false },
          { text: '4', correct: false },
          { text: '2', correct: true },
          { text: '6', correct: false },
          { text: '5', correct: false }
    
        ]
      },
    
      {
        question: 'Rəqslərin təcillərini yazan cihaz?',
        answers: [
          { text: 'Velosiqraf ', correct: false },
          { text: 'Vibroqraf', correct: false },
          { text: 'Seysmometr ', correct: false },
          { text: ' Ossiloqraf ', correct: false },
          { text: 'Akselleroqraf', correct: true }
    
        ]
      },
    
      {
        question: ' Orta zəlzələrin maqnitudası nə qədər olur?',
        answers: [
          { text: 'M = 4', correct: false },
          { text: 'M = 5 − 6', correct: true },
          { text: 'M = 7 − 8', correct: false },
          { text: 'M = 8', correct: false },
          { text: 'M = 2 − 3', correct: false }
    
        ]
      },
    
      {
        question: 'Azərbaycan Respublikasının qərb bölgəsində yerləşən Zəngilan rayonunda  layihələndirilən binalar və qurğular minimum neçə ballıq zəlzələ intensivliyinə hesablanmalıdır?',
        answers: [
          { text: '6', correct: false },
          { text: '7', correct: false },
          { text: '9', correct: false },
          { text: '10', correct: false },
          { text: '8', correct: true }
    
        ]
      },
    
      {
        question: 'AzDTN 2.3-1 «Seysmik rayonlarda tikinti» normalara əsasən k2-əmsalı nəyin qiymətini təyin edir?',
        answers: [
          { text: 'Bina və qurğularda buraxıla bilən zədələri nəzərə alan əmsal', correct: true },
          { text: 'Binaların enerjini yayma qabiliyyətini nəzərə alan əmsaldır', correct: false },
          { text: 'Binaların mərtəbə sayını nəzərə alan əmsaldır', correct: false },
          { text: 'Bina və qurğuların məsuliyyətlilik dərəcəsini nəzərə alan əmsaldır', correct: false },
          { text: 'Normativ seysmik əmsaldır', correct: false }
    
        ]
      },
    
      {
        question: ' 5 bal intensivliyi olan zəlzələnin gücü əlamətinə görə necə qiymətləndirilir?',
        answers: [
          { text: 'Güclü', correct:false },
          { text: 'Az güclü', correct: true },
          { text: 'Zəif', correct: false },
          { text: 'Çox zəif', correct: false },
          { text: 'Dağıdıcı', correct: false }
    
        ]
      },

      {
        question: 'Regional miqyasda olan zəlzələnin maqnitudası nə qədərdir?',
        answers: [
          { text: 'M = 4 - 5', correct:false },
          { text: 'M = 7 - 8', correct: true },
          { text: 'M = 5 - 6', correct: false },
          { text: 'M = 6 - 7', correct: false },
          { text: 'M = 3 - 4', correct: false }
    
        ]
      },

      {
        question: 'Zəlzələ izoseytinin çevrə şəklində olması nədən asılıdır?',
        answers: [
          { text: 'P dalğalarından', correct:false },
          { text: 'Qruntun sıxlığından', correct: true },
          { text: 'S dalğalarından ', correct: false },
          { text: 'L dalğalarından', correct: false },
          { text: 'Hiposentrdən', correct: false }
    
        ]
      },

      {
        question: '10 bal intensivliyi olan zəlzələnin gücü əlamətinə görə necə qiymətləndirilir?',
        answers: [
          { text: 'Dağıdıcı', correct:false },
          { text: 'Məhvedici ', correct: true },
          { text: 'Zəif', correct: false },
          { text: 'Güclü', correct: false },
          { text: 'Az güclü', correct: false }
    
        ]
      },

      {
        question: 'Eyni konstruktiv binalar eyni bir zəlzələnin təsirindən müxtəlif dərəcəli zədələnmələr alırlar, bunun səbəbi nədir?',
        answers: [
          { text: 'Qurğunun konstruktiv həllindən asılıdır', correct:false },
          { text: 'Qruntun müxtəlif növ olmasıdır.', correct: true },
          { text: ' Seysmik dalğanın yayılma sürətindən asılıdır. ', correct: false },
          { text: 'Zəlzələ qüvvəsinin rəqsinin tezliyindən asılıdır', correct: false },
          { text: 'Zəlzələ qüvvəsinin rəqsinin amplitudasından asılıdır.', correct: false }
    
        ]
      },

      {
        question: 'Naxçıvan Muxtar Respublikasının paytaxtı Ordubad şəhərində  layihələndirilən bina və qurğular minimum neçə ballıq zəlzələ intensivliyinə hesablanmalıdır?',
        answers: [
          { text: '6', correct:false },
          { text: '9', correct: true },
          { text: '7', correct: false },
          { text: '8', correct: false },
          { text: '10', correct: false }
    
        ]
      },
  
  
    
  ]