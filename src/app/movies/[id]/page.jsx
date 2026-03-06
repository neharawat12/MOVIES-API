const getMovie = async (id) => {

  const res = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
  const data = await res.json();
  return data;

};

const MovieDetail = async ({ params }) => {

  const movie = await getMovie(params.id);

  console.log(params)

  return (

    <div >

      <h1 >
        {movie.title}
      </h1>

      <img
        src={movie.image}
        alt={movie.title}
        className="w-[300px] mb-6"
      />


    </div>

  );
};

export default MovieDetail;