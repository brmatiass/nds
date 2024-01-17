export const INIT_FORNECEDOR = {
    id:"",
    snome:"",
    categoria:"",
    contato:"",
    endereco:"",
    bairro:"",
    cidade:"",
    estado:"",
    pais:"",
    produtos:[],
  };
  
  let errors = {
    nome_mensagem: [],
    nome_valid: false,
    categoria_mensagem: [],
    categoria_valid: false,
    contato_mensagem: [],
    contato_valid: false,
    endereco_mensagem: [],
    endereco_valid: false,
    bairro_mensagem: [],
    bairro_valid: false,
    cidade_mensagem: [],
    cidade_valid: false,
    estado_mensagem: [],
    estado_valid: false,
    pais_mensagem: [],
    pais_valid: false,
  };
  
  export function validateFornecedor(fornecedor) {
    if (fornecedor.snome.trim().length === 0) {
      errors.nome_mensagem.push("O nome do fornecedor deve ser informado!");
      errors.nome_valid = true;
    }
  
    if (fornecedor.categoria.trim().length === 0) {
      errors.categoria_mensagem.push(
        "A categoria do fornecedor deve ser informada!");
      errors.categoria_valid = true;
    }
  
    if (fornecedor.contato.trim().length === 0) {
      errors.contato_mensagem.push("O e-mail do autor deve ser informado!");
      errors.contato_valid = true;
    }
  
    if (fornecedor.endereco.trim().length === 0) {
      errors.endereco_mensagem.push("O endereço do fornecedor deve ser informado!");
      errors.endereco_valid = true;
    }
  
    if (fornecedor.bairro.trim().length === 0) {
      errors.bairro_mensagem.push("O bairro do fornecedor deve ser informado!");
      errors.bairro_valid = true;
    }
  
    if (fornecedor.cidade.trim().length === 0) {
      errors.cidade_mensagem.push("A cidade do fornecedor deve ser informado!");
      errors.cidade_valid = true;
    }
    if (fornecedor.estado.trim().length === 0) {
      errors.estado_valid.push("O estado do fornecedor deve ser informado!");
      errors.estado_valid = true;
    }
  
    if (fornecedor.pais.trim().length === 0) {
      errors.pais_mensagem.push("O e-mail do fornecedor deve ser informado!");
      errors.pais_valid = true;
    }
  
    return errors;
  }
  
export function validateAutorFromServer(fields) {
  console.log(fields);
  
  for (let i = 0; i < fields.length; i++) {
    if (fields[i].nome === "nome") {
      errors.nome_mensagem.push(fields[i].userMessage);
      errors.nome_valid = true;
    }
  }  
  return errors;
}