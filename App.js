import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function App() {
  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <Text>React Calendar</Text>
      <View>
        <Calendar style={styles.calendar} onChange={setDate} value={date} />
      </View>
      <Text>
        Data selecionada: {' '}
        <TextInput editable={false} selectTextOnFocus={false} style={styles.cxTexto} placeholder={date.toDateString()}/>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 200
  },

  cxTexto: {
    marginTop: 10,
    width: 200,
    height: 40,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 5
  },

  calendar: {
    borderWidth: 0,
  }
});
