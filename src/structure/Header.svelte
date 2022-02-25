<script lang="ts">
  import Timer from "../components/TimerButton.svelte";
</script>

<nav class="bg-gray-800">
  <div class="max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div
        class="flex items-center justify-center sm:items-stretch sm:justify-start"
      >
        <div class="sm:block sm:ml-6">
          <div class="flex space-x-4">
            <a
              target="_blank" rel="noopener noreferrer"
              href="https://static1.squarespace.com/static/5865e4d4f7e0ab0f0ee24ced/t/5f36e7352954a607ba5ebfd6/1597433664289/Collusion+Full+Rules.pdf"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >Official Rules</a
            >

            <Timer minutes={7} />
            <Timer minutes={6} />
            <Timer minutes={3} />
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
