<!-- src/components/Authentification/AuthRegister.vue -->
<template>
  <div class="container mt-5">
    <div class="row justify-content-center align-items-center">
      <!-- Form Column -->
      <div class="col-md-6">
        <div class="card shadow-sm border-0 rounded-lg">
          <div class="card-header text-center text-white py-4" style="background-color: #90CAF9;">
            <h2 class="mb-0">Register to UFood</h2>
          </div>
          <div class="card-body">
            <form @submit.prevent="register">
              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input
                    v-model="name"
                    type="text"
                    id="name"
                    class="form-control"
                    placeholder="Enter your name"
                    required
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                    v-model="email"
                    type="email"
                    id="email"
                    class="form-control"
                    placeholder="Enter your email"
                    required
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                    v-model="password"
                    type="password"
                    id="password"
                    class="form-control"
                    placeholder="Enter your password"
                    required
                />
              </div>
              <button type="submit" class="btn btn-primary w-100">Register</button>
            </form>
            <p class="text-danger mt-3">{{ error }}</p>
            <div class="text-center mt-3">
              <p>Already have an account?
                <a href="#" @click.prevent="navigateToLogin" class="text-primary">Log in</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Image Column -->
      <div class="col-md-6 d-none d-md-block">
        <img src="@/assets/Register.png" alt="Illustration" class="img-fluid rounded-end" style="object-fit: cover; height: 100%; width: 100%;" />
      </div>
    </div>
  </div>
</template>

<script>
import auth from "@/api/auth";

export default {
  name: 'AuthRegister',
  data() {
    return {
      name: '', // Added name field
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    async register() {
      try {
        const result = await auth.signup(this.name, this.email, this.password);
        console.log("Signup successful:", result);
        this.$router.push('/'); // Redirect to home or another page
      } catch (error) {
        this.error = error.message || "An unexpected error occurred.";
        console.error("Error during registration:", error);
      }
    },
    navigateToLogin() {
      this.$router.push('/login'); // Navigate to the login page
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 900px;
}

.card {
  border-radius: 12px;
}

.card-header {
  background-color: #90CAF9; /* Soft blue color */
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.img-fluid {
  max-width: 100%;
  height: auto;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  object-fit: cover;
}

.form-control {
  border-radius: 8px;
  border: 1px solid #ddd; /* Light border to keep consistency with design */
}

.btn-primary {
  background-color: #90CAF9; /* Matching soft blue color */
  border: none;
  transition: all 0.3s;
}

.btn-primary:hover {
  background-color: #64b5f6;
}
</style>
