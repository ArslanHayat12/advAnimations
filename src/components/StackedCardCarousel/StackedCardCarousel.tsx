import React, {
  FC,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
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

  const stackCard = useCallback(
    (cardIndex: number) => {
      if (cardIndex !== cardAtTop) {
        // References of all the cards uptil the current card
        const sliceEnd: number =
          cardIndex < cardAtTop ? cardAtTop + 1 : cardIndex + 1;
        const cards: (HTMLDivElement | null)[] = cardRefs.current.slice(
          0,
          sliceEnd
        );

        if (cardIndex > cardAtTop) {
          for (let i: number = 0; i < cardIndex; i++) {
            const card: HTMLDivElement | null = cards[i]; // Getting the current card

            // Checking if the reference to the current card is not null
            if (card !== null) {
              const cardHeight: number = card.clientHeight - 15; // Getting current card's height to be used for stacking next card on it

              // Scaling the current card to show a stack
              const scale: number = 1 - (cardIndex - i) * 0.03;
              card.style.transform = `scale(${scale})`;

              // Stacking the next card on current card
              cards[i + 1]!.style.marginTop = `-${cardHeight}px`;
            }
          }
        } else {
          // debugger;
          for (let i = cardAtTop; i > cardIndex; i--) {
            const card: HTMLDivElement | null = cards[i]; // Getting the current card

            // Checking if the reference to the current card is not null
            if (card !== null) {
              card.style.transform = 'scale(1)';
              card.style.margin = '10px 0px';
            }
          }

          for (let i = cardIndex; i >= 0; i--) {
            const card: HTMLDivElement | null = cards[i]; // Getting the current card

            // Checking if the reference to the current card is not null
            if (card !== null) {
              const scale: number = 1 - (cardIndex - i) * 0.03;
              card.style.transform = `scale(${scale})`;
            }
          }
        }

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
        onCardClick={stackCard}
        cardbackground={cardsBackgroundColor}
        cardtextcolor={cardsContentColor}
      />
    ));
  }, [cardsContent, cardsBackgroundColor, cardsContentColor, stackCard]);

  return <StackStyle>{renderCards}</StackStyle>;
};

export default StackedCardCarousel;
