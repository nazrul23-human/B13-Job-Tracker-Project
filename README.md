 
 1-a.What is the difference between getElementById and getElementsByClassName.

 #getElementById:
 DOM selection techniques getElementById and getElementsByClassName provide different features. By using the id attribute to identify a unique element, getElementById delivers a single Element object, allowing for direct manipulation without the need for indexing. It is quite effective for precision targeting because of its uniqueness requirement, which guarantees that only one element is ever retrieved.

 #getElementsByClassName:
 GetElementsByClassName, on the other hand, chooses elements that have the same class property and produces a live HTMLCollection that resembles an array but updates automatically in response to DOM changes. Because classes are reusable throughout the document, it is possible to return numerous items and access specific elements through indexing. Because it traverses collections, it performs a little less efficiently than getElementById, but it is perfect for bulk operations on sets of elements that have similar styling or behavior.


 1-b.What is the difference between querySelector and querySelectorAll.

 #querySelector:
 The scope and behavior of querySelector and querySelectorAll, two sophisticated DOM selection techniques that make use of CSS selectors, vary. querySelector returns a single Element object that may be precisely and singularly altered by retrieving the first element in the document that meets a given CSS selector. 

 #querySelectorAll:
 All elements that match the specified CSS selector are included in the static NodeList that querySelectorAll produces, however. In contrast to getElementsByClassName, the returned NodeList is not live and must be iterated or indexed in order to access individual elements because it does not reflect subsequent DOM changes. 


 2. How do you create and insert a new element into the DOM?
 Use the document function to create a new DOM element.createElement(), which results in a memory-based Element node that is detachable. Assign textContent, innerText, or innerHTML to its internal structure, or use document to build and attach subordinate nodes.generateTextNode(). Use the classList token interface, inline style modification, dataset properties, setAttribute(), getAttribute(), removeAttribute(), and direct ID or property assignment to configure semantic and presentational metadata


 3. What is Event Bubbling? And how does it work?
 When an event on a child element in the DOM automatically spreads to its parent elements, this is known as event bubbling. Parent elements are given the opportunity to handle the event as it begins at the target element and progresses through ancestors. StopPropagation() can be used to halt the spread.


 4. What is Event Delegation in JavaScript? Why is it useful?
 In JavaScript, event delegation is a technique that allows a parent element to manage events on its child elements by attaching a single event listener to it rather than giving each child a unique listener. It uses characteristics like event to determine which kid caused the event, hence utilizing event bubbling.
 

 #Why is it useful?:
 1.Minimizes the number of listeners, which lowers memory use.
 2.Handles dynamic content more easily because freshly inserted child elements are automatically covered.
 3.Concentrates event logic in one location, which enhances code maintainability.


 5. What is the difference between preventDefault() and stopPropagation() methods?

 #preventDefault():
 1.Stops the event-related default browser action.
 2.Examples include disabling the right-click context menu, stopping a form from submitting, and stopping a link from navigating.
 3.keeps the event from capturing or bubbling.

 #stopPropagation():
 1.prevents the event from propagating across predecessor elements, either by bubbling up or capturing down.
 2.Example: The parent element's click handler won't be triggered when a button inside it is clicked.
 3.Doesn't stop the browser's default action.
