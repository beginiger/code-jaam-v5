let lec = document.querySelector(".lec1") ;
let flag = true

lec.addEventListener( "click" , function(){
    if(flag){
        const contentDiv = document.querySelector(".hero");

        //Insert PDFs inside div class pdf from backend:
        const newHTML =  `  
        <div class="temp container">
            <div class="pdf">Pdf goes here</div> 
            <div class="options">
             <div class="tags">
                        <i class="ri-bookmark-3-line"></i>
                    </div>

                    <div class="chat">
                        <i class="ri-octagon-line"></i>
                    </div>

                    <div class="download">
                        <i class="ri-arrow-down-fill"></i>
                    </div></div>
        </div>`;

        // Adding the html at last of div hero
        contentDiv.insertAdjacentHTML("beforeend", newHTML);

        lec.classList.add("active");

        flag = false ;

    }
})