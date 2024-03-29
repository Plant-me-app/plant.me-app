import React, { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Colors } from "../../../configs/colors";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Messages } from "../../../constants/messages.constants";

const LevelContent = ({ plant, open }): React.ReactElement => {
  const circularProgress = useRef<AnimatedCircularProgress>();
  const [level, setLevel] = useState(plant["score"]?.level);

  const loadFirstLevel = () => {
    const porcentage = plant["score"]?.points * 20;
    const currPoints = plant["score"]?.points;
    if (currPoints === 0) {
      circularProgress.current.animate(porcentage + 5, 2000).start();
    } else {
      circularProgress.current.animate(porcentage, 2000).start();
    }
  };

  const loadOtherLevels = () => {
    const porcentage = plant["score"]?.points * 10;
    const currLevel = plant["score"]?.level;
    const currPoints = plant["score"]?.points;
    if (currPoints === 0) {
      setLevel(() => currLevel - 1);
      circularProgress.current.animate(100, 2000).start(({ finished }) => {
        if (finished) {
          setLevel((prevLevel) => prevLevel + 1);
          circularProgress.current.animate(porcentage + 5, 2000).start();
        }
      });
    } else {
      circularProgress.current.animate(porcentage, 2000);
    }
  };

  const handleLevels = () => {
    const currLevel = plant["score"]?.level;
    setLevel(() => plant["score"]?.level);
    if (open) {
      if (currLevel > 0) {
        loadOtherLevels();
      }
      if (currLevel === 0) {
        loadFirstLevel();
      }
    }
  };
  useEffect(() => {
    if (circularProgress.current) {
      circularProgress.current.animate(0, 0);
    }
    if (Object.keys(plant).length > 0) {
      handleLevels();
    }
  }, [open]);
  return (
    <View>
      {Object.keys(plant).length > 0 && (
        <>
          <View style={styles.header}>
            <Text style={styles.title}>Nível {plant.name}</Text>
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.progressCircle}>
              <AnimatedCircularProgress
                size={wp("25%")}
                width={wp("2.5%")}
                fill={plant["score"]?.points}
                lineCap="round"
                rotation={360}
                tintColor={Colors.green_hunter}
                ref={(ref) => (circularProgress.current = ref)}
              >
                {() => <Text style={styles.scoreText}>{level}</Text>}
              </AnimatedCircularProgress>
            </View>
            <View style={styles.content}>
              <Text style={styles.contentText}>
                {Messages.levelMessage1} {plant["score"]?.pointsToNextLevel}
              </Text>
              <Text style={styles.contentText}>{Messages.levelMessage2}</Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default LevelContent;
