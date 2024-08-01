export const Description = () => {
  return (
    <section className=" py-4 px-4 sm:px-8 md:px-16 xl:px-36 2xl:px-96">
      <div className=" grid xl:grid-cols-2 gap-4 ">
        <img
          src="/img/description.jpeg"
          alt="Products marketplace"
          className=" rounded-xl shadow-2xl"
        />
        <div>
          <h2 className=" sm:text-3xl text-bottle-grenn font-bold text-center xl:text-start">
            Bring the future today
          </h2>
          <p className=" py-2 sm:text-xl text-center text-xs xl:text-start text-killarney">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            odio debitis accusantium ex voluptates enim sed, blanditiis dolorem
            quo! Sapiente at maiores dolores quos dicta tempore, eos vel
            delectus quaerat!
          </p>
        </div>
      </div>
    </section>
  );
};
