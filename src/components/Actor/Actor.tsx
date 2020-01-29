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

  return bio ? <p>{bio}</p> : <p>{language["biography"][lang]}</p>;
};

const Actor: React.FC<ActorProps> = ({ info }) => {
  const { lang } = useContext(LanguageContext);

  return (
    <>
      <div className="actor">
        <div className="actor-info__bio">
          <Heading>Biography</Heading>
          <div className="actor-data">
            <a
              href={"https://www.imdb.com/name/" + info.imdb_id}
              target="_blank"
              rel="noopener noreferrer"
              className="actor-data__imdb"
            >
              <Poster imgPath={info.profile_path} className="actor-info__pic" />
            </a>
            <div className="">
              <a
                href={"https://www.imdb.com/name/" + info.imdb_id}
                target="_blank"
                rel="noopener noreferrer"
                className="actor-data__imdb"
              >
                <h2>{info.name}</h2>
              </a>

              <p>
                ({info.birthday} to {info.deathday})
              </p>
            </div>
          </div>

          <Biography bio={info.biography} />
        </div>
      </div>
      {info.combined_credits.cast.length < 8 ? null : (
        <div className="actor--filmography">
          <Heading>{language["filmography"][lang]}</Heading>
          <div className="grid">
            <Grid arr={info.combined_credits.cast} />
          </div>
        </div>
      )}
    </>
  );
};

export default Actor;
