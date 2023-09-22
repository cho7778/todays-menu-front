import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './OverallRanking.styled';
import ShareBottomSheet from 'components/common/modal/ShareBottomSheet';
import Button from 'components/common/Button/Button';
import toDetail from 'assets/icons/btn-link-gray.svg';
import shareResult from 'assets/icons/icon-share-resut.svg';
import winner from 'assets/icons/icon-winner.svg';
import { useGetResult } from 'apis/query/useGetResult';
import splitCategory from 'util/splitCategory';

export default function OverallRanking() {
  const [IsModalOn, setIsModalOn] = useState<boolean>(false);
  const navigate = useNavigate();

  // TODO: 세션에서 가져오기
  // const roomId = sessionStorage.getItem('roomId');
  const roomId = '2';

  const resultData = useGetResult(roomId).voteOverallResultData?.data;
  console.log('resultData', resultData);
  const totalVote = resultData.total;
  const overallRankingData = [...resultData.win, ...resultData.voteResultRes];
  console.log('overallRankingData', overallRankingData);

  const handleModalClick = () => {
    setIsModalOn(true);
  };

  const handleModalClose = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setIsModalOn(false);
  };

  const handleRetry = () => {
    navigate('/location');
  };

  const handleLinkClick = (event: React.MouseEvent<HTMLButtonElement>, link: string) => {
    event.stopPropagation();
    window.open(link);
  };

  return (
    <>
      <S.Wrapper>
        <S.OverallRankingWrapper>
          <h3 className="page-title">전체 순위</h3>
          <S.RestaurantList>
            {overallRankingData?.slice(0, 5).map((item: any) => (
              <S.RestaurantItem key={item.id}>
                <S.Ranking>
                  {item.rank === 1 ? <img src={winner} alt="winner icon" /> : undefined}
                  <strong className="ranking">{item.rank}등</strong>
                  <p>
                    {item.count}
                    <span className="total-number">/{totalVote}명</span>
                  </p>
                </S.Ranking>
                <S.RestaurantData>
                  <strong className="name">{item.title}</strong>
                  <p className="distance">{item.distance}m</p>
                  <div className="tags">{`# ${splitCategory(item.category)}`}</div>
                </S.RestaurantData>
                <button type="button" onClick={(event) => handleLinkClick(event, item.link)}>
                  <img src={toDetail} alt="more detail icon" />
                </button>
              </S.RestaurantItem>
            ))}

            <S.ButtonShare onClick={handleModalClick}>
              <img src={shareResult} alt="share result icon" />
              공유하기
            </S.ButtonShare>
            <Button onClick={handleRetry}>다시하기</Button>
          </S.RestaurantList>
        </S.OverallRankingWrapper>
      </S.Wrapper>
      {/* 모달은 포탈 써서 전역으로 나중에 바꿀게요!! */}
      {IsModalOn && <ShareBottomSheet handleModalClose={handleModalClose} />}
    </>
  );
}
