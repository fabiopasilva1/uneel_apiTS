import { IEmailConstructor } from '../interface/IEmailConstructor';

export class EmailModel {
  id_email?: string | undefined;
  contatos_id?: string | undefined;
  email?: string | undefined;
  email1?: string | undefined;
  email2?: string | undefined;
  email3?: string | undefined;
  prioridade?: string | undefined;
  email_score?: string | undefined;
  email_pessoal?: string | undefined;
  email_duplicado?: string | undefined;
  blacklist?: string | undefined;
  estrutura?: string | undefined;
  status_vt?: string | undefined;
  dominio?: string | undefined;
  mapas?: string | undefined;
  peso?: string | undefined;
  cadastro_id?: string | undefined;
  dt_inclusao?: string | undefined;
  email_procon?: string | undefined;
  comunicado_positivo?: string | undefined;
  eid?: string | undefined;
  cnpj_informante?: string | undefined;
  id_finalidade?: string | undefined;
  dt_finalidade_fornecedor?: string | undefined;
  de_meio_captacao_fornecedor?: string | undefined;
  email_principal?: string | undefined;
  de_finalidade_fornecedor?: string | undefined;
  comunicado_inadimplencia?: string | undefined;

  constructor({
    ID_EMAIL,
    CONTATOS_ID,
    EMAIL,
    EMAIL1,
    EMAIL2,
    EMAIL3,
    PRIORIDADE,
    EMAIL_SCORE,
    EMAIL_PESSOAL,
    EMAIL_DUPLICADO,
    BLACKLIST,
    ESTRUTURA,
    STATUS_VT,
    DOMINIO,
    MAPAS,
    PESO,
    CADASTRO_ID,
    DT_INCLUSAO,
    EMAIL_PROCON,
    COMUNICADO_POSITIVO,
    EID,
    CNPJ_INFORMANTE,
    ID_FINALIDADE,
    dt_FINALIDADE_FORNECEDOR,
    de_MEIO_CAPTACAO_FORNECEDOR,
    EMAIL_PRINCIPAL,
    de_FINALIDADE_FORNECEDOR,
    COMUNICADO_INADIMPLENCIA,
  }: IEmailConstructor) {
    this.id_email = ID_EMAIL;
    this.contatos_id = CONTATOS_ID;
    this.email = EMAIL;
    this.email1 = EMAIL1;
    this.email2 = EMAIL2;
    this.email3 = EMAIL3;
    this.prioridade = PRIORIDADE;
    this.email_score = EMAIL_SCORE;
    this.email_pessoal = EMAIL_PESSOAL;
    this.email_duplicado = EMAIL_DUPLICADO;
    this.blacklist = BLACKLIST;
    this.estrutura = ESTRUTURA;
    this.status_vt = STATUS_VT;
    this.dominio = DOMINIO;
    this.mapas = MAPAS;
    this.peso = PESO;
    this.cadastro_id = CADASTRO_ID;
    this.dt_inclusao = DT_INCLUSAO;
    this.email_procon = EMAIL_PROCON;
    this.comunicado_positivo = COMUNICADO_POSITIVO;
    this.eid = EID;
    this.cnpj_informante = CNPJ_INFORMANTE;
    this.id_finalidade = ID_FINALIDADE;
    this.dt_finalidade_fornecedor = dt_FINALIDADE_FORNECEDOR;
    this.de_meio_captacao_fornecedor = de_MEIO_CAPTACAO_FORNECEDOR;
    this.email_principal = EMAIL_PRINCIPAL;
    this.de_finalidade_fornecedor = de_FINALIDADE_FORNECEDOR;
    this.comunicado_inadimplencia = COMUNICADO_INADIMPLENCIA;
  }
}
