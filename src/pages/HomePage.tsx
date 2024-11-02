export const HomePage = () => {
  return (
    <section className="flex flex-col gap-3 items-center md:flex-row">
      <div className="flex-1">
      <h1 className="text-6xl font-bold text-accent text-center mb-5">
        StarWeb
      </h1>
      <p className="text-main-text custom font-bold text-lg lg:text-2xl">
        Explore the fascinating Star Wars universe in an interactive and
        user-friendly format. Browse through characters, discover the starships
        they travel on, and learn about the films they appear in. Use our visual
        graph to better understand the connections between heroes, starships,
        and events, and dive deeper into the epic world of Star Wars.
      </p>
      </div>
      <div className="h-full w-full flex-1">
        <img src="img/image.png" alt=""  className="w-full h-full"/>
      </div>
    </section>
  );
};
