//import type { MouseEvent } from 'react'; || Event Handle
import { useState } from 'react';

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //const handleClick = (event: MouseEvent) => console.log("Mouse-X", event.clientX, "\nMouse-Y", event.clientY) || Event Handle

  const listItem = (      
    <ul className='list-group'>
      {items.map((item, index) => (
        <li 
          key={item} 
          className={
            selectedIndex === index
            ? "list-group-item active"
            : "list-group-item"
          }
          //onClick={handleClick} || Event Handle
          onClick={() => {
            setSelectedIndex(index);
            onSelectItem(item);
          }}
        >
          {item}
        </li>
      ))};
    </ul>
  )

  return (
    // Empty means Fragment
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No Games Found</p> : listItem}
    </>
  );
};

export default ListGroup;