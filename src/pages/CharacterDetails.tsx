import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import { getCharacterById } from "../store/slices/characterSlice";
import { CharacterGraph } from "../components/CharactersGraph";
import { CharacterInfo } from "../components/CharacterInfo";
import { Loader } from "../components/Loader/Loader";
import { ErrorMessage } from "../components/ErrorMessage";

export const CharacterDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const {
    item: character,
    isError,
    isLoading,
  } = useAppSelector((state) => state.charactersList.character);

  useEffect(() => {
    if (id) {
      dispatch(getCharacterById(+id));
    }
  }, [id, dispatch]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <button onClick={goBack} className=" mb-5 bg-accent text-primary-bg px-5 py-1 opacity-80 hover:opacity-100 transition-opacity ease-linear rounded-sm">
        Go back
      </button>
      <div className="h-full w-full flex flex-col md:flex-row">
        {isLoading ? (
          <div className="flex items-center justify-center h-[80vh] w-full">
            <Loader />
          </div>
        ) : isError ? (
          <div className="flex items-center justify-center h-[80vh] w-full">
            <ErrorMessage title={isError} />
          </div>
        ) : (
          <>
            <CharacterInfo character={character} />
            {character?.id && (
              <CharacterGraph heroId={character.id.toString()} />
            )}
          </>
        )}
      </div>
    </>
  );
};
