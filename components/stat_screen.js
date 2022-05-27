import React from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';
import Svg, { Polygon, Line, Text as SvgText } from 'react-native-svg';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const stats = {
  wisdom: 50,
  strength: 40,
  charisma: 25,
  magic: 40,
  health: 50,
  streak: 7,
};

//  wisdom
const wisdomX = 150;
const wisdomY = 50;

// strength
const strengthX = 55;
const strengthY = 119;

// charisma
const charismaX = 91;
const charismaY = 231;

// magic
const magicX = 209;
const magicY = 231;

// health
const healthX = 245;
const healthY = 119;

const statX = 150;
const statY = 150;

const statMax = 50;

function getDistance(centerX, centerY, maxX, maxY, statValue, maxValue) {
  const yDiff = maxY - centerY;
  const xDiff = maxX - centerX;

  const xIncrement = xDiff / maxValue;
  const yIncrement = yDiff / maxValue;

  const x = centerX + statValue * xIncrement;
  const y = centerY + statValue * yIncrement;

  return [x, y];
}

//  wisdom
const topStatX = getDistance(
  statX,
  statY,
  wisdomX,
  wisdomY,
  stats.wisdom,
  statMax,
)[0];
const topStatY = getDistance(
  statX,
  statY,
  wisdomX,
  wisdomY,
  stats.wisdom,
  statMax,
)[1];

// strength
const topLeftStatX = getDistance(
  statX,
  statY,
  strengthX,
  strengthY,
  stats.strength,
  statMax,
)[0];
const topLeftStatY = getDistance(
  statX,
  statY,
  strengthX,
  strengthY,
  stats.strength,
  statMax,
)[1];

// charisma
const topRightStatX = getDistance(
  statX,
  statY,
  charismaX,
  charismaY,
  stats.charisma,
  statMax,
)[0];
const topRightStatY = getDistance(
  statX,
  statY,
  charismaX,
  charismaY,
  stats.charisma,
  statMax,
)[1];

// magic
const bottomLeftStatX = getDistance(
  statX,
  statY,
  magicX,
  magicY,
  stats.magic,
  statMax,
)[0];
const bottomLeftStatY = getDistance(
  statX,
  statY,
  magicX,
  magicY,
  stats.magic,
  statMax,
)[1];

// health
const bottomRightStatX = getDistance(
  statX,
  statY,
  healthX,
  healthY,
  stats.health,
  statMax,
)[0];
const bottomRightStatY = getDistance(
  statX,
  statY,
  healthX,
  healthY,
  stats.health,
  statMax,
)[1];

function pentagonStr(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5) {
  return `${x1} ${y1}, ${x2}, ${y2} ${x3} ${y3} ${x4} ${y4} ${x5} ${y5}`;
}

const bigPent = pentagonStr(
  wisdomX,
  wisdomY,
  strengthX,
  strengthY,
  charismaX,
  charismaY,
  magicX,
  magicY,
  healthX,
  healthY,
);
const statPent = pentagonStr(
  topStatX,
  topStatY,
  topLeftStatX,
  topLeftStatY,
  topRightStatX,
  topRightStatY,
  bottomLeftStatX,
  bottomLeftStatY,
  bottomRightStatX,
  bottomRightStatY,
);

const innerPent1 = '150,75 79,127 106,211 194,211 221,127';
const innerPent2 = '150,100 102,135 121,190 179,190 198,135';
const innerPent3 = '150,125 126,142 135,170 165,170 174,142';

function pentagonStat() {
  return (
    <Svg height="250" width="275">
      <Polygon
        points={bigPent}
        // "0,45 50,10 100,45 80,100 20,100"
        // "100,90 90,97 94,108 106,108 110,97"
        fill="#FFCC15"
        stroke="black"
        strokeWidth="2"
      />
      <Polygon
        points={innerPent1}
        // fill="#FFCC15"
        stroke="black"
        strokeWidth="2"
      />

      <Polygon
        points={innerPent2}
        // fill="#FFCC15"
        stroke="black"
        strokeWidth="2"
      />

      <Polygon
        points={innerPent3}
        // fill="#FFCC15"
        stroke="black"
        strokeWidth="2"
      />

      <SvgText
        fill="black"
        stroke=""
        fontSize="10"
        fontWeight="bold"
        x={wisdomX}
        y={wisdomY - 5}
        textAnchor="middle"
        strokeWidth="2"
      >
        WIS
      </SvgText>
      <SvgText
        fill="black"
        stroke=""
        fontSize="10"
        fontWeight="bold"
        x={strengthX - 15}
        y={strengthY}
        textAnchor="middle"
        strokeWidth="2"
      >
        STR
      </SvgText>
      <SvgText
        fill="black"
        stroke=""
        fontSize="10"
        fontWeight="bold"
        x={charismaX}
        y={charismaY + 10}
        textAnchor="middle"
        strokeWidth="2"
      >
        CHA
      </SvgText>
      <SvgText
        fill="black"
        stroke=""
        fontSize="10"
        fontWeight="bold"
        x={magicX}
        y={magicY + 10}
        textAnchor="middle"
        strokeWidth="2"
      >
        MP
      </SvgText>
      <SvgText
        fill="black"
        stroke=""
        fontSize="10"
        fontWeight="bold"
        x={healthX + 10}
        y={healthY}
        textAnchor="middle"
        strokeWidth="2"
      >
        HP
      </SvgText>
      <Line
        x1={statX}
        y1={statY}
        x2={wisdomX}
        y2={wisdomY}
        stroke="black"
        strokeWidth="2"
      />
      <Line
        x1={statX}
        y1={statY}
        x2={strengthX}
        y2={strengthY}
        stroke="black"
        strokeWidth="2"
      />
      <Line
        x1={statX}
        y1={statY}
        x2={charismaX}
        y2={charismaY}
        stroke="black"
        strokeWidth="2"
      />
      <Line
        x1={statX}
        y1={statY}
        x2={magicX}
        y2={magicY}
        stroke="black"
        strokeWidth="2"
      />
      <Line
        x1={statX}
        y1={statY}
        x2={healthX}
        y2={healthY}
        stroke="black"
        strokeWidth="2"
      />

      <Polygon
        points={statPent}
        fill="green"
        // stroke="purple"
        strokeWidth="1"
        opacity="0.8"
      />
    </Svg>
  );
}
function StatScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ height: '100%' }}>
      <View style={styles.container}>
        <View style={styles.statContainer}>
          <View style={styles.topContainer}>
            <Ionicons
              style={styles.tinyLogo}
              name="account-box"
              size={45}
              color="black"
            />
            <Text style={styles.userName}> Billy Bob Jones </Text>
            <Text style={styles.level}> Lv. 12 </Text>
          </View>

          <View style={styles.numberContainer}>
            <View style={styles.equipmentContainer}>
              <View style={styles.equipment}>
                <Ionicons name="sword" size={70} color="black" />
              </View>
              <View style={styles.equipment}>
                <Ionicons name="tshirt-crew" size={70} color="black" />
              </View>
              <View style={styles.equipment}>
                <Ionicons name="ring" size={70} color="black" />
              </View>
            </View>
            <View style={styles.avatarContainer}>
              <Ionicons
                style={styles.icons}
                name="account-box"
                size={150}
                color="black"
              />
              <View style={styles.statsContainer}>
                <View style={styles.stat}>
                  <Text style={styles.statText}>
                    {' '}
                    SKS:
                    {stats.streak}
                  </Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statText}>
                    {' '}
                    WIS:
                    {stats.wisdom}
                  </Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statText}>
                    {' '}
                    STR:
                    {stats.strength}
                  </Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statText}>
                    {' '}
                    CHA:
                    {stats.charisma}
                  </Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statText}>
                    {' '}
                    MP:
                    {stats.magic}
                  </Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statText}>
                    {' '}
                    HP:
                    {stats.health}
                  </Text>
                </View>
              </View>
            </View>

            {/* <Text style={styles.statText}> Stats: </Text>
              <Text style={styles.statText}>
                {' '}
                Current Streak:
                {' '}
                {stats.streak}
              </Text>
              <Text style={styles.statText}>
                {' '}
                wisdom:
                {' '}
                {stats.wisdom}
              </Text>
              <Text style={styles.statText}>
                {' '}
                strength:
                {' '}
                {stats.strength}
              </Text>
              <Text style={styles.statText}>
                {' '}
                charisma:
                {' '}
                {stats.charisma}
                {' '}
              </Text>
              <Text style={styles.statText}>
                {' '}
                magic:
                {' '}
                {stats.magic}
                {' '}
              </Text>
              <Text style={styles.statText}>
                {' '}
                health:
                {' '}
                {stats.health}
                {' '}
              </Text> */}

            <View style={styles.equipmentContainer}>
              <View style={styles.equipment}>
                <Ionicons name="shield-star" size={70} color="black" />
              </View>
              <View style={styles.equipment}>
                <Ionicons name="wizard-hat" size={70} color="black" />
              </View>
              <View style={styles.equipment}>
                <Ionicons name="shoe-sneaker" size={70} color="black" />
              </View>
            </View>
          </View>
        </View>
        {pentagonStat()}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: 'Cochin',
    marginTop: 20,
  },
  statContainer: {
    // flex: 1,
    backgroundColor: '#FFCC15',
    height: 400,
    width: '95%',
    borderRadius: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    borderBottomColor: 'black',
    borderBottomWidth: 5,
  },
  numberContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // padding: 20,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    alignItems: 'flex-end',
    fontFamily: 'Cochin',
  },
  statText: {
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    fontSize: 10,
    padding: 2,
  },
  userName: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  level: {
    marginTop: 15,
    marginLeft: 15,
    fontSize: 16,
  },
  tinyLogo: {
    height: 50,
    width: 50,
    marginLeft: 10,
    marginTop: 10,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
  },
  topContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffad15',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 75,
  },
  equipmentContainer: {
    // backgroundColor: '#ffad15',
    height: 300,
    width: 100,
    // borderColor: 'white',
    // borderWidth: 2,
    // borderRadius: 5,
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  avatarContainer: {
    backgroundColor: '#ffad15',
    height: 150,
    width: 150,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    alignSelf: 'center',
  },
  equipment: {
    backgroundColor: '#ffad15',
    height: 75,
    width: 75,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  stat: {
    backgroundColor: '#ffad15',
    height: 20,
    width: 45,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    margin: 1,
  },
  icons: {
    width: '100%',
    height: '100%',
  },
});

export default StatScreen;
