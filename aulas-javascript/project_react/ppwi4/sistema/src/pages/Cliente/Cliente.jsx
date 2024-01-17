export const INIT_CLIENTE = {
    id: '',
	nome: '',
    email: '',
	endereco: '',
	bairro: '',
	cidade: '',
	estado: '',
	pais: '',
  };
  
  let errors = {
    nome_mensagem: [],
    nome_valid: false,
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
    email_mensagem: [],
    email_valid: false,
  };
  
  export function validateCliente(cliente) {
    if (cliente.nome.trim().length === 0) {
      errors.nome_mensagem.push("O nome do cliente deve ser informado!");
      errors.nome_valid = true;
    }
  
    if (cliente.endereco.trim().length === 0) {
      errors.endereco_mensagem.push("O endereço do cliente deve ser informado!");
      errors.endereco_valid = true;
    }
  
    if (cliente.bairro.trim().length === 0) {
      errors.bairro_mensagem.push("O bairro do cliente deve ser informado!");
      errors.bairro_valid = true;
    }
  
    if (cliente.cidade.trim().length === 0) {
      errors.cidade_mensagem.push("A cidade do cliente deve ser informado!");
      errors.cidade_valid = true;
    }
    if (cliente.estado.trim().length === 0) {
      errors.estado_mensagem.push("O estado do cliente deve ser informado!");
      errors.estado_valid = true;
    }
  
    if (cliente.email.trim().length === 0) {
      errors.email_mensagem.push("O e-mail do cliente deve ser informado!");
      errors.email_valid = true;
    }
  
    if (cliente.pais.trim().length === 0) {
      errors.pais_mensagem.push(
        "O pais do cliente deve ser informado!"
      );
      errors.pais_valid = true;
    }
  
    return errors;
  }
  
  export function validateClienteFromServer(fields) {
    console.log(fields);
  
    for (let i = 0; i < fields.length; i++) {
      if (fields[i].nome === "nome") {
        errors.nome_mensagem.push(fields[i].userMessage);
        errors.nome_valid = true;
      }
    }
  
    return errors;
  }