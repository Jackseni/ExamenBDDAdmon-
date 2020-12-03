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
import {Credito} from '../models';
import {CreditoRepository} from '../repositories';

export class CreditoController {
  constructor(
    @repository(CreditoRepository)
    public creditoRepository : CreditoRepository,
  ) {}

  @post('/creditos', {
    responses: {
      '200': {
        description: 'Credito model instance',
        content: {'application/json': {schema: getModelSchemaRef(Credito)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Credito, {
            title: 'NewCredito',
            
          }),
        },
      },
    })
    credito: Credito,
  ): Promise<Credito> {
    return this.creditoRepository.create(credito);
  }

  @get('/creditos/count', {
    responses: {
      '200': {
        description: 'Credito model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Credito) where?: Where<Credito>,
  ): Promise<Count> {
    return this.creditoRepository.count(where);
  }

  @get('/creditos', {
    responses: {
      '200': {
        description: 'Array of Credito model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Credito, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Credito) filter?: Filter<Credito>,
  ): Promise<Credito[]> {
    return this.creditoRepository.find(filter);
  }

  @patch('/creditos', {
    responses: {
      '200': {
        description: 'Credito PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Credito, {partial: true}),
        },
      },
    })
    credito: Credito,
    @param.where(Credito) where?: Where<Credito>,
  ): Promise<Count> {
    return this.creditoRepository.updateAll(credito, where);
  }

  @get('/creditos/{id}', {
    responses: {
      '200': {
        description: 'Credito model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Credito, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Credito, {exclude: 'where'}) filter?: FilterExcludingWhere<Credito>
  ): Promise<Credito> {
    return this.creditoRepository.findById(id, filter);
  }

  @patch('/creditos/{id}', {
    responses: {
      '204': {
        description: 'Credito PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Credito, {partial: true}),
        },
      },
    })
    credito: Credito,
  ): Promise<void> {
    await this.creditoRepository.updateById(id, credito);
  }

  @put('/creditos/{id}', {
    responses: {
      '204': {
        description: 'Credito PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() credito: Credito,
  ): Promise<void> {
    await this.creditoRepository.replaceById(id, credito);
  }

  @del('/creditos/{id}', {
    responses: {
      '204': {
        description: 'Credito DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.creditoRepository.deleteById(id);
  }
}
