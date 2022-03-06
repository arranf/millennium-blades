<script>
  import { Link } from "svelte-navigator";

  export let to = "";
  export let extraClasses = "";

  function getProps({ _location, href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

    if (isActive) {
      return { class: `text-white bg-gray-900 hover:text-white px-3 py-2 rounded-md font-medium ${extraClasses}` };
    }
    return {class: `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium ${extraClasses}`};
  }
</script>

<Link to="{to}" getProps="{getProps}">
  <slot />
</Link>
