class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    // pull parameter from constructor function
    this.element = element;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    // assigning button to the element of div with the class 'dropdown-button'.
    this.button = this.element.querySelector('.dropdown-button');
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    // assigning content to the element of div with the class of 'dropdown-content'.
    this.content = this.element.querySelector('.dropdown-content');
    
    // Add a click handler to the button reference and call the toggleContent method.
    // taking the button, putting a click on it and calling the method below.
    this.button.addEventListener('click', () => this.toggleContent());

  
  }

  toggleContent() {
    
    // Toggle the ".dropdown-hidden" class off and on
    // creating the action that will be assigned to the click. Assigning the content to toggle hidden and displayed. (putting .classList means you don't need to put the "." in the 'dropdown-hidden' class)
    this.content.classList.toggle('dropdown-hidden');
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));