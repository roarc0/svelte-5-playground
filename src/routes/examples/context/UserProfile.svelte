<script lang="ts">
  import { type User } from "./user.svelte.js";

  let { user }: { user: User } = $props();
</script>

<div>
  <h2 class="text-xl font-semibold">My Profile</h2>
  <p class="text-gray-500 text-sm">Username: {user.username}</p>
  <p class="text-gray-500 text-sm">Email: {user.email}</p>
</div>
