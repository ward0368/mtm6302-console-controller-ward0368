console.log('Welcome to the Customizable Page console.');
console.log('Type Options() to see the available customization options.');

// Function displays information about available options
function Options() {
    console.log('Available options:');
    console.log('1. setTitle("New Title") - Updates page title.');
    console.log('2. setDescription("New Description") - Updates page description.');
    console.log('3. setBackgroundColor("#RRGGBB") - Updates background color.');
    console.log('4. setFontColor("#RRGGBB") - Updates font color for all elements.');
    console.log('5. setTheme("light" or "dark") - Changes page theme.');
}
// Function updates the title
function setTitle(text) {
    const titleElement = document.getElementById('title');
    titleElement.textContent = text;
}

// Function updates the description
function setDescription(text) {
    const descriptionElement = document.getElementById('description');
    descriptionElement.textContent = text;
}

// Function updates the background color
function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Function updates the font color for all elements
function setFontColor(color) {
    const elements = document.querySelectorAll('h1, p');
    elements.forEach((element) => {
        element.style.color = color;
    });
}

// Function sets the page theme
function setTheme(theme) {
    if (theme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    } else if (theme === 'dark') {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    }
}

// Initializes the site with a default theme
setTheme('light'); 