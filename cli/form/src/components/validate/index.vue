<template>
  <div>
    <Form>
      <div class="form-group">
        <label for="name">Name</label>
        <Field
          name="name"
          :rules="validateName"
          placeholder="Enter your name"
          class="form-control"
        />
      </div>
      <ErrorMessage name="name" as="div" v-slot="{ message }">
        <div class="alert alert-danger" role="alert">
          {{ message }}
        </div>
      </ErrorMessage>
      <div class="form-group">
        <label for="email">Email</label>
        <Field name="email" :rules="validateEmail" v-slot="{ field, errors }">
          <input
            type="text"
            name="email"
            class="form-control"
            v-bind="field"
            :class="{ 'is-invalid': errors.length != 0 }"
          />
        </Field>
      </div>
      <ErrorMessage name="email" as="div" v-slot="{ message }">
        <div class="alert alert-danger" role="alert">
          {{ message }}
        </div>
      </ErrorMessage>
      <hr />
      <button class="btn btn-primary">Submit</button>
    </Form>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  methods: {
    isRequired(value) {
      if (!value) {
        return "Field is required";
      }
      return true;
    },
    validateName(value) {
      if (value && value.trim()) {
        return true;
      } else {
        return "Name field is required";
      }
    },
    validateEmail(value) {
      if (!value) {
        return "Email field is required"
      }
      if (!this.validEmail(value)) {
        return "Bad Email";
      }
      return true;
    },
    validEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>