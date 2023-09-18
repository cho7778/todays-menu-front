import styled from 'styled-components';

export const RestaurantDetail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 25px 30px 21px;

  .line {
    width: 100%;
    border: 1px solid #d9d9d9;
  }
`;

export const RankingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
`;

export const Ranking = styled.p`
  color: #fff;
  background-color: rgba(239, 90, 57, 0.9);
  padding: 9px 20px 5px;
  border-radius: 10px;
  font-weight: var(--font-bold);
  font-size: var(--lg);
`;

export const RestaurantName = styled.strong`
  margin: 23px 0 13px;
  font-size: 30px;
  font-weight: var(--font-bold);
  text-align: center;
`;

export const RestaurantTags = styled.div`
  color: var(--color-main-orange);
  font-size: 16px;
  font-weight: var(--font-bold);
  margin: 0 auto;
`;

export const RestaurantTag = styled.p`
  display: inline-block;
  margin-left: 5px;

  &:first-child {
    margin-left: 0;
  }
`;

export const RestaurantDistance = styled.div`
  margin: 47px auto 15px;
  color: var(--color-sub-gray);
  font-size: 22px;
`;

export const VoteNumber = styled.p`
  color: #c2c2c2;
  font-size: 21px;
  text-align: center;

  span {
    color: rgba(239, 90, 57, 0.8);
    display: inline-block;
  }
`;

export const toRestaurantDetail = styled.button`
  margin: 10px auto 0;
  font-weight: var(--font-bold);
  font-size: var(--lg);
  color: var(--color-sub-gray);

  img {
    margin: 0 10px;
    vertical-align: middle;
  }
`;