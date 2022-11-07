<template>
  <form @submit.prevent="submitForm">
    <div class="row">
      <div class="col-xl-12">
        <h1>Contact us</h1>
        <hr />

        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            class="form-control"
            v-model.lazy="formData.name"
          />
          {{ formData.name }}
        </div>

        <div class="form-group">
          <label for="email">email</label>
          <input
            type="email"
            id="email"
            class="form-control"
            v-model="formData.email"
          />
        </div>

        <div class="form-group">
          <label for="subject">Subject</label>
          <input
            type="text"
            id="subject"
            class="form-control"
            v-model="formData.subject"
          />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            class="form-control"
            rows="3"
            id="message"
            v-model="formData.message"
          ></textarea>
        </div>

        <div class="form-group">
          <h5>Want more spam ?</h5>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="Newsletter"
              id="newsletter"
              v-model="formData.spam"
            />
            <label class="form-check-label" for="newsletter">
              Newsletter
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="Promotions"
              id="promotions"
              v-model="formData.spam"
            />
            <label class="form-check-label" for="newsletter">
              Promotions
            </label>
          </div>
        </div>

        <div class="form-group">
          <h5>What are you ?</h5>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="human"
              value="human"
              name="origin"
              v-model="formData.gender"
            />
            <label class="form-check-label" for="human"> Human </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="alien"
              value="alien"
              name="origin"
              v-model="formData.gender"
            />
            <label class="form-check-label" for="alien"> Alien </label>
          </div>
        </div>

        <div class="form-group">
          <label for="country">Country</label>
          <select class="form-control" id="country" v-model="formData.country">
            <option value="">Select Country</option>
            <option v-for="(item, index) in countries" :key="index+item" :value="item">{{ item }}</option>
          </select>
        </div>

        <button class="btn btn-primary">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      countries: [
        "Pakistan",
        "India",
        "USA",
        "UK",
        "UAE",
        "China",
        "Brazil",
        "Spain",
        "Japan",
      ],
      formData: {
        name: "hamza",
        email: "hamza@gmail.com",
        subject: "blah blah",
        message: "bsdfb",
        // One way to handle checkboxes
        // newsletter: false,
        // promotions: false,
        // 2nd way is to make array
        spam: [],
        gender: "alien",
        country: ''
      },
    };
  },
  methods: {
    submitForm() {
      console.log(this.formData);
    },
  },
};
</script>