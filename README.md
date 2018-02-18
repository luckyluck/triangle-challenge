# Triangle challenge

### Task
Write a program that will determine the type of a triangle. It should take the lengths of the triangle's three sides as input, and return whether the triangle is equilateral, isosceles or scalene.

### Solution
For the solution I decided to use Factory pattern. There were several reasons:
* we need to work with different instances of objects depending on given parameters
* our small objects sharing some base properties (parent object Triangle)
* it's easy to satisfy API contract (duck typing)

All this mentioned points are the strong sides of Factory pattern.
 Also, we need add unit tests only for Factory class in that case, because all high level complexity is concentrated in that place.
 
### Implementation details
For the implementation I used ES6 classes and TypeScript. Its syntax is helping us to use higher abstractions 
and create a really complex structures.

### Installation
First of all you should install dependencies via running
```javascript
yarn
```
or
```javascript
npm install
```
in the root of the project. After that you can run tests using commands
```javascript
mocha --require=babel-core/register src/**/*.spec.js 
```
for JavaScript ES6 implementation and
```javascript
mocha -r ts-node/register src/**/*spec.ts
```
for TypeScript implementation
