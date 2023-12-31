import React, { useState, useEffect } from "react";
// import { features } from '../../constants'
import styles, { layout } from "../../style";
import Button from "../Button";
import { getDatabase, ref, onValue } from "firebase/database";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const featuresRef = ref(db, "features/");
    onValue(featuresRef, (snapshot) => {
      const data = snapshot.val();
      setFeatures(data);
    });
  }, []);
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find your best designer, <br className="sm:block hidden" /> "Let
          Creativity Speaks!"
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          "With the right creative connection, you can enhance your projects and
          ideas through collaboration with talented designers. Join our
          community and let creativity speak, transforming concepts into
          captivating realities."
        </p>
        <a href="https://play.google.com/store/games?hl=id&gl=US&pli=1">
          <Button styles="mt-10" />
        </a>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((item) => (
          <FeatureCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Business;
