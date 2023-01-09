import { YMaps, Map, Placemark } from 'react-yandex-maps';
import cordsParser from '../../common/utils/cordsParser';
import styles from './style.module.css';

type Props = {
  cords: string;
}

const Maps = ({cords}: Props) => {
  const parsedCords = cordsParser(cords);

  return (
    <div className={styles['map-container']}>
      <YMaps width={styles['auto']}>
        <div>
          <Map state={{ center: parsedCords, zoom: 11 }} width='auto'>
          <Placemark geometry={parsedCords} />
          </Map>
        </div>
      </YMaps>
    </div>
  );
};

export default Maps;
