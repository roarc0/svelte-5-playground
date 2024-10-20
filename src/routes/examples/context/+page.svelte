<script lang="ts">
  import { setContext } from "svelte";
  import UserProfile from "./UserProfile.svelte";
  import { type User, createUserState } from "./user.svelte.js";

  let user: User = createUserState({
    id: 1,
    username: "unicorn42",
    email: "unicorn42@example.com",
  });
  setContext("user", user);
</script>

{#if user === undefined}
  <p>Loading...</p>
{:else}
  <h1>Welcome back, {user.username}</h1>
  <UserProfile {user} />
{/if}

<button
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
  onclick={() => (user.username = "roarc")}
>
  Update username to roarc
</button>
