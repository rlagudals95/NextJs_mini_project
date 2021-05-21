import { Button, Header } from "semantic-ui-react";
import styles from "./item.module.css";
// 아이템 리스트에서 props로 정보를 받아서 아이템 상세보기를 만들어주자

const Item = ({ item }) => {
  console.log(item);
  const {
    image_link,
    name,
    price,
    description,
    updated_at,
    category,
    product_type,
    product_link,
  } = item; //props 데이터를 이렇게 정의 해줘도 되구나!

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.img_item}>
          <img src={image_link} alt={name} />
        </div>

        <div className={styles.info_item}>
          <strong className={styles.tit_item}>{name}</strong>
          <strong className={styles.num_price}>${price}</strong>
          <span className={styles.txt_info}>
            {category ? `${category}/` : ""}
            {product_type}
          </span>

          <Button color="orange">구매하기</Button>
        </div>
      </div>
      <Header as="h3">Description</Header>
      <p style={{ paddingBottom: 20, fontSize: 18 }}>{description}</p>
    </>
  );
};

export default Item;
