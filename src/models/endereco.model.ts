import { IEnderecoConstructor } from "../interface/IEnderecoConstructor";

export class EnderecoModel {

  historico_enderecos_id;
  contatos_id
  logr_tipo
  logr_titulo
  logr_nome
  logr_numero
  logr_complemento
  bairro
  cidade
  uf
  cep
  match_end
  endereco
  cep_nota
  cadastro_id
  dt_inclusao
  dt_atualizacao
  dt_informacao
  nsu
  origem_srs
  latitude
  longitude
  status_geo
  cod_setor
  match_geo
  tipo_endereco_id
  carta_devolvida
  cnpj_informante
  bloqueado
  dt_bloqueio
  publico
  compartilhado
  classificacao
  prioridade
  id_finalidade
  de_finalidade_fornecedor
  id_link
  cod_ibge
  dt_finalidade_fornecedor
  de_meio_captacao_fornecedor
  endereco_principal
  comunicado_inadimplencia
  logr_tipo1
  logr_nome1
  logr_numero1
  logr_complemento1
  logr_bairro1
  logr_cidade1
  logr_uf1
  logr_cep1
  logr_latitude1
  logr_longitude1
  logr_tipo2
  logr_nome2
  logr_numero2
  logr_complemento2
  logr_bairro2
  logr_cidade2
  logr_uf2
  logr_cep2
  logr_latitude2
  logr_longitude2
  logr_tipo3
  logr_nome3
  logr_numero3
  logr_complemento3
  logr_bairro3
  logr_cidade3
  logr_uf3
  logr_cep3
  logr_latitude3
  logr_longitude3

  constructor({ HISTORICO_ENDERECOS_ID, CONTATOS_ID, LOGR_TIPO, LOGR_TITULO, LOGR_NOME, LOGR_NUMERO, LOGR_COMPLEMENTO, BAIRRO, CIDADE, UF, CEP, MATCH_END, ENDERECO, CEP_NOTA, CADASTRO_ID, DT_INCLUSAO, DT_ATUALIZACAO, DT_INFORMACAO, NSU, ORIGEM_SRS, LATITUDE, LONGITUDE, STATUS_GEO, COD_SETOR, MATCH_GEO, TIPO_ENDERECO_ID, CARTA_DEVOLVIDA, CNPJ_INFORMANTE, BLOQUEADO, DT_BLOQUEIO, PUBLICO, COMPARTILHADO, CLASSIFICACAO, PRIORIDADE, id_FINALIDADE, de_FINALIDADE_FORNECEDOR, ID_LINK, COD_IBGE, dt_FINALIDADE_FORNECEDOR, de_MEIO_CAPTACAO_FORNECEDOR, ENDERECO_PRINCIPAL, COMUNICADO_INADIMPLENCIA, LOGR_TIPO1,
    LOGR_NOME1,
    LOGR_NUMERO1,
    LOGR_COMPLEMENTO1,
    LOGR_BAIRRO1,
    LOGR_CIDADE1,
    LOGR_UF1,
    LOGR_CEP1,
    LOGR_LATITUDE1,
    LOGR_LONGITUDE1,
    LOGR_TIPO2,
    LOGR_NOME2,
    LOGR_NUMERO2,
    LOGR_COMPLEMENTO2,
    LOGR_BAIRRO2,
    LOGR_CIDADE2,
    LOGR_UF2,
    LOGR_CEP2,
    LOGR_LATITUDE2,
    LOGR_LONGITUDE2,
    LOGR_TIPO3,
    LOGR_NOME3,
    LOGR_NUMERO3,
    LOGR_COMPLEMENTO3,
    LOGR_BAIRRO3,
    LOGR_CIDADE3,
    LOGR_UF3,
    LOGR_CEP3,
    LOGR_LATITUDE3,
    LOGR_LONGITUDE3 }: IEnderecoConstructor) {

    this.historico_enderecos_id = HISTORICO_ENDERECOS_ID;
    this.contatos_id = CONTATOS_ID;
    this.logr_tipo = LOGR_TIPO;
    this.logr_titulo = LOGR_TITULO;
    this.logr_nome = LOGR_NOME;
    this.logr_numero = LOGR_NUMERO;
    this.logr_complemento = LOGR_COMPLEMENTO;
    this.bairro = BAIRRO;
    this.cidade = CIDADE;
    this.uf = UF;
    this.cep = CEP;
    this.match_end = MATCH_END;
    this.endereco = ENDERECO;
    this.cep_nota = CEP_NOTA;
    this.cadastro_id = CADASTRO_ID;
    this.dt_inclusao = DT_INCLUSAO;
    this.dt_atualizacao = DT_ATUALIZACAO;
    this.dt_informacao = DT_INFORMACAO;
    this.nsu = NSU;
    this.origem_srs = ORIGEM_SRS;
    this.latitude = LATITUDE;
    this.longitude = LONGITUDE;
    this.logr_tipo1 = LOGR_TIPO1;
    this.logr_nome1 = LOGR_NOME1;
    this.logr_numero1 = LOGR_NUMERO1;
    this.logr_complemento1 = LOGR_COMPLEMENTO1;
    this.logr_bairro1 = LOGR_BAIRRO1;
    this.logr_cidade1 = LOGR_CIDADE1;
    this.logr_uf1 = LOGR_UF1;
    this.logr_cep1 = LOGR_CEP1;
    this.logr_latitude1 = LOGR_LATITUDE1;
    this.logr_longitude1 = LOGR_LONGITUDE1;
    this.logr_tipo2 = LOGR_TIPO2;
    this.logr_nome2 = LOGR_NOME2;
    this.logr_numero2 = LOGR_NUMERO2;
    this.logr_complemento2 = LOGR_COMPLEMENTO2;
    this.logr_bairro2 = LOGR_BAIRRO2;
    this.logr_cidade2 = LOGR_CIDADE2;
    this.logr_uf2 = LOGR_UF2;
    this.logr_cep2 = LOGR_CEP2;
    this.logr_latitude2 = LOGR_LATITUDE2;
    this.logr_longitude2 = LOGR_LONGITUDE2;
    this.logr_tipo3 = LOGR_TIPO3;
    this.logr_nome3 = LOGR_NOME3;
    this.logr_numero3 = LOGR_NUMERO3;
    this.logr_complemento3 = LOGR_COMPLEMENTO3;
    this.logr_bairro3 = LOGR_BAIRRO3;
    this.logr_cidade3 = LOGR_CIDADE3;
    this.logr_uf3 = LOGR_UF3;
    this.logr_cep3 = LOGR_CEP3;
    this.logr_latitude3 = LOGR_LATITUDE3;
    this.logr_longitude3 = LOGR_LONGITUDE3;
    this.status_geo = STATUS_GEO;
    this.cod_setor = COD_SETOR;
    this.match_geo = MATCH_GEO;
    this.tipo_endereco_id = TIPO_ENDERECO_ID;
    this.carta_devolvida = CARTA_DEVOLVIDA;
    this.cnpj_informante = CNPJ_INFORMANTE;
    this.bloqueado = BLOQUEADO;
    this.dt_bloqueio = DT_BLOQUEIO;
    this.publico = PUBLICO;
    this.compartilhado = COMPARTILHADO;
    this.classificacao = CLASSIFICACAO;
    this.prioridade = PRIORIDADE;
    this.id_finalidade = id_FINALIDADE;
    this.de_finalidade_fornecedor = de_FINALIDADE_FORNECEDOR;
    this.id_link = ID_LINK;
    this.cod_ibge = COD_IBGE;
    this.dt_finalidade_fornecedor = dt_FINALIDADE_FORNECEDOR;
    this.de_meio_captacao_fornecedor = de_MEIO_CAPTACAO_FORNECEDOR;
    this.endereco_principal = ENDERECO_PRINCIPAL;
    this.comunicado_inadimplencia = COMUNICADO_INADIMPLENCIA;
  }
}
