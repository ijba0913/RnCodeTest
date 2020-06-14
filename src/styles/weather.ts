import { StyleSheet } from 'react-native';

import { createStyles, minWidth, maxWidth } from 'react-native-media-queries';

// Define your styles
// const base = {
//   logo: {
//     height: 200
//   }
// };

// const styles = createStyles(
//   base,

//   // override styles only if screen height is less than 500
//   maxHeight(500, {
//     logo: {
//       height: 120
//     }
//   })
// );
export const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,

    // width: 200,
    height: 100,
    borderRadius: 10,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,

  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',

  },
  dateContainer: {

  },
  icon: {
    width: 70,
    height: 70
  },
  // main: {
  //   flex: 2,
  //   flexDirection: 'row',
  //   justifyContent: 'space-evenly',
  //   alignItems: 'center',
  // },
  more: {
    flex: 1,
  },
  pressure: {
    display: 'none',
  },

  weather: {
    display: 'none',

  },
  description: {
    display: 'none',
  },
  humidity: {
    display: 'none',

  }

  // '@media (min-width: 600px)': {
  //   height: 56,
  // },
},

);
export const stylesLarge = StyleSheet.create({
  ...styles,
  card: {
    ...styles.card,
    height: 200,
  },
  date: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    width: 100,
    height: 100
  },
  main: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  pressure: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  weather: {
    display: 'flex',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  description: {
    display: 'flex',
    alignSelf: 'center'
  },
  humidity: {
    fontSize: 20,
    fontWeight: 'bold',
  }

},

);


