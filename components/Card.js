import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props) => {
  return(
    <View style={{...styles.card, ...props.style}}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    shadowColor: 'black',                           //works only on IOS
    shadowOffset: { width: 0, height: 2 },          //works only on IOS
    shadowRadius: 6,                                //works only on IOS
    shadowOpacity: 0.26,                            //works only on IOS
    elevation: 5,                                   //works only on andriod
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center'
  }
});

export default Card;