

let lec = document.querySelector(".lec1");
let flag = true;

if (lec) {
    lec.addEventListener("click", function () {
        if (flag) {
            const contentDiv = document.querySelector(".hero");

            if (contentDiv) {
                // Insert PDFs inside div class pdf from backend:
                const newHTML = `  
                    <div class="filterParent container">
                        <div class="filter">
                            <p>Filter</p>
                            <i class="ri-arrow-down-s-fill"></i>
                        </div>
                    </div>

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
                            </div>
                        </div>
                    </div>`;

                // Adding the HTML at the end of the div.hero
                contentDiv.insertAdjacentHTML("beforeend", newHTML);

                lec.classList.add("active");

                flag = false;
            } else {
                console.error("Element with class '.hero' not found.");
            }
        }
    });
}

// Wait for the filter button to be created before adding the listener
document.addEventListener("click", function (e) {
    const filterButton = e.target.closest(".filter");
    if (filterButton) {
        const content2Div = document.querySelector(".filterParent");
        if (content2Div) {
            const existingDropdown = content2Div.querySelector(".filterDropdown");

            if (existingDropdown) {
                // remove the dropdown if it already exists
                existingDropdown.remove();
            } else {
                // Insert filter dropdown options
                const new2HTML = `
                    <div class="filterDropdown">
                        <p>Filter by Difficulty</p>
                        <p>Filter by Pages</p>
                        <p>Filter by Dates</p>
                    </div>`;

                // Adding the HTML at the end of the div.filterParent
                content2Div.insertAdjacentHTML("beforeend", new2HTML);
            }
        } else {
            console.error("Element with class '.filterParent' not found.");
        }
    }
});




let assignments = document.querySelector(".lec2") ;
if (assignments) {
    assignments.addEventListener("click", function () {
        if (flag) {
            const contentDiv = document.querySelector(".hero");

            if (contentDiv) {
                // Insert PDFs inside div class pdf from backend:
                const newHTML = `  
                    <div class="filterParent container">
                        <div class="filter">
                            <p>Filter</p>
                            <i class="ri-arrow-down-s-fill"></i>
                        </div>
                    </div>

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
                            </div>
                        </div>
                    </div>`;

                // Adding the HTML at the end of the div.hero
                contentDiv.insertAdjacentHTML("beforeend", newHTML);

                assignments.classList.add("active");

                flag = false;
            } else {
                console.error("Element with class '.hero' not found.");
            }
        }
    });
}
