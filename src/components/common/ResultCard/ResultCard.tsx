import React from 'react';
import * as S from './ResultCard.styled';
import toDetail from 'assets/icons/icon-to-detail-black.svg';
import soup from 'assets/icons/icon-soup.svg';
import pizza from 'assets/icons/icon-pizza.svg';
import hamburger from 'assets/icons/icon-hamburger.svg';
import noodle from 'assets/icons/icon-noodle.svg';
import splitCategory from 'util/splitCategory';

type ResultCardProps = {
  key: number;
  roomId: string | undefined;
  winnerNum: number;
  rank: number;
  name: string;
  distance: number;
  pollNumber: number;
  categories: string;
  link: string;
  totalPollNumber?: number;
};

const ResultCard = (props: ResultCardProps) => {
  const categories = splitCategory(props.categories);

  const handleLinkClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    window.open(props.link);
  };

  const oneWinner = (
    <S.RankingWrapper>
      <img src={soup} alt="soup icon" />
      <img src={pizza} alt="pizza icon" />
      <S.oneWinnerRanking>{props.rank}등</S.oneWinnerRanking>
      <img src={hamburger} alt="hamburger icon" />
      <img src={noodle} alt="noodle icon" />
    </S.RankingWrapper>
  );

  const multipleWinner = (
    <S.RankingWrapper>
      <img src={pizza} alt="pizza icon" />
      <S.multipleWinnerRanking>공동 {props.rank}등</S.multipleWinnerRanking>
      <img src={hamburger} alt="hamburger icon" />
    </S.RankingWrapper>
  );
  return (
    <S.RestaurantDetail key={props.key}>
      {props.winnerNum === 1 ? oneWinner : multipleWinner}
      <span className="line"></span>
      <S.RestaurantName onClick={handleLinkClick}>
        <strong className="name">{props.name}</strong>
        <img src={toDetail} alt="to external link icon" />
      </S.RestaurantName>
      <S.RestaurantTags>
        {categories.map((category, i) => (
          <S.RestaurantTag key={i}>{`# ${category}`}</S.RestaurantTag>
        ))}
      </S.RestaurantTags>
      <S.RestaurantDistance>{props.distance}m</S.RestaurantDistance>
      <S.VoteNumber>
        <span>{props.pollNumber}</span>/15명
      </S.VoteNumber>
      <S.ToOverallRanking to={`/random-menu/${props.roomId}/result/overall-ranking`}>전체 순위 보기</S.ToOverallRanking>
    </S.RestaurantDetail>
  );
};

export default ResultCard;
