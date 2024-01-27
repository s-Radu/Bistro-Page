let button = document.createElement("button");
export function scrollToTop() {
  button.className =
    "fixed bottom-12 right-4 z-10 w-10 h-10 rounded-full hover:shadow-md hover:shadow-white hidden";
  button.id = "scrollToTop";
  button.innerHTML = `
    <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                  class="fill-black dark:fill-white ">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                      <title>arrow-up-circle</title>
                      <desc>Created with Sketch Beta.</desc>
                      <defs> </defs>
                      <g stroke="none" stroke-width="1" fill-rule="evenodd" sketch:type="MSPage">
                          <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-360.000000, -1087.000000)">
                              <path
                                  d="M376,1117 C368.268,1117 362,1110.73 362,1103 C362,1095.27 368.268,1089 376,1089 C383.732,1089 390,1095.27 390,1103 C390,1110.73 383.732,1117 376,1117 L376,1117 Z M376,1087 C367.163,1087 360,1094.16 360,1103 C360,1111.84 367.163,1119 376,1119 C384.837,1119 392,1111.84 392,1103 C392,1094.16 384.837,1087 376,1087 L376,1087 Z M376.879,1096.46 C376.639,1096.22 376.311,1096.15 376,1096.21 C375.689,1096.15 375.361,1096.22 375.121,1096.46 L369.465,1102.12 C369.074,1102.51 369.074,1103.14 369.465,1103.54 C369.854,1103.93 370.488,1103.93 370.879,1103.54 L375,1099.41 L375,1110 C375,1110.55 375.447,1111 376,1111 C376.553,1111 377,1110.55 377,1110 L377,1099.41 L381.121,1103.54 C381.512,1103.93 382.145,1103.93 382.535,1103.54 C382.926,1103.14 382.926,1102.51 382.535,1102.12 L376.879,1096.46 L376.879,1096.46 Z"
                                  id="arrow-up-circle" sketch:type="MSShapeGroup"> </path>
                          </g>
                      </g>
                  </g>
              </svg>
    `;

  button.addEventListener("click", () => {
    smoothScrollToTop(1000);
  });

  window.addEventListener("scroll", () => {
    revealButton();
  });
  return button;
}

function smoothScrollToTop(duration) {
  const scrollHeight = window.scrollY;
  const scrollStep = Math.PI / (duration / 15);
  const cosParameter = scrollHeight / 2;
  let scrollCount = 0;
  let scrollMargin;
  let scrollInterval = setInterval(function () {
    if (window.scrollY != 0) {
      scrollCount = scrollCount + 1;
      scrollMargin =
        cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
      window.scrollTo(0, scrollHeight - scrollMargin);
    } else clearInterval(scrollInterval);
  }, 15);
}

function revealButton() {
  if (window.scrollY > 200) {
    button.classList.remove("animate-fadeOut");
    button.classList.remove("hidden");
  } else {
    button.addEventListener("animationend", () => {
      button.classList.add("hidden");
      button.classList.remove("animate-fadeOut");
    });
    button.classList.add("animate-fadeOut");
  }
}
