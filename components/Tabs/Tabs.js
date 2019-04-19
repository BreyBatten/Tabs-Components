
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    // assigned this.element to the constructor param.
    this.element = element;
    
    // Get the custom data attribute on the Link
    // assigned data to dataset.____ attribute 
    this.data = element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    // assigned itemElement to '.tabs-item' class where the data attribute is. Placed this.data that was assigned above.
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    
    // Using the Item element, create a new instance of the TabItem class
    // took tabItem and gave it a new item that is from the custom data attribute
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    // makes it so when you click on the tab item, the select method from below is called.
    this.element.addEventListener('click', () => this.select());
  }

  select() {
    // Get all of the elements with the tabs-link class
    // assigns links to all of the classes of tabs-link by using querySelectorAll
    const links = document.querySelectorAll('.tabs-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // takes variable 'links' from above and removes the class declared from each link
    links.forEach(link => link.classList.remove('tabs-link-selected'));

    // Add a class named "tabs-link-selected" to this link
    // use classList.add and class you want to add to the element.
    this.element.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    // takes the tabItem and calls the select method.
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // assigns this.element to the constructor param.
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // use querySelectorAll to get all elements from the class
    const items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    items.forEach(items => items.classList.remove('tabs-item-selected'));
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

let links = document.querySelectorAll('.tabs .tabs-link').forEach(element => new TabLink(element));