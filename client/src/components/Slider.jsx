import { Carousel } from 'antd';
const contentStyle = {
  height: '450px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  margin:"0px"
};
const Slider = () => (
  <Carousel autoplay>
    <div>
    <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default Slider;