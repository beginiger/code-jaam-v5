

let lec1 = document.querySelector(".lec1");
let lec2 = document.querySelector(".lec2");
let isLectureActive = false;
let isAssignmentActive = false;

function clearContent() {
    const filterParent = document.querySelector(".filterParent");
    const temp = document.querySelector(".temp");
    if (filterParent) filterParent.remove();
    if (temp) temp.remove();
}

function addLectureContent(contentDiv) {
    clearContent();
    const newHTML = `  
        <div class="filterParent container">
            <div class="filter">
                <p>Filter</p>
                <i class="ri-arrow-down-s-fill"></i>
            </div>
        </div>
        <div class="temp container">
            <div class="pdf">Lecture PDF goes here</div> 
            <div class="options">
                <div class="tags"><i class="ri-bookmark-3-line"></i></div>
                <div class="chat"><i class="ri-octagon-line"></i></div>
                <div class="download"><i class="ri-arrow-down-fill"></i></div>
            </div>
        </div>`;
    contentDiv.insertAdjacentHTML("beforeend", newHTML);
}

function addAssignmentContent(contentDiv) {
    clearContent();
    const newHTML = `  
        <div class="filterParent container">
            <div class="filter">
                <p>Filter</p>
                <i class="ri-arrow-down-s-fill"></i>
            </div>
        </div>
        <div class="temp container">
            <div class="pdf">Assignment PDF goes here</div> 
            <div class="options">
                <div class="tags"><i class="ri-bookmark-3-line"></i></div>
                <div class="chat"><i class="ri-octagon-line"></i></div>
                <div class="download"><i class="ri-arrow-down-fill"></i></div>
            </div>
        </div>`;
    contentDiv.insertAdjacentHTML("beforeend", newHTML);
}

if (lec1) {
    lec1.addEventListener("click", function() {
        const contentDiv = document.querySelector(".hero");
        if (contentDiv) {
            if (!isLectureActive) {
                addLectureContent(contentDiv);
                lec1.classList.add("active");
                lec2.classList.remove("active");
                isLectureActive = true;
                isAssignmentActive = false;
            } else {
                clearContent();
                lec1.classList.remove("active");
                isLectureActive = false;
            }
        }
    });
}

if (lec2) {
    lec2.addEventListener("click", function() {
        const contentDiv = document.querySelector(".hero");
        if (contentDiv) {
            if (!isAssignmentActive) {
                addAssignmentContent(contentDiv);
                lec2.classList.add("active");
                lec1.classList.remove("active");
                isAssignmentActive = true;
                isLectureActive = false;
            } else {
                clearContent();
                lec2.classList.remove("active");
                isAssignmentActive = false;
            }
        }
    });
}

document.addEventListener("click", function(e) {
    const filterButton = e.target.closest(".filter");
    if (filterButton) {
        const content2Div = document.querySelector(".filterParent");
        if (content2Div) {
            const existingDropdown = content2Div.querySelector(".filterDropdown");
            if (existingDropdown) {
                existingDropdown.remove();
            } else {
                let dropdownHTML = "";
                if (isLectureActive) {
                    dropdownHTML = `
                        <div class="filterDropdown">
                            <p>Filter by Difficulty</p>
                            <p>Filter by Pages</p>
                            <p>Filter by Dates</p>
                        </div>`;
                } else if (isAssignmentActive) {
                    dropdownHTML = `
                        <div class="filterDropdown">
                            <p>Due</p>
                            <p>Missing</p>
                            <p>Submitted</p>
                        </div>`;
                }
                content2Div.insertAdjacentHTML("beforeend", dropdownHTML);
            }
        }
    }
});
