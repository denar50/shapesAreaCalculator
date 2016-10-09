Geometric shapes random area calculator
===================

> **Pre-requisites**:
> - Node v.6.7.0

Instructions
-----------------

Once downloaded please run:
- `npm install`
- `npm run dev`
- Then go to [http://localhost:8080](http://localhost:8080) to see the page

If you want to see the unit tests in the browser, please run:
- `npm run tests`

About the app
-------------------------

This web app displays a list of three figures: a square, a circle and a triangle
For each figure there are three statistics displayed: Average area, calculated areas count and last calculated area.

Everytime you click on "Calculate new area" in any of the figures, the statistics for that figure will be updated once all the require random data is resolved from a sourced asynchronous function called `getDistanceAPI`

Approach
-------------

A `Shape` class was created to contain all the common logic of all shapes. Then a class that extends `Shape` was created for each shape: `Square`, `Circle` and `Triangle`. Adding a new shape to the application will just imply creating another class that extends `Shape`.

A `ShapeDOMInitializer` class was created to connect a `Shape` with the DOM.

Unit testing
----------------

All the unit tests files are within the source code in the same directory of what they are testing.
Although there is a tests folder at the root level, all this folder contains are the index file I use to bundle all tests with Mocha and the HTML file I use to visualize them in the browser.
