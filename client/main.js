// Step 1: Grab HTML Element
// Step 2: Write function
// Step 3: Combine with event listener



const complimentBtn = document.getElementById("complimentButton")


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    })
    .catch ((err) => {
        console.log(err)
    })
};

complimentBtn.addEventListener('click', getCompliment)

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