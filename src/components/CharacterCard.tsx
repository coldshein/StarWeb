import { Link } from "react-router-dom";
import { genderColorClass } from "../helpers/genderColorClass";
import { Character } from "../types/character";

export const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <>
      <div className="w-full">
        <img
          loading="lazy"
          src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
          alt={character.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col items-start w-full">
        <div className="flex items-center justify-between w-full gap-3">
          <span className="text-secondary-text font-extralight">Name:</span>
          <h3
            className="text-main-text font-bold whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer"
            title={character.name}
          >
            {character.name}
          </h3>
        </div>
        <div
          className={`text-main-text rounded-md border-2 px-1 my-3 w-full text-center uppercase ${genderColorClass(
            character.gender
          )}`}
        >
          {character.gender}
        </div>
        <Link to={`${character.id}`} className="text-accent opacity-80 uppercase font-bold hover:opacity-100 transition-opacity ease-linear">
          See the details
        </Link>
      </div>
    </>
  );
};
