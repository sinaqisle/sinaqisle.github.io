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
    question: ' Əsas zəlzələnin yaranma səbəbləri nədir?',
    answers: [
      { text: 'Günəş sisteminin cazibəsi ', correct: false },
      { text: 'Yerin daxilində gedən proseslər', correct: true },
      { text: 'Məlum deyil ', correct: false },
      { text: ' Okeanların ağırlığı', correct: false },
      { text: 'Yer kürəsinin fırlanması ', correct: false },
    ]
  },

  {
    question: 'Elektrik tenzometr vasitəsi ilə hansı qüvvələri ölçmək olar?',
      
      
    answers: [
      { text: 'Statiki;', correct: false },
      { text: 'Dinamiki; ', correct: false },
      { text: 'Rəqsləri;', correct: false },
      { text: 'Həm statiki və dinamiki; ', correct: true },
      { text: 'Dartılma statiki qüvvələri; ', correct: false }

    ]
  },

  {
    question: ' Mühafizə qatın qalınlığını ölçmək üçün mühafizə qatın qalınlığı hansı ölçən cihaz ilə təyin olunur?  ',
    
    answers: [
      { text: 'İZS-15N', correct: false },
      { text: ' İZS-20H ', correct: false },
      { text: 'İZS-10H  ', correct: true },
      { text: 'İZS-25H', correct: false },
      { text: 'İZS-5H  ', correct: false }
    ]
  },

  {
    question: 'Azərbaycan Respublikasının aran bölgəsində yerləşən Göyçay rayonunda layihələndirilən binalar və qurğular minimum neçə ballıq zəlzələ intensivliyinə hesablanmalıdır? ',
    answers: [
      { text: '8 ', correct: true },
      { text: '9', correct: false },
      { text: '7', correct: false },
      { text: '6', correct: false },
      { text: '10', correct: false }

    ]
  },

  {
    question: 'Hesablamalarda 9 bal intensivlik üçün qrunt təcilinin maksimal amplitudu nə qədər götürülməlidir?',
    
    answers: [
      { text: '100 sm/san kvadratı ', correct: false },
      { text: ' 300 sm/san kvadratı', correct: false },
      { text: '400 sm/san kvadratı', correct: false },
      { text: '250 sm/san kvadratı', correct: false },
      { text: '500 sm/san kvadratı  ', correct: true }

    ]
  },

  {
    question: 'Eninə yerləşdirilmiş tənzimləyici (paylaşdırıcı) və konstruktiv armatur  üçün mühafizə qatın qalınlığı həmin armaturun diametrindən kiçik olmamalıdır ( b > d ) və  h <250mm?',
   answers: [
      { text: 'b=10mm', correct: true },
      { text: 'b= 15mm', correct: false },
      { text: 'b= 5mm ', correct: false },
      { text: 'b=20mm ', correct: false },
      { text: ' b=25mm', correct: false }

    ]
  },

  {
    question: 'Boşluqlu (deşik –deşik) betondan hazırlanmış birqat konstruksiyalarda  mühafizə qatın qalınlığı bütün hallarda nə qədər qəbul olunur?',
    answers: [
      { text: '10mm - də az olmayaraq ', correct: false },
      { text: '15mm- də az olmayaraq ', correct: false },
      { text: '25mm-də az olmayaraq ', correct: true  },
      { text: '20mm- də az olmayaraq ', correct: false },
      { text: '30mm- də az olmayaraq ', correct: false }

    ]
  },

  {
    question: 'Rixter şkalası ilə maqnituda M=8,0 zəlzələ ocağında dərinlik 25 km  olduqda MSK-64 şkalası ilə Yer səthindəki intensivlik neçə balla qiymətləndirilir? ',
    answers: [
      { text: 'J=9', correct: false },
      { text: 'J=10-11', correct: true },
      { text: ' J=8', correct: false },
      { text: 'J=7 ', correct: false },
      { text: 'J=6 ', correct: false }

    ]
  },

  {
    question: 'Betonun səthi üzrə armatur çubuğunun oxunun proyeksiyasının təyin edilməsində buraxılan əsas sərhəd xətası, istənilən diametri çubuqların betonla həqiqi düzülmə istiqamətlərində nə qədər olmalıdır',
    answers: [
      { text: '+-25mm-dən çox olmamalıdır', correct: false },
      { text: '+-5mm-dən çox olmamalıdır', correct: false },
      { text: '+-15mm-dən çox olmamalıdır', correct: false },
      { text: '+-12mm-dən çox olmamalıdır', correct: false },
      { text: '+- 10mm-dən çox olmamalıdır  ', correct: true }

    ]
  },

  {
    question: 'Bünövrə üçün nəzərdə tutulmuş tirlərdə və yığma bünövrələrdə mühafizə qatın qalınlığı nə qədər olmalıdır?',
    answers: [
      { text: '30mm ', correct: true },
      { text: '  10mm ', correct: false },
      { text: '15mm', correct: false },
      { text: '20mm', correct: false },
      { text: '25mm', correct: false }

    ]
  },

  {
    question: 'Yaponiyada Omori tərəfindən işlənmiş və təkmilləşdirilmiş  7 ballıq zəlzələ şkalası neçənci ildən istifadə olunur? ',
    answers: [
      { text: '1920-ci il ', correct: false },
      { text: '1900-cu il ', correct: true },
      { text: '1930-cu il ', correct: false },
      { text: '1940-cı il ', correct: false },
      { text: ' 1964-cü il', correct: false }

    ]
  },

  {
    question: 'Binanın yükdaşıyan konstruksiyaları: Ağac tirlərdən, lövhələrdən hazırlanmış divarlar, tikinti meydançasının seysmikliyi, balla-7-8. Antiseysmik tikişlər arasında məsafə,m?',
    answers: [
      { text: '40 ', correct: true },
      { text: ' 30 ', correct: false },
      { text: '34', correct: false },
      { text: '20', correct: false },
      { text: '25', correct: false }

    ]
  },

  {
    question: 'Normalara uyğun olaraq, plitələrdə və divarlarda betonun mühafizə qatının qalınlığı nə qədər olmalıdır? ',
    answers: [
      { text: '15mm-dən kiçik olmamalıdır ', correct: false },
      { text: '20mm-dən kiçik olmamalıdır', correct: false },
      { text: '25mm-dən kiçik olmamalıdır', correct: false },
      { text: '10mm-dən kiçik olmamalıdır', correct: true },
      { text: '30mm-dən kiçik olmamalıdır', correct: false }

    ]
  },

  {
    question: 'Ultrasəs impuls metodla inşaat konstruksiyalarının defektoskopiya-defekt və zədələrin aşkar edilməsi məsələləri həll edilir və materialların fiziki-mexaniki sabitləri təyin edilir',
    answers: [
      { text: 'Çeviklik ', correct: false },
      { text: 'Dözümlük', correct: false },
      { text: ' Elastiklik xarakteristikaları', correct: true },
      { text: 'Həsaslıq ', correct: false },
      { text: 'Elastiklik ', correct: false }

    ]
  },

  {
    question: ' Ultrasəs impuls metodla inşaat konstruksiyalarının defektoskopiya-defekt və zədələrin aşkar edilməsi məsələləri həll edilir və materialların fiziki-mexaniki sabitləri təyin edilir',
    answers: [
      { text: 'Möhkəmlik', correct: true },
      { text: 'Çeviklik', correct: false },
      { text: 'Dözümlük', correct: false },
      { text: 'Həsaslıq', correct: false },
      { text: 'Elastiklik ', correct: false }

    ]
  },

  {
    question: 'Azərbaycan Respublikasının aran bölgəsində yerləşən Ağdaş rayonunda layihələndirilən binalar və qurğular minimum neçə ballıq zəlzələ intensivliyinə hesablanmalıdır?',
    answers: [
      { text: '9', correct: false },
      { text: '8 ', correct: true },
      { text: '7', correct: false },
      { text: '6', correct: false },
      { text: '10 ', correct: false }

    ]
  },

  {
    question: 'db/de dərəcələnmə əyrisi vasitəsi ilə betonun möhkəmliyi neçə gündən sonra təyin olunur?',
    answers: [
      { text: '2 aydan sonra', correct: false },
      { text: '30 gün ', correct: false },
      { text: '3 aydan sonra', correct: false },
      { text: '28 gün', correct: true },
      { text: '15gün', correct: false }

    ]
  },

  {
    question: '3 bal intensivliyi olan zəlzələnin gücü əlamətinə görə necə qiymətləndirilir?',
    answers: [
      { text: 'Çox zəif', correct: false },
      { text: 'Güclü ', correct: false },
      { text: ' Dağıdıcı', correct: false },
      { text: 'Fəlakətli ', correct: false },
      { text: 'Zəif ', correct: true }

    ]
  },

  {
    question: 'Kaşkarovun etalon çəkicinin konstruksiyası hansı elementdən ibarət deyil? ',
    answers: [
      { text: ' Qeydedici qurğu', correct: true },
      { text: 'İndektor (kürəcik)', correct: false },
      { text: 'Etalon çubuq', correct: false },
      { text: ' Stəkan', correct: false },
      { text: 'Yay', correct: false }

    ]
  },

  {
    question: 'Azərbaycan Respublikasının şimal bölgəsində yerləşən Quba rayonunda layihələndirilən binalar və qurğular minimum neçə ballıq zəlzələ intensivliyinə hesablanmalıdır?',
    answers: [
      { text: '6', correct: false },
      { text: '7', correct: false },
      { text: '8', correct: true },
      { text: '9', correct: false },
      { text: '10', correct: false }

    ]
  },

  {
    question: 'Neçəncı ildə Zavruyev öz nəzəriyyəni təklif etdi?',
    answers: [
      { text: '1922–ci ildə', correct: false },
      { text: '1937–ci ildə', correct: false },
      { text: '1952–ci ildə', correct: false },
      { text: '1981–ci ildə', correct: false },
      { text: '1927 -ci ildə', correct: true }

    ]
  },

  {
    question: 'AzDTN 2.3-1 «Seysmik rayonlarda tikinti» normalara əsasən k2- bina və qurğularda buraxıla bilən zədələri nəzərə alan əmsal olub və insanların təhlükəsizliyi təmin olunmaq şərti ilə konstruksiyalarında kifayət qədər qalıq deformasiyaların, çatların, zədələrin yaranmasına yol verilən və bunun  nəticəsində normal istismarın müvəqqəti dayandırılmasına mümkün olan bina və qurğular üçün qəbul olunan əmsal? ',
    answers: [
      { text: '0,6 ', correct: false },
      { text: '0,3  ', correct: true },
      { text: '0,25', correct: false },
      { text: '0,35', correct: false },
      { text: '0,4', correct: false }

    ]
  },

  {
    question: ' AzDTN 2.3-1 «Seysmik rayonlarda tikinti» normalara əsasən k2-bina və qurğularda buraxıla bilən zədələri nəzərə alan əmsal olub və istismarı çətinləşsə də insanların təhlükəsizliyinə, avadanlıqların olduğu kimi qorunub saxlanılmasına təsir etməmək şərti ilə, konstruksiyalarında zədələrin və qeyri  elastik (qalıq) deformasiyaların yaranmasına yol verilən bina və qurğular: -İri blok daşlardan hörülmüş yük daşıyan divarlı dəmir-beton karkas-daş sistemli bina və qurğular üçün qəbul olunan əmsal? ',
    answers: [
      { text: '0,6 ', correct: false },
      { text: '0,3', correct: false },
      { text: '0,35', correct: false },
      { text: '0,25 ', correct: false },
      { text: '0,40 ', correct: true }

    ]
  },

  {
    question: 'Sönən rəqslərin loqarifmik dekrementi necə təyin edilir? ',
    answers: [
      { text: 'Rəqslərin maksimal amplitudası o xəttindən şüanın yerdəyişməsi ilə ', correct: true },
      { text: 'Rəqslərin amplitudaların qeyd edilməsi ilə', correct: false },
      { text: 'Rəqslərin qruplaşdırılması ilə', correct: false },
      { text: 'Rəqslərin yayılma sahələrinin müşahidəsi ilə', correct: false },
      { text: 'Amplitudanın artma əmsali ilə', correct: false }

    ]
  },

  {
    question: 'Rixter şkalası ilə maqnitudu 6,0 və zəlzələnin ocağında dərinliyi 20 km olanda MSK-64 şkalası ilə yer səthindəki intensivliyi, neçə balla ölçülür? ',
    answers: [
      { text: '8-9', correct:false },
      { text: ' 7-8', correct: true },
      { text: '10', correct: false },
      { text: '9-10', correct: false },
      { text: '4-5', correct: false }

    ]
  },


  
]