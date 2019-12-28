import React, { useContext } from "react";
import Poster from "../Poster";
import Grid from "../Grid";
import { ActorProps } from "../../utils/types";
import Heading from "../Heading";
import language from "./lang";
import { LanguageContext } from "../../contexts/LanguageContext";

type BioProps = {
  bio: string;
};

const Biography: React.FC<BioProps> = ({ bio }) => {
  const { lang } = useContext(LanguageContext);

  //@ts-ignore
  return bio ? <p>{bio}</p> : <p>{language["biography"][lang]}</p>;
};

const Actor: React.FC<ActorProps> = ({ info }) => {
  const { lang } = useContext(LanguageContext);

  return (
    <div>
      <div data-testid="details-page" className="details">
        <div className="back">
          <div className="details--movieInfo">
            <Poster imgPath={info.profile_path} className="actor__img" />
            <div className="details--movieInfo--grid">
              <Biography bio={info.biography} />
            </div>
          </div>
        </div>
      </div>
      {info.combined_credits.cast.length < 8 ? null : (
        <>
          //@ts-ignore
          <Heading>{language["filmography"][lang]}</Heading>
          <div className="grid">
            <Grid arr={info.combined_credits.cast} />
          </div>
        </>
      )}
    </div>
  );
};

export default Actor;
