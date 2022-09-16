const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (
      entry.isIntersecting &&
      entry.target.classList.contains("scroll-hidden")
    ) {
      console.log(entry)
      entry.target.classList.remove("scroll-hidden")
      entry.target.classList.add("scroll-show")
    }
  })
})

const hiddenElements = document.querySelectorAll(".scroll-hidden")
hiddenElements.forEach((element) => observer.observe(element))
