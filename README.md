1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

The answer to this question is very simple. All of these are function used to select DOM element but they are slightly different.
the differnce is the following:

getElementById------------> id is used to select the element

                            example: const element = document.getElementById("this-is-id")

getElementsByClassName----> Class is used to select element or more than one element. Here the function return a html collection is live meaning
                            it update changes in the elements

                            example: const element = document.getElementByClassName("all-the-classes")

querySelector-------------> This function uses CSS selector to return the first element that matches the css selector

                            example: const element = document.querySelector(".box .hello ")
                            this selects the first element of a html file which is an element with class hello and 
                            its parent element has a box class

querySelectorAll----------> This function also uses CSS selector but it return all the elements that matches the css selector. 
                            the function returns a nodelist which is static meaning it doesnt update changes in the elements

                            example: const element = document.querySelectorAll(".box .hello ")
                            this selects all the elements of a html file with class hello and its parent element has a box class

2.How do you create and insert a new element into the DOM?

---------------html---------

        <div id="box">
            
        </div>

---------------js------------
const element = document.createElement('div').className.add("box1")
documnet.getElementById("box).appendChild(element)

3. What is Event Bubbling? And how does it work?

Event bubbling is a part of event propagation, the event stats from the target phase and then goes upwards meaning goes to the parant in the DOM.

4.What is Event Delegation in JavaScript? Why is it useful?

Event deligation is a technique used making the code more efficient. If there where 100 buttons then 100 event listener would be need. By adding an event listener to the parent element instead of adding to all the children, save memory and the code run more effectively.

5.What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() is a method that prevents the browsers default action for an event from occurring. Example it can stop a link from navigating to another page or prevent a form from submitting.

stopPropagation() is a method that stops the event from propagating bubbling or capturing to parent elements in the DOM.

The main difference is that preventDefault() controls the browser’s default behavior, while stopPropagation() controls the event’s movement through the DOM.
