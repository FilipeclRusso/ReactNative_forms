import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Switch} from 'react-native';

import { Picker } from '@react-native-community/picker';
import Slider from '@react-native-community/slider'; 

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: 0,
      sexos: [
        {key: 1, sexo: 'masculino', valor: 1},
        {key: 2, sexo: 'feminino', valor: 2}
     ],
     limite: 300,
     estudante: false
    }

    this.criarConta = this.criarConta.bind(this);

  }

  criarConta(){
    if(this.state.nome === '' && this.state.idade === '') {
      alert('Preencha os seus dados');
      return;
    } else{
      alert(
        'Confira seus dados:' + `\n` + `\n` +
        'Nome: ' + this.state.nome + `\n` + 
        'Idade: ' + this.state.idade + `\n` +
        'Sexo: ' + this.state.sexos[this.state.sexo].sexo + `\n` +
        'Limite selecionado: ' + this.state.limite.toFixed(0) + `\n` + 
        'Estudante: ' + ((this.state.estudante) ? 'Sim' : 'Não')
      )
    }
  }

  render(){

    let sexosItem = this.state.sexos.map((s, v) => {
      return <Picker.Item key={v} value={v} label={s.sexo} />
    })

    return(
      <View style={styles.container}>

        <Text style={styles.titulo}>Banco SW</Text>
        
        <TextInput 
          style={styles.input}
          placeholder='Digite o seu nome...'
          onChangeText={(nome) => this.setState({nome: nome})}
        />

        <TextInput 
          style={styles.input}
          placeholder='Digite a sua idade...'
          onChangeText={(idade) => this.setState({idade: idade})}
        />

        <Picker
          style={styles.picker}
          selectedValue={this.state.sexo}
          onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}
        >
          {sexosItem}
        </Picker>

        {/*<Text style={styles.textoPicker}> {this.state.sexos[this.state.sexo].sexo} </Text>*/}

        <View>
          <Text style={styles.textoLimite}>Limite:</Text>
          <Slider
            style={styles.slider}
            minimumValue={300}
            maximumValue={5000}
            onValueChange={(limiteSelecionado) => this.setState({limite: limiteSelecionado})}
            value={this.state.limite}
            minimumTrackTintColor='#00FF00'
          />

          <Text style={{textAlign: 'center', fontSize: 20}}> R$ 
          {this.state.limite.toFixed(0)} </Text>
        </View>

        <View>

          <Text style={styles.textoSwitch}>Estudante: 
          <Switch  
            style={styles.switch}
            value={this.state.estudante}
            onValueChange={(valorSwitch) => this.setState({estudante: valorSwitch})}
          /></Text>
          
        </View>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.criarConta}>
            <Text style={styles.textoBtn}>Criar conta</Text>
          </TouchableOpacity>
        </View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: '#f0f8ff',
    flex: 1
  },
  titulo: {
    marginTop: 70,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25
  },
  input: {
    marginTop: 70,
    marginBottom: -30,
    height: 40,
    borderWidth: 1,
    borderColor: '#999999',
    backgroundColor: '#EEEEEE',
    color: '#000000',
    margin: 20,
    fontSize: 18,
    padding: 10
  },
  picker: {
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'center' 
  },
  /*textoPicker: {
    marginTop: 10,
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 15
  },*/
  textoLimite: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 20
  },
  slider: {
    marginTop: 20,
    margin: 20
  },
  textoSwitch: {
    marginTop: 20,
    margin: 20,
    fontSize: 20
  },
  switch: {
    paddingLeft: 20,
    flexDirection: 'row',
  },
  btnArea: {
    marginTop: 20,
    flexDirection: 'row',
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
    height: 40,
    borderRadius: 150,
    margin: 20
  },
  textoBtn:{
    color: "#FFF",
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default App;