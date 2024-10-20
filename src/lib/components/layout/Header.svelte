<script>
  import { page } from "$app/stores";

  import logo from "$lib/images/svelte-logo.svg";
  import github from "$lib/images/github.svg";
</script>

<header class="flex justify-between">
  <div class="w-12 h-12">
    <a
      href="https://kit.svelte.dev"
      class="flex items-center justify-center w-full h-full"
    >
      <img src={logo} alt="SvelteKit" class="w-8 h-8 object-contain" />
    </a>
  </div>

  <nav class="flex justify-center">
    <ul class="flex items-center list-none m-0 p-0 h-12 bg-white bg-opacity-70">
      <li
        class="relative h-full"
        aria-current={$page.url.pathname === "/" ? "page" : undefined}
      >
        <a
          href="/"
          class="flex items-center h-full px-2 text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-theme-1 transition-colors"
        >
          Home
        </a>
      </li>
      <li
        class="relative h-full"
        aria-current={$page.url.pathname === "/examples" ? "page" : undefined}
      >
        <a
          href="/examples"
          class="flex items-center h-full px-2 text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-theme-1 transition-colors"
        >
          Examples
        </a>
      </li>
      <li
        class="relative h-full"
        aria-current={$page.url.pathname === "/about" ? "page" : undefined}
      >
        <a
          href="/about"
          class="flex items-center h-full px-2 text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-theme-1 transition-colors"
        >
          About
        </a>
      </li>
    </ul>
  </nav>

  <div class="w-12 h-12">
    <a
      href="https://github.com/sveltejs/kit"
      class="flex items-center justify-center w-full h-full"
    >
      <img src={github} alt="GitHub" class="w-8 h-8 object-contain" />
    </a>
  </div>
</header>
