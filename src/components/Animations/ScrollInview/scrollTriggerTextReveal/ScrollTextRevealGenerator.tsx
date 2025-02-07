const ScrollTRiggeredTextRevealGenerator = () => {
  let text = "Hello World!";
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <h1 className="text-4xl font-bold mb-10">
        Scroll down to see the effect 👇
      </h1>

      <div className="text-4xl font-bold tracking-widest">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="letter"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollTRiggeredTextRevealGenerator;
