import { ITelefoneModelConstructorParams } from "../interface/ITelefoneModelConstructorParams";

export class TelefoneModel {
  historico_telefones_id: string;
  historico_enderecos_id: string;
  contatos_id: string;
  ddd: string;
  telefone: string;
  tipo_telefone: number;
  prioridade_telefone: number;
  cadastro_id: string;
  dt_inclusao: string;
  dt_atualizacao: string;
  fone_nota: string;
  dt_informacao: string;
  nsu: string;
  origem_serasa: string;
  cnpj_informante: string;
  bloqueado: string;
  dt_bloqueio: string;
  logon_bloqueio: string;
  duplicado_mais_15_vezes: string;
  classificacao: string;
  prioridade: string;
  publico: string;
  compartilhada: string;
  id_finalidade: string;
  de_meio_captacao_fornecedor: string;
  id_link_fornecedor: string;
  de_finalidade_fornecedor: string;
  dt_finalidade_fornecedor: string;
  comunicado_inadimplencia: string;
  celular1: string;
  celular2: string;
  celular3: string;
  celular4: string;
  tel_fixo1: string;
  tel_fixo2: string;
  tel_fixo3: string;
  tel_fixo4: string;
  celular_comercial1: string;
  celular_comercial2: string;
  celular_comercial3: string;
  celular_comercial4: string;
  tel_fixo_comercial1: string;
  tel_fixo_comercial2: string;
  fixo_comercial3: string;
  tel_fixo_comercial4: string;
  fone_parente1: string;
  fone_parente2: string;
  fone_parente3: string;
  fone_parente4: string;
  dt_metralhadora: string;



  constructor({
    HISTORICO_TELEFONES_ID,
    HISTORICO_ENDERECOS_ID,
    CONTATOS_ID,
    DDD,
    TELEFONE,
    TIPO_TELEFONE,
    PRIORIDADE_TELEFONE,
    CADASTRO_ID,
    DT_INCLUSAO,
    DT_ATUALIZACAO,
    FONE_NOTA,
    DT_INFORMACAO,
    NSU,
    ORIGEM_SERASA,
    CNPJ_INFORMANTE,
    BLOQUEADO,
    DT_BLOQUEIO,
    LOGON_BLOQUEIO,
    DUPLICADO_MAIS_15_VEZES,
    CLASSIFICACAO,
    PRIORIDADE,
    DT_METRALHADORA,
    PUBLICO,
    COMPARTILHADA,
    id_FINALIDADE,
    de_MEIO_CAPTACAO_FORNECEDOR,
    ID_LINK_FORNECEDOR,
    de_FINALIDADE_FORNECEDOR,
    dt_FINALIDADE_FORNECEDOR,
    COMUNICADO_INADIMPLENCIA,
  }: ITelefoneModelConstructorParams) {
    this.historico_telefones_id = HISTORICO_TELEFONES_ID;
    this.historico_enderecos_id = HISTORICO_ENDERECOS_ID;
    this.contatos_id = CONTATOS_ID;
    this.ddd = DDD ?? '';
    this.telefone = TELEFONE ?? '';
    this.tipo_telefone = TIPO_TELEFONE ?? '';
    this.prioridade_telefone = PRIORIDADE_TELEFONE;
    this.celular1 =
      (this.prioridade_telefone === 1 && this.tipo_telefone === 3) || this.tipo_telefone === 4
        ? `${this.ddd}${this.telefone}`
        : '';
    this.celular2 =
      (this.prioridade_telefone === 2 && this.tipo_telefone === 3) || this.tipo_telefone === 4
        ? `${this.ddd}${this.telefone}`
        : '';
    this.celular3 =
      (this.prioridade_telefone === 3 && this.tipo_telefone === 3) || this.tipo_telefone === 4
        ? `${this.ddd}${this.telefone}`
        : '';
    this.celular4 =
      (this.prioridade_telefone === 4 && this.tipo_telefone === 3) || this.tipo_telefone === 4
        ? `${this.ddd}${this.telefone}`
        : '';
    this.tel_fixo1 = this.prioridade_telefone === 1 && this.tipo_telefone === 1 ? `${this.ddd}${this.telefone}` : '';
    this.tel_fixo2 = this.prioridade_telefone === 2 && this.tipo_telefone === 1 ? `${this.ddd}${this.telefone}` : '';
    this.tel_fixo3 = this.prioridade_telefone === 3 && this.tipo_telefone === 1 ? `${this.ddd}${this.telefone}` : '';
    this.tel_fixo4 = this.prioridade_telefone === 4 && this.tipo_telefone === 1 ? `${this.ddd}${this.telefone}` : '';
    this.celular_comercial1 =
      this.prioridade_telefone === 1 && this.tipo_telefone === 8 ? `${this.ddd}${this.telefone}` : '';
    this.celular_comercial2 =
      this.prioridade_telefone === 2 && this.tipo_telefone === 8 ? `${this.ddd}${this.telefone}` : '';
    this.celular_comercial3 =
      this.prioridade_telefone === 3 && this.tipo_telefone === 8 ? `${this.ddd}${this.telefone}` : '';
    this.celular_comercial4 =
      this.prioridade_telefone === 4 && this.tipo_telefone === 8 ? `${this.ddd}${this.telefone}` : '';
    this.tel_fixo_comercial1 =
      this.prioridade_telefone === 1 && this.tipo_telefone === 2 ? `${this.ddd}${this.telefone}` : '';
    this.tel_fixo_comercial2 =
      this.prioridade_telefone === 2 && this.tipo_telefone === 2 ? `${this.ddd}${this.telefone}` : '';
    this.fixo_comercial3 =
      this.prioridade_telefone === 3 && this.tipo_telefone === 2 ? `${this.ddd}${this.telefone}` : '';
    this.tel_fixo_comercial4 =
      this.prioridade_telefone === 4 && this.tipo_telefone === 2 ? `${this.ddd}${this.telefone}` : '';
    this.fone_parente1 =
      this.prioridade_telefone === 1 && this.tipo_telefone === 9 ? `${this.ddd}${this.telefone}` : '';
    this.fone_parente2 =
      this.prioridade_telefone === 2 && this.tipo_telefone === 9 ? `${this.ddd}${this.telefone}` : '';
    this.fone_parente3 =
      this.prioridade_telefone === 3 && this.tipo_telefone === 9 ? `${this.ddd}${this.telefone}` : '';
    this.fone_parente4 =
      this.prioridade_telefone === 4 && this.tipo_telefone === 9 ? `${this.ddd}${this.telefone}` : '';
    this.cadastro_id = CADASTRO_ID;
    this.dt_inclusao = DT_INCLUSAO;
    this.dt_atualizacao = DT_ATUALIZACAO;
    this.fone_nota = FONE_NOTA;
    this.dt_informacao = DT_INFORMACAO;
    this.nsu = NSU;
    this.origem_serasa = ORIGEM_SERASA;
    this.cnpj_informante = CNPJ_INFORMANTE;
    this.bloqueado = BLOQUEADO;
    this.dt_bloqueio = DT_BLOQUEIO;
    this.logon_bloqueio = LOGON_BLOQUEIO;
    this.duplicado_mais_15_vezes = DUPLICADO_MAIS_15_VEZES;
    this.classificacao = CLASSIFICACAO;
    this.prioridade = PRIORIDADE;
    this.dt_metralhadora = DT_METRALHADORA;
    this.publico = PUBLICO;
    this.compartilhada = COMPARTILHADA;
    this.id_finalidade = id_FINALIDADE;
    this.de_meio_captacao_fornecedor = de_MEIO_CAPTACAO_FORNECEDOR;
    this.id_link_fornecedor = ID_LINK_FORNECEDOR;
    this.de_finalidade_fornecedor = de_FINALIDADE_FORNECEDOR;
    this.dt_finalidade_fornecedor = dt_FINALIDADE_FORNECEDOR;
    this.comunicado_inadimplencia = COMUNICADO_INADIMPLENCIA;
  }
}

