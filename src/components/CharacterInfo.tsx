import { genderColorClass } from "../helpers/genderColorClass";
import { Character } from "../types/character";
import { InfoRow } from "./InfoRow";

export const CharacterInfo = ({
  character,
}: {
  character: Character | null;
}) => {
  return (
    <section className="rounded-md bg-gradient-to-br from-[#090d34] to-[#ff8c0026] flex flex-col">
      <div className="p-4">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${character?.id}.jpg`}
          alt={character?.name}
          className="w-full h-full object-cover rounded-md self-center"
        />
      </div>
      <div className="p-4 w-full">
        <div className="border-2 border-main-text border-opacity-30 flex flex-col rounded-md p-4 gap-2">
          <h1 className="text-main-text text-center text-xl">
            {character?.name}
          </h1>
          <div
            className={`text-main-text rounded-md border-2 px-2 self-center my-2 uppercase ${genderColorClass(
              character?.gender ?? ""
            )}`}
          >
            {character?.gender}
          </div>
          <InfoRow label="Birth year" value={character?.birth_year} />
          <InfoRow label="Hair color" value={character?.hair_color} />
          <InfoRow label="Eye color" value={character?.eye_color} />
          <InfoRow label="Mass" value={`${character?.mass} kg`} />
          <InfoRow label="Height" value={`${character?.height} cm`} />
          <InfoRow label="Homeworld" value={character?.homeworld} />
        </div>
      </div>
    </section>
  );
};
