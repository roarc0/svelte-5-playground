<script lang="ts">
  type Light = "red" | "yellow" | "green";
  let currentLight: Light = $state("red");

  function nextLight() {
    switch (currentLight) {
      case "red":
      currentLight = "green";
        break;
      case "yellow":
      currentLight = "red";
        break;
      case "green":
      currentLight = "yellow";
        break;
    }
  }

  function lightColor(light: Light) {
    switch (light) {
      case "red":
        return "bg-red-500";
      case "yellow":
        return "bg-yellow-400";
      case "green":
        return "bg-green-500";
      default:
        return "bg-gray-700";
    }
  }

</script>

{#snippet light(color: Light)}
<div
class={`h-16 w-16 rounded-full mb-2 ${
  currentLight === color ? lightColor(color) : "bg-gray-700"
} transition-colors duration-300`}
></div>
{/snippet}

<div class="flex flex-col items-center justify-center">
  <button
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 w-1/4"
  onclick={nextLight}>Next light</button>

  <div class="flex flex-col items-center justify-center">
    <div class="bg-gray-800 p-4 rounded-lg">
      <div class="w-20 bg-black rounded-lg p-2">
        {@render light("red")}
        {@render light("yellow")}
        {@render light("green")}
      </div>
    </div>
  </div>
</div>

  <style>
    div {
      display: flex;
      flex-direction: column;
    }
  </style>
