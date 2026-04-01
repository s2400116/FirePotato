import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
import { useState } from 'react';
// https://www.youtube.com/watch?v=SqcY0GlETPk

function App() {
  let items = [
    'Genshin Impact',
    'Rocket League',
    'Grand Theft Auto 6',
    'Minecraft',
    'Terraria',
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="List of Games"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <span>World</span>
        </Alert>
      )}
      <Button text="Confirm" onClick={() => setAlertVisibility(true)} />
    </div>
  );
}

export default App;
