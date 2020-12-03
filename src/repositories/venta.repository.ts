import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MercaditoExamenDataSource} from '../datasources';
import {Venta, VentaRelations} from '../models';

export class VentaRepository extends DefaultCrudRepository<
  Venta,
  typeof Venta.prototype.id,
  VentaRelations
> {
  constructor(
    @inject('datasources.MercaditoExamen') dataSource: MercaditoExamenDataSource,
  ) {
    super(Venta, dataSource);
  }
}
