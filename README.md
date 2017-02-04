# vue-password

> A Vue.js password input component that includes a toggle to show the password and a strength meter using the [Dropbox zxcvbn](https://github.com/dropbox/zxcvbn) library.

## Props

Use the following props to configure the password input.

- id  
  Set the ID of the password input.  
  Default: 'password'

- name  
  Set the name of the password input.  
  Default: 'password'

- classes  
  Set any classes for the password input using a string or array of classes.  
  Default: 'form-control'

- strengthClasses  
  Set the strength classes using an array of 5 classes. One for each strength  
  level provided by the zxcvbn library.

- strengthMessages  
  Set the strength messages using an array of 5 classes. One for each strength  
  level provided by the zxcvbn library.

- minlength  
  Set the minlength HTML5 validation attribute for the password input.  
  Default: 8

- maxlength
  Set the maxlength HTML5 validation attribute for the password input.
  Default: 200

- pattern  
  Set the pattern HTML5 validation attribute for the password input.  
  Default: false

- required  
  Set the required HTML5 validation attribute for the password input.  
  Default: true

- userInputs  
  Set any additional strings for improving the strength calculation. For example, add values for username or email fields so if the password contains those items, it will receive a lower strength. [Click here](https://github.com/dropbox/zxcvbn#usage) for more information.  
  Default: []

- disableToggle  
  Disable the password toggle.  
  Default: false

- disableStrength  
  Disable the password strength check.  
  Default: false

## Slots

Use the following named slots to change the layout of the password toggle, strength meter, and strength messages.

- password-toggle  
  Access the toggle function using a scoped slot.

- strength-meter  
  Access the strength object using a scoped slot. ([See more information about the strength object](https://github.com/dropbox/zxcvbn#usage))

- strength-message  
  Access the strength object using a scoped slot. ([See more information about the strength object](https://github.com/dropbox/zxcvbn#usage))


