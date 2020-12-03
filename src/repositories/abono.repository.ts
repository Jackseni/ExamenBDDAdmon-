import {DefaultCrudRepository} from '@loopback/repository';
import {Abono, AbonoRelations} from '../models';
import {MercaditoExamenDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AbonoRepository extends DefaultCrudRepository<
  Abono,
  typeof Abono.prototype.id,
  AbonoRelations
> {
  constructor(
    @inject('datasources.MercaditoExamen') dataSource: MercaditoExamenDataSource,
  ) {
    super(Abono, dataSource);
  }
}
