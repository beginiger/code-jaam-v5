let lec = document.querySelector(".lec1") ;
let flag = true

lec.addEventListener( "click" , function(){
    if(flag){
        const contentDiv = document.querySelector(".hero");

        //Insert PDFs inside div class pdf from backend:
        const newHTML =  `  
        <div class="temp container">
            <div class="pdf">Pdf goes here</div> 
            <div class="options"></div>
        </div>`;

        // Adding the html at last of div hero
        contentDiv.insertAdjacentHTML("beforeend", newHTML);

        lec.classList.add("active");

        flag = false ;
        
    }
})