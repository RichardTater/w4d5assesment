module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar.", "A beautiful, smart, and loving person will be coming into your life.", "A faithful friend is a strong defense.", "A friend asks only for your time not your money.", "A truly rich life contains love and art in abundance.", "All your hard work will soon pay off."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    fetFortune: (req, res) => {
        const fortunes = ["Don’t let your limitations overshadow your talents.", "New ideas could be profitable.", "Those who care will make the effort.", "Your reputation is your wealth.", "You will soon be surrounded by good friends and laughter."]

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    }

}