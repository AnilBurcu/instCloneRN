import {Dimensions, Image} from 'react-native';

const FitImage = ({src}) => {
  const width = Dimensions.get('window').width;

  const ratio = 1000 / width;
  const height = 900 / ratio;

  return <Image style={{width, height}} source={{uri: src}} />;
};

export default FitImage;
