import React, { createContext, useState, useContext, useEffect } from 'react';

const EstoqueContext = createContext();

export function useEstoque() {
  const context = useContext(EstoqueContext);
  if (!context) {
    throw new Error('useEstoque deve ser usado dentro de um EstoqueProvider');
  }
  return context;
}

export function EstoqueProvider({ children }) {
  const [produtos, setProdutos] = useState([]);
  const [totalItens, setTotalItens] = useState(0);


  useEffect(() => {
    const total = produtos.reduce((acc, item) => acc + Number(item.quantidade), 0);
    setTotalItens(total);
    console.log(`[useEffect] Lista de produtos atualizada. Total de itens em estoque: ${total}`);
  }, [produtos]); 

  function adicionarProduto(novoProduto) {
    const produtoComId = {
      ...novoProduto,
      id: Date.now().toString(), 
      criadoEm: new Date().toISOString(),
    };

   
    setProdutos((produtosAtuais) => [...produtosAtuais, produtoComId]);
  }


  function removerProduto(id) {
    setProdutos((produtosAtuais) =>
      produtosAtuais.filter((produto) => produto.id !== id)
    );
  }

  const value = {
    produtos,
    totalItens,
    adicionarProduto,
    removerProduto,
  };

  return (
    <EstoqueContext.Provider value={value}>
      {children}
    </EstoqueContext.Provider>
  );
}
