import { Test, TestingModule } from '@nestjs/testing';

import { PokeApiAdapter } from '../../../../infra/adapter/pokeApi/pokeApiAdapter.provider';
import DownloadablePokemonResponse from '../infra/response/downloadablePokemonResponse';
import { PokemonService } from '../pokemon.service';
import {
  mockedDownloadablePokemonPageReceiveContract,
  mockedDownloadablePokemonResponse,
} from './pokemonMockedContext';

describe('PokemonService', () => {
  let service: PokemonService;
  let adapter: PokeApiAdapter;

  const mockProvider = {
    listDownloadablePokemons: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PokemonService,
        {
          provide: PokeApiAdapter,
          useValue: mockProvider,
        },
      ],
    }).compile();

    service = module.get<PokemonService>(PokemonService);
    adapter = module.get<PokeApiAdapter>(PokeApiAdapter);
  });

  it('must be defined', () => {
    expect(service).toBeDefined();
    expect(adapter).toBeDefined();
  });

  describe('listDownloadable', () => {
    it('must fetch a list with all downloadable pokemons', async () => {
      const expectedResult: DownloadablePokemonResponse[] = [
        mockedDownloadablePokemonResponse,
      ];
      adapter.listDownloadablePokemons = jest
        .fn()
        .mockReturnValue(mockedDownloadablePokemonPageReceiveContract);
      const result = await service.listDownloadable();
      expect(result).toEqual(expectedResult);
    });
  });
});
