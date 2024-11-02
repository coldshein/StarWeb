import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getAllCharacters } from "../store/slices/characterSlice";
import { Loader } from "./Loader/Loader";
import { CharacterCard } from "./CharacterCard";
import { ErrorMessage } from "./ErrorMessage";

export const CharacterList = () => {
  const dispatch = useAppDispatch();
  const { items, isLoading, isError, next } = useAppSelector(
    (state) => state.charactersList.characters
  );
  const [page, setPage] = useState(1);

  // load more event
  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  // fetching all characters
  useEffect(() => {
    dispatch(getAllCharacters(page));
  }, [page, dispatch]);

  return (
    <section className="flex flex-col min-h-[80vh] h-full">
      {isLoading && items.length === 0 ? (
        <div className="flex items-center justify-center h-[80vh] w-full">
          <Loader />
        </div>
      ) : isError ? (
        <ErrorMessage title={isError} />
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {items.map((character) => (
            <li
              key={character.id + character.birth_year}
              className="rounded-md bg-gradient-to-br from-[#090d34] to-[#ff8c0026]"
            >
              <CharacterCard character={character} />
            </li>
          ))}
        </ul>
      )}
      {next ? (
        isLoading ? (
          <div
            className="flex items-center justify-center h-[200px] w-full"
            aria-live="polite"
          >
            <Loader />
          </div>
        ) : (
          <button
            onClick={handleLoadMore}
            className="bg-accent text-primary-bg px-5 py-1 opacity-80 hover:opacity-100 transition-opacity ease-linear self-center mt-5 rounded-sm"
            disabled={isLoading}
          >
            Load More
          </button>
        )
      ) : null}
    </section>
  );
};
