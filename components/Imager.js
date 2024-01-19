"use client";

import Caro from "./Caro";

const Slides = ["/Slides/1.png", "/Slides/1.png"];

const Imager = () => {
  return (
    // Choose either the main structure or the div structure based on your requirements
    // Uncomment the relevant code block and delete the other one

    // Option 1: Use the main structure
    // <main className="App">
    //   <div className="max-w-sm mx-auto">
    //     <Caro autoSlide={true}>
    //       {Slides.map((s) => (
    //         <img src={s} key={s} alt={`slide-${s}`} />
    //       ))}
    //     </Caro>
    //   </div>
    // </main>

    // Option 2: Use the div structure
    <div>
      <Caro autoSlide={true}>
        {Slides.map((s) => (
          <img src={s} key={s} alt={`slide-${s}`} />
        ))}
      </Caro>
    </div>
  );
};

export default Imager;
