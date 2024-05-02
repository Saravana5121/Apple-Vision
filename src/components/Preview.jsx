import previewImg from "../assets/hero.png";
import previewImg1 from "../assets/preview.jpg";

const Preview = () => {
  return (
    <div className="lg:mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        A
        <span className="bg-gradient-to-r from-sky-500 to-blue-800 text-transparent bg-clip-text">
          {" "}
          Preview{" "}
        </span>
        for your Review
      </h2>
      <div className="mt-10 mb-5">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <img src={previewImg} alt="preview" className="w-[50rem]" />
          <p className="text-sm text-neutral-500 text-center m-5">
            With Apple Vision Pro, you have an infinite canvas that transforms
            how you use the apps you love. Arrange apps anywhere and scale them
            to the perfect size, making the workspace of your dreams a reality —
            all while staying present in the world around you. Browse the web in
            Safari, create a to‑do list in Notes, chat in Messages, and
            seamlessly move between them with a glance. You can even bring your
            Mac workflows into Apple Vision Pro wirelessly with Mac Virtual
            Display.
          </p>
          <img src={previewImg1} alt="preview" />
        </div>
      </div>
    </div>
  );
};

export default Preview;
