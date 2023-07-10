import { Tabs,Col } from 'antd';
import PlaceCard from "../components/PlaceCard";
const App = () => (
  <Tabs
    defaultActiveKey="1"
    centered
    items={new Array(3).fill(null).map((_, i) => {
      const id = String(i + 1);
      return {
        label: `Tab ${id}`,
        key: id,
        children: (<Col className="location-card" span={6}>
                    <PlaceCard PlaceCardName={`PlaceCard ${id}`}></PlaceCard>
                </Col>),
      };
    })}
  />
);
export default App;