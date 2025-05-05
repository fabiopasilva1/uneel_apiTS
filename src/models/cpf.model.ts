import { ICpfModelConstructor } from '../interface/ICpfModelConstructor';

export class CpfModel {
  cpf?: string;
  nome?: string;
  nome_primeiro?: string;
  nome_meio?: string;
  nome_ultimo?: string;
  match_nome?: string;
  match_nome_todas_particulas?: string;
  nome_nota?: string;
  sexo?: string;
  dt_nascimento?: string;
  nome_civil?: string;
  cpf_conj?: string;
  nome_mae?: string;
  nome_pai?: string;
  match_nome_mae?: string;
  match_nome_pai?: string;
  cadastro_id?: string;
  estciv?: string;
  cadastro_id_estciv?: string;
  rg?: string;
  cadastro_id_rg?: string;
  nacionalid?: string;
  cadastro_id_nacionalidade?: string;
  contatos_id_conjuge?: string;
  cadastro_id_conjuge?: string;
  so?: string;
  cd_sit_cad?: string;
  dt_sit_cad?: string;
  dt_informacao?: string;
  idade?: number;
  distance?: string;
  affinity_score?: string;
  affinity_percentile?: string;
  email?: string;
  household_id?: string;
  household_id_2016?: string;
  cadastro_id_nasc?: string;
  cadastro_id_nome_pai?: string;
  cadastro_id_nome_mae?: string;
  renda?: string;
  faixa_renda_id?: string;
  flag_serv_pb?: string;
  dt_inclusao_serv_pb?: string;
  dt_atualizacao_serv_pb?: string;
  titulo_eleitor?: string;
  dt_inclusao?: string;
  dt_atualizacao?: string;
  nota?: string;
  sexo_retratado?: string;
  cadastro_id_so?: string;
  cadastro_id_sitcad?: string;
  ob_unb?: string;
  unb_estciv?: string;
  unb_rg?: string;
  unb_cpf_conjuge?: string;
  inibir?: string;
  cbo?: string;
  cadastro_id_cbo?: string;
  orgao_emissor?: string;
  uf_emissao?: string;
  cod_controle?: string;
  hr_sit_cad?: string;
  dt_ob?: string;
  cd_mosaic?: string;
  secondbest?: string;

  constructor({
    CPF,
    NOME,
    NOME_PRIMEIRO,
    NOME_MEIO,
    NOME_ULTIMO,
    MATCH_NOME,
    MATCH_NOME_TODAS_PARTICULAS,
    NOME_NOTA,
    SEXO,
    NASC,
    NOME_CIVIL,
    NOME_MAE,
    NOME_PAI,
    MATCH_NOME_MAE,
    MATCH_NOME_PAI,
    CADASTRO_ID,
    ESTCIV,
    CADASTRO_ID_ESTCIV,
    RG,
    CADASTRO_ID_RG,
    NACIONALID,
    CADASTRO_ID_NACIONALIDADE,
    CONTATOS_ID_CONJUGE,
    CADASTRO_ID_CONJUGE,
    SO,
    CD_SIT_CAD,
    DT_SIT_CAD,
    DT_INFORMACAO,
    DT_INCLUSAO,
    DT_ATUALIZACAO,
    NOTA,
    CPF_CONJ,
    SEXO_RETRATADO,
    CADASTRO_ID_SO,
    CADASTRO_ID_SITCAD,
    OB_UNB,
    UNB_ESTCIV,
    UNB_RG,
    UNB_CPF_CONJUGE,
    INIBIR,
    CBO,
    CADASTRO_ID_CBO,
    ORGAO_EMISSOR,
    UF_EMISSAO,
    COD_CONTROLE,
    HR_SIT_CAD,
    DT_OB,
    CD_MOSAIC,
    SECONDBEST,
    DISTANCE,
    AFFINITY_SCORE,
    AFFINITY_PERCENTILE,
    EMAIL,
    HOUSEHOLD_ID,
    HOUSEHOLD_ID_2016,
    CADASTRO_ID_NASC,
    CADASTRO_ID_NOME_MAE,
    CADASTRO_ID_NOME_PAI,
    RENDA,
    FAIXA_RENDA_ID,
    FLAG_SERV_PB,
    DT_INCLUSAO_SERV_PB,
    DT_ATUALIZACAO_SERV_PB,
    TITULO_ELEITOR,
  }: ICpfModelConstructor) {
    this.cpf = CPF;
    this.nome = NOME;
    this.nome_primeiro = NOME_PRIMEIRO;
    this.nome_meio = NOME_MEIO;
    this.nome_ultimo = NOME_ULTIMO;
    this.match_nome = MATCH_NOME;
    this.match_nome_todas_particulas = MATCH_NOME_TODAS_PARTICULAS;
    this.nome_nota = NOME_NOTA;
    this.sexo = SEXO;
    this.dt_nascimento = NASC;
    this.idade = NASC ? new Date().getFullYear() - new Date(NASC).getFullYear() : undefined;
    this.nome_civil = NOME_CIVIL;
    this.cpf_conj = CPF_CONJ;
    this.nome_mae = NOME_MAE;
    this.nome_pai = NOME_PAI;
    this.match_nome_mae = MATCH_NOME_MAE;
    this.match_nome_pai = MATCH_NOME_PAI;
    this.cadastro_id = CADASTRO_ID;
    this.estciv = ESTCIV;
    this.cadastro_id_estciv = CADASTRO_ID_ESTCIV;
    this.rg = RG;
    this.cadastro_id_rg = CADASTRO_ID_RG;
    this.nacionalid = NACIONALID;
    this.cadastro_id_nacionalidade = CADASTRO_ID_NACIONALIDADE;
    this.contatos_id_conjuge = CONTATOS_ID_CONJUGE;
    this.cadastro_id_conjuge = CADASTRO_ID_CONJUGE;
    this.so = SO;
    this.cd_sit_cad = CD_SIT_CAD;
    this.dt_sit_cad = DT_SIT_CAD;
    this.dt_informacao = DT_INFORMACAO;
    this.dt_inclusao = DT_INCLUSAO;
    this.dt_atualizacao = DT_ATUALIZACAO;
    this.cbo = CBO;
    this.cadastro_id_cbo = CADASTRO_ID_CBO;
    this.orgao_emissor = ORGAO_EMISSOR;
    this.uf_emissao = UF_EMISSAO;
    this.cod_controle = COD_CONTROLE;
    this.hr_sit_cad = HR_SIT_CAD;
    this.dt_ob = DT_OB;
    this.cd_mosaic = CD_MOSAIC;
    this.secondbest = SECONDBEST;
    this.distance = DISTANCE;
    this.affinity_score = AFFINITY_SCORE;
    this.affinity_percentile = AFFINITY_PERCENTILE;
    this.email = EMAIL;
    this.household_id = HOUSEHOLD_ID;
    this.household_id_2016 = HOUSEHOLD_ID_2016;
    this.cadastro_id_nasc = CADASTRO_ID_NASC;
    this.cadastro_id_nome_mae = CADASTRO_ID_NOME_MAE;
    this.cadastro_id_nome_pai = CADASTRO_ID_NOME_PAI;
    this.renda = RENDA;
    this.faixa_renda_id = FAIXA_RENDA_ID;
    this.flag_serv_pb = FLAG_SERV_PB;
    this.dt_inclusao_serv_pb = DT_INCLUSAO_SERV_PB;
    this.dt_atualizacao_serv_pb = DT_ATUALIZACAO_SERV_PB;
    this.titulo_eleitor = TITULO_ELEITOR;
    this.nota = NOTA;
    this.sexo_retratado = SEXO_RETRATADO;
    this.cadastro_id_so = CADASTRO_ID_SO;
    this.cadastro_id_sitcad = CADASTRO_ID_SITCAD;
    this.ob_unb = OB_UNB;
    this.unb_estciv = UNB_ESTCIV;
    this.unb_rg = UNB_RG;
    this.unb_cpf_conjuge = UNB_CPF_CONJUGE;
    this.inibir = INIBIR;
  }
}
