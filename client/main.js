// Step 1: Grab HTML Element
// Step 2: Write function
// Step 3: Combine with event listener


let complimentsArr = []
const complimentBtn = document.getElementById("getRandCompliment")


const getRandCompliment = () => {
    axios.get("http://localhost:4000/api/compliments/random")
        .then(res => {
            const data = res.data;
            alert(data);
    })
    .catch ((err) => {
        console.log(err)
    })
};

complimentBtn.addEventListener('click', getRandCompliment)

//Step 1:
const fortuneBtn = document.querySelector('#fortuneButton')

//Step 2: 
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    })
    .catch ((err) => {
        console.log(err)
    })
}

//Step 3:
fortuneBtn.addEventListener('click', getFortune)

const populateList = () => {
    let list = document.querySelector('#complimentsList')
    list.innerHTML = ''
    complimentsArr.forEach(compliment => {
        let listItem = document.createElement("li");
        listItem.innerText = compliment
        list.appendChild(listItem)
    });
}
axios.get("http://localhost:4000/api/compliments")
    .then((resp) => {
        complimentsArr = resp.data
        populateList()
    }).catch((err) => {
        console.log(err)
    })

const getSingleComplimentBtn = document.querySelector('#getSingleComplimentBtn')
const getSingleComplimentNum = document.querySelector('#getSingleComplimentNum')

const getSingleCompliment = () => {

    let idToGet = getSingleComplimentNum.value

    axios.get(`http://localhost:4000/api/compliments/${idToGet}`)
        .then(res => {
            const data = res.data;
            alert(data);
        })
        .catch ((err) => {
            console.log(err)
        })
};

getSingleComplimentBtn.addEventListener('click' , getSingleCompliment)


const addComplimentBtn = document.querySelector('#addComplimentBtn')
const addComplimentStr = document.querySelector('#addComplimentStr')

const addCompliment = () => {

    let bodyObj = {compliment: addComplimentStr.value}

    axios.post(`http://localhost:4000/api/compliments`, bodyObj)
        .then(res => {
            complimentsArr.push(bodyObj.compliment)
            populateList()
        })
        .catch ((err) => {
            console.log(err)
        })
};

addComplimentBtn.addEventListener('click' , addCompliment)


const deleteComplimentBtn = document.querySelector('#deleteComplimentBtn')
const deleteComplimentNum = document.querySelector('#deleteComplimentNum')

const deleteCompliment = () => {

    let idToDelete = deleteComplimentNum.value

    axios.delete(`http://localhost:4000/api/compliments/${idToDelete}`)
        .then(res => {
            complimentsArr.splice(idToDelete-1, 1)
            populateList()
        })
        .catch ((err) => {
            console.log(err)
        })
};

deleteComplimentBtn.addEventListener('click' , deleteCompliment)

const updateComplimentBtn = document.querySelector('#updateComplimentBtn')
const updateComplimentNum = document.querySelector('#updateComplimentNum')
const updateComplimentStr = document.querySelector('#updateComplimentStr')

const updateCompliment = () => {

    let idToUpdate = updateComplimentNum.value
    let bodyObj = {compliment: updateComplimentStr.value}

    axios.put(`http://localhost:4000/api/compliments/${idToUpdate}`, bodyObj)
        .then(res => {
            complimentsArr.splice(idToUpdate-1, 1, bodyObj.compliment)
            populateList()
        })
        .catch ((err) => {
            console.log(err)
        })
};

updateComplimentBtn.addEventListener('click' , updateCompliment)