import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEstoque } from '../context/EstoqueContext';

export default function SobreScreen() {
  const { produtos, totalItens } = useEstoque();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.iconeContainer}>
        <Ionicons name="information-circle" size={56} color="#4F46E5" />
      </View>

      <Text style={styles.titulo}>Controle de Estoque</Text>
      <Text style={styles.descricao}>
        Aplicativo mobile para gerenciamento de itens em estoque, desenvolvido
        com React Native e Expo como avaliação prática de desenvolvimento mobile.
      </Text>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumero}>{produtos.length}</Text>
          <Text style={styles.statLabel}>Produtos cadastrados</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumero}>{totalItens}</Text>
          <Text style={styles.statLabel}>Unidades em estoque</Text>
        </View>
      </View>

      <View style={styles.secao}>
        <Text style={styles.secaoTitulo}>Funcionalidades</Text>
        <Text style={styles.item}>• Cadastro de produtos com validação</Text>
        <Text style={styles.item}>• Listagem em tempo real do estoque</Text>
        <Text style={styles.item}>• Remoção instantânea de itens</Text>
        <Text style={styles.item}>• Estado global compartilhado entre telas</Text>
      </View>

      <View style={styles.secao}>
        <Text style={styles.secaoTitulo}>Tecnologias</Text>
        <Text style={styles.item}>• React Native + Expo</Text>
        <Text style={styles.item}>• React Navigation (Bottom Tabs)</Text>
        <Text style={styles.item}>• Context API + Hooks (useState, useEffect)</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    flexGrow: 1,
  },
  iconeContainer: {
    marginTop: 12,
    marginBottom: 12,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    marginBottom: 28,
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    minWidth: 130,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  statNumero: {
    fontSize: 26,
    fontWeight: '800',
    color: '#4F46E5',
  },
  statLabel: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 4,
    textAlign: 'center',
  },
  secao: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 18,
    marginBottom: 16,
  },
  secaoTitulo: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 10,
  },
  item: {
    fontSize: 13,
    color: '#475569',
    marginBottom: 6,
    lineHeight: 18,
  },
});
