<script lang="ts">
import Navlink from "../components/Navlink.svelte";
import Timer from "../components/TimerButton.svelte";

let isMobileMenuHidden = true;
</script>

<nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"
          on:click="{() => isMobileMenuHidden = !isMobileMenuHidden}"
        >
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class:hidden="{!isMobileMenuHidden}" class:block="{isMobileMenuHidden}" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class:hidden="{isMobileMenuHidden}" class:block="{!isMobileMenuHidden}" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center text-white">
          timetoduel.app
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <Navlink to="/" extraClasses="text-sm">Home</Navlink>
            <!-- <Navlink to="/scoring" extraClasses="text-sm">Scoring</Navlink> -->

            <Timer minutes={7} extraClasses="text-sm" />
            <Timer minutes={6} extraClasses="text-sm" />
            <Timer minutes={3} extraClasses="text-sm"/>
             <a href="https://static1.squarespace.com/static/5865e4d4f7e0ab0f0ee24ced/t/5f36e7352954a607ba5ebfd6/1597433664289/Collusion+Full+Rules.pdf"
              target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium text-sm">
              Official Rules
            </a>
          </div>
        </div>
      </div>
      <!-- Heroicon name: outline/bell -->
      <!-- <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span class="sr-only">View notifications</span>
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>

        
      </div> -->
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden" id="mobile-menu" class:hidden="{isMobileMenuHidden}">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <Navlink to="/" extraClasses="block text-base">Home</Navlink>
      <!-- <Navlink to="/scoring" extraClasses="block text-base">Scoring</Navlink> -->
        <Timer minutes={7} extraClasses="block text-base"/>
        <Timer minutes={6} extraClasses="block text-base"/>
        <Timer minutes={3} extraClasses="block text-base"/>
        <a href="https://drive.google.com/file/d/1b4QefBSPDVy5aSp5Z-uFNlm-vNOd3kJ_/view"
          target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium block text-base">
          Official Rules
        </a>
    </div>
  </div>
</nav>

