import styles from './style.module.css';

type Props = {
  placeParams: string[];
  author: string;
  group: string;
};

const Comments = ({ placeParams, author, group }: Props) => {
  return (
    <div className={styles.container}>
      {placeParams.length > 0 ? placeParams.map((placeParam: string, index: number) => 
          <div className={styles.param} key={`${placeParam}_${index}`}>
            {placeParam}
            <span>{author}, {group}</span>
          </div>
        ) : <h3>Здесь будут выводиться введенные Вами параметры</h3>}
    </div>
  );
};

export default Comments;
