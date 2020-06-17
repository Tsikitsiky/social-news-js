// write your code here
console.log('it works!');
const linksList = [ // array which stores the objects
    {
        title: "First link",
        url: "http://fvbjvkbzv",
        author: "someone"
    },
    {
        title: "Second link",
        url: "http://fvbjvkbzv",
        author: "Him"
    },
    
]

const menu = `1: show the existing links
2: add a new link
3: remove a link from he list
0: quit`;

let startMenu = Number(prompt(menu)); //The start menu where the user choose an activity
while (startMenu !== 0) {
    switch(startMenu) {
        case 1:
            listing();
            break;
        case 2:
            adding();
            break;
        case 3:
            remove();
            break;
        case 0:
            alert(`Thank you`);
            break;
        default:
        alert(`Wrong choice`);
    }
    startMenu = Number(prompt(menu));
}

function listing() { // a function which lists the existing links
    let indexLength = linksList.length; 
    if (indexLength !== 0) {// unless it is empty, the list is showing
        for(let i = 0; i < linksList.length;i++) {
            let links = `${i + 1}: ${linksList[i].title} (${linksList[i].url}) Author: ${linksList[i].author}`;
            alert(links);
        } 
    } else {
        alert(`The list is empty`);
    }
    return;
};

function adding() { // a function which adds a new entry
    const addTitle = prompt(`Enter your title here`);
            const addUrl = prompt(`Enter the link here`);
            let newUrl;
                if (addUrl.startsWith(`http`)) { // if the user didn't put http, after checking it it adds http here
                    newUrl = addUrl;
                } else {
                    newUrl = `http://${addUrl}`;
                }
            const addAuthor = prompt(`Enter the author's name here`);
            const entry = {
                title: addTitle,
                url: newUrl,
                author: addAuthor
            };
            linksList.push(entry);
            alert(`Your entry is added.`)
            return;
};

function remove() { // a function which removes a chosen entry
    let removing = prompt(`Which link do you want to remove? choose from 1 to ${linksList.length}`);
        if (removing >= 1 && removing <= linksList.length) {
            linksList.splice((removing - 1), 1);
            alert(`The link number ${removing} is deleted`);
        } else {
            remove();
        }
};