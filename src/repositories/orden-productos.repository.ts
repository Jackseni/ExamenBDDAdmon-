import {DefaultCrudRepository} from '@loopback/repository';
import {OrdenProductos, OrdenProductosRelations} from '../models';
import {MercaditoExamenDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrdenProductosRepository extends DefaultCrudRepository<
  OrdenProductos,
  typeof OrdenProductos.prototype.id,
  OrdenProductosRelations
> {
  constructor(
    @inject('datasources.MercaditoExamen') dataSource: MercaditoExamenDataSource,
  ) {
    super(OrdenProductos, dataSource);
  }
}
