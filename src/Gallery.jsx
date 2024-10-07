import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAppContext } from "./context";

const URL = `https://api.unsplash.com//search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchValue } = useAppContext();

  const { data, isPending, isError } = useQuery({
    queryKey: ["photos", searchValue],
    queryFn: async () => {
      const result = await axios.get(`${URL}&query=${searchValue}`);
      return result.data;
    },
  });

  if (isPending) {
    return (
      <section className='image-container'>
        <h3>Loading...</h3>
      </section>
    );
  }
  if (isError) {
    return (
      <section className='image-container'>
        <h3>There is an error...</h3>
      </section>
    );
  }

  if (data?.results?.length < 1) {
    return (
      <section className='image-container'>
        <h4>No photos found...</h4>
      </section>
    );
  }

  return (
    <section className='image-container'>
      {data.results.map(({ id, alt_description, urls }) => {
        return (
          <img
            src={urls?.small}
            alt={alt_description}
            key={id}
            className='img'
          />
        );
      })}
    </section>
  );
};
export default Gallery;
