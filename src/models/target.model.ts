import { ICpfModelConstructor } from '../interface/ICpfModelConstructor';
import { IEmailConstructor } from '../interface/IEmailConstructor';
import { IEnderecoConstructor } from '../interface/IEnderecoConstructor';
import { ITelefoneModelConstructorParams } from '../interface/ITelefoneModelConstructorParams';
import { CpfModel } from './cpf.model';
import { EmailModel } from './email.model';
import { EnderecoModel } from './endereco.model';
import { TelefoneModel } from './telefone.model';

type TargetModelConstructor = Partial<
  ICpfModelConstructor | ITelefoneModelConstructorParams | IEmailConstructor | IEnderecoConstructor
>;
export class TargetModel {
  data: { [key: string]: string | number | boolean };
  constructor(dados: TargetModelConstructor) {
    this.data = {
      ...new CpfModel(dados as ICpfModelConstructor),
      ...new EmailModel(dados as IEmailConstructor),
      ...new EnderecoModel(dados as IEnderecoConstructor),
      ...new TelefoneModel(dados as ITelefoneModelConstructorParams),
    };
  }
  loadData() {
    return Object.keys(this.data).reduce((obj: { [key: string]: string | number | boolean }, key) => {
      if (this.data[key] !== null && this.data[key] !== undefined) {
        obj[key] = this.data[key];
      }
      return obj;
    }, {});
  }
}
