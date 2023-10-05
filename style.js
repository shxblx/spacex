// JavaScript code to scroll between sections
const sections = document.querySelectorAll("div[id^='section']");
let currentSectionIndex = 0;

// Function to scroll to the next section
function scrollToNextSection() {
    if (currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
        sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
    }
}

// Function to scroll to the first section
function scrollToFirstSection() {
    currentSectionIndex = 0;
    sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
}
