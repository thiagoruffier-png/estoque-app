import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FormInput from '../components/FormInput';
import { useEstoque } from '../context/EstoqueContext';

export default function CadastroScreen() {
  const { adicionarProduto } = useEstoque();


  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');

  const [erros, setErros] = useState({});


  function validarCampos() {
    const novosErros = {};

    if (!nome.trim()) novosErros.nome = 'Informe o nome do produto.';
    if (!quantidade.trim()) novosErros.quantidade = 'Informe a quantidade.';
    if (!preco.trim()) novosErros.preco = 'Informe o preço.';
    if (!categoria.trim()) novosErros.categoria = 'Informe a categoria.';

    setErros(novosErros);

    
    return Object.keys(novosErros).length === 0;
  }

  function limparFormulario() {
    setNome('');
    setQuantidade('');
    setPreco('');
    setCategoria('');
    setErros({});
  }

  function handleSalvar() {
    if (!validarCampos()) {
      return; 
    }

    adicionarProduto({
      nome: nome.trim(),
      quantidade: quantidade.trim(),
      preco: preco.trim().replace(',', '.'),
      categoria: categoria.trim(),
    });

    Alert.alert('Sucesso', 'Produto cadastrado no estoque!');
    limparFormulario(); 
  }

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Ionicons name="cube" size={32} color="#4F46E5" />
          <Text style={styles.titulo}>Cadastrar Produto</Text>
          <Text style={styles.subtitulo}>
            Preencha os dados do item para adicioná-lo ao estoque
          </Text>
        </View>

        <FormInput
          label="Nome do Produto"
          value={nome}
          onChangeText={setNome}
          placeholder="Ex: Britadeira"
          error={erros.nome}
        />

        <FormInput
          label="Quantidade"
          value={quantidade}
          onChangeText={setQuantidade}
          placeholder="Ex: 10"
          keyboardType="numeric"
          error={erros.quantidade}
        />

        <FormInput
          label="Preço (R$)"
          value={preco}
          onChangeText={setPreco}
          placeholder="Ex: 15.99"
          keyboardType="numeric"
          error={erros.preco}
        />

        <FormInput
          label="Categoria"
          value={categoria}
          onChangeText={setCategoria}
          placeholder="Ex: Eletronicos"
          error={erros.categoria}
        />

        <TouchableOpacity style={styles.botaoSalvar} onPress={handleSalvar} activeOpacity={0.8}>
          <Ionicons name="save-outline" size={20} color="#FFFFFF" />
          <Text style={styles.botaoSalvarTexto}>Salvar / Cadastrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1E293B',
    marginTop: 8,
  },
  subtitulo: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 4,
    textAlign: 'center',
  },
  botaoSalvar: {
    flexDirection: 'row',
    backgroundColor: '#4F46E5',
    paddingVertical: 14,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  botaoSalvarTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
  },
});
