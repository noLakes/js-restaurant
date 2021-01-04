
const page = (function() {
  const main = document.querySelector('.main-container');

  return {
    newElement(type, className, inner=null) {
      const el = document.createElement(type);
      el.classList.add(className);
      if(inner) el.innerHTML = inner;
      return el;
    },

    main : main,

  }
})()

export default page;