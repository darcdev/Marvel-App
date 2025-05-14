export interface MapperFrom<Entity, DTO> {
  mapFrom(param: Entity): DTO;
}

export interface MapperTo<Entity, DTO> {
  mapTo(param: DTO): Entity;
}

export interface Mapper<Entity, DTO>
  extends MapperFrom<Entity, DTO>,
    MapperTo<Entity, DTO> {}
