<template>
  <div class="VuePassword">
    <div class="VuePassword__Container">
      <slot
        name="password-input"
        :strength="this.strength"
        :type="type"
        :updatePassword="updatePassword"
        :value="value"
      >
        <input
          ref="input"
          :class="[
            classes,
            'VuePassword__Input',
            { 'VuePassword__Input--has-toggle': !disableToggle }
          ]"
          :title="strengthMessage"
          :value="value"
          v-bind="$attrs"
          v-on="listeners"
        />
      </slot>
      <slot
        v-if="!disableToggle"
        name="password-toggle"
        :toggle="togglePassword"
      >
        <button
          class="VuePassword__Toggle"
          :title="toggleMessage"
          type="button"
          @click="togglePassword"
        >
          <slot name="password-hide" v-if="this.type === 'text'">
            <svg
              class="VuePassword__Toggle-Icon VuePassword__Toggle-Icon--hide"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M12.81 4.36l-1.77 1.78a4 4 0 0 0-4.9 4.9l-2.76 2.75C2.06 12.79.96 11.49.2 10a11 11 0 0 1 12.6-5.64zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79a11 11 0 0 1-12.62 5.64l1.77-1.78a4 4 0 0 0 4.9-4.9l2.76-2.75zm-.25-3.99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z"
              />
            </svg>
          </slot>
          <slot name="password-show" v-else>
            <svg
              class="VuePassword__Toggle-Icon VuePassword__Toggle-Icon--show"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
              />
            </svg>
          </slot>
        </button>
      </slot>
    </div>

    <slot
      v-if="!disableStrength"
      name="strength-meter"
      :strength="this.strength"
      :strength-class="strengthClass"
      :strength-classes="strengthClasses"
      :strength-message="strengthMessage"
      :strength-messages="strengthMessages"
    >
      <div class="VuePassword__Meter" :title="strengthMessage">
        <svg
          v-for="i in 4"
          :key="i"
          :class="i <= strength ? strengthClass : ''"
          preserveAspectRatio="none"
          :data-strength="i"
          viewBox="0 0 2 1"
        >
          <rect width="100%" height="100%"></rect>
        </svg>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  data() {
    return {
      type: this.$attrs.type
    };
  },
  props: {
    classes: {
      type: [Object, Array, String]
    },
    disableStrength: Boolean,
    disableToggle: Boolean,
    strength: {
      type: Number,
      default: 0
    },
    /**
     * Classes to apply for the various strength levels from zxcvbn.
     */
    strengthClasses: {
      type: Array,
      default() {
        return [
          "VuePassword--very-weak",
          "VuePassword--weak",
          "VuePassword--medium",
          "VuePassword--good",
          "VuePassword--great"
        ];
      }
    },
    /**
     * Messages for the password strength values.
     */
    strengthMessages: {
      type: Array,
      default() {
        return [
          "Very Weak Password",
          "Weak Password",
          "Medium Password",
          "Strong Password",
          "Very Strong Password"
        ];
      }
    },
    value: String
  },
  computed: {
    inputElement() {
      if (this.$refs.input) {
        return this.$refs.input;
      }
      if (this.$el) {
        return this.$el.querySelector(".VuePassword__Container input");
      }
      return null;
    },
    listeners() {
      return Object.assign(
        {},
        this.$listeners,
        { input: this.updatePassword }
      );
    },
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    },
    strengthClass() {
      return (
        Array.isArray(this.strengthClasses) &&
        this.strengthClasses[this.strength]
      );
    },
    strengthMessage() {
      if (this.disableStrength) {
        return false;
      }
      return (
        Array.isArray(this.strengthMessages) &&
        this.strengthMessages[this.strength]
      );
    },
    toggleMessage() {
      return this.type === "password" ? "Show Password" : "Hide Password";
    }
  },
  watch: {
    strength(newValue, oldValue) {
      if (newValue != oldValue) {
        this.$emit("strength-updated", newValue);
      }
    }
  },
  mounted() {
    if (!this.$attrs.type) {
      this.togglePassword();
    }
  },
  methods: {
    /**
     * Get the current strength class based on the current strength score.
     *
     * @param  {Number} strength
     * @return {String}
     */
    getStrengthClass(strength) {
      if (this.strength > strength) {
        return this.strengthClasses[strength];
      }
      return "";
    },
    /**
     * Toggle the visibilty of the password.
     */
    togglePassword() {
      this.type = this.type === "password" ? "text" : "password";
      this.inputElement.setAttribute("type", this.type);
      this.inputElement.focus();
    },
    /**
     * Update the password input.
     *
     * @param  {String} password
     */
    updatePassword(event) {
      this.model = event.target.value;
    }
  }
};
</script>

<style>
.VuePassword__Container {
  align-items: center;
  display: flex;
  text-align: center;
  position: relative;
}

.VuePassword__Input {
  border: 1px solid #cbd5e0;
  border-radius: 0.125rem;
  display: block;
  padding: 0.5rem 0.75rem;
  width: 100%;
}

.VuePassword__Input--has-toggle {
  padding-right: 3rem;
}

.VuePassword__Toggle {
  align-items: center;
  background: none;
  border: none;
  bottom: 0;
  color: #718096;
  display: flex;
  margin-right: 0.75rem;
  outline: none;
  position: absolute;
  right: 0;
  top: 0;
}

.VuePassword__Toggle:hover {
  color: #4a5568;
  transition: color 0.3s ease-in-out;
}

.VuePassword__Toggle-Icon {
  fill: currentColor;
  pointer-events: none;
  width: 1rem;
}

.VuePassword__Meter {
  color: rgb(175, 175, 175);
  display: flex;
  height: 0.25rem;
  margin-left: -0.25%;
  margin-right: -0.25%;
  margin-top: 0.125rem;
}

.VuePassword__Meter svg {
  fill: currentColor;
  height: 100%;
  padding-left: 0.25%;
  padding-right: 0.25%;
  transition: all 0.6s ease-in-out;
  width: 25%;
}

.VuePassword--very-weak {
  color: rgb(175, 175, 175);
}

.VuePassword--weak {
  color: #e53e3e;
}

.VuePassword--medium {
  color: #fc8181;
}

.VuePassword--good {
  color: #68d391;
}

.VuePassword--great {
  color: #38a169;
}

.VuePassword__Message {
  cursor: default;
  font-size: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  text-align: right;
  text-transform: uppercase;
}
</style>
