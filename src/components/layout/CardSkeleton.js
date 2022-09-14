import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "./layoutStyles/CardSkeleton.css"

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item) => {
      <div className="card__skeleton">
        <img className="img__skeleton">
          <Skeleton height={100} duration={3}/>
          {/* <Skeleton /> */}
        </img>
        <h5>
          <Skeleton width={`40%`} count={4} duration={5}/>
        </h5>
      </div>;
    });
};

export default CardSkeleton;
