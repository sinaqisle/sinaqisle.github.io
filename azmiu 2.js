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
      question: 'Mühəndis fotoqrammetriya metodları ilə hansı parametr təyin olunur?',
      answers: [
        { text: ' Konstruksiya elementlərinin montajı ', correct: false },
        { text: 'Dinamik və statik qüvvələrin təsiri altında olan nöqtələrin yerdəyişmələri və konstruksiya elementlərinin deformasiyaları ', correct: true },
        { text: 'Konstruksiyaların eksperimental tədqiqi ', correct: false },
        { text: 'Təsir yüklərinin tətbiqi', correct: false },
        { text: 'Sınaq yüklərinin xarakteri', correct: false }
  
      ]
    },
  
    {
      question: 'İZS-10H cihazın qabarit ölçüləri mm-lə verilir, qida blokunun ölçüləri:',
      answers: [
        { text: '100x60x100', correct: false },
        { text: '125x60x100', correct: false },
        { text: '250x60x100', correct: false },
        { text: '100x60x55', correct: true },
        { text: '250x70x55', correct: false }
  
      ]
    },
  
    {
      question: 'Rixter şkalası ilə maqnitudu 8,0 və zəlzələnin ocağında dərinliyi 40 km olanda MSK-64 şkalası ilə yer səthindəki intensivliyi, neçə balla ölçülür?',
      answers: [
        { text: '8-9', correct: false },
        { text: '9', correct: false },
        { text: '5-6', correct: false },
        { text: '4-5', correct: false },
        { text: '9-10', correct: true }
  
      ]
    },
  
    {
      question: 'Antiseysmik kəmər hesabi seysmiklik 9 bal olduqda isə ən azı boyuna dövrü profilli polad millərlə armaturlanmalıdır?',
      answers: [
        { text: '4 (/) 12', correct: true },
        { text: '2 (/) 5', correct: false },
        { text: '6 (/) 12', correct: false },
        { text: '8 (/) 18', correct: false },
        { text: '12 (/) 32', correct: false }
  
      ]
    },
  
    {
      question: 'Betonun möhkəmliyi R=K*K*R28 betonun nəmliyi neçə faiz olduqda təyin edilir?',
      answers: [
        { text: '1%', correct: false },
        { text: '10%', correct: false },
        { text: '2-6 %', correct: true },
        { text: '50%', correct: false },
        { text: '100%', correct: false }
  
      ]
    },
  
    {
      question: 'Statik sınaqlar zamanı təsir edən yükləri yaratmaq üçün aşağıdakı qeyd edilənlərdən istifadə edilmir?',
      answers: [
        { text: 'Tək-tək yüklər (çəki daşları), beton və d/beton bloklar, metal tökmələr və döyülmüş metal parçalar', correct: false },
        { text: ' Dənəvər (səpələnən) materiallar', correct: false },
        { text: 'Su ilə doldurulmuş tutumlar (həcmlər)', correct: false },
        { text: ' Pnevmatik balış', correct: false },
        { text: 'Dənizdəki özüllərdə dalğanın təsirindən əmələ gələn yüklər', correct: true }
  
      ]
    },
  
    {
      question: 'İZS-10H cihazı mühafizə qatın ölçülməsini təmin edir və sınaqdan keçirilən konstruksiyanın armaturlarının diametri nə qədər olmalıdır?',
      answers: [
        { text: ' 5 -34 mm qədər ', correct: false },
        { text: '4-32 mm qədər', correct: true },
        { text: '3-35 mm qədər', correct: false },
        { text: ' 3-40 mm qədər', correct: false },
        { text: '4-45mm qədər', correct: false }
  
      ]
    },
  
    {
      question: 'Binanın yükdaşıyan konstruksiyaları: Dəmir-beton çərçivə ilə daş divarların birğə işi təmin edilən karkas-daş binalar, tikinti meydançasının seysmikliyi, balla-7-8. Antiseysmik tikişlər arasında məsafə,m?',
      answers: [
        { text: '40', correct: false },
        { text: '34', correct: false },
        { text: '20', correct: false },
        { text: '25', correct: false },
        { text: '60', correct: true }
  
      ]
    },
  
    {
      question: 'Xarici təsirlərə qoyulan tələblər aşağıdakılardan ibarətdir?',
      answers: [
        { text: 'Xarici təsirlərin (qüvvələrin) zamana görə sabit olması', correct: true },
        { text: ' Konstruksiya elementlərinin montajı', correct: false },
        { text: ' Konstruksiyaların eksperimental tədqiqi', correct: false },
        { text: 'Təsir yüklərinin tətbiqi', correct: false },
        { text: 'Sınaq yüklərinin xarakteri', correct: false }
  
      ]
    },
  
    {
      question: 'Xarici təsirlərə qoyulan tələblər aşağıdakılardan ibarətdir?',
      answers: [
        { text: 'Konstruksiya elementlərinin montajı ', correct:false },
        { text: 'Onların qiymətlərinin etibarlı nəzarətinin mümkünlüyü', correct: true },
        { text: 'Konstruksiyaların eksperimental tədqiqi', correct: false },
        { text: 'Təsir yüklərinin tətbiq', correct: false },
        { text: 'Konstruksiyalardan', correct: false }
  
      ]
    },


    {
        question: 'Betonun mühafizə qatın qalınlığının ölçülməsində əsas buraxılan sərhəd xətası aşağıda verilmiş hansı armaturlaşdırma parametrlərinə görə təyin olunur?',
        answers: [
          { text: 'Addımı 200mm və diametri 4 mm-dən 25 mm-ə qədər olan çubuqlar üçün', correct: false },
          { text: 'Addımı 200mm və diametri 12 mm-dən 32 mm-ə qədər olan çubuqlar üçün', correct: true },
          { text: 'Addımı 200mm və diametri 15 mm-dən 28 mm-ə qədər olan çubuqlar üçün', correct: false },
          { text: 'Addımı 200mm və diametri 25 mm-dən 40 mm-ə qədər olan çubuqlar üçün ', correct: false },
          { text: 'Addımı 200mm və diametri 20 mm-dən 32 mm-ə qədər olan çubuqlar üçün', correct: false }
    
        ]
      },
    
      {
        question: 'Laboratoriya şəratində modellər və materialların nümunələri sınaqdan keçirilərkən press ləvazimatından və sınaq maşınlardan istifadə edilir?',
        answers: [
          { text: 'Çevik yükləmə rejimi ilə işləyən maşınlar', correct: false },
          { text: 'Döymə yükləmə rejimi ilə işləyən maşınlar.', correct: false },
          { text: 'Tək-tək yükləmə rejimi ilə işləyən maşınlar.', correct: false },
          { text: ' Sərt yükləmə rejimi ilə işləyən maşınlar', correct: true },
          { text: 'Vibrasiya yükləmə rejimi ilə işləyən maşınlar', correct: false }
    
        ]
      },
    
      {
        question: ' Qruntlar zəlzələyə davamlığa görə neçə kateqoriyaya bölünür?',
        answers: [
          { text: '5', correct: false },
          { text: '3', correct: false },
          { text: '2', correct: false },
          { text: '6', correct: false },
          { text: '4', correct: true }
    
        ]
      },
    
      {
        question: 'Azərbaycan Respublikasının qərb bölgəsində yerləşən Kəlbəcər rayonunda layihələndirilən binalar və qurğular minimum neçə ballıq zəlzələ intensivliyinə hesablanmalıdır?',
        answers: [
          { text: '9', correct: true },
          { text: '7', correct: false },
          { text: '6', correct: false },
          { text: '8', correct: false },
          { text: '10', correct: false }
    
        ]
      },
    
      {
        question: 'Zəlzələ rayonlarında sərtliyi yüksək qrunt üzərində hansı binalar tikmək əlverişlidir?',
        answers: [
          { text: 'Sərt ', correct: false },
          { text: 'Az mərtəbəli ', correct: false },
          { text: 'Çevik', correct: true },
          { text: 'Çox mərtəbəli ', correct: false },
          { text: 'Heç bir binalar', correct: false }
    
        ]
      },
    
      {
        question: 'Zəlzələyə davamlığının statiki nəzəriyyə hansı alim tərəfindən ilk dəfə təkli olunmuşdur?',
        answers: [
          { text: 'Zavriyev', correct: false },
          { text: 'Rixter', correct: false },
          { text: 'Mononabe', correct: false },
          { text: 'Qutenberq', correct: false },
          { text: 'Omori ', correct: true }
    
        ]
      },
    
      {
        question: 'Naxçıvan Muxtar Respublikasının paytaxtı Culfa şəhərində layihələndirilən bina və qurğular minimum neçə ballıq zəlzələ intensivliyinə hesablanmalıdır?',
        answers: [
          { text: '6', correct: false },
          { text: '9', correct: true },
          { text: '8', correct: false },
          { text: '7', correct: false },
          { text: '10', correct: false }
    
        ]
      },
    
      {
        question: ' Mononabe nəzəriyyəsi necə adlanır?',
        answers: [
          { text: 'Statiki', correct: false },
          { text: 'Çevik', correct: false },
          { text: 'Kinematik', correct: false },
          { text: 'Pulsasiya', correct: false },
          { text: 'Dinamiki', correct: true }
    
        ]
      },
    
      {
        question: 'Hansı konstruktiv tədbirlər zəlzələyə davamlığın aktiv növünə aiddir? ',
        answers: [
          { text: 'Sürüşən kəmərlər', correct: true },
          { text: 'Zəlzələyə qarşı kəmər', correct: false },
          { text: 'Örtük panellərinin ankerlənməsi', correct: false },
          { text: 'Zəlzələ tikişləri', correct: false },
          { text: ' Sürüşən dayaqlar ', correct: false }
    
        ]
      },
    
      {
        question: 'Planetar miqyasda baş verən zəlzələrin orta sayı ildə nə qədərdir?',
        answers: [
          { text: '4', correct:false },
          { text: '1-2', correct: true },
          { text: '5-6', correct: false },
          { text: '7', correct: false },
          { text: '10', correct: false }
    
        ]
      },

      {
        question: 'Yumşaq qruntlarda zəlzələ qüvvəsinin rəqsi parametrləri necə dəyişir?',
        answers: [
          { text: 'Amplitudası az, tezliyi çox olur.', correct:false },
          { text: 'Tezliyi az, amplitudası çox olur.', correct: true },
          { text: 'Tezlik az olur', correct: false },
          { text: 'Sürəti az olur', correct: false },
          { text: 'Təcili çox olur. ', correct: false }
    
        ]
      },

      {
        question: 'Azərbaycan Respublikasının qərb bölgəsində yerləşən Laçın rayonunda layihələndirilən binalar və qurğular minimum neçə ballıq zəlzələ intensivliyinə hesablanmalıdır?',
        answers: [
          { text: '6', correct:false },
          { text: '9', correct: true },
          { text: '8', correct: false },
          { text: '7', correct: false },
          { text: '10', correct: false }
    
        ]
      },

      {
        question: 'Binanın yükdaşıyan konstruksiyaları: Təbii daşlardan kərpic və kiçik ölçülü  beton daş məmulatlarından hörülmüş və dəmir-beton içliklərlə və kəmərlərlə gücləndirilmiş kompleks konstruksiyalı divarlar: I kateqoriya hörgü ilə , tikinti meydançasının seysmikliyi, balla-7-8. Antiseysmik tikişlər arasında məsafə,m?',
        answers: [
          { text: '40', correct:false },
          { text: '60', correct: true },
          { text: '34', correct: false },
          { text: '20', correct: false },
          { text: '25', correct: false }
    
        ]
      },

      {
        question: 'Mühəndis fotoqrammetriyasının metodlarının köməyi ilə dinamik və statik qüvvələrin təsiri altında olan konstruksiyanın hansı deformasiyasını ölçmə olar?',
        answers: [
          { text: ' Konstruksiyanın dönmə deformasiyalarını təyin etmək', correct:false },
          { text: 'Konstruksiyanın nöqtələrinin yerdəyişmələrini təyin etmək', correct: true },
          { text: 'Konstruksiyanın fırlanma deformasiyasını təyin etmək', correct: false },
          { text: ' Konstruksiyanın horizontal yerdəyişmələrini təyin etmək', correct: false },
          { text: 'Konstruksiyanın vertikal yerdəyişmələrini təyin etmək', correct: false }
    
        ]
      },

      {
        question: ' Dartılma qurğularından istifadə edərkən yüklərin yerdəyişməsi və çəkilməsinə sərf olunan ağır əmək ortadan çıxır?',
        answers: [
          { text: 'Tətbiq olunan güclərin istiqaməti sabit ola bilər;', correct:false },
          { text: 'Tətbiq olunan güclərin istiqaməti ixtiyari ola bilər;', correct: true },
          { text: 'Tətbiq olunan güclərin istiqaməti dəyişgən ola bilər;', correct: false },
          { text: 'Tətbiq olunan güclərin istiqaməti horizontal ola bilər;', correct: false },
          { text: 'Tətbiq olunan güclərin istiqaməti vertikal ola bilər;', correct: false }
    
        ]
      },
  
  
    
  ]