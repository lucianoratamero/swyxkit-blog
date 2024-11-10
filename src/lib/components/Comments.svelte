<script>
// @ts-nocheck

let isOpen = false;
</script>

<div class="comments-section w-full mt-8">
  <!--{#if !isOpen}-->
  <!--  <button-->
  <!--    on:click={() => isOpen = true}-->
  <!--    class="w-1/2 block mx-auto rounded-lg p-1 text-zinc-800 transition-all bg-cyan-200 dark:text-zinc-200 dark:bg-cyan-800 sm:px-3 sm:py-2">-->
  <!--    Load comments-->
  <!--  </button>-->
  <!--{:else}-->
    <script src="https://utteranc.es/client.js"
            repo="lucianoratamero/swyxkit-blog"
            issue-term="title"
            label="Comment"
            theme="preferred-color-scheme"
            crossorigin="anonymous"
            async>
    </script>
  <!--{/if}-->
</div>
