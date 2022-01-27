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
    question: ' Binanın yükdaşıyan konstruksiyaları Polad karkas:çərçivə-rabitəli (polad və dəmir-beton sərtlik özəklərlə), tikinti meydançasının seysmikliyi, balla-7 – 8.Antiseysmik tikişlər arasında məsafə,m?',
      
      
    answers: [
      { text: '200', correct: false },
      { text: '120', correct: false },
      { text: '134', correct: false },
      { text: '150', correct: true },
      { text: '215', correct: false }

    ]
  },

  {
    question: 'Seysmoloji stansiyalarda seysmometrin rəqqasının 0,5-1 mm yerdəyişməsineçə ballıq zəlzələyə uyğun gəlir?  ',
    
    answers: [
      { text: 'J=6', correct: false },
      { text: 'J=7 ', correct: false },
      { text: 'J=5 ', correct: true },
      { text: 'J=8', correct: false },
      { text: 'J=9 ', correct: false }
    ]
  },

  {
    question: ' Yer kürəsində bir ildə olan zəlzələlərin orta sayı nə qədərdir?',
    answers: [
      { text: '300000 ', correct: true },
      { text: '1000', correct: false },
      { text: '300', correct: false },
      { text: '500', correct: false },
      { text: '30000', correct: false }

    ]
  },

  {
    question: '. Mononabe nəzəriyyəsində sistemdə yaranan bərpaedici qüvvə hansı düsturilə təyin olunur?',
    
    answers: [
      { text: 'R = k * y0 ', correct: false },
      { text: 'R = -ky0 ', correct: false },
      { text: 'R = −ky', correct: false },
      { text: 'R = k * y', correct: false },
      { text: ' R = ky ', correct: true }

    ]
  },

  {
    question: 'Kaşkarov çəkicinin komplektində olan çubuğun və sınaqdan keçirilən betonun üzərindəki nəqşlər hansı dəqiqliklə ölçülür?',
    answers: [
      { text: '0,1mm', correct: true },
      { text: '0,01mm', correct: false },
      { text: '0,2 mm', correct: false },
      { text: '0,3 mm ', correct: false },
      { text: '0,4 mm', correct: false }

    ]
  },

  {
    question: 'Zəlzələnin ocaqda qiymətləndirilməsi (M)düsturu hansıdır?',
    answers: [
      { text: 'A=lgJ0/lgM0', correct: false },
      { text: 'A=lgM/lgM0', correct: false },
      { text: 'M=lg A/A0', correct: true  },
      { text: 'M=lgA', correct: false },
      { text: 'M=lgA0', correct: false }

    ]
  },

  {
    question: ' Zavriyev nəzəriyyəsinə əsasən qruntun sürəti hansı qiymət alır?',
    answers: [
      { text: 'max', correct: false },
      { text: '0', correct: true },
      { text: 'min ', correct: false },
      { text: ' ∞', correct: false },
      { text: '1', correct: false }

    ]
  },

  {
    question: ' Konstruksiyaların, binaların və qurğuların sərtliyini, aparıcı qabiliyyətini və çata davamlığını aşkar etməkdən ibarətdir, bura nə daxildir?',
    answers: [
      { text: 'Tətbiq metodları', correct: false },
      { text: 'Real obyektlər', correct: false },
      { text: 'Maket', correct: false },
      { text: 'Model', correct: false },
      { text: ' Aparılan sınaqların məqsədi', correct: true }

    ]
  },

  {
    question: '. Təsadüfi olmayan yüklər onların zamana görə dəyişmə qanunları ilə tamamilə ifadə oluna bilər. Onlar hansı iş rejimində əmələ gəlmir?',
    answers: [
      { text: 'Statik', correct: true },
      { text: 'Elektromühhəriklərin ', correct: false },
      { text: 'Generatorların', correct: false },
      { text: 'Mexanizmlərin', correct: false },
      { text: 'Ventilyatorların', correct: false }

    ]
  },

  {
    question: 'Dərinfokuslu zəlzələnin ocağda dərinliyi nə qədər olur?',
    answers: [
      { text: '200 km-dən çox ', correct: false },
      { text: '300 km-dən çox', correct: true },
      { text: '100 km-dən çox', correct: false },
      { text: '400 km-dən çox', correct: false },
      { text: '500 km-dən çox', correct: false }

    ]
  },

  {
    question: '. Zəlzələ qurşaqları və zəlzələlərin sayına görə qurşağın tutumu faizlə nə qədərdir?',
    answers: [
      { text: ' Sakit okean (80%); Aralıq dənizi (15%); Atlantika-Arktika (5%)', correct: true },
      { text: ' Aralıq dənizi (15%); Sakit okean (80%); Çin bölgəsi (5%) ', correct: false },
      { text: 'Yapon dənizi (75%); Ağ dənizi (20%); Aralıq dənizi (5%)', correct: false },
      { text: 'Sakit okean (85%); Hind okeanı (10%); Arktika (5%)', correct: false },
      { text: 'Aralıq dənizi (20%); Sakit okean (70%); Atlantika-Arktika (10%)', correct: false }

    ]
  },

  {
    question: ' Azərbaycan Respublikasının qərb bölgəsində yerləşən Göy-göl rayonunda layihələndirilən binalar və qurğular minimum neçə ballıq zəlzələ intensivliyinə hesablanmalıdır?',
    answers: [
      { text: '9', correct: false },
      { text: '7', correct: false },
      { text: '6', correct: false },
      { text: '8', correct: true },
      { text: '10', correct: false }

    ]
  },

  {
    question: '. Zəlzələ ocağından ayrılan enerji hansı kəmiyyətlə qiymətləndirilir?',
    answers: [
      { text: ' Coulla', correct: false },
      { text: 'Balla', correct: false },
      { text: 'Maqnituda ilə', correct: true },
      { text: 'Erqlə', correct: false },
      { text: ' Nyutonla', correct: false }

    ]
  },

  {
    question: 'Zəlzələ zamanı qruntun və ya qurğunun zəlzələ rəqsinin təcilini hansı cihaz yazır?',
    answers: [
      { text: 'Akseleroqraf', correct: true },
      { text: 'Ossiloqraf', correct: false },
      { text: 'Seysmoqraf', correct: false },
      { text: 'Vibroqraf', correct: false },
      { text: 'Velosiqraf ', correct: false }

    ]
  },

  {
    question: 'Ultrasəs dalğalar hansı tezliklə yayılmır?',
    answers: [
      { text: '1000 Meqahers tezlikdən yuxarı tezliklə yayılan hipersəs dalğaları', correct: false },
      { text: ' 2000 Meqahers tezlikdən yuxarı tezliklə yayılan hipersəs dalğaları', correct: true },
      { text: '20 hersə qədər tezliklə yayılan infrasəs dalğaları', correct: false },
      { text: ' 20 hersdən 20 kilohers sərhəddində yayılan səs dalğaları', correct: false },
      { text: '20 kilohersdən 1000 Meqahers qədər tezliklə yayılan ultrasəs dalğaları', correct: false }

    ]
  },

  {
    question: 'Eninə yerləşdirilmiş tənzimləyici (paylaşdırıcı) və konstruktiv armatur üçünmühafizə qatın qalınlığı həmin armaturun diametrindən kiçik olmamalıdır(b > d) və h≥250mm?',
    answers: [
      { text: 'b= 5mm', correct: false },
      { text: 'b= 10mm', correct: false },
      { text: 'b=20mm', correct: false },
      { text: 'b=15mm', correct: true },
      { text: 'b=25mm', correct: false }

    ]
  },

  {
    question: '. Normal zəlzələnin dərinliyi nə qədər olur?',
    answers: [
      { text: '100 km ', correct: false },
      { text: '300 km', correct: false },
      { text: '50 km ', correct: false },
      { text: '200 km', correct: false },
      { text: '70 km', correct: true }

    ]
  },

  {
    question: '. Seysmoloji stansiyalarda seysmometrin əqrəbinin 32 mm < yerdəyişməsi neçə ballıq zəlzələyə uyğundur?',
    answers: [
      { text: 'J=11-12', correct: true },
      { text: 'J=10', correct: false },
      { text: 'J=8', correct: false },
      { text: 'J=9', correct: false },
      { text: 'J=7', correct: false }

    ]
  },

  {
    question: 'Zəlzələ qüvvəsi fəzada hansı istiqamətdə yayılır?',
    answers: [
      { text: 'Uzununa', correct: false },
      { text: 'Eninə', correct: false },
      { text: 'İxtiyari', correct: true },
      { text: 'Şaquli', correct: false },
      { text: 'Üfüqi', correct: false }

    ]
  },

  {
    question: 'Bu məmulatdır,hansı ki müəyyən edilmiş miqyasda sınaq obyektini və ya onun hissəsini təsvir etməyə imkan verir?',
    answers: [
      { text: 'Maket', correct: false },
      { text: 'Real obyektlər', correct: false },
      { text: 'Obyekt', correct: false },
      { text: 'Tətbiq metodları', correct: false },
      { text: 'Model', correct: true }

    ]
  },

  {
    question: 'Sınaq proseslərini ifadə etmək üçün hansı vasitədən istifadə edirlər ?',
    answers: [
      { text: 'Model', correct: false },
      { text: 'Stendlərdən ', correct: true },
      { text: 'Maket', correct: false },
      { text: 'Obyekt', correct: false },
      { text: 'Tətbiq metodları', correct: false }

    ]
  },

  {
    question: ' Baxılan sistem sınaqdan keçirilərkən istismarda olan konstruksiyanın həqiqi istismar vəziyyətinin qiymətləndirilməsi sualı ortaya çıxa bilər, bunun üçün ancaq dağıdıcı olmayan metodlar tətbiq olunur?',
    answers: [
      { text: 'Maket', correct: false },
      { text: 'Model', correct: false },
      { text: 'İmpedans metodu', correct: false },
      { text: 'Akustik emissiya metodu', correct: false },
      { text: 'Real obyektlər', correct: true }

    ]
  },

  {
    question: 'Hündürlüyü 35 m olan 12 mərtəbəli binada seysmik tikişinin eni nə qədər olmalıdır?',
    answers: [
      { text: '15 sm ', correct: true },
      { text: '10 sm', correct: false },
      { text: '8 sm', correct: false },
      { text: '20 sm', correct: false },
      { text: '12 sm', correct: false }

    ]
  },

  {
    question: 'Dinamik yüklərin təsnifatı çox müxtəlifdir. Onlar ola bilər?',
    answers: [
      { text: 'Topa yüklər', correct:false },
      { text: ' Determinir olunmuş (qeyri-təsadüfi) təsadüfi olmayan', correct: true },
      { text: 'Yükləmə xəttinə görə paylanmış', correct: false },
      { text: 'Yükləmə sahəsinə görə paylanmış', correct: false },
      { text: 'Müntəzəm (bərabər) və qeyrimüntəzəm dəyişə bilər.', correct: false }

    ]
  },


  
]