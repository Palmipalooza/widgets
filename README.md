Four separate widgets in one application

Use of React Hooks to build reusable components.

ACCORDION Widget - shows only one item at a time. When one item is clicked, the details about it are expanded while the details about the previously open item is collapsed. Accordion component keeps track of this piece of state with react hooks. Accordion component can be reused for a large list of information.

Hooks Used: useState

Styling: Semantic-ui React Accordion --> https://react.semantic-ui.com/modules/accordion/

Non-reusable example: The semantic-ui example is without a reusable component, where all the content is coded out for every single item --> https://react.semantic-ui.com/modules/accordion/#types-styled

![picture](Accordion-Demo.png)

SEARCH Widget - text box for user input. Pings wikipedia api and a list of titles and summaries. Search component keeps track of this piece of state with hooks. Reusable - Allows for user input in both search term and category dropdown. Component fires off api call if a user changes the search term, category, or both.

Hooks Used: useState, useEffect
useEffect used to make an api call every time a user presses a key

Dropdown Widget

Hooks Used: useState, useEffect, useRef

Translate Widget

Hooks Used: useState, useEffect, useRef
