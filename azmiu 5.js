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
      question: 'Qurğuların sınağının əsas məsələsi nədən ibarətdir?',
      answers: [
        { text: 'Real konstruksiyanın vəziyyətini xarakterizə etməkdən', correct: false },
        { text: 'İnşaat konstruksiyasının real vəziyyəti ilə onun hesablama sxemi arasında uyğunluq yaratmaqdan ', correct: true },
        { text: 'Konstruksiyanın ayrı-ayrı elementlərinin işçi çertyoja uyğunluğunu aşkarlamadan', correct: false },
        { text: 'Mühəndis qurğuların deformasiyaya uğradığını müəyyən etməkdən', correct: false },
        { text: 'Konstruksiyalara təsir edən qüvvələrin qiymətlərini təyin etməkdən', correct: false }
  
      ]
    },
  
    {
      question: 'Mononabe öz nəzəriyyəsində hesablama sistemində hansı rəqsləri nəzərə alıb?',
      answers: [
        { text: 'Xüsusi və məcburi', correct: false },
        { text: 'Xüsusi', correct: false },
        { text: 'Heç biri', correct: false },
        { text: 'Məcburi', correct: true },
        { text: 'Harmonik rəqsləri ', correct: false }
  
      ]
    },
  
    {
      question: 'Zəif yerli zəlzələrin maqnitudası nə qədər olur?',
      answers: [
        { text: 'M = 6 - 7', correct: false },
        { text: 'M = 2 - 3', correct: false },
        { text: 'M =1 - 2', correct: false },
        { text: 'M = 8', correct: false },
        { text: 'M = 4 - 5', correct: true }
  
      ]
    },
  
    {
      question: 'İşçi armatur üçün mühafizə qatın qalınlığı nəyə uyğun olmalıdır?',
      answers: [
        { text: 'DÜİST-ə ', correct: true },
        { text: ' İşçi çertyojda göstərilən qiymətə', correct: false },
        { text: 'Hesablamalar nəticəsinə ', correct: false },
        { text: 'Proyekt ölçülərinə', correct: false },
        { text: 'Möhkəmlik standartlarına', correct: false }
  
      ]
    },
  
    {
      question: ' İZS-10 H cihazın iş prinsipi nəyə əsaslanmışdır?',
      answers: [
        { text: 'Betonun möhkəmliyi ilə betonun möhkəmliyinin vasitəli xarakteristikası arasındakı asılılığa', correct: false },
        { text: ' Topa qüvvələri yaratma əsasında', correct: false },
        { text: 'Çeviricinin elektromaqnit sahəsi ilə konstruksiyada olan armatur çubuğun  qarşılıqlı təsiri nəticəsində əmələ gələn çeviricinin müqavimətinin dəyişməsinə', correct: true },
        { text: 'Mütləq müqavimətin təyininə', correct: false },
        { text: 'Konstruksiyaların gərginlik halının təyin edilməsinə ', correct: false }
  
      ]
    },
  
    {
      question: ' Kaşkarovun etalon çəkicisinin konstruksiyasına daxil olan etalon çubuğun diametri nə qədər olur?',
      answers: [
        { text: '5-8 mm', correct: false },
        { text: '15 mm', correct: false },
        { text: '28 mm', correct: false },
        { text: '17 mm', correct: false },
        { text: '10-12 mm', correct: true }
  
      ]
    },
  
    {
      question: 'Azərbaycan Respublikasının aran Qarabağ bölgəsində yerləşən Yevlax rayonunda layihələndirilən binalar və qurğular minimum neçə ballıq zəlzələ intensivliyinə hesablanmalıdır?',
      answers: [
        { text: '6', correct: false },
        { text: '8', correct: true },
        { text: '7', correct: false },
        { text: '9', correct: false },
        { text: '10', correct: false }
  
      ]
    },
  
    {
      question: 'Bərk qruntlarda zəlzələ qüvvəsinin rəqsinin parametrləri necə dəyişir?',
      answers: [
        { text: 'Təcilli çox olur', correct: false },
        { text: 'Sürəti az olur', correct: false },
        { text: 'Tezliyi az, amplitudası çox olur ', correct: false },
        { text: 'Periodu çox olur', correct: false },
        { text: 'Tezliyi çox, amplitudası az olur ', correct: true }
  
      ]
    },
  
    {
      question: 'Ultrasəs akustik metotlar konstruksiyaların materiallarında hansı kəmiyyətinin xarakterinin öyrənilməsinə əsaslanmışdır?',
      answers: [
        { text: 'səsin yayılmasının', correct: true },
        { text: ' impulsun yayılmasının', correct: false },
        { text: ' zərbənin yayılmasının', correct: false },
        { text: 'cərəyanın yayılmasının', correct: false },
        { text: 'surətin yayılmasının', correct: false }
  
      ]
    },
  
    {
      question: 'Təsadüfi olmayan yüklər hansılardır? ',
      answers: [
        { text: 'Hündür qurğularda küləyin təsirindən əmələ gələn ', correct:false },
        { text: ' Statiki yüklər ', correct: true },
        { text: 'Dənizdəki özüllərdə dalğanın təsirindən yaranan', correct: false },
        { text: 'Determinir olunmuş yüklər', correct: false },
        { text: 'Zamana görə dəyişmə qanunları ilə ifadə olunan', correct: false }
  
      ]
    },


    {
        question: 'Binanın yükdaşıyan konstruksiyaları Monolit dəmir-beton divarlar, tikinti  meydançasının seysmikliyi, balla-7-8. Antiseysmik tikişlər arasında məsafə,m? ',
        answers: [
          { text: '60', correct: false },
          { text: '80', correct: true },
          { text: '34', correct: false },
          { text: '200', correct: false },
          { text: '215', correct: false }
    
        ]
      },
    
      {
        question: 'Betonun mühafizə qatı nəyi təmin etmir?',
        answers: [
          { text: 'Beton ilə armaturun xarici atmosfer təsirindən qorunmasını', correct: false },
          { text: 'Deformasiyadan qorunmasını ', correct: false },
          { text: ' Mexaniki təsirdən', correct: false },
          { text: 'Betonun armatur ilə fiziki təsirdən qorunmasını', correct: true },
          { text: 'Korroziyadan', correct: false }
    
        ]
      },
    
      {
        question: 'Rixter şkalası ilə maqnituda M=7,0 zəlzələ ocağında dərinlik 30 km olduqda MSK-64 şkalası ilə Yer səthindəki intensivlik neçə balla qiymətləndirilir?',
        answers: [
          { text: ' J=6 ', correct: false },
          { text: 'J=7', correct: false },
          { text: 'J=10 ', correct: false },
          { text: 'J=12', correct: false },
          { text: ' J=8-9', correct: true }
    
        ]
      },
    
      {
        question: 'Azərbaycan Respublikasının aran bölgəsində yerləşən Salyan rayonunda lahiyelendirilən binalar və qurğular minimum neçə ballıq zəlzələ intensivliyinə hesablanmalıdır? ',
        answers: [
          { text: '8', correct: true },
          { text: '9', correct: false },
          { text: '7', correct: false },
          { text: '6', correct: false },
          { text: '10', correct: false }
    
        ]
      },
    
      {
        question: 'Elektrik metodları –bura daxildir?',
        answers: [
          { text: 'Stasionar metodları', correct: false },
          { text: 'Fırlanma metodları', correct: false },
          { text: 'Eletrodinamik metodlar', correct: true },
          { text: 'Gərginlik metodları', correct: false },
          { text: 'Dönmə metodları', correct: false }
    
        ]
      },
    
      {
        question: 'Hansı üsul elektrik metodlara daxil olunur?',
        answers: [
          { text: 'Fırlanma metodları ', correct: false },
          { text: 'Stasionar metodları  ', correct: false },
          { text: 'Gərginlik metodları', correct: false },
          { text: 'Dönmə metodları', correct: false },
          { text: 'Elektromaqnit metodları;', correct: true }
    
        ]
      },
    
      {
        question: 'Naxçıvan Muxtar Respublikasının paytaxtı Sədərək rayonunda  layihələndirilən bina və qurğular minimum neçə ballıq zəlzələ intensivliyinə hesablanmalıdır?',
        answers: [
          { text: '6', correct: false },
          { text: '9', correct: true },
          { text: '7', correct: false },
          { text: '8', correct: false },
          { text: '10', correct: false }
    
        ]
      },
    
      {
        question: 'IІ növ qruntlar üçün TA və TB periodları sinfindən asılı olaraq AZ DTN 2.3.- 1 normalar uyğun olaraq hansı aslılıqla olmalıdır?',
        answers: [
          { text: '0,10-0,60 ', correct: false },
          { text: '0,10-0,80', correct: false },
          { text: '0,10-0,90', correct: false },
          { text: '0,10-0,30 ', correct: false },
          { text: '0,10-0,40', correct: true }
    
        ]
      },
    
      {
        question: '. IІІ növ qruntlar üçün TA və TB periodları sinfindən asılı olaraq AZ DTN  2.3.1 normalar uyğun olaraq hansı aslılıqla olmalıdır?',
        answers: [
          { text: '0,10-0,60 ', correct: true },
          { text: '0,10-0,70', correct: false },
          { text: '0,10-0,80', correct: false },
          { text: '0,10-0,90', correct: false },
          { text: '0,10-0,30', correct: false }
    
        ]
      },
    
      {
        question: ' Kaşkarov çəkici vasitəsilə betonun möhkəmliyinin təyin edilməsi hansı şəraitdə aparmaq məsləhət görülür?',
        answers: [
          { text: 'Mənfi temperaturda', correct:false },
          { text: 'Müsbət temperaturda', correct: true },
          { text: 'Təbii şəraitdə', correct: false },
          { text: 'Laboratoriya şəraitində', correct: false },
          { text: 'Tikinti zamanı', correct: false }
    
        ]
      },

      {
        question: '11 bal intensivliyi olan zəlzələnin gücü əlamətinə görə necə  qiymətləndirilir? ',
        answers: [
          { text: 'Zəif', correct:false },
          { text: 'Fəlakətli ', correct: true },
          { text: 'Çox zəif', correct: false },
          { text: 'Güclü', correct: false },
          { text: 'Az güclü', correct: false }
    
        ]
      },

      {
        question: 'Paytaxt Bakı şəhərində və Abşeron yarmadasında layihələndirilən binalar və qurğular minimum neçə ballıq zəlzələ intensivliyinə hesablanmalıdır?',
        answers: [
          { text: '6', correct:false },
          { text: '8', correct: true },
          { text: '7', correct: false },
          { text: '9', correct: false },
          { text: '10', correct: false }
    
        ]
      },

      {
        question: 'Ossiloqraf cihazı hansı məqsədlə istifadə edilir?',
        answers: [
          { text: 'Statiki qüvvələri ölçmək üçün;', correct:false },
          { text: 'Rəqsləri qeyd etmək üçün;', correct: true },
          { text: 'Elastik qüvvələri ölçmək üçün;', correct: false },
          { text: 'Statiki deformasiyaları ölçmək üçün', correct: false },
          { text: 'Cərəyan şiddətini ölçmək üçün; ', correct: false }
    
        ]
      },

      {
        question: 'Bu stendlər metal fermalardan ibarətdir, və nəzərə almaq lazımdır ki,  konstruksiya və güc ləvazimatı elə quraşdırılır ki, onları qapalı sistem əmələ gətirir və yükün aşağı təsiri (əsasa) ötürmürlər hansı ki, əsas yığılıb-açılan fermaya söykənir?',
        answers: [
          { text: 'Stasionar stendlər', correct:false },
          { text: 'Müvvəqəti stendlər', correct: true },
          { text: 'Vibro stendlər', correct: false },
          { text: 'Dinamik stendlər', correct: false },
          { text: 'Seysmik stendlər', correct: false }
    
        ]
      },

      {
        question: 'Dinamik yüklərin tətbiq metodlara daxil olmayan?',
        answers: [
          { text: 'Mexaniki metodlar', correct:false },
          { text: 'Ultrasəs metodları', correct: true },
          { text: 'Hidravlik metodlar', correct: false },
          { text: 'Pnevmatik metodlar', correct: false },
          { text: 'Elektrik metodları', correct: false }
    
        ]
      },
  
  
    
  ]