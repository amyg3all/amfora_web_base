import React, { useContext } from "react";
import Card from "@/components/UI/Card";
import { HomeFontContext, fontStyles } from "@/components/store/HomeFontContextProvider";
import styles from "./WelcomeCard.module.css";

const WelcomeCard = ({ setShowIntro }) => {
  const { fontSize, charSpaceSize, interWordSpaceSize, lineSpaceSize } =
    useContext(HomeFontContext);

  const headingStyle = fontStyles(
    fontSize + 1,
    charSpaceSize,
    interWordSpaceSize,
    lineSpaceSize,
  );
  const descriptionStyle = fontStyles(
    fontSize - 0.1,
    charSpaceSize,
    interWordSpaceSize,
    lineSpaceSize,
  );
  const buttonStyle = fontStyles(
    fontSize,
    charSpaceSize,
    interWordSpaceSize,
    lineSpaceSize,
  );

  // Display the welcome card until the user clicks the button
  // Contains a brief description of cladograms and the classification of dinosaurs
  // we provide.
  return (
    <Card className={styles.welcome}>
      <h1 style={headingStyle} className={styles.header}>
        IOTA
      </h1>
      <p style={descriptionStyle} className={styles.description}>
        An insight into smart olive oil, from customer to producer, find out about Amfora products here.
      </p>
      <p style={descriptionStyle} className={styles.description}>
        We are working to bring down the costs of the everyday luxury that is good quality olive oil. As we believe that everyone deserves the best alongside an insight into its production and usage.
      </p>
      <p style={descriptionStyle} className={styles.description}>
        Find out more about us at amfora.com.
      </p>

      <button
        style={buttonStyle}
        className={`${styles.button}`}
        onClick={() => {
          setShowIntro(false);
        }}
      >
        Lets Explore!
      </button>
    </Card>
  );
};
export default WelcomeCard;
