import React, { Fragment, useCallback, useMemo, useRef, useState } from 'react';
import { makeAnglesForCircularList } from '../../utils';
import {
  Bar,
  Container,
  Circle,
  CircleInner,
  ListItem,
  ItemDiv,
} from './Style';

interface CircularListProps {
  list: string[];
}

export const CircularList: React.FC<CircularListProps> = ({ list }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [angles, setAngles] = useState<number[]>(
    makeAnglesForCircularList(30, list.length)
  );

  const wheelRef = useRef<Array<HTMLDivElement | null>>([]);

  // Triggers when the user clicks on alist item
  const onItemClick = useCallback(
    (clickedItemIndex: number) => {
      // If the clicked item is already selected, do nothing
      if (clickedItemIndex !== selectedIndex) {
        const subtractAngle: number = (clickedItemIndex - selectedIndex) * 30; // It tells how many list items to move clockwise/anti-clockwise
        let countNinetyDegree: number = 1; // This is useful when skipping two or more places. e.g item1 and item2 both are at 90deg but we have to subtract 60 from item2 and 30 from item1
        const updatedAngles: number[] = []; // To temporarily store the updated angles

        //Traversing all the elements refrences of the list
        wheelRef.current.forEach((element, elementIndex: number) => {
          if (element !== null) {
            let angle: number = 0; // To temporarily store the updated angle of current list item after performing calculations

            if (
              elementIndex >= clickedItemIndex - 2 &&
              elementIndex <= clickedItemIndex + 2
            ) {
              let subtract: number = subtractAngle;

              if (angles[elementIndex] === 90) {
                subtract = Math.abs(
                  Math.floor(subtractAngle / countNinetyDegree)
                );
                countNinetyDegree++;
              } else if (angles[elementIndex] === -90) {
                subtract = -30 * countNinetyDegree;
                countNinetyDegree++;
              }

              angle = angles[elementIndex] - subtract;
            } else {
              if (elementIndex > clickedItemIndex + 2) {
                angle = 90;
              } else if (elementIndex < clickedItemIndex - 2) {
                angle = -90;
              }
            }

            updatedAngles.push(angle);

            element.style.transform = `rotate(${angle}deg)`; // Rotating the list item
          }
        });

        setAngles(updatedAngles); // Updates the original angles array
        setSelectedIndex(clickedItemIndex); // Changes the selected index to the clicked item's index
      }
    },
    [setSelectedIndex, selectedIndex, angles, wheelRef]
  );

  // Rendering the circular list
  const renderList = useMemo(() => {
    return list.map((listItem, index) => {
      const itemAngle: number = angles[index];

      return (
        <ListItem
          key={index}
          ref={(element: HTMLDivElement) => (wheelRef.current[index] = element)}
          angle={itemAngle}
        >
          <Bar />
          <ItemDiv
            angle={itemAngle}
            selected={index === selectedIndex}
            onClick={() => onItemClick(index)}
          >
            {listItem}
          </ItemDiv>
        </ListItem>
      );
    });
  }, [list, angles, selectedIndex, onItemClick]);

  return (
    <Fragment>
      <Container>
        <Circle>
          <CircleInner>{renderList}</CircleInner>
        </Circle>
      </Container>
    </Fragment>
  );
};
