function randomIn() {
    const dict = new Map();
    document.querySelectorAll(".randomText").forEach(element => {
        
        const name = (new String(element.innerText)).toString();
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        dict[name] = 0;
        const interval = setInterval(() => {
            element.innerText = name.slice(0,dict[name]) + element.innerText.slice(dict[name],name.length).split("").map(
                letter => alphabet[Math.floor(Math.random() * 26)]
            ).join("");
            
            if (dict[name] > name.length) clearInterval(interval);
            

            dict[name] += 1;

        }, 30);

    });
}

window.onload = function () {
    randomIn();
};