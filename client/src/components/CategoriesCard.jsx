import { Tabs, Col } from 'antd';
import PlaceCard from '../components/PlaceCard';

const App = () => (
  <Tabs
    defaultActiveKey="1"
    centered
    items={new Array(3).fill(null).map((_, i) => {
      const id = String(i + 1);
      let label;
      if (id === '1') {
        label = 'Do';
      } else if (id === '2') {
        label = 'Eat';
      } else if (id === '3') {
        label = 'Stay';
      }
      return {
        label: label,
        key: id,
        children: (
          <Col className="location-card" span={6}>
            <PlaceCard PlaceCardName={`PlaceCard ${id}`} />
          </Col>
        ),
      };
    })}
  />
);

export default App;
