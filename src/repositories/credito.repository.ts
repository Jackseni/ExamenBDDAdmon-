import {DefaultCrudRepository} from '@loopback/repository';
import {Credito, CreditoRelations} from '../models';
import {MercaditoExamenDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CreditoRepository extends DefaultCrudRepository<
  Credito,
  typeof Credito.prototype.id,
  CreditoRelations
> {
  constructor(
    @inject('datasources.MercaditoExamen') dataSource: MercaditoExamenDataSource,
  ) {
    super(Credito, dataSource);
  }
}
