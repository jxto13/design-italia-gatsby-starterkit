import React from 'react'

import {
 
  ThumbNav,
  ThumbNavItem
} from "design-react-kit";

export default function test() {
    return (
        <div>
            <ThumbNav
  fixedWidth={false}
  isSmall={false}
  isVertical={false}
  noZoomOnHover={false}
  overlayOnHover="black"
  rowItems="4"
>
  <ThumbNavItem
    actionDescription="Visualizza immagine 1"
    active={false}
    imageUrl="https://picsum.photos/480/320?image=1044"
    targetUrl="#"
  />
  <ThumbNavItem
    actionDescription="Visualizza immagine 2"
    active={false}
    imageUrl="https://picsum.photos/480/320?image=1050"
    targetUrl="#"
  />
  <ThumbNavItem
    actionDescription="Visualizza immagine 3"
    active={false}
    imageUrl="https://picsum.photos/480/320?image=1037"
    targetUrl="#"
  />
  <ThumbNavItem
    actionDescription="Visualizza immagine 4"
    active={false}
    imageUrl="https://picsum.photos/480/320?image=1040"
    targetUrl="#"
  />
  <ThumbNavItem
    actionDescription="Visualizza immagine 5"
    active={false}
    imageUrl="https://picsum.photos/480/320?image=1055"
    targetUrl="#"
  />
  <ThumbNavItem
    actionDescription="Visualizza immagine 6"
    active={false}
    imageUrl="https://picsum.photos/480/320?image=1057"
    targetUrl="#"
  />
</ThumbNav>
        </div>
    )
}
