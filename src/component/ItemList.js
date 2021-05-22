import React from "react";
import { Grid, Image } from "semantic-ui-react";
import styles from "./itemList.module.css";
import Link from "next/link"; // 다이나믹 라우팅 링크

const ItemList = ({ list }) => {
  console.log(list);
  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column key={item.id} className={styles.wrap}>
              <a>
                {/* 각 아이템을 누르면 [id].js로 간다 */}
                <Link href="/detail/[id]" as={`detail/${item.id}`}>
                  <div>
                    <img
                      src={item.image_link}
                      alt={item.name}
                      className={styles.img_item}
                    />
                    <strong className={styles.tit_item}>{item.name}</strong>
                    <span className={styles.txt_info}>
                      {item.category} {item.product_type}
                    </span>
                    <strong className={styles.num_price}>${item.price}</strong>
                  </div>
                </Link>
              </a>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ItemList;
