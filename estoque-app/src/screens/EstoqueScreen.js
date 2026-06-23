import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ProdutoCard from '../components/ProdutoCard';
import { useEstoque } from '../context/EstoqueContext';

export default function EstoqueScreen() {
  const { produtos, totalItens, removerProduto } = useEstoque();

  
  useEffect(() => {
    console.log('[useEffect] Tela de Estoque montada.');
  }, []);

  function renderEmptyList() {
    return (
      <View style={styles.vazioContainer}>
        <Ionicons name="archive-outline" size={48} color="#CBD5E1" />
        <Text style={styles.vazioTexto}>Nenhum produto cadastrado ainda.</Text>
        <Text style={styles.vazioSubtexto}>
          Vá até a aba "Cadastrar" para adicionar o primeiro item.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Meu Estoque</Text>
        <View style={styles.resumo}>
          <Text style={styles.resumoTexto}>
            {produtos.length} {produtos.length === 1 ? 'produto' : 'produtos'} • {totalItens} unid. no total
          </Text>
        </View>
      </View>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id} 
        renderItem={({ item }) => (
          <ProdutoCard produto={item} onRemover={removerProduto} />
        )}
        contentContainerStyle={styles.listaContent}
        ListEmptyComponent={renderEmptyList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
  },
  titulo: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1E293B',
  },
  resumo: {
    marginTop: 6,
  },
  resumoTexto: {
    fontSize: 13,
    color: '#64748B',
  },
  listaContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexGrow: 1,
  },
  vazioContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
  vazioTexto: {
    fontSize: 16,
    fontWeight: '600',
    color: '#64748B',
    marginTop: 12,
  },
  vazioSubtexto: {
    fontSize: 13,
    color: '#94A3B8',
    marginTop: 4,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});
