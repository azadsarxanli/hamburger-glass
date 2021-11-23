const tl = gsap.timeline();
const hamburger = document.querySelector(".content-1 .hamburger");
const hamburger_2 = document.querySelector(".content-2 .hamburger");
hamburger.addEventListener("click", () => {
  hamburger_2.classList.add("class");
  tl.to(".content-1", 0.5, {
    x: 60,
    y: 60,
  })
    .to(".content-1", 0.8, {
      xPercent: -130,
    })
    .to(".content-1 .hamburger", 0.8, { opacity: 0 })
    .to(
      ".content-1",
      0.8,
      {
        zIndex: -2,
        x: 0,
        y: 0,
      },
      "-=0.9"
    )
    .to(
      ".content-1",
      0.8,
      {
        xPercent: 0,
      },
      "-=0.1"
    )
    .to(".content-2", 0.1, { zIndex: 1 }, "-=1")
    .fromTo(
      ".box",
      1.3,
      { y: -68, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
      }
    );
});

hamburger_2.addEventListener("click", () => {
  //   tl.to(".content-1", 0.5, {
  //     x: 60,
  //     y: 60,
  //   })
  //     .to(".content-1", 0.8, {
  //       xPercent: -130,
  //     })
  //     .to(".content-1 .hamburger", 0.8, { opacity: 0 })
  //     .to(
  //       ".content-1",
  //       0.8,
  //       {
  //         zIndex: -2,
  //         x: 0,
  //         y: 0,
  //       },
  //       "-=0.9"
  //     )
  //     .to(
  //       ".content-1",
  //       0.8,
  //       {
  //         xPercent: 0,
  //       },
  //       "-=0.1"
  //     )
  //     .to(".content-2", 0.1, { zIndex: 1 }, "-=1")
  //     .fromTo(
  //       ".box",
  //       1.3,
  //       { y: -68, opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         stagger: 0.3,
  //       }
  //     );
  if (hamburger_2.classList.contains("class")) {
    console.log("saa");
  }

  tl.fromTo(
    ".box",
    1.3,
    { y: 0, opacity: 1 },
    { y: -68, opacity: 0, stagger: 0.3 }
  ).to(".content-2", 0.1, { zIndex: -2 });
});
