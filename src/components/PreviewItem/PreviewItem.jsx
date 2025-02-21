// import React from "react";
import { useProducts } from "../../contexts/ProductsContext/ProductsContext";
import FallBackImage from "../../assets/backgroundimages/fallBackImage.jpg";
import AddCartButton from "../AddCartButton/AddCartButton";
import styles from "./PreviewItem.module.css";
import SocialIcons from "../SocialIcons/SocialIcons";

function PreviewItem() {
  const {
    selectedItem,
    handleClose,
    updateCart,
    isAddedtoCart,
    isAlreadyAdded,
  } = useProducts();

  const isPopular = selectedItem.popular === true;

  const discountedPrice =
    selectedItem.price && selectedItem.discount
      ? Number(selectedItem.price) - Number(selectedItem.discount)
      : selectedItem.price;

  const discountPercentage =
    selectedItem.price && selectedItem.discount
      ? ((Number(selectedItem.price) - discountedPrice) /
          Number(selectedItem.price)) *
        100
      : 0;

  return (
    <div className={`${styles.previewItemWrapper} ${styles.show}`}>
      <div className={styles.previewImageWrapper}>
        <img
          className={styles.previewImage}
          src={selectedItem.image || FallBackImage}
          alt={selectedItem.model || "Product Image"}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = FallBackImage;
          }}
        />
      </div>
      <div className={styles.previewItemDetails}>
        <i className="fa-solid fa-square-xmark" onClick={handleClose}></i>
        <h1>{selectedItem.model}</h1>
        <h2>{selectedItem.brand}</h2>
        <div className={styles.extraDetails}>
          <p>
            Category: <span>{selectedItem.category}</span>
          </p>
          <p>
            Available Color: <span>{selectedItem.color}</span>
          </p>
          {isPopular && <p className={styles.popular}>Popular</p>}
        </div>
        <div className={styles.previewItemPrice}>
          <h3>
            {discountPercentage
              ? `$ ${discountedPrice.toFixed(2)}`
              : `$ ${selectedItem.price}`}
          </h3>
          {discountPercentage > 0 && (
            <div className={styles.discountWrapper}>
              <p className={styles.price}>{`$ ${selectedItem.price}`}</p>
              <p className={styles.discountedPercentage}>
                {`You saved ${discountPercentage.toFixed(2)}% off`}
              </p>
            </div>
          )}
        </div>
        <div className={styles.itemDescriptionWrapper}>
          <h4>Description</h4>
          <p className={styles.previewItemDescription}>
            {selectedItem.description}
          </p>
        </div>
        <div className={styles.cartAndSocial}>
          {isAddedtoCart && (
            <div className={styles.successMessageWrapper}>
              <i className="fa-solid fa-circle-check"></i>
              <p>Added to cart</p>
            </div>
          )}
          {isAlreadyAdded && (
            <div className={styles.isAlreadyAddedWrapper}>
              <p>Already added 😉</p>
            </div>
          )}
          <SocialIcons />
          <AddCartButton
            onClick={() =>
              updateCart(
                selectedItem.id,
                1,
                selectedItem.brand,
                selectedItem.price,
                selectedItem.image,
                selectedItem.color,
                selectedItem.discount,
                selectedItem.model
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default PreviewItem;
