# Pluralsight's Unit Testing in Angular Course
This course is up to date.

To get started, clone the repo or download it

npm install
npm test

## Definitions

### End to End Testing
Testing is done against a live running application with all components and dependencies in a running and fully functional state. 

### Unit Testing
A single unit of code is tested. 

### Integration and Functional Testing
More than a unit, but less than a complete application.

### Angular Integration Testing
Angular integration testing uses template and component to make sure that both of them are working correctly together. 

## Mocking
### Dummy

### Stub

### Spy
Keeps track of...

### True mock

## Types of Angular Unit Tests
### Isolated Unit Tests

### Integration Unit Tests
#### Shallow Integration Unit Tests
#### Deep Integration Unit Tests

### Tools used for unit testing Angular
#### Karma 
Test runner. Executes our tests in the browser.

#### Jasmine
Tool used for making mocks and it is also an assertion library, which in Angular-speak is called expectation.

#### Other Unit Testing Tools
##### Jest

##### Mocha/Chai
Replacements for Jasmine. Easy to drop-in and replace Jasmine.

##### Sinon
Specialized mocking library

##### TestDouble
Comparable to signon, but less popular.

##### Wallaby
Paid tool. Allows you to see the code coverage of your tests right in your IDE.

##### Cypress
Traditionally considered to be a end-to-end testing tool, but new features are geared towards unit testing.

### Structuring Tests
AAA pattern.

- Arrange necessary preconditions and inputs
- Act on the object or class under test
- Assert that the expected results have occurred

### DAMP vs DRY
#### DRY
Don't repeat yourself. Removes duplication.

#### DAMP
Same as dry, but repeat yourself when necessary.

