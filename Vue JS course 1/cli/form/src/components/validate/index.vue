<template>
  <div>
    <Form @submit="onSubmit" :validation-schema="formSchema">
      <div class="form-group">
        <label for="name">Name</label>
        <Field name="name" placeholder="Enter your name" class="form-control" />
      </div>
      <ErrorMessage name="name" as="div" v-slot="{ message }">
        <div class="alert alert-danger" role="alert">
          {{ message }}
        </div>
      </ErrorMessage>
      <div class="form-group">
        <label for="email">Email</label>
        <Field name="email" v-slot="{ field, errors, errorMessage }">
          <input
            type="text"
            name="email"
            class="form-control"
            v-bind="field"
            :class="{ 'is-invalid': errors.length !== 0 }"
          />
          <div
            class="alert alert-danger"
            role="alert"
            v-if="errors.length !== 0"
          >
            {{ errorMessage }}
          </div>
        </Field>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <Field name="message" v-slot="{ field, errors, errorMessage }">
          <textarea
            name="message"
            cols="2"
            rows="5"
            class="form-control"
            :class="{ 'is-invalid': errors.length !== 0 }"
            id="message"
            v-bind="field"
          ></textarea>
          <div
            class="alert alert-danger"
            role="alert"
            v-if="errors.length !== 0"
          >
            {{ errorMessage }}
          </div>
        </Field>
      </div>
      <hr />
      <button class="btn btn-primary">Submit</button>
    </Form>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      formSchema: {
        name: yup.string().required("Name is required"),
        email: yup.string().required("Email is required").email("Not valid"),
        message: yup.string().required("Message is required"),
      },
    };
  },
  methods: {
    validEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    onSubmit(values, { resetForm }) {
      console.log(values);
      resetForm();
    },
  },
};
</script>