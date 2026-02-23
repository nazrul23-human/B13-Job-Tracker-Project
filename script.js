let InterviewList = [];
let RejectedList = []
let currentStatus = 'all'

let total = document.getElementById('total');
let InterviewCount = document.getElementById('InterviewCount');

const allFilterBtn = document.getElementById('all-filter-btn')
const InterviewFilterBtn = document.getElementById('Interview-filter-btn')
const RejectedFilterBtn = document.getElementById('Rejected-filter-btn')

const allCardSection = document.getElementById('allCards');
const mainContainer = document.getElementById('main')
const filterSection = document.getElementById('filter-Section ')

function calculateCount() {
    total.innerText = allCardSection.children.length
    InterviewCount.innerText = InterviewList.length
    RejectedCount.innerText = RejectedList.length
}
calculateCount()

//  step-1
function toggleStyle(id) {
    // adding gray bg for all
    allFilterBtn.classList.add('bg-gray-300', 'Text-black')
    InterviewFilterBtn.classList.add('bg-gray-300', 'Text-black')
    RejectedFilterBtn.classList.add('bg-gray-300',
        'text-black')
    // if any button haa black then remove
    allFilterBtn.classList.remove('bg-black', 'text-white')
    InterviewFilterBtn.classList.remove('bg-black', 'text-white')
    RejectedFilterBtn.classList.remove('bg-black', 'text-white')
    // console.log(id);
    // clicked filter button
    const selected = document.getElementById(id)

    currentStatus = id
    console.log(currentStatus);
    // console.log(selected);

    // adding black bg current button
    selected.classList.remove('bg-gray-300', 'text-black')
    selected.classList.add('bg-black', 'text-white')
    // step 1 finish


    // show and hidden particular section
    // step 4 start
    // filtering while clicking the filter button (All, Interview, Rejected )

    if (id == 'Interview-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderInterview()

    } else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    } else if (id == 'Rejected-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderRejected()
    }
}

// step 2 delegation
mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('Interview-btn')) {
        const parenNode = event.target.parentNode.parentNode;

        const plantName = parenNode.querySelector('.plantName').innerText
        const light = parenNode.querySelector('.light').innerText
        const water = parenNode.querySelector('.water').innerText
        const status = parenNode.querySelector('.status').innerText
        const notes = parenNode.querySelector('.notes').innerText

        parenNode.querySelector('.status').innerText = 'Interview'

        const cardInfo = {
            plantName,
            light,
            water,
            status: 'Interview',
            notes
        }

        const plantExist = InterviewList.find(item => item.plantName == cardInfo.plantName)

        if (!plantExist) {
            InterviewList.push(cardInfo)
        }
        // step 2 finish
        // removing the plant from struggling list
        RejectedList = RejectedList.filter(item => item.plantName != cardInfo.plantName)

        // // after remove rerender the html

        if (currentStatus == 'Rejected-filter-btn') {
            renderRejected()
        }
        calculateCount()

    } else if (event.target.classList.contains('Rejected-btn')) {
        const parenNode = event.target.parentNode.parentNode;

        const plantName = parenNode.querySelector('.plantName').innerText
        const light = parenNode.querySelector('.light').innerText
        const water = parenNode.querySelector('.water').innerText
        const status = parenNode.querySelector('.status').innerText
        const notes = parenNode.querySelector('.notes').innerText

        parenNode.querySelector('.status').innerText = 'Rejected'

        const cardInfo = {
            plantName,
            light,
            water,
            status: 'Rejected',
            notes
        }

        const plantExist = RejectedList.find(item => item.plantName == cardInfo.plantName)

        if (!plantExist) {
            RejectedList.push(cardInfo)
        }

        // removing the plant from thriving list
        InterviewList = InterviewList.filter(item => item.plantName != cardInfo.plantName)

        // console.log(thrivingList);

        // after remove rerender the html
        if (currentStatus == "Interview-filter-btn") {
            renderInterview();

        }
        calculateCount()

    }
})

// step 3 html file create
function renderInterview() {
    // make the filterSection empty every time
    filterSection.innerHTML = ''

    // crating innerHtml
    for (let Interview of InterviewList) {
        console.log(Interview);

        let div = document.createElement('div');
        div.className = 'card flex justify-between border p-8'
        div.innerHTML = `
        < div class="space-y-6">
        < div >
           <p class="Mobile First Corp text-4xl">${Interview.plantName}</p>
           <p class="React Native Developer">React Native Developer</p>
          <br>
          <p>Remote• Full-time •$130,000 - $175,000</p>
          <p class="status">${Interview.status}</p>
          <p class="notes">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
          </div>
          <div class=" flex gap-5">
          <button class="Interview-btn bg-green-400 px-4 py-2">Interview</button>
          <button class="Rejected-btn bg-red-400 px-4 py-2">Rejected</button>
          </div>
          </div >
        // main part - 2
          <div>
          <button class="btn-delete bg-red-400 text-white px-4 py-2">Delete</button>
          </div>
        `
        filterSection.appendChild(div)
    }
}

function renderRejected() {
    // make the filterSection empty every time
    filterSection.innerHTML = ''

    // crating innerHtml
    for (let Rejected of RejectedList) {
        // console.log(Interview);
        let div = document.createElement('div');
        div.className = 'card flex justify-between border p-8'
        div.innerHTML = `
        < div class="space-y-6">
        < div >
           <p class="Mobile First Corp text-4xl">${Rejected.plantName}</p>
           <p class="React Native Developer">React Native Developer</p>
          <br>
          <p>Remote• Full-time •$130,000 - $175,000</p>
          <p class="status">${Rejected.status}</p>
          <p class="notes">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
          </div>
          <div class=" flex gap-5">
          <button class="Interview-btn bg-green-400 px-4 py-2">Interview</button>
          <button class="Rejected-btn bg-red-400 px-4 py-2">Rejected</button>
          </div>
          </div >
        // main part - 2
          <div>
          <button class="btn-delete bg-red-400 text-white px-4 py-2">Delete</button>
          </div>
        `
        filterSection.appendChild(div)
    }
}