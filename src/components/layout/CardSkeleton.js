import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "./layoutStyles/CardSkeleton.css"

const CardSkeleton = ({ cards }) => {
  return new Array(cards)
    .fill(0)
    .map((item, id) => (
          <Skeleton key={`skel-${id}`} height={'25vh'} width='180px' className='card__container'/>
    ));
};

export default CardSkeleton;
