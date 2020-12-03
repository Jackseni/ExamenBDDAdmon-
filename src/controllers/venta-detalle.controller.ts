import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {VentaDetalle} from '../models';
import {VentaDetalleRepository} from '../repositories';

export class VentaDetalleController {
  constructor(
    @repository(VentaDetalleRepository)
    public ventaDetalleRepository : VentaDetalleRepository,
  ) {}

  @post('/venta-detalles', {
    responses: {
      '200': {
        description: 'VentaDetalle model instance',
        content: {'application/json': {schema: getModelSchemaRef(VentaDetalle)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VentaDetalle, {
            title: 'NewVentaDetalle',
            
          }),
        },
      },
    })
    ventaDetalle: VentaDetalle,
  ): Promise<VentaDetalle> {
    return this.ventaDetalleRepository.create(ventaDetalle);
  }

  @get('/venta-detalles/count', {
    responses: {
      '200': {
        description: 'VentaDetalle model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(VentaDetalle) where?: Where<VentaDetalle>,
  ): Promise<Count> {
    return this.ventaDetalleRepository.count(where);
  }

  @get('/venta-detalles', {
    responses: {
      '200': {
        description: 'Array of VentaDetalle model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(VentaDetalle, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(VentaDetalle) filter?: Filter<VentaDetalle>,
  ): Promise<VentaDetalle[]> {
    return this.ventaDetalleRepository.find(filter);
  }

  @patch('/venta-detalles', {
    responses: {
      '200': {
        description: 'VentaDetalle PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VentaDetalle, {partial: true}),
        },
      },
    })
    ventaDetalle: VentaDetalle,
    @param.where(VentaDetalle) where?: Where<VentaDetalle>,
  ): Promise<Count> {
    return this.ventaDetalleRepository.updateAll(ventaDetalle, where);
  }

  @get('/venta-detalles/{id}', {
    responses: {
      '200': {
        description: 'VentaDetalle model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(VentaDetalle, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(VentaDetalle, {exclude: 'where'}) filter?: FilterExcludingWhere<VentaDetalle>
  ): Promise<VentaDetalle> {
    return this.ventaDetalleRepository.findById(id, filter);
  }

  @patch('/venta-detalles/{id}', {
    responses: {
      '204': {
        description: 'VentaDetalle PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VentaDetalle, {partial: true}),
        },
      },
    })
    ventaDetalle: VentaDetalle,
  ): Promise<void> {
    await this.ventaDetalleRepository.updateById(id, ventaDetalle);
  }

  @put('/venta-detalles/{id}', {
    responses: {
      '204': {
        description: 'VentaDetalle PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ventaDetalle: VentaDetalle,
  ): Promise<void> {
    await this.ventaDetalleRepository.replaceById(id, ventaDetalle);
  }

  @del('/venta-detalles/{id}', {
    responses: {
      '204': {
        description: 'VentaDetalle DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ventaDetalleRepository.deleteById(id);
  }
}
