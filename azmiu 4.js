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
      question: 'MSK-64 şkalası yer səthində zəlzələ gücünü maksimum neçə bal ilə ölçür?',
      answers: [
        { text: '9', correct: false },
        { text: '12', correct: true },
        { text: '10', correct: false },
        { text: '7', correct: false },
        { text: '8', correct: false }
  
      ]
    },
  
    {
      question: 'Elektrik tenzometr və sınaqdan keçirilən konstruksiya birlikdə deformasiyaya uğrayır və qeydedici gurğu nəyi qeyd edir? ',
      answers: [
        { text: 'Fırlanma;', correct: false },
        { text: 'Dağılma;', correct: false },
        { text: 'Sürüşmə;', correct: false },
        { text: 'Müqavimətin dəyişməsi;', correct: true },
        { text: 'Dönmə;', correct: false }
  
      ]
    },
  
    {
      question: 'Azərbaycan Respublikasının aran bölgəsində yerləşən Kürdəmir  rayonunda layihələndirilən binalar və qurğular minimum neçə ballıq zəlzələ intensivliyinə hesablanmalıdır?',
      answers: [
        { text: '9', correct: false },
        { text: '7', correct: false },
        { text: '6', correct: false },
        { text: '10', correct: false },
        { text: '8', correct: true }
  
      ]
    },
  
    {
      question: 'Məsaməli doldurucuları olan M100 markalı betondan hazırlanmış birqat konstruksiyalarda mühafizə qatının qalınlığı nə qədər olmalıdır?',
      answers: [
        { text: '20mm-də az olmamalıdır', correct: true },
        { text: '10mm - də az olmamalıdır', correct: false },
        { text: ' 15mm- də az olmamalıdır', correct: false },
        { text: '25mm- də az olmamalıdır', correct: false },
        { text: '30mm- də az olmamalıdır', correct: false }
  
      ]
    },
  
    {
      question: 'Azərbaycan Respublikasının aran bölgəsində yerləşən Ucar rayonunda  layihələndirilən binalar və qurğular minimum neçə ballıq zəlzələ intensivliyinə hesablanmalıdır?',
      answers: [
        { text: '9', correct: false },
        { text: '7', correct: false },
        { text: '8', correct: true },
        { text: '6', correct: false },
        { text: '10', correct: false }
  
      ]
    },
  
    {
      question: 'MSK-64 şkalası yer səthində hansı kəmiyyəti ölçür?',
      answers: [
        { text: ' Maqnitudanı', correct: false },
        { text: ' Seysmik dalğanı ', correct: false },
        { text: ' Ocağın dərinliyi', correct: false },
        { text: 'Ocağın enerjini', correct: false },
        { text: 'İntensivliyi', correct: true }
  
      ]
    },
  
    {
      question: 'Zəlzələnin maqnitudası hansı alim tərəfindən təklif olunan şkala üzrə təyin olunur?',
      answers: [
        { text: 'Omori ', correct: false },
        { text: 'Rixter', correct: true },
        { text: ' Medvedev', correct: false },
        { text: 'Qolitsin ', correct: false },
        { text: ' Şponxoyer', correct: false }
  
      ]
    },
  
    {
      question: 'AzDTN 2.3-1 «Seysmik rayonlarda tikinti» normalara əsasən kq-qrunt şəraiti əmsalı, qiyməti ІІ sinif qruntlar üçün nə qədər qəbul olunur ?',
      answers: [
        { text: '0,25', correct: false },
        { text: '0,5', correct: false },
        { text: '1,5', correct: false },
        { text: '1,2', correct: false },
        { text: '1,0', correct: true }
  
      ]
    },
  
    {
      question: 'AzDTN 2.3-1 «Seysmik rayonlarda tikinti» normalara əsasən kq-qrunt şəraiti əmsalı, qiyməti ІІІ sinif qruntlar üçün nə qədər qəbul olunur ?',
      answers: [
        { text: ' 1,2', correct: true },
        { text: '0,25', correct: false },
        { text: '0,5', correct: false },
        { text: '1,0', correct: false },
        { text: '1,5 ', correct: false }
  
      ]
    },
  
    {
      question: 'Aftershoc nəyə deyilir?',
      answers: [
        { text: 'Güclü zəlzələdən əvvəl bir neçə zəif zəlzələlər olur ', correct:false },
        { text: 'Əsas zəlzələdən sonra çoxlu sayda zəlzələlər olur və bu zəlzələlərin gücü getdikcə zəifləyir', correct: true },
        { text: 'Plitələrin bir-birinə nisbətən təsiri', correct: false },
        { text: ' Seysmik dalgaların süxurlarda yayılması', correct: false },
        { text: 'Yer səthini daha güclü titrəməsi', correct: false }
  
      ]
    },


    {
        question: 'Seysmik dalğaların hansı növü səs dalğalarına bənzəyir?',
        answers: [
          { text: ' Eninə dalğalar ', correct: false },
          { text: 'Boyuna dalğalar', correct: true },
          { text: ' Səth dalğaları', correct: false },
          { text: 'Reley-dalğası', correct: false },
          { text: 'Ləva-dalğası', correct: false }
    
        ]
      },
    
      {
        question: 'Seysmik dalğaların yayılma sürəti hansı parametrdən asılıdır?',
        answers: [
          { text: 'Məsafədən', correct: false },
          { text: 'Torpaq hissəsinin hərəkətinin yönəlməsindən', correct: false },
          { text: 'Qurğunun aldığı yerdəyişmədən', correct: false },
          { text: 'Quruntun sıxlığından ', correct: true },
          { text: 'Vahid yerdəyişmədən', correct: false }
    
        ]
      },
    
      {
        question: 'Zəlzələlər ocağın dərinliyinə görə təsnif olunurlar?',
        answers: [
          { text: 'Uçqun, vulkonik, təbii', correct: false },
          { text: 'dərin, süni mənşəli', correct: false },
          { text: 'vulkonik, süni mənşəli ', correct: false },
          { text: 'təbii və vulkonik', correct: false },
          { text: 'Normal, orta, dərin fokuslu', correct: true }
    
        ]
      },
    
      {
        question: 'Zəlzələnin intensivliyihansı üsul ilə təyin edilir?',
        answers: [
          { text: 'Zəlzələ şkalası', correct: true },
          { text: 'Ossiloqraf', correct: false },
          { text: 'Maqnituda', correct: false },
          { text: 'İzoseytlər', correct: false },
          { text: 'dinamoqraf', correct: false }
    
        ]
      },
    
      {
        question: 'Seysmik dalğaların amplitudası hansı cihazla ölçülür? ',
        answers: [
          { text: 'dinamoqraf', correct: false },
          { text: 'akseloqraf', correct: false },
          { text: 'Seysmoqraf', correct: true },
          { text: 'velosiqraf', correct: false },
          { text: 'Ossiloqraf ', correct: false }
    
        ]
      },
    
      {
        question: 'Azərbaycanda istifadə edilən seysmik skala?',
        answers: [
          { text: 'Merkalla-Kankani-Ziberq', correct: false },
          { text: 'Merkalli', correct: false },
          { text: 'Rixter', correct: false },
          { text: 'Omari', correct: false },
          { text: 'Beynəlxalq MSK-64', correct: true }
    
        ]
      },
    
      {
        question: 'Beynəlxalq MSK-64 seysmik şkalası yer səthində zəlzələnin intensivliyini  neçə bala bölünür?',
        answers: [
          { text: '10', correct: false },
          { text: '12', correct: true },
          { text: '7', correct: false },
          { text: '15', correct: false },
          { text: '11', correct: false }
    
        ]
      },
    
      {
        question: '. Seysmik şkalanın instrumental hissəsində zəlzələnin qiyamətləndirilməsi nəyə əsasən aparılır?',
        answers: [
          { text: ' Dinamometrin rəqqasının yerdəyişməsinə əsasən ', correct: false },
          { text: 'Tenzometrin rəqqasının yerdəyişməsinə əsasən ', correct: false },
          { text: 'Pyezometrin rəqqasının yerdəyişməsinə əsasən ', correct: false },
          { text: 'Çastotometrin rəqqasının yerdəyişməsinə əsasən ', correct: false },
          { text: 'Seysmometrin rəqqasının yerdəyişməsinə əsasən', correct: true }
    
        ]
      },
    
      {
        question: 'Zəlzələ zamanı rəqslərin yerdəyişməsini qeyd edən cihaz? ',
        answers: [
          { text: 'seysmograf', correct: true },
          { text: ' dinamograf ', correct: false },
          { text: 'akselerograf ', correct: false },
          { text: 'velosigraf', correct: false },
          { text: 'tenzograf', correct: false }
    
        ]
      },
    
      {
        question: 'Zəlzələ qüvvələrinin zəlzələnin ballıq dərəcəsini müəyyən etmək üçün hans  üsuldan istifadə edilir?',
        answers: [
          { text: 'təsviri ', correct:false },
          { text: 'instrumental', correct: true },
          { text: 'radiolokasiya ', correct: false },
          { text: 'riyazi ', correct: false },
          { text: 'ultrasəs', correct: false }
    
        ]
      },

      {
        question: 'Birinci növbədə seysmik stansiyalarda quraşdrılmış seysmograflar hansı  növ dalğaları qeyd edir?',
        answers: [
          { text: 'Reley dalğaları', correct:false },
          { text: 'uzununa P-dalğaları', correct: true },
          { text: 'Longea-dalğaları', correct: false },
          { text: 'eninə S-dalğalar', correct: false },
          { text: 'Ləva dalğalar', correct: false }
    
        ]
      },

      {
        question: 'Olan zəlzələlərin episentrinin yer üzərində yerləşməsinə,zəlzələ güclərinin  qiymətləndirilməsi və yer daxilində gedən proseslərə əsasən neçə dənə böyük seysmik qurşaq müəyyən edilib?',
        answers: [
          { text: '4', correct:false },
          { text: '3', correct: true },
          { text: '5', correct: false },
          { text: '2', correct: false },
          { text: '6', correct: false }
    
        ]
      },

      {
        question: 'İlk dəfə zəlzələ qüvvəsinin təyin edilməsi üçün statiki nəzəriyyə təklif edən alim?',
        answers: [
          { text: 'Mononobe', correct:false },
          { text: 'Omori', correct: true },
          { text: 'İmamura', correct: false },
          { text: 'Zavriyev', correct: false },
          { text: 'Hauzner', correct: false }
    
        ]
      },

      {
        question: ' Omorinin statiki nəzəriyyəsinin çatışmamazlığı nədən ibarətdir?',
        answers: [
          { text: ' Qurğunun dinamikasının və deformasiyasının nəzərə alınması ', correct:false },
          { text: 'Qurğunun dinamikasının və deformasiyasının nəzərə alınmaması', correct: true },
          { text: 'Qurğunun xüsusi rəqslərin nəzərə alınması', correct: false },
          { text: ' Qurğunun məcburi rəqslərin nəzərə alınması', correct: false },
          { text: 'Qurğuya təsir edən rəqs zamanı yer səthinin aldığı yerdəyişmənin nəzərə  alınmaması', correct: false }
    
        ]
      },

      {
        question: 'Betonun möhkəmliyinin təyin edilməsi üçün istifadə olunan cihaz?',
        answers: [
          { text: 'Tenzometr', correct:false },
          { text: ' Kaşkarovun etalon çəkici', correct: true },
          { text: 'Çastotomer', correct: false },
          { text: 'İndikator', correct: false },
          { text: 'Ossiloskop', correct: false }
    
        ]
      },
  
  
    
  ]