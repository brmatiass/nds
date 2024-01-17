export const INIT_AUTOR = {
  id: "",
  nome: "",
  dataNascimento: "",
  rg: "",
  cpf: "",
  sexo: "",
  endereco: "",
  bairro: "",
  cidade: "",
  cep: "",
  email: "",
  telefoneFixo: "",
  telefoneMovel: "",
  livros:[],
};

let errors = {
  nome_mensagem: [],
  nome_valid: false,
  dataNascimento_mensagem: [],
  dataNascimento_valid: false,
  rg_mensagem: [],
  rg_valid: false,
  cpf_mensagem: [],
  cpf_valid: false,
  sexo_mensagem: [],
  sexo_valid: false,
  endereco_mensagem: [],
  endereco_valid: false,
  bairro_mensagem: [],
  bairro_valid: false,
  cidade_mensagem: [],
  cidade_valid: false,
  cep_mensagem: [],
  cep_valid: false,
  email_mensagem: [],
  email_valid: false,
  telefoneFixo_mensagem: [],
  telefoneFixo_valid: false,
  telefoneMovel_mensagem: [],
  telefoneMovel_valid: false,
};

export function validateAutor(autor) {
  if (autor.nome.trim().length === 0) {
    errors.nome_mensagem.push("O nome do autor deve ser informado!");
    errors.nome_valid = true;
  }

  if (autor.dataNascimento.trim().length === 0) {
    errors.dataNascimento_mensagem.push(
      "A data de nascimento do autor deve ser informada!"
    );
    errors.dataNascimento_valid = true;
  }

  if (autor.rg.trim().length === 0) {
    errors.rg_mensagem.push("O rg do autor deve ser informado!");
    errors.rg_valid = true;
  }

  if (autor.cpf.trim().length === 0) {
    errors.cpf_mensagem.push("O cpf do autor deve ser informado!");
    errors.cpf_valid = true;
  }

  if (autor.sexo.trim().length === 0) {
    errors.sexo_mensagem.push("O sexo do autor deve ser informado!");
    errors.sexo_valid = true;
  }

  if (autor.endereco.trim().length === 0) {
    errors.endereco_mensagem.push("O endereço do autor deve ser informado!");
    errors.endereco_valid = true;
  }

  if (autor.bairro.trim().length === 0) {
    errors.bairro_mensagem.push("O bairro do autor deve ser informado!");
    errors.bairro_valid = true;
  }

  if (autor.cidade.trim().length === 0) {
    errors.cidade_mensagem.push("A cidade do autor deve ser informado!");
    errors.cidade_valid = true;
  }
  if (autor.cep.trim().length === 0) {
    errors.cep_mensagem.push("O cep do autor deve ser informado!");
    errors.cep_valid = true;
  }

  if (autor.email.trim().length === 0) {
    errors.email_mensagem.push("O e-mail do autor deve ser informado!");
    errors.email_valid = true;
  }

  if (autor.telefoneFixo.trim().length === 0) {
    errors.telefoneFixo_mensagem.push(
      "O telefone do autor deve ser informado!"
    );
    errors.telefoneFixo_valid = true;
  }

  if (autor.telefoneMovel.trim().length === 0) {
    errors.telefoneMovel_mensagem.push(
      "O celular do autor deve ser informado!"
    );
    errors.telefoneMovel_valid = true;
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
