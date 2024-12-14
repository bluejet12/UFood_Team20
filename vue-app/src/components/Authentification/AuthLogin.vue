<!-- src/components/Authentification/AuthLogin.vue -->
<template>
  <div class="container mt-5">
    <div class="row justify-content-center align-items-center">
      <!-- Form Column -->
      <div class="col-md-6">
        <div class="card shadow-sm border-0 rounded-lg">
          <div class="card-header text-center text-white py-4" style="background-color: #90CAF9;">
            <h2 class="mb-0">Login to UFood</h2>
          </div>
          <div class="card-body">
            <form @submit.prevent="login">
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
              <button type="submit" class="btn btn-primary w-100">Login</button>
            </form>
            <p class="text-danger mt-3">{{ error }}</p>
            <!-- Ajout du bouton de connexion avec Google -->
            <div class="text-center mt-3">
              <button type="button" class="btn btn-outline-dark w-100" @click="loginWithGoogle">
                <img src="@/assets/google-logo.png.png" alt="Google Logo" style="width:20px; margin-right:10px;">
                Login with Google
              </button>
            </div>

            <div class="text-center mt-3">
              <p>No account?
                <a href="#" @click.prevent="navigateToRegister" class="text-primary">Create one</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Image Column -->
      <div class="col-md-6 d-none d-md-block">
        <img src="@/assets/Login.png" alt="Login Illustration" class="img-fluid rounded-end" style="object-fit: cover; height: 100%; width: 100%;" />
      </div>
    </div>
  </div>
</template>

<script>
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../firebaseConfig'; // Adjust the path as needed

export default {
  name: 'AuthLogin',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  created() {
    console.log('AuthLogin component created'); // Log to verify component loading
  },
  mounted() {
    console.log('AuthLogin component mounted'); // Another log for mounting confirmation
  },
  methods: {
    async login() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push('/'); // Redirect to home after login
      } catch (error) {
        this.error = error.message;
        console.error('Login error:', error); // Log the error for debugging
      }
    },
    // Méthode pour se connecter via Google
    async loginWithGoogle() {
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);

        this.$router.push('/');
      } catch (error) {
        this.error = error.message;
        console.error('Google Login Error:', error);
      }
    },
    navigateToRegister() {
      this.$router.push('/register'); // Navigate to the registration page
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
