# advAnimations

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Circular List](#circular-list)
  - [Stacked Card Carousel](#stacked-card-carousel)
  - [Carousel](#carousel)
  - [Accordion Gallery](#accordion-gallery)

# Installation

```
npm install advAnimations
```

# Usage

## Circular List

```tsx
<CircularList list={list}>
```

### Props

| Name | Value      | Description                   |
| ---- | ---------- | ----------------------------- |
| list | `string[]` | List of items to be displayed |

### Demo

!['Accordion Gallery Demo'](src/demo/CircularList.gif)

## Stacked Card Carousel

```tsx
<StackedCardCarousel
  cardsContent={cardsList}
  cardsBackgroundColor="#353535"
  cardsContentColor="#fff"
/>
```

### Props

| Name                 | Value         | Description                              |
| -------------------- | ------------- | ---------------------------------------- |
| cardsContent         | `ReactNode[]` | Content to be displayed inside each card |
| cardsBackgroundColor | `string`      | Defines the card's background color      |
| cardsContentColor    | `string`      | Defines the card's content text color    |

### Demo

!['Accordion Gallery Demo'](src/demo/StackedCardCarousel.gif)

## Carousel

```tsx
<Carousel imagePaths={imagePaths} autoplay={true} interval={3000} />
```

### Props

| Name       | Value      | Description                                                                      |
| ---------- | ---------- | -------------------------------------------------------------------------------- |
| imagePaths | `string[]` | Paths of the images to display                                                   |
| autoplay   | `boolean`  | Changes the slides automatically after the time interval mentioned in `interval` |
| interval   | `number`   | Interval in miliseconds when `autoPlay` is set to `true`                         |

### Demo

!['Accordion Gallery Demo'](src/demo/Carousel.gif)

## Accordion Gallery

```tsx
<AccordionGallery imagePaths={imagePaths} />
```

### Props

| Name       | Value      | Description                    |
| ---------- | ---------- | ------------------------------ |
| imagePaths | `string[]` | Paths of the images to display |

### Demo

!['Accordion Gallery Demo'](src/demo/AccordionGallery.gif)
