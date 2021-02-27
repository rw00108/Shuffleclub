// Countdown Timer

let pointCounter = 0

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (document.querySelector('#stop').textContent == 'stop') {
            timer == timer
        } else if (--timer < 0) {

            let pointsCollected = parseInt(document.querySelector('#currentCard-value').textContent)
            pointCounter += pointsCollected;
            totalPoints = document.querySelector('#totalPoints')
            totalPoints.textContent = pointCounter
            completedExercise();

            updateCard();
            timer = newSelect.duration;

            upcomingExercise();

        }
    }, 1000);
}


// Elapsed Timer
function startWatch(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (document.querySelector('#stop').textContent == 'stop') {
            timer == timer
        }
        else
            ++timer;

    }, 1000);
}


// Spacebar, Pause & Resume
const spacebar = document.querySelector('#spacebar');
const stopbutton = document.querySelector('#stopbutton')
const resumebutton = document.querySelector('#resumebutton')
const watchHeader = document.querySelector('#watchHeader')

spacebar.onclick = function () {

    let timer = 15,
        display = document.querySelector('#time');
    startTimer(timer, display);

    let start = 0,
        displayWatch = document.querySelector('#watch');
    startWatch(start, displayWatch);

    spacebar.className = ''
    spacebar.classList.add('hidden')
    stopbutton.className = 'btn btn-primary stopbutton'

    watchHeader.textContent = 'Time Spent: '

    startBreathing();
    upcomingExercise();
    timerduration();

};

const stopButton = document.querySelector('#stopbutton')

stopButton.onclick = function () {
    stopWatch();

    stopbutton.className = ''
    stopbutton.classList.add('hidden')
    resumebutton.className = 'btn btn-primary resumebutton'
    stopBreathing();

}

const resumeButton = document.querySelector('#resumebutton')

resumeButton.onclick = function () {
    resumeWatch();

    resumebutton.className = ''
    resumebutton.classList.add('hidden')
    stopbutton.className = 'btn btn-primary stopbutton'
    resumeBreathing();

};


//Generates the next random exercise
const randomExercise = () => {
    number = Math.floor(Math.random() * 10)
    console.log(number)
    console.log(exercises[number])
    return exercises[number]

};


//replacing attributes

const updateCard = () => {
    newSelect = targetExercise;

    let title = document.querySelector('#currentCard-title')
    let difficulty = document.querySelector('#currentCard-difficulty')
    let value = document.querySelector('#currentCard-value')
    let img = document.querySelector('#currentCard-img')
    let time = document.querySelector('#time')

    let updateTitle = targetExercise.name
    let updateDuration = targetExercise.duration
    let updateDifficulty = targetExercise.difficulty
    let updateValue = targetExercise.value
    let updateImg = targetExercise.img

    title.textContent = updateTitle
    difficulty.textContent = updateDifficulty
    value.textContent = `${updateValue} Buddha Bars`
    img.src = updateImg
    time.textContent = `00:${updateDuration}`

    if (updateDifficulty == 'Classic') {
        difficulty.className = ''
        difficulty.classList.add('btn')
        difficulty.classList.add('btn-success')
    } else if (updateDifficulty == 'harder') {
        difficulty.className = ''
        difficulty.classList.add('btn')
        difficulty.classList.add('btn-primary')
    } else if (updateDifficulty == 'Legendary') {
        difficulty.className = ''
        difficulty.classList.add('btn')
        difficulty.classList.add('btn-danger')
    } else {
        console.log('error')
    }

};

//updates the upcoming exercise
const upcomingExercise = () => {
    targetExercise = randomExercise();

    let title = document.querySelector('#nextCard-title')
    let duration = document.querySelector('#nextCard-duration')
    let difficulty = document.querySelector('#nextCard-difficulty')
    let value = document.querySelector('#nextCard-value')

    let upcomingTitle = targetExercise.name
    let upcomingDuration = targetExercise.duration
    let upcomingDifficulty = targetExercise.difficulty
    let upcomingValue = targetExercise.value

    if (upcomingDifficulty == 'Classic') {
        difficulty.className = ''
        difficulty.classList.add('btn')
        difficulty.classList.add('btn-success')
    } else if (upcomingDifficulty == 'harder') {
        difficulty.className = ''
        difficulty.classList.add('btn')
        difficulty.classList.add('btn-primary')
    } else if (upcomingDifficulty == 'Legendary') {
        difficulty.className = ''
        difficulty.classList.add('btn')
        difficulty.classList.add('btn-danger')
    } else {
        console.log('error')
    }


    title.textContent = upcomingTitle
    duration.textContent = `00:${upcomingDuration}`
    difficulty.textContent = upcomingDifficulty
    value.textContent = `${upcomingValue} Buddha Bars`

};

//Pausing timing

const stopWatch = () => {
    stoppingWatch = document.querySelector('#stop');
    console.log(stoppingWatch);

    pausedTime = stoppingWatch.textContent;

    stoppingWatch.textContent = 'stop';

    stoppingWatch.classList.add('stopped')


}

//Resuming timing

const resumeWatch = () => {
    stoppingWatch = document.querySelector('#stop');
    console.log(stoppingWatch);

    pausedTime = stoppingWatch.textContent;

    stoppingWatch.textContent = '';


}


const completedExercise = () => {

    let title = document.querySelector('#currentCard-title').innerText
    let difficulty
    let list = document.getElementById('donepile')

    let newBullet = document.createElement('li')

    newBullet.textContent = title

    console.log(title)

    console.log(`im attaching to ${list}`)

    list.append(newBullet)


};

//breathing <- This took me fucking ages

var glower = $('#myGlower')
let toggle = setInterval(function () { glower.toggleClass('active'); }, 2000);
clearInterval(toggle)


function startBreathing() {
    toggle = setInterval(function () { glower.toggleClass('active'); }, 2000)

};

function stopBreathing() {
    clearInterval(toggle)
};

function resumeBreathing() {
    toggle = setInterval(function () { glower.toggleClass('active'); }, 2000)
};

//------

// const progressUpdate = () => {

//     let num1 = parseInt(document.querySelector('#time').innerText.charAt(3))
//     let num2 = parseInt(document.querySelector('#time').innerText.charAt(4))
//     let progressBar = document.querySelector('.progressBar')
//     totalTime = parseInt(`${num1}${num2}`)
//     console.log(totalTime)

//     for (let i = totalTime; i > 0; i--) {
//         let progress = parseInt(document.querySelector('#time').innerText)
//         console.log(progress / totalTime)
//     }


const progressBar = () => {
    let num1 = parseInt(document.querySelector('#time').innerText.charAt(3))
    let num2 = parseInt(document.querySelector('#time').innerText.charAt(4))
    let title = document.querySelector('#currentCard-title').innerText
    let progressBar = document.querySelector('.progressBar')
    currentTime = parseInt(`${num1}${num2}`)
    console.log(currentTime)

    const getValue = exercises.find(exercise => exercise.name === title)
    console.log(getValue)

    let totalTime = getValue.duration

    let percent = (((totalTime - currentTime) / totalTime) * 100)

    progressBar.style.width = `${percent}%`

}

const timerduration = () => {
    setInterval(function () {
        let title = document.querySelector('#currentCard-title').innerText
        const getValue = exercises.find(exercise => exercise.name === title)
        let totalTime = getValue.duration

        for (let i = 0; i < totalTime; i++) {
            progressBar()
        }


    }, 10)



}








// Exercises - Objects in a list

const exercises = [
    {
        name: 'Downdog',
        duration: 15,
        difficulty: 'Classic',
        value: 15,
        img: 'img/downdog.gif'
    },

    {
        name: 'Warrior 2',
        duration: 30,
        difficulty: 'harder',
        value: 30,
        img: 'img/warrior2.gif'
    },

    {
        name: 'Warrior 3',
        duration: 45,
        difficulty: 'Legendary',
        value: 60,
        img: 'img/warrior3.gif'
    },

    {
        name: 'Crow Pose',
        duration: 10,
        difficulty: 'Legendary',
        value: 60,
        img: 'img/crowpose.gif'
    },

    {
        name: 'Cat Cow',
        duration: 20,
        difficulty: 'Classic',
        value: 30,
        img: 'img/catcow.gif'
    },

    {
        name: 'Headstand',
        duration: 20,
        difficulty: 'Legendary',
        value: 60,
        img: 'img/headstand.gif'
    },

    {
        name: 'Camel Pose',
        duration: 20,
        difficulty: 'harder',
        value: 60,
        img: 'img/camelpose.gif'
    },

    {
        name: 'Childs Pose',
        duration: 20,
        difficulty: 'Classic',
        value: 60,
        img: 'img/childspose.gif'
    },

    {
        name: 'Scorpion Pose',
        duration: 20,
        difficulty: 'Legendary',
        value: 60,
        img: 'img/scorpion.gif'
    },

    {
        name: 'Lizard Pose',
        duration: 20,
        difficulty: 'Classic',
        value: 60,
        img: 'img/lizard.gif'
    },

]