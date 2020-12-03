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
import {Abono} from '../models';
import {AbonoRepository} from '../repositories';

export class AbonoController {
  constructor(
    @repository(AbonoRepository)
    public abonoRepository : AbonoRepository,
  ) {}

  @post('/abonos', {
    responses: {
      '200': {
        description: 'Abono model instance',
        content: {'application/json': {schema: getModelSchemaRef(Abono)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Abono, {
            title: 'NewAbono',
            
          }),
        },
      },
    })
    abono: Abono,
  ): Promise<Abono> {
    return this.abonoRepository.create(abono);
  }

  @get('/abonos/count', {
    responses: {
      '200': {
        description: 'Abono model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Abono) where?: Where<Abono>,
  ): Promise<Count> {
    return this.abonoRepository.count(where);
  }

  @get('/abonos', {
    responses: {
      '200': {
        description: 'Array of Abono model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Abono, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Abono) filter?: Filter<Abono>,
  ): Promise<Abono[]> {
    return this.abonoRepository.find(filter);
  }

  @patch('/abonos', {
    responses: {
      '200': {
        description: 'Abono PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Abono, {partial: true}),
        },
      },
    })
    abono: Abono,
    @param.where(Abono) where?: Where<Abono>,
  ): Promise<Count> {
    return this.abonoRepository.updateAll(abono, where);
  }

  @get('/abonos/{id}', {
    responses: {
      '200': {
        description: 'Abono model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Abono, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Abono, {exclude: 'where'}) filter?: FilterExcludingWhere<Abono>
  ): Promise<Abono> {
    return this.abonoRepository.findById(id, filter);
  }

  @patch('/abonos/{id}', {
    responses: {
      '204': {
        description: 'Abono PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Abono, {partial: true}),
        },
      },
    })
    abono: Abono,
  ): Promise<void> {
    await this.abonoRepository.updateById(id, abono);
  }

  @put('/abonos/{id}', {
    responses: {
      '204': {
        description: 'Abono PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() abono: Abono,
  ): Promise<void> {
    await this.abonoRepository.replaceById(id, abono);
  }

  @del('/abonos/{id}', {
    responses: {
      '204': {
        description: 'Abono DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.abonoRepository.deleteById(id);
  }
}
