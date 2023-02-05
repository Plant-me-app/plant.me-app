import React, { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Colors } from "../../../configs/colors";

const B = (props) => (
  <Text style={{ fontWeight: "bold" }}>{props.children}</Text>
);

const LevelContent = ({ plant, open }): React.ReactElement => {
  const circularProgress = useRef<AnimatedCircularProgress>();
  const [level, setLevel] = useState(plant["score"]?.level);
  const [points, setPoints] = useState(plant["score"]?.points);
  useEffect(() => {
    if (circularProgress.current) {
      circularProgress.current.animate(0, 0);
    }
    if (Object.keys(plant).length > 0) {
      const porcentage = plant["score"]?.points * 10;
      const currLevel = plant["score"]?.level;
      const currPoints = plant["score"]?.points;
      setLevel(() => plant["score"]?.level);
      setPoints(() => plant["score"]?.points);
      if (open) {
        if (currLevel > 0 && currPoints === 0) {
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
      }
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
            <AnimatedCircularProgress
              size={100}
              width={10}
              fill={plant["score"]?.points}
              lineCap="round"
              rotation={360}
              tintColor={Colors.green_hunter}
              ref={(ref) => (circularProgress.current = ref)}
            >
              {() => <Text style={styles.scoreText}>{level}</Text>}
            </AnimatedCircularProgress>
            <Text>Pontos para o próximo nível: X</Text>
            <Text>Desbloqueia um novo avatar!</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default LevelContent;
