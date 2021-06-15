import React, {
  FC,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { stackCards } from '../../utils';
import Card from '../Card/Card';
import { StackStyle } from './Style';

interface StackedCardCarouselProps {
  cardsContent: ReactNode[];
  cardsBackgroundColor?: string;
  cardsContentColor?: string;
}

const StackedCardCarousel: FC<StackedCardCarouselProps> = ({
  cardsContent,
  cardsBackgroundColor,
  cardsContentColor,
}) => {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [cardAtTop, setCardAtTop] = useState<number>(0);

  const handleCardClick = useCallback(
    (cardIndex: number) => {
      if (cardIndex !== cardAtTop) {
        // References of all the cards uptil the current card
        const sliceEnd: number =
          cardIndex < cardAtTop ? cardAtTop + 1 : cardIndex + 1;
        const cards: (HTMLDivElement | null)[] = cardRefs.current.slice(
          0,
          sliceEnd
        );

        stackCards(cardIndex, cardAtTop, cards);

        setCardAtTop(cardIndex);
      }
    },
    [cardAtTop, setCardAtTop]
  );

  const renderCards = useMemo(() => {
    return cardsContent.map((cardContent: ReactNode, index: number) => (
      <Card
        key={index}
        index={index}
        reference={cardRefs}
        content={cardContent}
        onCardClick={handleCardClick}
        cardbackground={cardsBackgroundColor}
        cardtextcolor={cardsContentColor}
      />
    ));
  }, [cardsContent, cardsBackgroundColor, cardsContentColor, handleCardClick]);

  return <StackStyle>{renderCards}</StackStyle>;
};

export default StackedCardCarousel;
