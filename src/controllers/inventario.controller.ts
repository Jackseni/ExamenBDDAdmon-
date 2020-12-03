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
import {Inventario} from '../models';
import {InventarioRepository} from '../repositories';

export class InventarioController {
  constructor(
    @repository(InventarioRepository)
    public inventarioRepository : InventarioRepository,
  ) {}

  @post('/inventarios', {
    responses: {
      '200': {
        description: 'Inventario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Inventario)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inventario, {
            title: 'NewInventario',
            
          }),
        },
      },
    })
    inventario: Inventario,
  ): Promise<Inventario> {
    return this.inventarioRepository.create(inventario);
  }

  @get('/inventarios/count', {
    responses: {
      '200': {
        description: 'Inventario model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Inventario) where?: Where<Inventario>,
  ): Promise<Count> {
    return this.inventarioRepository.count(where);
  }

  @get('/inventarios', {
    responses: {
      '200': {
        description: 'Array of Inventario model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Inventario, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Inventario) filter?: Filter<Inventario>,
  ): Promise<Inventario[]> {
    return this.inventarioRepository.find(filter);
  }

  @patch('/inventarios', {
    responses: {
      '200': {
        description: 'Inventario PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inventario, {partial: true}),
        },
      },
    })
    inventario: Inventario,
    @param.where(Inventario) where?: Where<Inventario>,
  ): Promise<Count> {
    return this.inventarioRepository.updateAll(inventario, where);
  }

  @get('/inventarios/{id}', {
    responses: {
      '200': {
        description: 'Inventario model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Inventario, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Inventario, {exclude: 'where'}) filter?: FilterExcludingWhere<Inventario>
  ): Promise<Inventario> {
    return this.inventarioRepository.findById(id, filter);
  }

  @patch('/inventarios/{id}', {
    responses: {
      '204': {
        description: 'Inventario PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inventario, {partial: true}),
        },
      },
    })
    inventario: Inventario,
  ): Promise<void> {
    await this.inventarioRepository.updateById(id, inventario);
  }

  @put('/inventarios/{id}', {
    responses: {
      '204': {
        description: 'Inventario PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() inventario: Inventario,
  ): Promise<void> {
    await this.inventarioRepository.replaceById(id, inventario);
  }

  @del('/inventarios/{id}', {
    responses: {
      '204': {
        description: 'Inventario DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.inventarioRepository.deleteById(id);
  }
}
