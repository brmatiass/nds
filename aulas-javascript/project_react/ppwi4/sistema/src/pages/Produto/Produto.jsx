export const INIT_PRODUTO = {
    id: '',
    nome: '',
    categoria:'',
    preco:'',
    fornecedores:'',
  };
  
  let errors = {
    nome_mensagem: [],
    nome_valid: false,
    categoria_mensagem: [],
    categoria_valid: false,
    preco_mensagem: [],
    preco_valid: false,
    fornecedores_mensagem: [],
    fornecedores_valid: false,
  };
  
  export function validateProduto(produto) {
    if (produto.nome.trim().length === 0) {
      errors.nome_mensagem.push("O nome do produto deve ser informado!");
      errors.nome_valid = true;
    }
  
    if (produto.categoria.trim().length === 0) {
      errors.categoria_mensagem.push("A categoria do produto deve ser informada!");
      errors.categoria_valid = true;
    }
  
    if (produto.preco.trim().length === 0) {
      errors.preco_mensagem.push("O preço do produto deve ser informado!");
      errors.preco_valid = true;
    }
    
    return errors;
  }
  
  export function validateProdutoFromServer(fields) {
    console.log(fields);
  
    for (let i = 0; i < fields.length; i++) {
      if (fields[i].nome === "nome") {
        errors.nome_mensagem.push(fields[i].userMessage);
        errors.nome_valid = true;
      }
    }
  
    return errors;
  }