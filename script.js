

let enter = document.querySelector(".input");
let comment = "";

enter.addEventListener('keypress', function(e) {
    console.log(e);
    let target = e.target;
    if(e.key != 'Enter'){
        comment += e.key;
    }
    if (e.key === 'Enter') {
        console.log(comment);

        let newDiv = document.createElement("div");
        newDiv.className = "stcomment";

        newDiv.innerHTML = `
            <section class="profile">
                <img src="profile_image.png"></img>
            </section>
            <div class="username">
                JASH
                <img src="edit.png"></img>
                <img src="delete.png"></img>
            </div>
            <div class="addedcomment">
                ${comment}
            </div>
            <div class="logo">
                <img src="comment.png"></img>
                <img src="heart.png"></img>
            </div>
        `;

        let edit = document.querySelector(".edit");
        edit.appendChild(newDiv);

        // comment = "";
        textarea.innerHTML.remove();
    }
});
let btn = document.querySelector(".primaryContained");
btn.addEventListener('click',function(e){
    console.log(e);
    let target = e.target;
    if(e.key != 'Enter'){
        comment += e.key;
    }
    if (e.key === 'Enter') {
        console.log(comment);

        let newDiv = document.createElement("div");
        newDiv.className = "stcomment";

        newDiv.innerHTML = `
            <section class="profile">
                <img src="profile_image.png"></img>
            </section>
            <div class="username">
                JASH
                <img src="edit.png"></img>
                <img src="delete.png"></img>
            </div>
            <div class="addedcomment">
                ${comment}
            </div>
            <div class="logo">
                <img src="comment.png"></img>
                <img src="heart.png"></img>
            </div>
        `;

        let edit = document.querySelector(".edit");
        edit.appendChild(newDiv);

        comment = "";
        textarea.innerHTML.remove();
    }
});