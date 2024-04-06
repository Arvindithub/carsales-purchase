<!-- src/App.svelte -->

<script>
  import { Router, Route } from '@sveltejs/kit';
  import Nav from './components/Nav.svelte'; // Assuming you have a Nav component for navigation

  // Import Login and Signup components
  import Login from './components/Auth/Login.svelte';
  import Signup from './components/Auth/Signup.svelte';
</script>

<Router>
  <Nav /> <!-- Include navigation component -->
  
  <!-- Define routes for Login and Signup -->
  <Route path="/login" component={Login} />
  <Route path="/signup" component={Signup} />

  <!-- Add more routes as needed -->
</Router>

<style>
  /* Add global styles if needed */
</style>
