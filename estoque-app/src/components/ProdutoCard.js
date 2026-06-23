import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function ProdutoCard({ produto, onRemover }) {
  const quantidadeBaixa = Number(produto.quantidade) <= 5;

  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.nome}>{produto.nome}</Text>
        <Text style={styles.categoria}>{produto.categoria}</Text>

        <View style={styles.detalhesRow}>
          <View style={[styles.badge, quantidadeBaixa && styles.badgeAlerta]}>
            <Text style={[styles.badgeText, quantidadeBaixa && styles.badgeTextAlerta]}>
              Qtd: {produto.quantidade}
            </Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              R$ {Number(produto.preco).toFixed(2)}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.botaoRemover}
        onPress={() => onRemover(produto.id)}
        activeOpacity={0.7}
      >
        <Ionicons name="trash-outline" size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E293B',
  },
  categoria: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
    marginBottom: 8,
  },
  detalhesRow: {
    flexDirection: 'row',
  },
  badge: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
  },
  badgeAlerta: {
    backgroundColor: '#FEF2F2',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4F46E5',
  },
  badgeTextAlerta: {
    color: '#EF4444',
  },
  botaoRemover: {
    backgroundColor: '#EF4444',
    padding: 10,
    borderRadius: 10,
    marginLeft: 12,
  },
});
