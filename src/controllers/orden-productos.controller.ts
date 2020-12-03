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
import {OrdenProductos} from '../models';
import {OrdenProductosRepository} from '../repositories';

export class OrdenProductosController {
  constructor(
    @repository(OrdenProductosRepository)
    public ordenProductosRepository : OrdenProductosRepository,
  ) {}

  @post('/orden-productos', {
    responses: {
      '200': {
        description: 'OrdenProductos model instance',
        content: {'application/json': {schema: getModelSchemaRef(OrdenProductos)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrdenProductos, {
            title: 'NewOrdenProductos',
            
          }),
        },
      },
    })
    ordenProductos: OrdenProductos,
  ): Promise<OrdenProductos> {
    return this.ordenProductosRepository.create(ordenProductos);
  }

  @get('/orden-productos/count', {
    responses: {
      '200': {
        description: 'OrdenProductos model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(OrdenProductos) where?: Where<OrdenProductos>,
  ): Promise<Count> {
    return this.ordenProductosRepository.count(where);
  }

  @get('/orden-productos', {
    responses: {
      '200': {
        description: 'Array of OrdenProductos model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(OrdenProductos, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(OrdenProductos) filter?: Filter<OrdenProductos>,
  ): Promise<OrdenProductos[]> {
    return this.ordenProductosRepository.find(filter);
  }

  @patch('/orden-productos', {
    responses: {
      '200': {
        description: 'OrdenProductos PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrdenProductos, {partial: true}),
        },
      },
    })
    ordenProductos: OrdenProductos,
    @param.where(OrdenProductos) where?: Where<OrdenProductos>,
  ): Promise<Count> {
    return this.ordenProductosRepository.updateAll(ordenProductos, where);
  }

  @get('/orden-productos/{id}', {
    responses: {
      '200': {
        description: 'OrdenProductos model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(OrdenProductos, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(OrdenProductos, {exclude: 'where'}) filter?: FilterExcludingWhere<OrdenProductos>
  ): Promise<OrdenProductos> {
    return this.ordenProductosRepository.findById(id, filter);
  }

  @patch('/orden-productos/{id}', {
    responses: {
      '204': {
        description: 'OrdenProductos PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrdenProductos, {partial: true}),
        },
      },
    })
    ordenProductos: OrdenProductos,
  ): Promise<void> {
    await this.ordenProductosRepository.updateById(id, ordenProductos);
  }

  @put('/orden-productos/{id}', {
    responses: {
      '204': {
        description: 'OrdenProductos PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ordenProductos: OrdenProductos,
  ): Promise<void> {
    await this.ordenProductosRepository.replaceById(id, ordenProductos);
  }

  @del('/orden-productos/{id}', {
    responses: {
      '204': {
        description: 'OrdenProductos DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ordenProductosRepository.deleteById(id);
  }
}
