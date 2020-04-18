# vue-password 3.x

[View Demo](https://codesandbox.io/s/vue-template-t1vmc?fontsize=14)

> **Please note**, VuePassword 3.x removes support for the zxcvbn library. The
> library appears to no longer be maintained. If you would still like to use it,
> you can still pull in the library and pass the VuePassword value to it to
> calculate the strength. Examples coming soon.

## Install

Install the package using npm.

```bash
npm install --save vue-password
```

The `VuePassword` component adds support for a toggle to hide and show the
password as well as a meter to show the current strength of the password.
This component does not automatically calculate the strength, however, a library
like [zxcvbn](https://github.com/dropbox/zxcvbn) can be used to pass the
strength values as props.

```js
import VuePassword from 'vue-password';

export default {
    ...
    components: {
        VuePassword,
    },
    ...
};
```

## Usage

Use the props in your HTML and apply a v-model attribute for the password and any additional props for the desired configuration. The password input uses the $attrs attributes, so form validation props such as required, minlength, and maxlength will function on the input element. The following example shows how vue-password could be used in a registration form using [Tailwind CSS](https://tailwindcss.com/).

### Javascript

```js
import Vue from 'vue'
import VuePassword from 'vue-password'

new Vue({
  el: '#app',
  components: {
    VuePassword
  },
  data {
    user: {
      email: '',
      password: ''
    }
  }
})
```

### HTML

```html
<form>
    <div class="mb-4">
        <label for="password">Password</label>
        <VuePassword
            v-model="password1"
            id="password1"
            :strength="strength"
            type="text"
        />
    </div>
</form>
```

## Props

Use the following props to configure the password input.

| Prop | Default | Description |
| ---- | :-----: | ----------- |
| classes | 'form-control' | Set the classes for the input element. The default is the 'form-control' class used by Twitter Bootstrap. A string or array of classes can be passed in the prop. |
| disableStrength | false | Disable the password strength meter and messages. |
| disableToggle | false | Disable the password input toggle to show/hide the password. |
| strengthClasses | ['VuePassword--very-weak', 'VuePassword--weak', 'VuePassword--medium', 'VuePassword--good', 'VuePassword--great'] | Set the classes used to style the strength message and strength meter. This should be an array of five classes. The classes are applied depending on the current strength score of the password (0-4). |
| strengthMessages | ['Very Weak Password', 'Weak Password', 'Medium Password', 'Strong Password' 'Very Strong Password'] | Set the messages that appear depending on the strength score of the password. This should be an array of five messages. |

## Events

The password input emits an input event to use with v-model. Other events are binded use v-on="listeners".

## Slots

[Named slots](https://vuejs.org/v2/guide/components.html#Named-Slots) can be used to change the layout of the password toggle, strength meter, and strength messages.

| Slot | Scope | Description |
| ---- | ----- | ----------- |
| password-input | <ul><li>strength: Strength value</li><li>type: Current element type ('password or text')</li><li>updatePassword: Method to update the password value.</li><li>value: Current password value</li></ul> | Use this to replace the input element. The content provided by the slot must include an input field, preferably of type password. |
| password-toggle | toggle: Method to change the input type attribute from 'password' to 'type' | Use this named slot to change the layout of the password toggle. |
| password-hide | | Use this named slot to change the password hide icon. |
| password-show | | Use this named slot to change the password show icon. |
| strength-meter | <ul><li>strength: Strength value</li><li>strength-class: Current strength class</li><li>strength-classes: The array of strength classes</li><li>strength-message: Current strength message</li><li>strength-messages: The array of strength messages</li></ul> | Use this named slot to change the layout of the password strength meter. |

### Example: Use custom input

```html
<VuePassword
    v-model="user.password"
>
    <div
        v-slot:password-input="props"
        class="control has-icons-left"
    >
        <input
            class="input"
            type="password"
            placeholder="Text input"
            :value="props.value"
            @input="props.updatePassword"
        />
    </div>
</VuePassword>
```

### Custom Strength Example

#### HTML

```html
<form>
    <label for="password">Password</label>
    <VuePassword
        v-model="user.password"
        :strength="score"
        @input="updateStrength"
    />
</form>
```

#### Javascript

```js
import VuePassword from 'vue-password'

new Vue({
    el: '#app',
    components: {
        VuePassword,
    },
    data: {
        score: 0,
        user: {
            password: ''
        }
    },
    methods: {
        updateStrength(password) {
            /**
             * The input event sends the current password and
             * any included user inputs (email in this case).
             *
             * Calculate the score here either using a custom
             * javascript library or a request to the server.
             *
             * The strength must be an integer between 0 and 4.
             */
        }
    }
});
```
