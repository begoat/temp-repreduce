import * as React from 'react';
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
  infoRow: {
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});

const pickerStyles = StyleSheet.create({
  inputIOS: {
    width: 200,
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  },
  inputAndroid: {
    width: 200,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  }
});

interface Props {
  // intervalMin: number;
  // handleIntervalMinChange: (mins: number) => void;
}

const initialState = {
    intervalMin: -1,
    selectItems: [
      {
        label: '事件发生时提醒',
        value: 0
      },
      {
        label: '提前5分钟提醒',
        value: 5
      },
      {
        label: '提前10分钟提醒',
        value: 10
      },
      {
        label: '提前15分钟提醒',
        value: 15
      },
      {
        label: '提前30分钟提醒',
        value: 30
      },
      {
        label: '提前1小时提醒',
        value: 60
      },
      {
        label: '提前2小时提醒',
        value: 120
      },
      {
        label: '提前1天提醒',
        value: 1440
      },
      {
        label: '提前2天提醒',
        value: 2880
      }
    ]
};

type State = Readonly<typeof initialState>;
export class EventReminder extends React.Component<Props, State> {
  readonly state: State = initialState;
  render() {
    return(
      <View style={styles.infoRow}>
        <Button
          title="change"
          onPress={() => {
            this.setState({intervalMin: 5});
        }} />
        <RNPickerSelect
          value={this.state.intervalMin}
          placeholder={{label: '不提醒', value: -1}}
          style={{...pickerStyles}}
          onValueChange={(value) => {
            this.setState({intervalMin: value});
          }}
          items={this.state.selectItems}
        />
      </View>
    );
  }
}

export default EventReminder;
