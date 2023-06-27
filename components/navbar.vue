<template>
    <nav
      class="flex fixed w-full items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10"
    >
      <div class="flex items-center">
        <button class="mr-2" aria-label="Open Menu" @click="drawer">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-8 h-8"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <!-- <img src="/logos/fox-hub.png" alt="Logo" class="h-auto w-24 m-auto text-center px-2" /> -->
      </div>
      <!-- <div class="flex items-center">
        <div class="hidden md:block md:flex md:justify-between md:bg-transparent">
          <button
            title="Wishlist"
            class="flex items-center p-3 font-medium mr-2 text-center bg-gray-300 rounded  hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
          >
            <svg
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              class="w-6 h-6 mr-2"
            >
              <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
            </svg>
            <span>Wishlist</span>
          </button>
          <button
            class="flex items-center p-3 font-medium mr-2 text-center bg-gray-300 rounded  hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
          >
            <svg
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
          </button>
          <button
            class="flex items-cente p-3 font-medium mr-2 text-center bg-gray-300 rounded  hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
          >
            <svg
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>
          <a
            rel="noopener"
            href="https://www.buymeacoffee.com/fayazahmed"
            target="_blank"
            title="Help me keep this site alive"
            class="flex items-center  px-3 py-3 font-medium mr-2 text-center bg-orange-600 rounded text-white hover:bg-orange-700 focus:outline-none focus:bg-orange-400"
          >
            <img
              class="mr-2 h-6 w-auto"
              src="/sidebar/bmc.svg"
              alt="Buy Me Coffee"
            />
            <p class="font-bold">
              Buy me a Coffee
            </p></a
          >
        </div>
      </div> -->
  
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div
          @keydown.esc="isOpen = false"
          v-show="isOpen"
          class="z-10 fixed inset-0 transition-opacity"
        >
          <div
            @click="isOpen = false"
            class="absolute inset-0 bg-black opacity-50"
            tabindex="0"
          ></div>
        </div>
      </transition>
      <aside
        class="transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <span
          @click="isOpen = false"
          class="flex w-full items-center p-4 border-b"
        >
          <!--<img src="/logos/fox-hub.png" alt="Logo" class="h-auto w-32 mx-auto" />-->
        </span>
        <span
          @click="isOpen = false"
          class="flex items-center p-4 hover:bg-indigo-500 hover:text-white "
          ><span class="mr-2">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
          </span>
          <span>Home</span></span
        >
        <nuxt-link to="/learning">
          <span
          @click="isOpen = false"
          class="flex items-center p-4 hover:bg-indigo-500 hover:text-white "
          ><span class="mr-2">
            
              <svg 
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.4"
              viewBox="0 0 30 30"
              class="w-5 h-5"
              
              xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M23.3 8.40007L21.82 6.40008C21.7248 6.27314 21.6008 6.17066 21.4583 6.10111C21.3157 6.03156 21.1586 5.99693 21 6.00008H11.2C11.0555 6.00007 10.9128 6.03135 10.7816 6.09177C10.6504 6.15219 10.5339 6.24031 10.44 6.35007L8.71998 8.35008C8.57227 8.53401 8.49435 8.76424 8.49998 9.00008V16.2901C8.50262 18.0317 9.19567 19.7013 10.4272 20.9328C11.6588 22.1644 13.3283 22.8574 15.07 22.8601H16.93C18.6716 22.8574 20.3412 22.1644 21.5728 20.9328C22.8043 19.7013 23.4973 18.0317 23.5 16.2901V9.00008C23.5 8.7837 23.4298 8.57317 23.3 8.40007Z" fill="#FFCC80"></path> <path d="M29.78 28.38L25.78 23.38C25.664 23.2321 25.5086 23.1198 25.3318 23.0562C25.1549 22.9925 24.9637 22.98 24.78 23.02L16 25L7.21999 23C7.03632 22.96 6.84507 22.9725 6.6682 23.0362C6.49133 23.0998 6.33598 23.2121 6.21999 23.36L2.21999 28.36C2.10392 28.5064 2.03116 28.6823 2.00995 28.8679C1.98874 29.0534 2.01993 29.2413 2.09999 29.41C2.17815 29.5839 2.3044 29.7319 2.46385 29.8364C2.62331 29.9409 2.80933 29.9977 2.99999 30H29C29.1885 29.9995 29.373 29.9457 29.5322 29.8448C29.6914 29.744 29.8189 29.6002 29.9 29.43C29.98 29.2613 30.0112 29.0734 29.99 28.8879C29.9688 28.7023 29.8961 28.5264 29.78 28.38Z" fill="#01579B"></path> <path d="M29.29 6.00003L16.29 2.00003C16.0999 1.95002 15.9001 1.95002 15.71 2.00003L2.71 6.00003C2.49742 6.06422 2.31226 6.19735 2.1837 6.37841C2.05515 6.55947 1.99052 6.77817 2 7.00003C1.9917 7.22447 2.0592 7.44518 2.19163 7.62659C2.32405 7.80799 2.5137 7.93954 2.73 8.00003L15.73 11.6C15.906 11.6534 16.094 11.6534 16.27 11.6L29.27 8.00003C29.4863 7.93954 29.6759 7.80799 29.8084 7.62659C29.9408 7.44518 30.0083 7.22447 30 7.00003C30.0095 6.77817 29.9448 6.55947 29.8163 6.37841C29.6877 6.19735 29.5026 6.06422 29.29 6.00003Z" fill="#01579B"></path> <path d="M11.22 6C11.0756 5.99999 10.9328 6.03127 10.8016 6.09169C10.6704 6.15211 10.5539 6.24023 10.46 6.35L8.74 8.35C8.58509 8.53114 8.49998 8.76166 8.5 9V16.29C8.50264 18.0317 9.19569 19.7012 10.4272 20.9328C11.6588 22.1643 13.3283 22.8574 15.07 22.86H16V6H11.22Z" fill="#FFE0B2"></path> <path d="M7.21999 23C7.03632 22.96 6.84507 22.9725 6.6682 23.0362C6.49133 23.0998 6.33598 23.2121 6.21999 23.36L2.21999 28.36C2.10392 28.5064 2.03116 28.6823 2.00995 28.8679C1.98874 29.0534 2.01993 29.2413 2.09999 29.41C2.17815 29.5839 2.3044 29.7319 2.46385 29.8364C2.62331 29.9409 2.80933 29.9977 2.99999 30H16V25L7.21999 23Z" fill="#0277BD"></path> <path d="M15.71 2.00002L2.71 6.00002C2.49742 6.06422 2.31226 6.19734 2.1837 6.3784C2.05515 6.55947 1.99052 6.77817 2 7.00002C1.9917 7.22447 2.0592 7.44518 2.19163 7.62658C2.32405 7.80799 2.5137 7.93954 2.73 8.00002L15.73 11.6C15.8194 11.6146 15.9106 11.6146 16 11.6V2.00002C15.9039 1.98469 15.8061 1.98469 15.71 2.00002Z" fill="#0277BD"></path> <path d="M2.73 8.00003L8.5 9.56003V16.29C8.50264 18.0317 9.19569 19.7013 10.4272 20.9328C11.6588 22.1643 13.3283 22.8574 15.07 22.86H16.93C18.6717 22.8574 20.3412 22.1643 21.5728 20.9328C22.8043 19.7013 23.4974 18.0317 23.5 16.29V9.56003L29.27 8.00003C29.4863 7.93954 29.6759 7.80799 29.8084 7.62659C29.9408 7.44518 30.0083 7.22447 30 7.00003C30.0095 6.77817 29.9448 6.55947 29.8163 6.37841C29.6877 6.19735 29.5026 6.06422 29.29 6.00003L16.29 2.00003C16.0999 1.95002 15.9001 1.95002 15.71 2.00003L2.71 6.00003C2.49742 6.06422 2.31226 6.19735 2.1837 6.37841C2.05515 6.55947 1.99052 6.77817 2 7.00003C1.9917 7.22447 2.0592 7.44518 2.19163 7.62659C2.32405 7.80799 2.5137 7.93954 2.73 8.00003ZM21.5 16.29C21.4974 17.5013 21.015 18.6621 20.1586 19.5186C19.3021 20.3751 18.1412 20.8574 16.93 20.86H15.07C13.8588 20.8574 12.6979 20.3751 11.8414 19.5186C10.985 18.6621 10.5026 17.5013 10.5 16.29V10.11L15.73 11.56C15.906 11.6134 16.094 11.6134 16.27 11.56L21.5 10.11V16.29ZM16 4.05003L25.44 7.00003L16 9.56003L6.56 7.00003L16 4.05003Z" fill="#263238"></path> <path d="M25.78 23.38C25.664 23.2321 25.5086 23.1198 25.3318 23.0562C25.1549 22.9925 24.9637 22.98 24.78 23.02L16 25L7.21999 23C7.03632 22.96 6.84507 22.9725 6.6682 23.0362C6.49133 23.0998 6.33598 23.2121 6.21999 23.36L2.21999 28.36C2.10392 28.5064 2.03116 28.6823 2.00995 28.8679C1.98874 29.0534 2.01993 29.2413 2.09999 29.41C2.17815 29.5839 2.3044 29.7319 2.46385 29.8364C2.62331 29.9409 2.80933 29.9977 2.99999 30H29C29.1885 29.9995 29.373 29.9457 29.5322 29.8448C29.6914 29.744 29.8189 29.6002 29.9 29.43C29.98 29.2613 30.0112 29.0734 29.99 28.8879C29.9688 28.7023 29.8961 28.5264 29.78 28.38L25.78 23.38ZM5.07999 28L7.38999 25.11L15.78 27C15.9251 27.0299 16.0748 27.0299 16.22 27L24.61 25.13L26.92 28H5.07999Z" fill="#263238"></path> </g></svg>
            <!-- <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg> -->
          </span>
          <span>Learning</span></span></nuxt-link>
        <nuxt-link to="/en">
          <span
          @click="isOpen = false"
          class="flex items-center p-4 hover:bg-indigo-500 hover:text-white "
          ><span class="mr-2">
            
              <svg 
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              
              class="w-6 h-6"
              viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M852.6 168.7v56.9h-81.3v-56.9h-68.7v56.9h-81.3v-56.9h-68.6v56.9h-81.4v-56.9h-68.6v56.9h-81.3v-56.9h-68.7v56.9h-81.3v-56.9h-51.5v791.8h784.2V168.7z" fill="#773C0B"></path><path d="M504.3 63.9h15.5v104.7h-15.5z" fill="#7C3C0B"></path><path d="M560.2 268.5V139.4h-96.4v129.1h-96.3v334.1h289V268.5z" fill="#934D10"></path><path d="M769.5 361.8v43H708v-43h-51.9v43h-61.4v-43h-52v43h-61.4v-43h-51.9v43h-61.5v-43H316v43h-61.5v-43h-39v598.7h593V361.8z" fill="#B76C1A"></path><path d="M632.1 553.8H391.9c-23 0-41.8 18.8-41.8 41.8v364.9h323.8V595.6c0-23-18.8-41.8-41.8-41.8z" fill="#DC8C3C"></path><path d="M350.1 595.6v364.9H512V553.8H391.9c-23 0-41.8 18.8-41.8 41.8z" fill="#D67729"></path><path d="M526.1 749.8h-28.2c-5.8 0-10.5-4.7-10.5-10.5v-10c0-5.8 4.7-10.5 10.5-10.5h28.2c5.8 0 10.5 4.7 10.5 10.5v10c0 5.8-4.7 10.5-10.5 10.5z" fill="#494847"></path><path d="M519.7 63.5h79.2v58.3h-79.2z" fill="#F35428"></path><path d="M570.8 109.7l-12-6.8-12.3 6.1 2.7-13.5-9.5-9.9 13.7-1.5 6.4-12.1 5.7 12.5 13.5 2.4-10.1 9.2z" fill="#F1B23B"></path></g></svg>
            <!-- <svg
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
            </svg> -->
          </span>
          <span>En</span></span></nuxt-link>
        <!-- <span
          @click="isOpen = false"
          class="flex items-center p-4 hover:bg-indigo-500 hover:text-white "
          ><span class="mr-2">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </span>
          <span>About</span></span
        >
        <span
          @click="isOpen = false"
          class="flex items-center p-4 hover:bg-indigo-500 hover:text-white "
          ><span class="mr-2">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </span>
          <span>Contact</span></span
        > -->
        <!-- <div class="fixed bottom-0 w-full">
          <button
            class="flex items-center p-4 text-white bg-blue-500 hover:bg-blue-600 w-full"
          >
            <svg
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              class="h-6 w-6 mr-2"
            >
              <path
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              ></path>
            </svg>
            <span>Share</span>
          </button>
          <a
            rel="noopener"
            class="flex items-center p-4 bg-orange-700 text-white "
            href="https://www.buymeacoffee.com/fayazahmed"
            target="_blank"
          >
            <img
              class="mr-2 h-8 w-auto"
              src="@/sidebar/bmc.svg"
              alt="Buy Me Coffee"
            />
            <p>
              <span class="font-bold">Buy me a Coffee</span>
              <br />
              <span class="text-sm text-white">Help me keep this site alive</span>
            </p>
          </a>
        </div> -->
      </aside>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      drawer() {
        this.isOpen = !this.isOpen;
      }
    },
    watch: {
      isOpen: {
        immediate: true,
        handler(isOpen) {
          if (process.client) {
            if (isOpen) document.body.style.setProperty("overflow", "hidden");
            else document.body.style.removeProperty("overflow");
          }
        }
      }
    },
    mounted() {
      document.addEventListener("keydown", e => {
        if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
      });
    }
  };
  </script>