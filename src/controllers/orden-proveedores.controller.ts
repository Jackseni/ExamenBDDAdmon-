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
import {OrdenProveedores} from '../models';
import {OrdenProveedoresRepository} from '../repositories';

export class OrdenProveedoresController {
  constructor(
    @repository(OrdenProveedoresRepository)
    public ordenProveedoresRepository : OrdenProveedoresRepository,
  ) {}

  @post('/orden-proveedores', {
    responses: {
      '200': {
        description: 'OrdenProveedores model instance',
        content: {'application/json': {schema: getModelSchemaRef(OrdenProveedores)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrdenProveedores, {
            title: 'NewOrdenProveedores',
            
          }),
        },
      },
    })
    ordenProveedores: OrdenProveedores,
  ): Promise<OrdenProveedores> {
    return this.ordenProveedoresRepository.create(ordenProveedores);
  }

  @get('/orden-proveedores/count', {
    responses: {
      '200': {
        description: 'OrdenProveedores model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(OrdenProveedores) where?: Where<OrdenProveedores>,
  ): Promise<Count> {
    return this.ordenProveedoresRepository.count(where);
  }

  @get('/orden-proveedores', {
    responses: {
      '200': {
        description: 'Array of OrdenProveedores model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(OrdenProveedores, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(OrdenProveedores) filter?: Filter<OrdenProveedores>,
  ): Promise<OrdenProveedores[]> {
    return this.ordenProveedoresRepository.find(filter);
  }

  @patch('/orden-proveedores', {
    responses: {
      '200': {
        description: 'OrdenProveedores PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrdenProveedores, {partial: true}),
        },
      },
    })
    ordenProveedores: OrdenProveedores,
    @param.where(OrdenProveedores) where?: Where<OrdenProveedores>,
  ): Promise<Count> {
    return this.ordenProveedoresRepository.updateAll(ordenProveedores, where);
  }

  @get('/orden-proveedores/{id}', {
    responses: {
      '200': {
        description: 'OrdenProveedores model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(OrdenProveedores, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(OrdenProveedores, {exclude: 'where'}) filter?: FilterExcludingWhere<OrdenProveedores>
  ): Promise<OrdenProveedores> {
    return this.ordenProveedoresRepository.findById(id, filter);
  }

  @patch('/orden-proveedores/{id}', {
    responses: {
      '204': {
        description: 'OrdenProveedores PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrdenProveedores, {partial: true}),
        },
      },
    })
    ordenProveedores: OrdenProveedores,
  ): Promise<void> {
    await this.ordenProveedoresRepository.updateById(id, ordenProveedores);
  }

  @put('/orden-proveedores/{id}', {
    responses: {
      '204': {
        description: 'OrdenProveedores PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ordenProveedores: OrdenProveedores,
  ): Promise<void> {
    await this.ordenProveedoresRepository.replaceById(id, ordenProveedores);
  }

  @del('/orden-proveedores/{id}', {
    responses: {
      '204': {
        description: 'OrdenProveedores DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ordenProveedoresRepository.deleteById(id);
  }
}
