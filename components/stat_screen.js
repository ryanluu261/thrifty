/* eslint-disable no-unused-vars */
// import React from 'react';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button, FlatList } from 'react-native';
import Svg, { Polygon, Line, Text as SvgText } from 'react-native-svg';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import SpriteSheet from 'rn-sprite-sheet';
import userGet from '../services/sidequestUser-api';

class StatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '62955568344a64f0f6811392',
      loop: true,
      resetAfterFinish: false,
      fps: '16',
      stats: {
        wisdom: 0,
        strength: 0,
        charisma: 0,
        magic: 0,
        health: 0,
        streak: 0,
      },
      user: [],
    };
  }

  componentDidMount() {
    this.play('idle');
    this.fetchData();
  }

  // ------------ put fetchData here! -------------//
  fetchData() {
    userGet(this.state.id)
      .then((responseData) => {
        this.setState({
          user: responseData,
          stats: responseData.stats,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderUser(user) {
    return (
      <View>
        <Text style={styles.title}>balls</Text>
      </View>
    );
  }

  play = (type) => {
    const { fps, loop, resetAfterFinish } = this.state;

    this.mummy.play({
      type,
      fps: Number(fps),
      loop,
      resetAfterFinish,
      onFinish: () => console.log('hi'),
    });
  };

  stop = () => {
    this.mummy.stop(() => console.log('stopped'));
  };

  render() {
    // const { fps, loop, resetAfterFinish } = this.state;
    // console.log('render log');
    // console.log(this.state.stats);
    return (
      <View>
        <ScrollView style={{ height: '100%' }}>
          <View style={styles.container}>
            <View>
              <Text style={styles.header}>
                Character: {this.state.user.userName}
              </Text>
              <View style={styles.statContainer}>
                <View style={styles.numberContainer}>
                  <View style={styles.equipmentContainer}>
                    <View style={styles.equipment}>
                      <Ionicons name='sword' size={45} color='black' />
                    </View>
                    <View style={styles.equipment}>
                      <Ionicons name='tshirt-crew' size={45} color='black' />
                    </View>
                    <View style={styles.equipment}>
                      <Ionicons name='ring' size={45} color='black' />
                    </View>
                  </View>
                  <View style={styles.avatarContainer}>
                    <SpriteSheet
                      ref={(ref) => (this.mummy = ref)}
                      source={require('../assets/Idle.png')}
                      columns={2}
                      rows={4}
                      height={350} // set either, none, but not both
                      width={350}
                      frameHeight={50} // manually set size of your sprite
                      frameWidth={50} // overrides auto calculation of frame size based on height, width, columns, and rows.
                      offsetX={105}
                      offsetY={25}
                      animations={{
                        idle: [0, 1, 2, 3, 4, 5, 6, 7],
                        // appear: Array.from({ length: 15 }, (v, i) => i + 18),
                        // die: Array.from({ length: 21 }, (v, i) => i + 33),
                      }}
                    />
                  </View>

                  <View style={styles.equipmentContainer}>
                    <View style={styles.equipment}>
                      <Ionicons name='shield-star' size={45} color='black' />
                    </View>
                    <View style={styles.equipment}>
                      <Ionicons name='wizard-hat' size={45} color='black' />
                    </View>
                    <View style={styles.equipment}>
                      <Ionicons name='shoe-sneaker' size={45} color='black' />
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.statsContainer}>
                <View style={styles.stat}>
                  <Text style={styles.statDesciText}>Streak:</Text>
                  <Text style={styles.statText}> {this.state.user.streak} </Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statDesciText}>Wisdom:</Text>
                  <Text style={styles.statText}>
                    {' '}
                    {this.state.stats.wisdom}
                  </Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statDesciText}>Strength:</Text>
                  <Text style={styles.statText}>
                    {' '}
                    {this.state.stats.strength}
                  </Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statDesciText}>Charisma:</Text>
                  <Text style={styles.statText}>
                    {' '}
                    {this.state.stats.charisma}
                  </Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statDesciText}>Magic:</Text>
                  <Text style={styles.statText}> {this.state.stats.magic}</Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statDesciText}>Health:</Text>
                  <Text style={styles.statText}>
                    {' '}
                    {this.state.stats.health}
                  </Text>
                </View>
              </View>
              <View style={styles.pentagon}>
                {pentagonStat(this.state.stats)}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

function pentagonStat(props) {
  //   const stats = {
  //   wisdom: 5,
  //   strength: 10,
  //   charisma: 10,
  //   magic: 10,
  //   health: 5,
  //   streak: 5,
  // };

  const stats = props;

  const user = {
    profilePic: 'https://i.ibb.co/2FhFgSB/zhoucaini.png',
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
  return (
    <Svg height='300' width='300'>
      <Polygon
        points={bigPent}
        // "0,45 50,10 100,45 80,100 20,100"
        // "100,90 90,97 94,108 106,108 110,97"
        fill='#FFCC15'
        stroke='black'
        strokeWidth='2'
      />
      <Polygon
        points={innerPent1}
        // fill="#FFCC15"
        stroke='black'
        strokeWidth='2'
      />

      <Polygon
        points={innerPent2}
        // fill="#FFCC15"
        stroke='black'
        strokeWidth='2'
      />

      <Polygon
        points={innerPent3}
        // fill="#FFCC15"
        stroke='black'
        strokeWidth='2'
      />

      <SvgText
        fill='black'
        stroke=''
        fontSize='10'
        fontWeight='bold'
        x={wisdomX}
        y={wisdomY - 5}
        textAnchor='middle'
        strokeWidth='2'>
        WIS
      </SvgText>
      <SvgText
        fill='black'
        stroke=''
        fontSize='10'
        fontWeight='bold'
        x={strengthX - 15}
        y={strengthY}
        textAnchor='middle'
        strokeWidth='2'>
        STR
      </SvgText>
      <SvgText
        fill='black'
        stroke=''
        fontSize='10'
        fontWeight='bold'
        x={charismaX}
        y={charismaY + 10}
        textAnchor='middle'
        strokeWidth='2'>
        CHA
      </SvgText>
      <SvgText
        fill='black'
        stroke=''
        fontSize='10'
        fontWeight='bold'
        x={magicX}
        y={magicY + 10}
        textAnchor='middle'
        strokeWidth='2'>
        MP
      </SvgText>
      <SvgText
        fill='black'
        stroke=''
        fontSize='10'
        fontWeight='bold'
        x={healthX + 10}
        y={healthY}
        textAnchor='middle'
        strokeWidth='2'>
        HP
      </SvgText>
      <Line
        x1={statX}
        y1={statY}
        x2={wisdomX}
        y2={wisdomY}
        stroke='black'
        strokeWidth='2'
      />
      <Line
        x1={statX}
        y1={statY}
        x2={strengthX}
        y2={strengthY}
        stroke='black'
        strokeWidth='2'
      />
      <Line
        x1={statX}
        y1={statY}
        x2={charismaX}
        y2={charismaY}
        stroke='black'
        strokeWidth='2'
      />
      <Line
        x1={statX}
        y1={statY}
        x2={magicX}
        y2={magicY}
        stroke='black'
        strokeWidth='2'
      />
      <Line
        x1={statX}
        y1={statY}
        x2={healthX}
        y2={healthY}
        stroke='black'
        strokeWidth='2'
      />

      <Polygon points={statPent} fill='green' strokeWidth='1' opacity='0.8' />
    </Svg>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: 'Cochin',
    margin: 20,
  },
  statContainer: {
    height: 210,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
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
    // fontFamily: 'Cochin',
  },
  statDesciText: {
    // fontFamily: 'Cochin',
    // color: 'grey'
    // fontWeight: 'bold',
    fontSize: 17.5,
    // padding: 2,
  },
  statText: {
    fontSize: 17.5,
    // padding: 2,
    fontWeight: 'bold',
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
  // tinyLogo: {
  //   height: 50,
  //   width: 50,
  //   marginLeft: 10,
  //   marginTop: 10,
  //   borderColor: 'black',
  //   borderWidth: 1,
  //   borderRadius: 5,
  // },
  topContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffad15',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 75,
    paddingHorizontal: 5,
  },
  equipmentContainer: {
    // backgroundColor: '#ffad15',
    height: 200,
    width: 100,
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  avatarContainer: {
    marginTop: 35,
    height: 150,
    width: 150,
    justifyContent: 'center',
  },
  equipment: {
    backgroundColor: '#ffcc15',
    height: 50,
    width: 50,
    shadowColor: '#171717',
    shadowOffset: { width: -1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
    width: '100%',
  },
  stat: {
    height: 25,
    width: '100%',
    margin: 2.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icons: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  character: {
    margin: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pentagon: {
    // backgroundColor: '#ffad15',
    alignItems: 'center',
  },
  listView: {
    height: 200,
    backgroundColor: 'blue',
  },
});

export default StatScreen;
